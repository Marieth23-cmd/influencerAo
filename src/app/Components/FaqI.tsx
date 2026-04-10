"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
const faqs = [
  {
    question: "Como posso começar a trabalhar com marcas?",
    answer:
      "Depois de criar o seu perfil, ficará visível para empresas que procuram influenciadores. Também poderá receber propostas diretamente ou candidatar-se a campanhas disponíveis.",
  },
  {
    question: "Preciso ter muitos seguidores para me cadastrar?",
    answer:
      "Não. Valorizamos mais o engajamento e a qualidade do seu conteúdo do que apenas o número de seguidores.",
  },
  {
    question: "Como defino o valor das minhas campanhas?",
    answer:
      "Você define os seus próprios preços com base no tipo de conteúdo, alcance e engajamento. A plataforma ajuda a posicionar melhor o seu valor no mercado.",
  },
  {
    question: "Como recebo o pagamento pelas campanhas?",
    answer:
      "Os pagamentos podem ser feitos de forma segura dentro da plataforma, garantindo que ambas as partes cumpram o acordo antes da liberação do valor.",
  },
  {
    question: "Posso trabalhar com várias marcas ao mesmo tempo?",
    answer:
      "Sim. Você pode gerir várias campanhas simultaneamente e organizar tudo no seu dashboard de forma simples.",
  },
  {
    question: "A plataforma cobra alguma taxa?",
    answer:
      "O registo é gratuito. Apenas cobramos uma pequena comissão sobre campanhas concluídas com sucesso.",
  },
  {
    question: "Como aumento minhas chances de ser contratado?",
    answer:
      "Mantenha o seu perfil completo, publique conteúdos de qualidade e atualize suas métricas regularmente. Perfis ativos têm mais visibilidade.",
  },
  {
    question: "O meu perfil será verificado?",
    answer:
      "Sim. Aplicamos um processo de verificação para aumentar a confiança das empresas e valorizar os influenciadores dentro da plataforma.",
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