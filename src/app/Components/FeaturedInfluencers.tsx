"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { influencersByCategory } from "@/data/influencers";
import { Heart, ChevronRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export type Influencer = {
  name: string;
  niche: string;
  campaigns: number;
  initials: string;
  img: string;
  engagement: number;
};

const InfluencerCard = ({ name, niche, campaigns, img, engagement }: Influencer) => (
  <div className="group relative rounded-2xl overflow-hidden border dark:border-gray-700 bg-card flex-shrink-0 w-[220px] sm:w-auto">
    {/* imagem com altura fixa e position relative */}
    <div className="relative h-52 w-full overflow-hidden">
      <Image
        src={img}
        alt={name}
        fill
        sizes="(max-width: 640px) 220px, (max-width: 1024px) 50vw, 25vw"
        className="object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute top-3 left-3 backdrop-blur-sm  rounded-full px-3 py-1 flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full " />
       
      </div>
      <button className="absolute top-3 right-3 h-8 w-8 rounded-full backdrop-blur-sm  flex items-center justify-center hover:bg-red-500/80 transition-colors duration-200">
       
      </button>
      <div className="absolute bottom-3 left-3 right-3">
        <h3 className="font-bold text-white text-base leading-tight">{name}</h3>
        <Heart className="absolute top-2 -right-1 h-5 w-5 text-white/80  hover:text-red-500  cursor-pointer" />
        <div className="flex items-center gap-2 mt-1">
          <Badge className="text-white bg-blue-500/80 border-0 text-xs px-2 py-0">{niche}</Badge>
          <span className="text-xs text-white/70">{campaigns} campanhas</span>
        </div>
      </div>
    </div>

    <div className="p-3 space-y-2.5">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <FaInstagram className="h-3.5 w-3.5" />
          <span className="text-xs">{(campaigns * 1234).toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs text-muted-foreground">Eng:</span>
          <span className="text-xs font-semibold text-blue-500">{engagement.toFixed(1)}%</span>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="w-full gap-2 text-xs border dark:border-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
      >
        Ver Perfil 
      </Button>
    </div>
  </div>
);

const VISIBLE = 4;

const CategoryTab = ({ list }: { list: Influencer[] }) => {
  const [expanded, setExpanded] = useState(false);

  const visibleCards = expanded ? list : list.slice(0, VISIBLE);
  const extra = list.length - VISIBLE;

  return (
    <div>
      {/* mobile: scroll horizontal — desktop: grid 4 colunas */}
      <div className="
        flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide
        sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0
        lg:grid-cols-4
      ">
        {visibleCards.map((inf, i) => (
          <div
            key={inf.name}
            className="snap-start"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <InfluencerCard {...inf} />
          </div>
        ))}

        {/* no mobile, cartão fantasma que indica haver mais */}
        {!expanded && extra > 0 && (
          <div
            className="
              flex-shrink-0 snap-start w-[220px]
              sm:hidden
              flex flex-col items-center justify-center
              rounded-2xl border dark:border-gray-700
              bg-muted/40 cursor-pointer gap-2 px-4
              hover:bg-muted/60 transition-colors h-[260px]
            "
            onClick={() => setExpanded(true)}
          >
            <div className="flex flex-col items-center gap-1">
              {list.slice(VISIBLE, VISIBLE + 3).map((inf) => (
                <div key={inf.name} className="relative h-8 w-8 rounded-full overflow-hidden border-2 border-background -mt-1 first:mt-0">
                  <Image src={inf.img} alt={inf.name} fill className="object-cover" sizes="32px" />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-foreground text-center">
              +{extra} influenciadores
            </span>
            <ChevronRight className="h-4 w-4 text-white" />
          </div>
        )}
      </div>

          {/* desktop: bolinhas à esquerda + botão */}
        {/* desktop: bolinhas à esquerda + botão */}
{extra > 0 && (
  <div className="hidden sm:flex items-center justify-between mt-5">
    <div className="flex items-center gap-2">
      <div className="flex gap-1.5 justify-start">   {/* ← start aqui */}
        {Array.from({ length: VISIBLE }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
        ))}
        {Array.from({ length: Math.min(extra, 4) }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-foreground/15" />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        +{extra} influenciador{extra > 1 ? "es" : ""}
      </span>
    </div>
    <button
      onClick={() => setExpanded(!expanded)}
      className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-600 font-medium transition-colors"
    >
      {expanded ? "Ver menos" : "Ver todos"}
      <ChevronRight className={`h-4 w-4 transition-transform ${expanded ? "rotate-90" : ""}`} />
    </button>
  </div>
)}

    </div>
  );
};
const FeaturedInfluencers = () => {
  return (
    <section className="py-10 lg:py-14 bg-background relative overflow-hidden max-w-7xl mx-auto px-4">
      <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            Influenciadores em Destaque
          </h2>
          <p className="mt-3 text-base lg:text-lg max-w-2xl mx-auto text-muted-foreground">
            Descubra os melhores criadores prontos para colaborar
          </p>
        </div>

        <Tabs defaultValue="top" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="p-1.5 rounded-2xl flex gap-2">
              <TabsTrigger value="top" className="rounded-xl px-2 lg:px-6 dark:bg-white/15 data-[state=active]:shadow-lg">
                Top Performers
              </TabsTrigger>
              <TabsTrigger value="sponsored" className="rounded-xl px-2 lg:px-6   dark:bg-white/15 data-[state=active]:shadow-lg">
                Patrocinados
              </TabsTrigger>
              <TabsTrigger value="rising" className="rounded-xl px-2 lg:px-6 dark:bg-white/15 data-[state=active]:shadow-lg">
                Em Ascensão
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(influencersByCategory).map(([key, list]) => (
            <TabsContent key={key} value={key}>
              <CategoryTab list={list} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedInfluencers;