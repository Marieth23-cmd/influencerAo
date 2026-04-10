"use client";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Images = [
  "/images/influencer-1.jpg",
  "/images/influencer-2.jpg",
  "/images/influencer-3.jpg",
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const switchTo = useCallback((index: number) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 400);
  }, [activeIndex, isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % Images.length);
        setIsTransitioning(false);
      }, 300);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const smallImages = Images.filter((_, i) => i !== activeIndex);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/heroi.jpg" alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-black/30" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h1 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="text-white">A plataforma que conecta </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-400 bg-clip-text text-transparent font-extrabold">
                criadores angolanos
              </span>
              <span className="text-white"> a marcas</span>
            </h1>

            <p className="text-lg text-white font-normal max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "150ms" }}>
              Encontre influenciadores por nicho, analise desempenho e lance campanhas de impacto em Angola.
            </p>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "250ms" }}>
              <Button size="lg" className="text-base text-white font-medium gap-2 rounded-xl bg-blue-600 shadow-lg shadow-blue-500/30 hover:scale-105 transition-all duration-300 h-12 px-8">
                Começar Agora <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-4 justify-start pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "350ms" }}>
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

          {/* coluna direita — animações adicionadas */}
          <div className="relative hidden lg:flex justify-center animate-in fade-in slide-in-from-right-8 duration-1000" style={{ animationDelay: "300ms" }}>
            <div className="relative">

              {/* imagem principal com crossfade */}
              <div className="rounded-3xl overflow-hidden shadow-2xl w-[380px] h-[480px] relative">
                {Images.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt="Criador de conteúdo"
                    fill
                    className={`object-cover transition-all duration-700 ease-in-out ${
                      i === activeIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              </div>

              {/* thumbnail superior direita — clicável */}
              <button
                onClick={() => switchTo(Images.indexOf(smallImages[0]))}
                className={`absolute -top-6 -right-12 w-32 h-40 rounded-2xl overflow-hidden shadow-xl animate-float border-3 border-card cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl ${
                  isTransitioning ? "opacity-70 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <Image src={smallImages[0]} alt="" fill className="object-cover transition-all duration-500" />
              </button>

              {/* thumbnail inferior esquerda — clicável */}
              <button
                onClick={() => switchTo(Images.indexOf(smallImages[1]))}
                className={`absolute -bottom-4 -left-10 w-28 h-36 rounded-2xl overflow-hidden shadow-xl animate-float-delayed border-3 border-card cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl ${
                  isTransitioning ? "opacity-70 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <Image src={smallImages[1]} alt="" fill className="object-cover transition-all duration-500" />
              </button>

              {/* bolinhas de progresso */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {Images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => switchTo(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-6 h-2 bg-blue-600"
                        : "w-2 h-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;