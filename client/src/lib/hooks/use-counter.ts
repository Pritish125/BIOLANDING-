import { useState, useEffect } from "react";

interface CounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  easing?: (t: number) => number;
}

export function useCounter({
  start = 0,
  end,
  duration = 2,
  delay = 0,
  easing = (t) => t // Linear easing by default
}: CounterOptions) {
  const [value, setValue] = useState(start);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    let timeout: number;
    let startTime: number;
    let animationFrame: number;

    // Add delay before starting the counter
    timeout = setTimeout(() => {
      setIsActive(true);
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        
        // Calculate progress (0 to 1)
        const progress = Math.min(elapsed / (duration * 1000), 1);
        
        // Apply easing function
        const easedProgress = easing(progress);
        
        // Calculate current value
        const currentValue = start + (end - start) * easedProgress;
        setValue(currentValue);
        
        // Continue animation if not finished
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      // Start animation
      animationFrame = requestAnimationFrame(animate);
    }, delay * 1000);
    
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [start, end, duration, delay, easing]);
  
  return { value, isActive };
}
