import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ParticleProps {
  color?: string;
  count?: number;
  size?: { min: number; max: number };
  speed?: { min: number; max: number };
  opacity?: { min: number; max: number };
  className?: string;
}

export function ParticleContainer({
  color = "rgba(139, 195, 74, 0.6)",
  count = 30,
  size = { min: 5, max: 15 },
  speed = { min: 10, max: 20 },
  opacity = { min: 0.2, max: 0.8 },
  className = "",
}: ParticleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing particles
    container.innerHTML = "";

    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      
      // Random size
      const particleSize = Math.random() * (size.max - size.min) + size.min;
      
      // Random position
      const xPos = Math.random() * 100;
      const yPos = Math.random() * 100;
      
      // Random opacity
      const particleOpacity = Math.random() * (opacity.max - opacity.min) + opacity.min;
      
      // Random animation duration (speed)
      const duration = Math.random() * (speed.max - speed.min) + speed.min;
      const delay = Math.random() * 5;
      
      // Apply styles
      particle.style.position = "absolute";
      particle.style.width = `${particleSize}px`;
      particle.style.height = `${particleSize}px`;
      particle.style.borderRadius = "50%";
      particle.style.backgroundColor = color;
      particle.style.left = `${xPos}%`;
      particle.style.top = `${yPos}%`;
      particle.style.opacity = particleOpacity.toString();
      
      // Apply animation
      particle.style.animation = `float ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = `${delay}s`;
      
      container.appendChild(particle);
    }

    // Add float animation keyframes
    if (!document.getElementById("particle-keyframes")) {
      const style = document.createElement("style");
      style.id = "particle-keyframes";
      style.innerHTML = `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `;
      document.head.appendChild(style);
    }
  }, [color, count, size, speed, opacity]);

  return (
    <motion.div
      ref={containerRef}
      className={`absolute top-0 left-0 w-full h-full overflow-hidden z-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
}
