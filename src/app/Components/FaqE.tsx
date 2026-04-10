"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como encontro o influencer certo para a minha marca?",
    answer:
      "Pode utilizar os nossos filtros por nicho, localização, seguidores e engajamento para encontrar os criadores mais alinhados com os seus objetivos.",
  },
  {
    question: "Os influencers são verificados?",
    answer:
      "Sim. Todos os influencers passam por um processo de verificação para garantir autenticidade e qualidade das parcerias.",
  },
  {
    question: "Posso falar diretamente com o influencer?",
    answer:
      "Sim. A plataforma permite comunicação direta para facilitar negociações rápidas e transparentes.",
  },
  {
    question: "Quanto custa usar a plataforma?",
    answer:
      "O registo é gratuito. Apenas cobramos uma pequena comissão sobre campanhas realizadas com sucesso.",
  },
  {
    question: "Como acompanho os resultados das campanhas?",
    answer:
      "Terá acesso a um dashboard com métricas de desempenho como alcance, engajamento e resultados em tempo real.",
  },
  {
    question: "Posso trabalhar com vários influencers ao mesmo tempo?",
    answer:
      "Sim. Pode gerir múltiplas campanhas e colaboradores simultaneamente dentro da plataforma.",
  },

];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 lg:py-14 max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Perguntas Frequentes
        </h2>
        <p className="text-gray-900 mt-3">
          Tire as suas dúvidas antes de começar
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 transition-all duration-300 bg-white  dark:bg-white/5 border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md cursor-pointer"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="font-medium text-base md:text-lg">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}