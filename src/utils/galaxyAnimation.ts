interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  color: string;
  opacity: number;
  originalPosition: { x: number; y: number; z: number };
  attracted: boolean;
}

export function createGalaxyAnimation(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!;
  const stars: Star[] = [];
  const colors = ["#6366f1", "#8b5cf6", "#22d3ee", "#4f46e5"];
  const attractionRadius = 200;
  const perspective = 800; // Perspective depth
  let animationFrame: number;
  

  // Mouse position
  let mouseX = canvas.offsetWidth / 2;
  let mouseY = canvas.offsetHeight / 2;

  function resize() {
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  // function createStar(): Star {
  //   const z = Math.random() * 1500; // Depth of the star in '3D' space
  //   const x = (Math.random() - 0.5) * canvas.width * 3;
  //   const y = (Math.random() - 0.5) * canvas.height * 3;
  //   return {
  //     x,
  //     y,
  //     z,
  //     size: Math.random() * 2 + 1,
  //     speed: Math.random() * 2 + 1,
  //     color: colors[Math.floor(Math.random() * colors.length)],
  //     opacity: Math.random() * 0.5 + 0.5,
  //     originalPosition: { x, y, z },
  //     attracted: false,
  //   };
  // }

  function createStar(): Star {
  const z = Math.random() * 1500; // Depth of the star in '3D' space
  const x = (Math.random() - 0.5) * canvas.width * 3;
  const y = (Math.random() - 0.5) * canvas.height * 3;
  return {
    x,
    y,
    z,
    size: Math.random() * 2.5 + 1.5, // More consistent size range
    speed: Math.random() * 2 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: Math.random() * 0.5 + 0.5,
    originalPosition: { x, y, z },
    attracted: false,
  };
}


  function project(star: { x: number; y: number; z: number }) {
    const scale = perspective / (perspective + star.z);
    return {
      x: canvas.width / 2 + star.x * scale,
      y: canvas.height / 2 + star.y * scale,
      scale,
    };
  }

  function handleMouseMove(event: MouseEvent) {
    const rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
  }

  // function drawStar(star: Star) {
  //   const projected = project(star);
  //   const size = star.size * projected.scale;

  //   const gradient = ctx.createRadialGradient(
  //     projected.x,
  //     projected.y,
  //     0,
  //     projected.x,
  //     projected.y,
  //     size
  //   );
  //   gradient.addColorStop(0, star.color);
  //   gradient.addColorStop(1, "transparent");

  //   ctx.fillStyle = gradient;
  //   ctx.beginPath();
  //   ctx.arc(projected.x, projected.y, size, 0, Math.PI * 2);
  //   ctx.fill();
  // }

  function drawStar(star: Star) {
  const projected = project(star);
  
  // Calculate a base size that's more consistent regardless of proximity to cursor
  // Apply a much smaller scale factor to maintain perspective but limit size growth
  const baseSize = star.size;
  const maxScaleFactor = 1.2; // Limit how much the star can grow
  const scaleFactor = Math.min(projected.scale, maxScaleFactor);
  const size = baseSize * (0.8 + (scaleFactor * 0.2)); // Only allow 20% of size variation based on scale
  
  // Create a gradient for the star glow effect
  const gradient = ctx.createRadialGradient(
    projected.x,
    projected.y,
    0,
    projected.x,
    projected.y,
    size
  );
  gradient.addColorStop(0, star.color);
  gradient.addColorStop(1, "transparent");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(projected.x, projected.y, size, 0, Math.PI * 2);
  ctx.fill();
}

  function updateStar(star: Star) {
    const projected = project(star);
    const dxMouse = projected.x - mouseX;
    const dyMouse = projected.y - mouseY;
    const distanceToMouse = Math.sqrt(dxMouse ** 2 + dyMouse ** 2);

    // Add constant motion to all stars
    star.z -= star.speed * 0.5;
    
    // If star goes too far, reset it to the back
    if (star.z < -perspective) {
      star.z = 1500;
      star.x = (Math.random() - 0.5) * canvas.width * 3;
      star.y = (Math.random() - 0.5) * canvas.height * 3;
      star.originalPosition = { x: star.x, y: star.y, z: star.z };
    }

    if (distanceToMouse < attractionRadius) {
      // Calculate attraction strength with a smoother curve and reduced maximum effect
      const attractionStrength = Math.pow((attractionRadius - distanceToMouse) / attractionRadius, 1.5) * 0.7;
      
      // Apply attraction with a more gentle force
      star.x -= (dxMouse / distanceToMouse) * attractionStrength * 8;
      star.y -= (dyMouse / distanceToMouse) * attractionStrength * 8;
      star.attracted = true;
    } else {
      // Gradually return to original position, but keep the constant motion
      star.x += (star.originalPosition.x - star.x) * 0.05;
      star.y += (star.originalPosition.y - star.y) * 0.05;
      star.attracted = false;
    }
  }

  function animate() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
      updateStar(star);
      drawStar(star);
    });

    animationFrame = requestAnimationFrame(animate);
  }

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", handleMouseMove);

  // Increase the number of stars for a more vibrant animation
  for (let i = 0; i < 500; i++) { // Increased from 300 to 500
    stars.push(createStar());
  }

  animate();

  return () => {
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", handleMouseMove);
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  };
}
