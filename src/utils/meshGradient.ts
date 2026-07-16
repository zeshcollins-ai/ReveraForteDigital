interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

export function createMeshGradient(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!;
  const points: Point[] = [];
  const colors = ['#6366f1', '#8b5cf6', '#22d3ee', '#4f46e5'];
  let animationFrame: number;

  function resize() {
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  function createPoint(): Point {
    return {
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  }

  function drawGradient() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    points.forEach(point => {
      const gradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, 150
      );
      gradient.addColorStop(0, point.color + '40');
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    
    points.forEach(point => {
      point.x += point.vx;
      point.y += point.vy;

      if (point.x < 0 || point.x > canvas.offsetWidth) point.vx *= -1;
      if (point.y < 0 || point.y > canvas.offsetHeight) point.vy *= -1;
    });

    drawGradient();
    animationFrame = requestAnimationFrame(animate);
  }

  // Initialize
  resize();
  window.addEventListener('resize', resize);
  
  for (let i = 0; i < 6; i++) {
    points.push(createPoint());
  }
  
  animate();

  return () => {
    window.removeEventListener('resize', resize);
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  };
}