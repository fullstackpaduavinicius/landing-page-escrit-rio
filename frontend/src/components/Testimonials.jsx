import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      comment: "Excelente serviço! Meu aluguel está garantido e sem preocupações.",
    },
    {
      name: "Maria Oliveira",
      comment: "A vistoria foi muito detalhada, senti muita segurança.",
    },
    {
      name: "Carlos Souza",
      comment: "O cadastro foi rápido e sem burocracia, recomendo!",
    },
  ];

  return (
    <section className="w-full max-w-7xl text-center py-16 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
        O que nossos clientes dizem
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
        Veja o que nossos clientes têm a dizer sobre nossos serviços.
      </p>
      <div className="mt-12">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 bg-white rounded-xl shadow-lg">
                <p className="text-gray-600">{testimonial.comment}</p>
                <p className="mt-4 font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;