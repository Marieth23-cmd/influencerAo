"use client";

import { FiSend} from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-2 rounded-full mb-6">
          
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
          Quer trabalhar com este criador?
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          Envie uma proposta directamente. A Ana Sofia responde em média em menos de
          24 horas e pode adaptar o plano ao orçamento da sua empresa.
        </p>

        <button className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all shadow-lg shadow-blue-100 mb-6">
          <FiSend size={18} />
          Enviar Proposta de Colaboração
        </button>

        <div className="flex flex-wrap justify-center gap-5 text-xs text-gray-400">
          
        </div>
      </div>
    </section>
  );
}