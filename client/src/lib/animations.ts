import { MotionProps } from "framer-motion";

// Fade animations
export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): MotionProps => {
  const directionMap = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return {
    initial: { 
      opacity: 0, 
      ...directionMap[direction]
    },
    animate: { 
      opacity: 1, 
      x: 0, 
      y: 0 
    },
    transition: { 
      duration: 0.6, 
      ease: "easeOut", 
      delay 
    }
  };
};

// Stagger children animations
export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0): MotionProps => {
  return {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };
};

// Scale animations
export const scaleIn = (delay: number = 0): MotionProps => {
  return {
    initial: { 
      opacity: 0, 
      scale: 0.8 
    },
    animate: { 
      opacity: 1, 
      scale: 1 
    },
    transition: { 
      duration: 0.6, 
      ease: "easeOut", 
      delay 
    }
  };
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

export const hoverBounce = {
  y: -10,
  transition: { 
    type: "spring", 
    stiffness: 300 
  }
};

// Button animations
export const buttonAnimation = {
  whileHover: { 
    scale: 1.05, 
    boxShadow: "0 10px 25px rgba(139, 195, 74, 0.4)" 
  },
  whileTap: { 
    scale: 0.95 
  },
  transition: { 
    duration: 0.2 
  }
};

// Page transitions
export const pageTransition = {
  initial: { 
    opacity: 0 
  },
  animate: { 
    opacity: 1 
  },
  exit: { 
    opacity: 0 
  },
  transition: { 
    duration: 0.5 
  }
};
