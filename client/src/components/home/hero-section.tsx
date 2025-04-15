import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleContainer } from "@/components/ui/particle-container";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect values
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Handle scroll indicator click
  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Image URLs for hero section
  const imageUrls = {
    pellets: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    farming: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  };

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Particles background */}
      <ParticleContainer count={40} />
      
      {/* Background gradient */}
      <div className="bg-gradient-to-b from-brown/10 to-light-brown/10 absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Hero content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
            style={{ opacity }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-brown leading-tight mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Connecting <span className="text-primary">Biomass</span> Producers with Industry
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              BIOBRIM is a revolutionary platform bridging the gap between farmers and manufacturing companies in the biomass pellet industry, fostering sustainable practices and circular economy.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.a 
                href="#about"
                className="py-3 px-8 bg-primary text-white font-montserrat font-semibold rounded-full transition-all duration-300 shadow-lg inline-block"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#7cb342",
                  boxShadow: "0 10px 25px rgba(139, 195, 74, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn More
              </motion.a>
              
              <motion.a 
                href="#registration"
                className="py-3 px-8 bg-brown text-white font-montserrat font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg inline-block"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(121, 85, 72, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#registration")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Join Now
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Hero images */}
          <motion.div 
            className="lg:w-1/2 relative"
            style={{ y, opacity }}
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              <motion.img 
                src={imageUrls.pellets}
                alt="Biomass Pellets" 
                className="absolute w-64 h-64 object-cover rounded-2xl shadow-2xl top-0 left-0 z-10"
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              />
              
              <motion.img 
                src={imageUrls.farming}
                alt="Sustainable Farming" 
                className="absolute w-64 h-64 object-cover rounded-2xl shadow-2xl bottom-0 right-0 z-20"
                initial={{ opacity: 0, y: 50, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                whileHover={{ scale: 1.05, rotate: -5 }}
              />
              
              <motion.div 
                className="absolute w-72 h-72 bg-primary rounded-full opacity-10 -top-10 -left-10 z-0"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              
              <motion.div 
                className="absolute w-60 h-60 bg-brown rounded-full opacity-10 -bottom-10 -right-10 z-0"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={handleScrollDown}
      >
        <motion.i className="fas fa-chevron-down text-2xl text-primary"></motion.i>
      </motion.div>
    </motion.section>
  );
}
