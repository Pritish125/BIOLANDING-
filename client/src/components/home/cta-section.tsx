import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Card variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  // Button animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 10px 25px rgba(139, 195, 74, 0.4)"
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.section
      ref={sectionRef}
      id="registration"
      className="py-24 bg-gradient-to-br from-brown/90 to-brown/80 text-white relative overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Biomass Background" 
          className="w-full h-full object-cover mix-blend-overlay opacity-40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-montserrat font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Join the <span className="text-primary">Revolution</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-white/80"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Register today to become part of the growing BIOBRIM community and unlock new opportunities.
            </motion.p>
          </div>
          
          {/* Registration cards */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Farmers Registration */}
              <motion.div 
                className="md:w-1/2 bg-white/10 p-6 rounded-2xl transition-all duration-300"
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center mb-4">
                  <i className="fas fa-tractor text-3xl text-primary mr-4"></i>
                  <h3 className="text-2xl font-montserrat font-bold">Farmers</h3>
                </div>
                <p className="mb-6 text-white/80">
                  Join as a biomass producer and connect with manufacturing companies seeking your products.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "List your pellets on the marketplace",
                    "Receive direct purchase offers",
                    "Access market insights & trends"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                    >
                      <span className="text-primary mr-2 mt-1"><i className="fas fa-check text-sm"></i></span>
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.a 
                  href="#farmer-signup"
                  className="block w-full py-3 text-center bg-primary text-white font-montserrat font-semibold rounded-full shadow-lg"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Register as Farmer
                </motion.a>
              </motion.div>
              
              {/* Companies Registration */}
              <motion.div 
                className="md:w-1/2 bg-white/10 p-6 rounded-2xl transition-all duration-300"
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center mb-4">
                  <i className="fas fa-industry text-3xl text-primary mr-4"></i>
                  <h3 className="text-2xl font-montserrat font-bold">Companies</h3>
                </div>
                <p className="mb-6 text-white/80">
                  Sign up as a manufacturing company to access a reliable supply of quality biomass pellets.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Browse available pellet listings",
                    "Post your specific requirements",
                    "Secure your supply chain"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                    >
                      <span className="text-primary mr-2 mt-1"><i className="fas fa-check text-sm"></i></span>
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.a 
                  href="#company-signup"
                  className="block w-full py-3 text-center bg-primary text-white font-montserrat font-semibold rounded-full shadow-lg"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Register as Company
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 10 + 5;
          const xPos = Math.random() * 100;
          const yPos = Math.random() * 100;
          const duration = Math.random() * 10 + 10;
          const delay = Math.random() * 5;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/30"
              style={{
                width: size,
                height: size,
                left: `${xPos}%`,
                top: `${yPos}%`,
              }}
              animate={{ 
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
    </motion.section>
  );
}
