import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSuccess, setFormSuccess] = useState(false);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Form Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission with success message
    setTimeout(() => {
      setFormSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      toast({
        title: "Message Sent",
        description: "Thank you! Your message has been sent successfully.",
        variant: "default"
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    }, 1000);
  };

  // Contact info items
  const contactInfo = [
    { icon: "fa-map-marker-alt", title: "Our Office", content: "123 Green Energy Blvd, EcoCity, EC 12345" },
    { icon: "fa-phone-alt", title: "Phone", content: "+1 (555) 123-4567" },
    { icon: "fa-envelope", title: "Email", content: "info@biobrim.com" },
    { icon: "fa-clock", title: "Operating Hours", content: "Monday - Friday: 9AM - 5PM" }
  ];

  // Social media links
  const socialLinks = [
    { icon: "fa-facebook-f", href: "#" },
    { icon: "fa-twitter", href: "#" },
    { icon: "fa-linkedin-in", href: "#" },
    { icon: "fa-instagram", href: "#" }
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
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
            Get in <span className="text-primary">Touch</span>
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
            Have questions? Reach out to our team for more information about BIOBRIM and how we can help you.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-light-brown/20 rounded-xl p-8 h-full"
              variants={itemVariants}
              whileHover={{ 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
            >
              <h3 className="text-2xl font-montserrat font-bold text-brown mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-brown">{item.title}</h5>
                      <p className="text-gray-700">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div variants={itemVariants}>
                  <h5 className="font-semibold text-brown mb-3">Follow Us</h5>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <motion.a 
                        key={index}
                        href={link.href}
                        className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"
                        whileHover={{ 
                          backgroundColor: "#8BC34A", 
                          color: "#ffffff",
                          scale: 1.1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <i className={`fab ${link.icon}`}></i>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-montserrat font-bold text-brown mb-6">Send Us a Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group relative">
                    <motion.input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" " 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      whileFocus={{ boxShadow: "0 0 0 2px rgba(139, 195, 74, 0.2)" }}
                    />
                    <label htmlFor="name" className="absolute left-4 top-3 text-gray-500 transition-all duration-300">Your Name</label>
                  </div>
                  
                  <div className="form-group relative">
                    <motion.input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" " 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      whileFocus={{ boxShadow: "0 0 0 2px rgba(139, 195, 74, 0.2)" }}
                    />
                    <label htmlFor="email" className="absolute left-4 top-3 text-gray-500 transition-all duration-300">Your Email</label>
                  </div>
                </div>
                
                <div className="form-group relative">
                  <motion.select 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all duration-300 text-gray-500"
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(139, 195, 74, 0.2)" }}
                  >
                    <option value="" disabled>Select Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="farmer">Farmer Registration</option>
                    <option value="company">Company Registration</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </motion.select>
                  <div className="absolute right-4 top-3 text-gray-500 pointer-events-none">
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>
                
                <div className="form-group relative">
                  <motion.textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" " 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(139, 195, 74, 0.2)" }}
                  ></motion.textarea>
                  <label htmlFor="message" className="absolute left-4 top-3 text-gray-500 transition-all duration-300">Your Message</label>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full py-3 bg-primary text-white font-montserrat font-semibold rounded-lg shadow-lg"
                  whileHover={{ 
                    backgroundColor: "#7cb342",
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(139, 195, 74, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Send Message
                </motion.button>
                
                {formSuccess && (
                  <motion.div 
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
