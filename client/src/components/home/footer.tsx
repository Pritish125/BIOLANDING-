import { motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  // Footer links data
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { text: "Home", href: "#" },
        { text: "About Us", href: "#about" },
        { text: "How It Works", href: "#how-it-works" },
        { text: "Benefits", href: "#benefits" },
        { text: "Contact", href: "#contact" },
        { text: "Blog", href: "#" }
      ]
    },
    {
      title: "For Farmers",
      links: [
        { text: "How to Register", href: "#" },
        { text: "Selling Guide", href: "#" },
        { text: "Pricing & Fees", href: "#" },
        { text: "Farmer FAQ", href: "#" },
        { text: "Success Stories", href: "#" }
      ]
    },
    {
      title: "For Companies",
      links: [
        { text: "Company Registration", href: "#" },
        { text: "Buying Process", href: "#" },
        { text: "Quality Standards", href: "#" },
        { text: "Company FAQ", href: "#" },
        { text: "Case Studies", href: "#" }
      ]
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: "fa-facebook-f", href: "#" },
    { icon: "fa-twitter", href: "#" },
    { icon: "fa-linkedin-in", href: "#" },
    { icon: "fa-instagram", href: "#" }
  ];

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.footer
      className="bg-brown text-white pt-16 pb-8 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <Logo light={true} />
            </div>
            <p className="text-white/70 mb-6">
              Connecting biomass producers with manufacturing companies to create a sustainable ecosystem and circular economy.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
                  whileHover={{ 
                    backgroundColor: "#8BC34A", 
                    scale: 1.1,
                    rotate: 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={`fab ${link.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick links columns */}
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="text-lg font-montserrat font-bold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-primary transition-colors duration-300"
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {link.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Copyright and policies */}
        <motion.div 
          className="border-t border-white/20 pt-8 mt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BIOBRIM. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center space-x-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="text-white/70 text-sm hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {text}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <motion.div 
        className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full"
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
        className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full"
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
    </motion.footer>
  );
}
