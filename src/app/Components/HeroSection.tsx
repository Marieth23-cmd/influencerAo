import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-blue-200 dark:bg-blue-900 mb-12 ">
        <Image
          src="/images/heroi.jpg"
          alt="Hero Background"
          fill
         className="object-cover object-center h-full w-full "
        />

        <div className="insert-0 absolute bg-black/15"></div>

      <div className="absolute inset-0 ">
        
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/30" />
      </div>

      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full text-white px-5 py-2 text-sm text-primary-foreground/90 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="h-4 w-4 text-accent" />
              A plataforma #1 de marketing de influência
            </div>

            <h1 className=" text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "100ms" }}>
                Conectamos empresas com os melhores influenciadores para gerar  
                  <span className="  from-blue-600 via-purple-700 to-blue-700"> resultados reais</span>
               </h1>
                
            <p className="text-white text-lg md:text-xl text-primary-foreground/70 max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "200ms" }}>
              Encontre criadores por nicho, analise desempenho e execute campanhas de impacto
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "300ms" }}>
              <Button size="lg" className="text-base gap-2 shadow-lg bg-blue-600  text-white hover:scale-105 transition-all duration-300 h-14 px-8 text-lg">
                Encontrar Influenciadores <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base border-primary-foreground/20 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/10 shadow-lg h-14 px-8 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <Play className="h-4 w-4 mr-2" />
                Sou Influenciador
              </Button>
            </div>

            
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
