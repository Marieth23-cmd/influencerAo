import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Images=[
  "/images/influencer-1.jpg",
  "/images/influencer-2.jpg",
  "/images/influencer-3.jpg",
]
  


const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden ">
      <div className="absolute inset-0">
        <Image src= "/images/heroi.jpg" alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-black/30" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="text-white">A plataforma que conecta </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text ">
                criadores angolanos
              </span>
              <span className="text-white"> a marcas</span>
            </h1>

            <p className="text-lg text-white font-normal max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "150ms" }}>
              Encontre influenciadores por nicho, analise desempenho e lance campanhas de impacto em Angola.
            </p>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "250ms" }}>
              <Button size="lg" className="text-base text-white gap-2 rounded-xl bg-blue-600 shadow-lg shadow-blue-500/30 hover:scale-105 transition-all duration-300 h-12 px-8">
                Começar Agora <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "350ms" }}>
              <div className="flex -space-x-3">
                {Images.map((src, i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-card overflow-hidden">
                    <Image src={src} alt="" className="w-full h-full object-cover" width={40} height={40} />
                  </div>
                ))}
              </div>
              <p className="text-sm text-white font-normal">
                <span className="font-semibold text-white">+2.500</span> criadores activos
              </p>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center animate-in fade-in slide-in-from-right-8 duration-1000" style={{ animationDelay: "300ms" }}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl w-[380px] h-[480px]">
                <Image src={Images[0]} fill alt="Criador de conteúdo" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
              </div>

              <div className="absolute -top-6 -right-12 w-32 h-40 rounded-2xl overflow-hidden shadow-xl animate-float border-3 border-card">
                <Image src={Images[1]} fill alt="" className="w-full h-full object-cover" />
              </div>

              <div className="absolute -bottom-4 -left-10 w-28 h-36 rounded-2xl overflow-hidden shadow-xl animate-float-delayed border-3 border-card">
                <Image src={Images[2]} fill alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
