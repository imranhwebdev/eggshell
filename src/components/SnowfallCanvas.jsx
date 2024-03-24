import React, { useRef, useEffect } from 'react';

const SnowfallCanvas = () => {
  const canvasRef = useRef(null);
  const snowflakeImagesRef = useRef([]);
  const ctxRef = useRef(null);
  const snowflakes = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    // Load snowflake images
    const imagePaths = [
      '/public/snow0.png',
      '/public/snow1.png',
      '/public/snow2.png',
      '/public/snow3.png',
    ]; // Assuming images are in the `public` directory
    const loadImage = (path) => {
      const image = new Image();
      image.src = path;
      return image;
    };
    const snowflakeImages = imagePaths.map(loadImage);
    snowflakeImagesRef.current = snowflakeImages;

    // Start animation
    animateSnowfall();

    // Resize canvas when window resizes
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const animateSnowfall = () => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;

    function draw() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw snowflakes
      snowflakes.forEach((snowflake) => {
        ctx.drawImage(snowflake.image, snowflake.x, snowflake.y);
        snowflake.y += snowflake.speed;

        // Reset snowflake position if it goes beyond canvas
        if (snowflake.y > canvas.height) {
          snowflake.y = -30;
          snowflake.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(draw);
    }

    // Create initial snowflakes
    for (let i = 0; i < 100; i++) {
      const imageIndex = Math.floor(Math.random() * snowflakeImagesRef.current.length);
      const snowflakeImage = snowflakeImagesRef.current[imageIndex];
      snowflakes.push({
        image: snowflakeImage,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 1 + Math.random() * 0.1 // Adjust speed as needed
      });
    }

    draw();
  };

  return <canvas ref={canvasRef} style={{ position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '-1' }} />;
};

export default SnowfallCanvas;
