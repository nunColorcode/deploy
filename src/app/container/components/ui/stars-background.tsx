"use client";
import { cn } from "@/app/lip/util"; // Assuming this is your utility for classnames
import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  useCallback,
} from "react";

// The StarProps interface remains the same
interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
}

// The component props interface remains the same
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
  // `useState` is now only for triggering re-renders when stars need to be regenerated
  const [stars, setStars] = useState<StarProps[]>([]);
  const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
  // `useRef` will hold the animation frame ID to cancel it on unmount
  const animationFrameId = useRef<number | null>(null);

  // The star generation logic is perfect as is.
  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
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
    [
      starDensity,
      allStarsTwinkle,
      twinkleProbability,
      minTwinkleSpeed,
      maxTwinkleSpeed,
    ]
  );

  // This useEffect handles the setup and resizing. It's mostly the same.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      // Set the new stars array in state, which will trigger the animation effect to restart
      setStars(generateStars(canvas.width, canvas.height));
    };

    handleResize(); // Initial setup

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.unobserve(canvas);
    };
  }, [generateStars]); // Dependency array is simpler now

  // This useEffect is now solely responsible for the animation loop.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || stars.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // We scale the context to handle high-DPI displays
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // The animation loop
    const render = () => {
      // Clear the canvas for the next frame
      // We use canvas.width/height divided by DPR because the context is already scaled
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      // We are now free to mutate the stars array because it's a local variable
      // within this effect's scope, NOT the React state itself.
      stars.forEach((star) => {
        if (star.twinkleSpeed !== null) {
          // This is the direct mutation that is now safe
          star.opacity =
            0.5 +
            Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
        }
        
        ctx.beginPath();
        // We divide by DPR here to draw in the correct coordinate space
        ctx.arc(star.x / window.devicePixelRatio, star.y / window.devicePixelRatio, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    // Cleanup function to stop the animation when the component unmounts or stars array changes
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [stars]); // This effect re-runs ONLY when the stars array is regenerated

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full absolute inset-0 -z-10", className)}
    />
  );
};
