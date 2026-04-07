import { UserPlus, Search, MessageSquare, Rocket } from "lucide-react";


const HowItWorks = () => {
 
  const steps = [
    { icon: UserPlus, title: "Crie sua Conta", desc: "Cadastre-se gratuitamente e configure o perfil da sua empresa", color: "from-primary to-primary/70" },
    { icon: Search, title: "Encontre Influenciadores", desc: "Busque por nicho, tamanho de audiência e taxa de engajamento", color: "from-accent to-accent/70" },
    { icon: MessageSquare, title: "Entre em Contato", desc: "Comunique-se diretamente e negocie os termos da colaboração", color: "from-primary to-accent" },
    { icon: Rocket, title: "Execute Campanhas", desc: "Lance campanhas e acompanhe o desempenho em tempo real", color: "from-accent to-primary" },
  ];

  return (
    <section className="py-8 lg:py-14 relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-500 to-purple-700 w-full ">
      
      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Como Funciona para Empresas</h2>
          <p className="text-white/80 mt-3 text-base lg:text-lg">Quatro passos simples para lançar sua campanha</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-white/40 via-white/40 to-white/4" />
          </div>

          {steps.map((s, i) => (
            <div key={s.title} className="flex flex-col items-center text-center gap-6 relative animate-on-scroll" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="relative perspective-1000">
                <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-500 preserve-3d`} style={{ transform: "rotateY(-5deg)" }}>
                  
                </div>
                <span className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center shadow-lg ring-4 ring-blue-600">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-bold text-white text-xl"> {s.title} </h3>
              <p className="text-sm text-white/80 max-w-[240px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
