"use client";

import { cn } from "@/app/lip/util";
import React, { useState, useEffect, useRef, useCallback } from "react";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // ✅ Fix type
  const animationFrameId = useRef<number | null>(null);

  const generateStars = useCallback(
    (width: number, height: number) => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, () => {
        const shouldTwinkle =
          allStarsTwinkle || Math.random() < twinkleProbability;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.05 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        };
      });
    },
    [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      setStars(generateStars(canvas.width, canvas.height));
    };

    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    return () => resizeObserver.unobserve(canvas);
  }, [generateStars]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || stars.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Scale context for high-DPI
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const render = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width / window.devicePixelRatio,
        canvas.height / window.devicePixelRatio
      );

      stars.forEach((star) => {
        if (star.twinkleSpeed !== null) {
          star.opacity =
            0.5 +
            Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
        }

        ctx.beginPath();
        ctx.arc(
          star.x / window.devicePixelRatio,
          star.y / window.devicePixelRatio,
          star.radius,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [stars]);

  return <canvas ref={canvasRef} className={cn("h-full w-full absolute inset-0 -z-10", className)} />;
};
