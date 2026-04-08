import { UserPlus, Search, MessageSquare, Rocket } from "lucide-react";
import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Crie sua Conta",
      desc: "Cadastre-se gratuitamente e configure o perfil da sua empresa",
    },
    {
      icon: Search,
      title: "Encontre Influenciadores",
      desc: "Busque por nicho, tamanho de audiência e taxa de engajamento",
    },
    {
      icon: MessageSquare,
      title: "Entre em Contato",
      desc: "Comunique-se diretamente e negocie os termos da colaboração",
    },
    {
      icon: Rocket,
      title: "Execute Campanhas",
      desc: "Lance campanhas e acompanhe o desempenho em tempo real",
    },
  ];

  return (
    <section className="relative py-10 lg:py-20 overflow-hidden">
      
      {/* Background */}
      <Image
        src="/images/heroivisual.jpg"
        alt="Background"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85 dark:bg-blue-950/85 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Como Funciona para Empresas
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            Quatro passos simples para lançar sua campanha
          </p>
        </div>

        {/* MOBILE (timeline vertical) */}
        <div className="flex flex-col gap-8 md:hidden relative">

          {/* linha vertical */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-700" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="flex items-start gap-4 relative">
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center
                  bg-white dark:bg-white/10 backdrop-blur-md
                  border border-gray-200 dark:border-white/10 shadow">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">

          {/* linha horizontal */}
          <div className="absolute top-10 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="flex flex-col items-center text-center gap-5 group"
              >
                <div className="h-20 w-20 rounded-2xl flex items-center justify-center
                bg-white/70 dark:bg-white/10 backdrop-blur-lg
                border border-gray-200 dark:border-white/10
                shadow-lg transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>

                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 max-w-[220px]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;