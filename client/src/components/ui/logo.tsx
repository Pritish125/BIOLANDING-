import { useEffect, useRef } from "react";
import logoImage from "@assets/pallet.jpg";
import { motion } from "framer-motion";
 
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  light?: boolean;
}

export function Logo({ size = 'md', showText = true, light = false }: LogoProps) {
  const logoRef = useRef<HTMLImageElement>(null);

  // Logo dimensions
  const dimensions = {
    sm: { width: 40, height: 40 },
    md: { width: 56, height: 56 },
    lg: { width: 64, height: 64 }
  };

  // Text styling based on light or dark mode
  const textClass = light ? "text-white" : "text-brown";
  const spanClass = light ? "text-primary" : "text-primary";

  return (
    <div className="flex items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05, rotate: 5 }}
        className="mr-3"
      >
        <img 
          ref={logoRef}
          src={logoImage} 
          alt="BIOBRIM Logo" 
          width={dimensions[size].width} 
          height={dimensions[size].height}
          className="object-contain"
        />
      </motion.div>
      
      {showText && (
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-2xl font-bold font-montserrat ${textClass}`}
        >
          BIO<motion.span className={spanClass}>BRIM</motion.span>
        </motion.span>
      )}
    </div>
  );
}
