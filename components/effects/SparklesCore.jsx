"use client";
import React, { useRef, useEffect } from "react";

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
  className,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];

    function initParticles() {
      particles = [];
      const numberOfParticles =
        (canvas.width * canvas.height) / (10000 / particleDensity);

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          opacity: Math.random(),
          speed: Math.random() * 0.5,
        });
      }
    }

    function animate() {
      ctx.fillStyle = background || "transparent";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor || "#FFFFFF";
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // move particle
        p.y -= p.speed;
        if (p.y <= 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, [background, minSize, maxSize, particleDensity, particleColor]);

  return <canvas id={id} ref={canvasRef} className={className} />;
};
