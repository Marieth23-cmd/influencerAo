import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

const CTASection = () => {
  
  return (
    <section className=" relative overflow-hidden max-w-7xl mx-auto px-4 " >
      <div className="absolute inset-0">
        <Image src="/images/herovisual.jpg" fill   alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/95" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full border-2 border-primary-foreground/10 animate-rotate-slow" />
        <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full border border-primary-foreground/5 animate-rotate-slow" style={{ animationDirection: "reverse" }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-sm text-primary-foreground/80 animate-on-scroll">
          <Sparkles className="h-4 w-4 text-accent" />
          InfluConnect
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground animate-on-scroll" style={{ transitionDelay: "100ms" }}>
          Pronto para Crescer?
        </h2>
        <p className="text-primary-foreground/70 text-xl max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: "200ms" }}>
          Junte-se a milhares de marcas e influenciadores que já usam a InfluConnect para criar parcerias significativas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-on-scroll" style={{ transitionDelay: "300ms" }}>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 h-14 px-10">
            Começar Agora <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-lg h-14 px-10 transition-all duration-300 hover:scale-105">
            Criar Conta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
