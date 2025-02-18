import React, { useState } from "react";

import { motion } from "framer-motion";
import { API_BASE_URL } from "../services/api"; // Importe a URL do backend

const response = await fetch(`${API_BASE_URL}/api/cadastrar`) // Use a URL centralizada


const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    detalhes: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nome) newErrors.nome = "Nome é obrigatório";
    if (!formData.email) newErrors.email = "E-mail é obrigatório";
    if (!formData.telefone) newErrors.telefone = "Telefone é obrigatório";
    if (!formData.detalhes) newErrors.detalhes = "Detalhes são obrigatórios";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setMensagem("");

    try {
      const response = await fetch("http://localhost:5000/api/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMensagem("Cadastro realizado com sucesso!");
        setFormData({ nome: "", email: "", telefone: "", detalhes: "" });
      } else {
        setMensagem(data.message || "Erro ao enviar os dados.");
      }
    } catch (error) {
      setMensagem("Erro de conexão com o servidor.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="form"
      className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-xl my-16 mx-auto"
    >
      <h2 className="text-3xl font-extrabold text-center text-gray-900">Cadastre seu imóvel agora</h2>
      <p className="text-lg text-center text-gray-600 mt-2 mb-8 max-w-2xl mx-auto">
        Preencha o formulário abaixo e nosso time entrará em contato o quanto antes.
      </p>
      {mensagem && <p className="text-center text-green-600 font-bold">{mensagem}</p>}
      <form className="mt-6 flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="w-full flex flex-col">
          <input
            className="p-4 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
        </div>
        <div className="w-full flex flex-col">
          <input
            className="p-4 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="w-full flex flex-col">
          <input
            className="p-4 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
          {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>}
        </div>
        <div className="w-full flex flex-col">
          <textarea
            className="p-4 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            name="detalhes"
            placeholder="Detalhes do imóvel"
            rows="4"
            value={formData.detalhes}
            onChange={handleChange}
            required
          ></textarea>
          {errors.detalhes && <p className="text-red-500 text-sm mt-1">{errors.detalhes}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Enviar
        </button>
      </form>
      <a href="https://wa.me/seunumerodetelefone" className="block mt-6 text-center text-blue-600 hover:underline">
        Prefere falar pelo WhatsApp? Clique aqui
      </a>
    </motion.section>
  );
};

export default Formulario;
