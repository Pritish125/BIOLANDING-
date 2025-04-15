import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Step process data
  const steps = [
    {
      icon: "fas fa-tractor",
      title: "Farmers",
      description: "Farmers register and list their available biomass pellets with detailed specifications.",
      list: [
        "Register & create profile",
        "List biomass pellets",
        "Review offers & negotiate",
        "Complete transactions"
      ]
    },
    {
      icon: "fas fa-exchange-alt",
      title: "BIOBRIM Platform",
      description: "Our platform facilitates secure matching, negotiations, and transactions between parties.",
      list: [
        "Smart matching algorithm",
        "Secure communication channel",
        "Transparent pricing",
        "Quality verification"
      ]
    },
    {
      icon: "fas fa-industry",
      title: "Companies",
      description: "Manufacturing companies browse listings, make offers, and complete purchases.",
      list: [
        "Register & specify requirements",
        "Browse available pellets",
        "Make offers to farmers",
        "Complete secure transactions"
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      id="how-it-works"
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-montserrat font-bold text-brown mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            How It <span className="text-primary">Works</span>
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
            Our platform connects biomass producers directly with manufacturing companies through a simple and efficient process.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <motion.div 
            className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-primary/30 -translate-y-1/2 z-0"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ transformOrigin: "left" }}
          ></motion.div>
          
          {/* Process Steps */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                variants={childVariants}
              >
                <motion.div 
                  className="bg-white w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center mb-6 shadow-lg relative z-10"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <i className={`${step.icon} text-4xl text-primary`}></i>
                </motion.div>
                
                <h3 className="text-xl font-montserrat font-bold text-brown mb-4">{step.title}</h3>
                
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-full"
                  whileHover={{ translateY: -10 }}
                >
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  <ul className="text-left space-y-2">
                    {step.list.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                      >
                        <span className="text-primary mr-2 mt-1"><i className="fas fa-arrow-right text-sm"></i></span>
                        <span className="text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Platform Preview */}
        <motion.div 
          className="mt-24 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-light-brown/30 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <motion.div 
              className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 0]
              }}
              transition={{ 
                duration: 20, 
                ease: "linear", 
                repeat: Infinity 
              }}
            ></motion.div>
            
            <motion.div 
              className="absolute -left-20 -bottom-20 w-72 h-72 bg-brown/10 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -180, 0]
              }}
              transition={{ 
                duration: 25, 
                ease: "linear", 
                repeat: Infinity,
                delay: 1
              }}
            ></motion.div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-brown mb-6 text-center">Platform Preview</h3>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Platform Dashboard" 
                    className="rounded-xl shadow-xl w-full"
                    initial={{ x: -20, opacity: 0.8 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  />
                </div>
                
                <div className="md:w-1/2">
                  <h4 className="text-xl font-montserrat font-bold text-brown mb-4">Intuitive Dashboard</h4>
                  <p className="text-gray-700 mb-6">
                    Our platform features a user-friendly dashboard tailored to your role, whether you're a farmer or manufacturing company.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { icon: "fa-search", title: "Easy Search & Filter", desc: "Find exactly what you need with powerful search tools" },
                      { icon: "fa-chart-bar", title: "Real-time Analytics", desc: "Track your performance and market trends" },
                      { icon: "fa-bell", title: "Smart Notifications", desc: "Stay updated with relevant alerts and opportunities" }
                    ].map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
                          <i className={`fas ${feature.icon}`}></i>
                        </div>
                        <div>
                          <h5 className="font-semibold text-brown">{feature.title}</h5>
                          <p className="text-sm text-gray-600">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
