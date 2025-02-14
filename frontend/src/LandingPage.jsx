import React from "react";
import Hero from "./components/Hero";
import Beneficios from "./components/Beneficios";
import Formulario from "./components/Formulario";
import FAQ from "./components/FAQ";
import Rodape from "./components/Rodape";
import Header from "./components/header"; 
import Testimonials from "./components/Testimonials";
import "./styles/tailwind.css"; 

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">      
      <Hero />
      <Header />
      <Beneficios />
      <Formulario />
      <FAQ />
      <Rodape />
      
    </div>
  );
};

export default LandingPage;
