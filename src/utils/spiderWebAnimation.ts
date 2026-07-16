interface Point {
  x: number;
  y: number;
  angle: number;
  radius: number;
  speed: number;
  connections: number[];
}

export function createSpiderWebAnimation(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!;
  const points: Point[] = [];
  const numPoints = 80;
  const maxConnections = 3;
  let animationFrame: number;

  function resize() {
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  function createPoint(): Point {
    const angle = Math.random() * Math.PI * 2;
    const radius = 50 + Math.random() * 200;
    return {
      x: canvas.offsetWidth / 2 + Math.cos(angle) * radius,
      y: canvas.offsetHeight / 2 + Math.sin(angle) * radius,
      angle,
      radius,
      speed: 0.001 + Math.random() * 0.002,
      connections: []
    };
  }

  function findNearestPoints(point: Point, maxDistance: number) {
    const nearest: number[] = [];
    points.forEach((p, index) => {
      if (p === point || point.connections.includes(index)) return;
      const dx = p.x - point.x;
      const dy = p.y - point.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < maxDistance && nearest.length < maxConnections) {
        nearest.push(index);
      }
    });
    return nearest;
  }

  function drawWeb() {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    // Draw connections
    points.forEach((point, i) => {
      point.connections.forEach(connectionIndex => {
        const connected = points[connectionIndex];
        const dx = connected.x - point.x;
        const dy = connected.y - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const opacity = 1 - (distance / 300);

        if (opacity > 0) {
          const gradient = ctx.createLinearGradient(
            point.x, point.y,
            connected.x, connected.y
          );
          gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity * 0.5})`);
          gradient.addColorStop(1, `rgba(34, 211, 238, ${opacity * 0.5})`);

          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(connected.x, connected.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });

    // Draw points
    points.forEach(point => {
      const gradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, 4
      );
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)');
      gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');

      ctx.beginPath();
      ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    });
  }

  function updatePoints() {
    points.forEach(point => {
      point.angle += point.speed;
      point.x = canvas.offsetWidth / 2 + Math.cos(point.angle) * point.radius;
      point.y = canvas.offsetHeight / 2 + Math.sin(point.angle) * point.radius;
      point.connections = findNearestPoints(point, 300);
    });
  }

  function animate() {
    updatePoints();
    drawWeb();
    animationFrame = requestAnimationFrame(animate);
  }

  // Initialize
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < numPoints; i++) {
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