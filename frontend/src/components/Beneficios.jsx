import React from "react";

import { motion } from "framer-motion";

const Beneficios = () => {
  const beneficios = [
    {
      titulo: "Garantia de Pagamento",
      descricao: "Garantimos o recebimento do aluguel, mesmo em caso de inadimplência do inquilino.",
    },
    {
      titulo: "Vistoria Detalhada",
      descricao: "Realizamos vistorias detalhadas na entrada e na saída para preservar a integridade do seu imóvel.",
    },
    {
      titulo: "Sem Burocracia",
      descricao: "Cadastro rápido e simples para sua total conveniência.",
    },
  ];

  return (
    <section className="w-full max-w-7xl text-center py-16 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
        Benefícios exclusivos para você
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
      Descubra como podemos transformar sua experiência com soluções eficientes e personalizadas para suas necessidades.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {beneficios.map((beneficio, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-gray-900">{beneficio.titulo}</h3>
            <p className="text-gray-600 mt-4">{beneficio.descricao}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Beneficios;