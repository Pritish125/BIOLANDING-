import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Stats data
  const stats = [
    { icon: "fa-users", value: 500, label: "Active Farmers" },
    { icon: "fa-industry", value: 150, label: "Partner Companies" },
    { icon: "fa-exchange-alt", value: 2500, label: "Transactions Monthly" },
    { icon: "fa-globe", value: 15, label: "Countries Served" }
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="benefits"
      className="py-20 bg-cream relative overflow-hidden"
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
            Benefits for <span className="text-primary">All</span>
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
            Discover how BIOBRIM creates a win-win ecosystem for all participants in the biomass pellet industry.
          </motion.p>
        </div>
        
        {/* Benefits cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* For Farmers */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
          >
            <div className="h-48 overflow-hidden">
              <motion.img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Farmers Benefits" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-montserrat font-bold text-brown mb-4">For Farmers</h3>
              <ul className="space-y-3">
                {[
                  "Direct access to multiple buyers",
                  "Better pricing through elimination of middlemen",
                  "Expanded market reach beyond local areas",
                  "Market insights and demand forecasting",
                  "Flexible selling options (spot or contract)"
                ].map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                  >
                    <span className="text-primary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* For Companies */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
          >
            <div className="h-48 overflow-hidden">
              <motion.img 
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Companies Benefits" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-montserrat font-bold text-brown mb-4">For Companies</h3>
              <ul className="space-y-3">
                {[
                  "Reliable supply chain for biomass materials",
                  "Quality verification and standardization",
                  "Cost reduction through direct procurement",
                  "Access to diverse biomass sources",
                  "Simplified logistics and delivery tracking"
                ].map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                  >
                    <span className="text-primary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Environmental Impact */}
        <motion.div 
          className="bg-primary/10 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <motion.img 
                src="https://images.unsplash.com/photo-1497435571905-a08c04f8f5e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Environmental Impact" 
                className="w-64 h-64 object-cover rounded-full border-8 border-white shadow-xl"
                initial={{ scale: 0.8, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
              />
            </div>
            
            <div className="md:w-2/3 md:pl-10">
              <motion.h3 
                className="text-2xl md:text-3xl font-montserrat font-bold text-brown mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Environmental Impact
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Beyond business benefits, BIOBRIM contributes significantly to environmental sustainability and circular economy initiatives.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: "fa-recycle", title: "Waste Reduction", desc: "Repurposing agricultural waste into valuable resources" },
                  { icon: "fa-leaf", title: "Carbon Footprint", desc: "Lower emissions compared to fossil fuel alternatives" },
                  { icon: "fa-seedling", title: "Sustainable Practices", desc: "Encouraging responsible resource management" },
                  { icon: "fa-globe-americas", title: "Renewable Energy", desc: "Supporting the transition to cleaner energy sources" }
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <i className={`fas ${benefit.icon}`}></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-brown">{benefit.title}</h5>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          ref={statsRef}
          className="my-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
              >
                <div className="text-primary text-4xl mb-4">
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <AnimatedCounter 
                  target={stat.value} 
                  delay={0.5 + (index * 0.2)}
                  duration={2}
                />
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
