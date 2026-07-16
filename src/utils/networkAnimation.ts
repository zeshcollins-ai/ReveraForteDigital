interface Point {
  x: number;
  y: number;
  z: number;
  projected: { x: number; y: number };
  originalPosition: { x: number; y: number; z: number };
}

export function createNetworkAnimation(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!;
  const points: Point[] = [];
  const numPoints = 150; // Reduced number of points for less congestion
  const radius = 320; // Maintain the same radius for the hero section
  const rotationSpeed = 0.0012; // Maintain the same rotation speed
  let rotation = 0;
  let animationFrame: number;

  function resize() {
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  function createPoint(): Point {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(Math.random() * 2 - 1);

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    return {
      x,
      y,
      z,
      projected: { x: 0, y: 0 },
      originalPosition: { x, y, z },
    };
  }

  function projectPoint(point: Point) {
    // Apply rotation to create the spinning effect
    const x = point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
    const z = point.z * Math.cos(rotation) + point.x * Math.sin(rotation);
    const scale = 1000 / (1000 + z);

    point.projected.x = x * scale + canvas.offsetWidth / 2;
    point.projected.y = point.y * scale + canvas.offsetHeight / 2;
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    // Increment rotation to create continuous spinning effect
    // Use timestamp for smoother animation
    rotation += rotationSpeed;
    
    // Update points (no mouse interaction)
    points.forEach((point) => {
      // Keep points at their original positions
      point.x = point.originalPosition.x;
      point.y = point.originalPosition.y;
      point.z = point.originalPosition.z;

      // Project the point with rotation
      projectPoint(point);
    });
    
    // Draw connections and points
    drawConnections();
    drawPoints();

    // Request next frame
    animationFrame = requestAnimationFrame(animate);
  }

  function drawConnections() {
    ctx.lineWidth = 0.5; // Even thinner lines for a cleaner, less congested look

    for (let i = points.length - 1; i >= 0; i--) {
      for (let j = i - 1; j >= 0; j--) {
        const dx = points[i].projected.x - points[j].projected.x;
        const dy = points[i].projected.y - points[j].projected.y;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);

        if (distance < 140) { // Reduced connection distance for fewer lines
          const opacity = (140 - distance) / 140;
          // Use purple and cyan colors to match the "Digital Future" gradient
          const color = (i + j) % 2 === 0
            ? `rgba(139,92,246,${opacity * 0.6})` // Purple with reduced opacity
            : `rgba(34,211,238,${opacity * 0.6})`; // Cyan with reduced opacity

          ctx.strokeStyle = color;
          ctx.beginPath();
          ctx.moveTo(points[i].projected.x, points[i].projected.y);
          ctx.lineTo(points[j].projected.x, points[j].projected.y);
          ctx.stroke();
        }
      }
    }
  }

  function drawPoints() {
    points.forEach((point) => {
      // Dynamic size based on z-position for more depth perception
      const size = ((point.z + radius) / (radius * 2)) * 2.0; // Smaller points

      // Create a more vibrant gradient for points
      const gradient = ctx.createRadialGradient(
        point.projected.x,
        point.projected.y,
        0,
        point.projected.x,
        point.projected.y,
        size * 4
      );

      // Use colors that match the "Digital Future" gradient
      const depth = (point.z + radius) / (radius * 2); // 0 to 1 value
      
      // Use purple or cyan based on depth to create a nice visual effect
      if (depth > 0.5) {
        // Purple points
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.7)'); // Purple with reduced opacity
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
      } else {
        // Cyan points
        gradient.addColorStop(0, 'rgba(34, 211, 238, 0.7)'); // Cyan with reduced opacity
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
      }

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(point.projected.x, point.projected.y, size * 4, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  resize();
  
  // Create points
  for (let i = numPoints; i--; ) {
    points.push(createPoint());
  }

  // Start animation
  animate();

  // Return cleanup function
  return () => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  };
}
