import React from "react";

const FAQ = () => {
  return (
    <section className="w-full max-w-7xl text-center py-16 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
        Perguntas Frequentes
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
        Esclareça suas dúvidas e entenda melhor como nosso serviço pode ajudar você.
      </p>
      <div className="mt-12 max-w-3xl mx-auto space-y-6">
        <details className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <summary className="font-semibold cursor-pointer text-gray-900 text-xl">
            Como funciona a garantia de pagamento?
          </summary>
          <p className="mt-2 text-gray-600">
            Se o inquilino não pagar, nós cobrimos os custos do aluguel, água e luz durante a vigência do contrato.
          </p>
        </details>
        <details className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <summary className="font-semibold cursor-pointer text-gray-900 text-xl">
            Como faço para cadastrar meu imóvel?
          </summary>
          <p className="mt-2 text-gray-600">
            Basta preencher o formulário acima ou falar conosco pelo WhatsApp.
          </p>
        </details>
      </div>
    </section>
  );
};

export default FAQ;
