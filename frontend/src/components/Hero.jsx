import React from "react";


import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-20 px-5 md:px-20 lg:px-40"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold leading-tight"
      >
        Alugue seu imóvel com segurança e garantia
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl max-w-3xl mx-auto"
      >
        A corretora que garante seu pagamento mesmo se o inquilino não pagar.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        href="#form"
        className="mt-6 inline-block bg-yellow-400 text-blue-600 px-6 py-3 text-lg font-semibold rounded-lg shadow-xl hover:bg-yellow-300 transition duration-300 ease-in-out"
      >
        Quero cadastrar meu imóvel
      </motion.a>
    </motion.header>
  );
};

export default Hero;
