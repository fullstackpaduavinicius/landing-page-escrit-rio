import React from "react";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`w-full h-16 flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="text-2xl font-bold text-gray-800">
         <span className="text-green-500"></span> 
      </div> 
      <nav className="hidden md:flex space-x-6">
        <a
          href="#benefits"
          className="text-gray-600 hover:text-blue-500 transition duration-300"
        >
          
        </a>
        <a
          href="#testimonials"
          className="text-gray-600 hover:text-blue-500 transition duration-300"
        >
          
        </a>
        <a
          href="#contact"
          className="text-gray-600 hover:text-blue-500 transition duration-300"
        >
          
        </a>
      </nav>
      <a
        href="https://wa.me/seunumerodetelefone"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
      >
        Fale Conosco
      </a>
    </motion.header>
  );
};

export default Header;
