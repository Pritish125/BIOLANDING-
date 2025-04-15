import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Logo } from "@/components/ui/logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform properties based on scroll
  const headerBackground = useTransform(
    scrollY, 
    [0, 50], 
    ["rgba(255, 255, 255, 0.95)", "rgba(255, 255, 255, 0.98)"]
  );
  
  const headerPadding = useTransform(
    scrollY,
    [0, 50],
    ["1rem", "0.75rem"] 
  );
  
  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["0 2px 10px rgba(0, 0, 0, 0.1)", "0 4px 20px rgba(0, 0, 0, 0.15)"]
  );

  // Navigation links data
  const navLinks = [
    { href: "#hero", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#how-it-works", text: "How it Works" },
    { href: "#benefits", text: "Benefits" },
    { href: "#contact", text: "Contact" },
  ];

  // Close mobile menu when clicking on a link
  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <motion.header
      style={{ 
        background: headerBackground,
        padding: headerPadding,
        boxShadow: headerShadow,
      }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="nav-link font-montserrat text-brown hover:text-primary font-semibold transition-colors duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              whileHover={{ scale: 1.05 }}
            >
              {link.text}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          
          <motion.div
            className="ml-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.button
              className="py-2 px-5 bg-primary text-white font-montserrat font-semibold rounded-full transition-all duration-300 shadow-md"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#7cb342",
                boxShadow: "0 6px 20px rgba(124, 179, 66, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
          </motion.div>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-brown text-2xl focus:outline-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'}`}></i>
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-white py-4 px-4 shadow-inner"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-montserrat text-brown hover:text-primary font-semibold transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
            >
              {link.text}
            </a>
          ))}
          <div className="flex space-x-3 pt-2">
            <button className="py-2 px-5 bg-primary text-white font-montserrat font-semibold rounded-full hover:bg-primary-dark transition-all duration-300">
              Sign In
            </button>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
}
