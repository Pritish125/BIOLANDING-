import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Card variants for staggered animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Mission section variants
  const missionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const missionItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Card data
  const cards = [
    {
      icon: "fas fa-leaf",
      title: "Eco-Friendly Solution",
      description: "Supporting sustainable practices by creating a circular economy for biomass resources, reducing waste and carbon footprint."
    },
    {
      icon: "fas fa-handshake",
      title: "Direct Connection",
      description: "Eliminating middlemen to create fair pricing and transparent transactions between farmers and manufacturing companies."
    },
    {
      icon: "fas fa-chart-line",
      title: "Market Growth",
      description: "Expanding opportunities for biomass producers while providing reliable supply chains for manufacturing industries."
    }
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="py-20 bg-cream relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-montserrat font-bold text-brown mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-primary">BIOBRIM</span>
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Founded with a vision to revolutionize the biomass industry, BIOBRIM creates a sustainable ecosystem where farmers and manufacturers collaborate effortlessly.
          </motion.p>
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2"
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                translateY: -10
              }}
            >
              <div className="card-inner">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-primary">
                  <i className={`${card.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-brown mb-4">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mission section */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={missionVariants}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-montserrat font-bold text-brown mb-6"
              variants={missionItemVariants}
            >
              Our Mission
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              variants={missionItemVariants}
            >
              To create a sustainable ecosystem where biomass resources are efficiently utilized, benefiting both agricultural communities and industrial partners while contributing to environmental preservation.
            </motion.p>
            
            <ul className="space-y-4">
              {[
                "Promote sustainable farming practices",
                "Reduce carbon footprint through efficient resource utilization",
                "Create economic opportunities for rural communities"
              ].map((item, index) => (
                <motion.li key={index} className="flex items-start" variants={missionItemVariants}>
                  <span className="text-primary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            className="md:w-1/2 pl-0 md:pl-10"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <motion.img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Sustainable Farming" 
                className="rounded-xl shadow-xl w-full h-auto z-10 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute w-full h-full bg-primary/20 rounded-xl top-5 left-5 -z-0"
                animate={{ 
                  top: [5, 8, 5],
                  left: [5, 8, 5]
                }}
                transition={{ 
                  duration: 5, 
                  ease: "easeInOut", 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Elements */}
      <motion.div 
        className="absolute top-40 right-10 w-64 h-64 bg-primary/5 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 left-10 w-40 h-40 bg-brown/5 rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      ></motion.div>
    </motion.section>
  );
}
