import { useCounter } from "@/lib/hooks/use-counter";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  className?: string;
  delay?: number;
}

export function AnimatedCounter({ 
  target, 
  duration = 2,
  className = "text-4xl font-montserrat font-bold text-brown",
  delay = 0
}: AnimatedCounterProps) {
  const { value } = useCounter({
    start: 0,
    end: target,
    duration,
    delay
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {Math.round(value)}
    </motion.div>
  );
}
