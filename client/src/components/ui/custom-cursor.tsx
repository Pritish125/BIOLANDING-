import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorExpanded, setCursorExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Make cursor visible after first mouse move
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseDown = () => setCursorExpanded(true);
    const handleMouseUp = () => setCursorExpanded(false);

    // Add hover effect to interactive elements
    const handleInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, .card-3d, input, textarea, select');
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => setCursorExpanded(true));
        element.addEventListener('mouseleave', () => setCursorExpanded(false));
      });
    };

    // Register events
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    // Setup interactive elements when DOM is loaded
    if (document.readyState === 'complete') {
      handleInteractiveElements();
    } else {
      window.addEventListener('DOMContentLoaded', handleInteractiveElements);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener('DOMContentLoaded', handleInteractiveElements);
    };
  }, [isVisible]);

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <motion.div
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: cursorExpanded ? 2.5 : 1,
        backgroundColor: cursorExpanded ? "rgba(139, 195, 74, 0.2)" : "rgba(139, 195, 74, 0.5)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 28,
        mass: 0.5
      }}
      style={{
        width: '20px',
        height: '20px',
        translateX: '-50%',
        translateY: '-50%'
      }}
    />
  );
}
