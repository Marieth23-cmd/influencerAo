import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { influencersByCategory } from "@/data/influencers";
import { Heart, ExternalLink } from "lucide-react";
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
  <div className="group relative  rounded-2xl overflow-hidden border dark:border-gray-600 ">
    <div className="relative h-56 overflow-hidden">
      <Image
        fill
        src={img}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-medium text-white">Online</span>
      </div>
      <button className="absolute top-3 right-3 h-9 w-9 rounded-full glass flex items-center justify-center text-primary-foreground/80 hover:text-destructive transition-colors">
        <Heart className="h-4 w-4 text-white" />
      </button>
      <div className="absolute bottom-3 left-3 right-3">
        <h3 className="font-bold text-primary-foreground text-lg text-white">{name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Badge className="text-white bg-blue-400 dark-text-blue-500 border-0 text-xs">{niche}</Badge>
          <span className="text-xs text-primary-foreground/70 text-white">{campaigns} campanhas</span>
        </div>
      </div>
    </div>
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <FaInstagram className="h-3.5 w-3.5" />
          <span>{(campaigns * 1234).toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <span className="text-xs">Engajamento:</span>
          
          <span className="font-semibold text-primary">
            {engagement.toFixed(1)}%
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="w-full gap-2 border dark:border-gray-600 hover:bg-blue-600 hover:text-white   dark:hover:bg-blue-600 transition-all duration-300"
      >
        Ver Perfil <ExternalLink className="h-3.5 w-3.5 " />
      </Button>
    </div>
  </div>
);

const FeaturedInfluencers = () => {
  const VISIBLE = 4;

  return (
    <section className="lg:8 lg:py-14 bg-background relative overflow-hidden max-w-7xl mx-auto px-4">
      <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            Influenciadores em Destaque
          </h2>
          <p className="text-muted-foreground mt-3 text-base lg:text-lg max-w-2xl mx-auto">
            Descubra os melhores criadores prontos para colaborar
          </p>
        </div>

        <Tabs defaultValue="top" className="w-full">
          <div className="flex justify-center mb-8 animate-on-scroll" style={{ transitionDelay: "100ms" }}>
            <TabsList className="glass-strong p-1.5 rounded-2xl">
              <TabsTrigger value="top" className="rounded-xl px-6 data-[state=active]:shadow-lg">
                Top Performers
              </TabsTrigger>
              <TabsTrigger value="sponsored" className="rounded-xl px-6 data-[state=active]:shadow-lg">
                Patrocinados
              </TabsTrigger>
              <TabsTrigger value="rising" className="rounded-xl px-6 data-[state=active]:shadow-lg">
                Em Ascensão
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(influencersByCategory).map(([key, list]) => {
            const visible = list.slice(0, VISIBLE);
            const extra = list.length - VISIBLE;

            return (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-4 gap-6">
                  {visible.map((inf, i) => (
                    <div
                      key={inf.name}
                      className="animate-on-scroll-scale"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <InfluencerCard {...inf} />
                    </div>
                  ))}
                </div>

                {extra > 0 && (
                  <div className="flex items-center gap-3 mt-6">
                    <div className="flex gap-1.5 items-center">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <span key={i} className="h-1.5 w-1.5 rounded-full bg-black/40" />
                      ))}
                      {Array.from({ length: Math.min(extra, 3) }).map((_, i) => (
                        <span key={i} className="h-1.5 w-1.5 rounded-full bg-black/15" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      +{extra} influenciador{extra > 1 ? "es" : ""}
                    </span>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedInfluencers;