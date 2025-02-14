import React from "react";

import { motion } from "framer-motion";

const Rodape = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="w-full bg-gray-800 text-white text-center py-6 mt-12"
    >
      <p className="text-sm md:text-base">
        © 2025 Pádua Junior Corretor - Todos os direitos reservados.
      </p>
      <div className="mt-4">
        <a
          href="#"
          className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out text-sm md:text-base"
        >
          Políticas de Privacidade
        </a>
        <span className="mx-2">|</span>
        <a
          href="#"
          className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out text-sm md:text-base"
        >
          Termos de Uso
        </a>
      </div>
    </motion.footer>
  );
};

export default Rodape;
