"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { influencersByCategory, type Influencer } from "@/data/influencers";
import { Heart, ExternalLink, Share2, ChevronLeft, ChevronRight } from "lucide-react";

const InfluencerCard = ({ name, niche, campaigns,  img }: Influencer) => (
  <div className="group relative card-3d rounded-2xl overflow-hidden border bg-card">
    <div className="relative h-56 overflow-hidden">
      <Image
        src={img}
        alt={name}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-medium text-primary-foreground">Online</span>
      </div>
      <button className="absolute top-3 right-3 h-9 w-9 rounded-full glass flex items-center justify-center text-primary-foreground/80 hover:text-destructive transition-colors">
        <Heart className="h-4 w-4" />
      </button>
      <div className="absolute bottom-3 left-3 right-3">
        <h3 className="font-bold text-primary-foreground text-lg">{name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Badge className="bg-primary/80 text-primary-foreground border-0 text-xs">{niche}</Badge>
          <span className="text-xs text-primary-foreground/70">{campaigns} campanhas</span>
        </div>
      </div>
    </div>
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Share2 className="h-3.5 w-3.5" />
          <span>{(campaigns * 1234).toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <span className="text-xs">Engajamento:</span>
          <span className="font-semibold text-primary">{(Math.random() * 5 + 3).toFixed(1)}%</span>
        </div>
      </div>
      <Button variant="outline" size="sm" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
        Ver Perfil <ExternalLink className="h-3.5 w-3.5" />
      </Button>
    </div>
  </div>
);

const FeaturedInfluencers = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Pega todos os influenciadores de todas as categorias
  const allInfluencers = Object.values(influencersByCategory).flat();
  const itemsPerPage = 4;
  const totalPages = Math.ceil(allInfluencers.length / itemsPerPage);
  
  const currentInfluencers = allInfluencers.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-8 lg:py-14 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-6 animate-on-scroll">
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Influenciadores em Destaque</h2>
          <p className="text-muted-foreground mt-3 text-lg max-w-2xl mx-auto">Descubra os melhores criadores prontos para colaborar</p>
        </div>

        {/* Grid com 4 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentInfluencers.map((inf, i) => (
            <div key={inf.name} className="animate-on-scroll-scale" style={{ transitionDelay: `${i * 100}ms` }}>
              <InfluencerCard {...inf} />
            </div>
          ))}
        </div>

        {/* Navegação e Indicadores */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 animate-on-scroll">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full w-10 h-10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Indicadores de página */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentPage
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Página ${idx + 1}`}
                  aria-current={idx === currentPage}
                />
              ))}
            </div>

            {/* Contador de página */}
            <span className="text-sm text-muted-foreground min-w-16 text-center">
              {currentPage + 1} de {totalPages}
            </span>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full w-10 h-10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Próximo"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedInfluencers;
