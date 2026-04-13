"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import { Search, SlidersHorizontal, MapPin, Users, TrendingUp, Eye, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { allInfluencers } from "@/data/influencers";
import Image from "next/image";

const nichos = [
  "Todos", "Moda", "Tecnologia", "Fitness", "Viagem", "Beleza", "Games",
  "Gastronomia", "Música", "Estilo de Vida", "Educação", "Saúde", "Esportes",
  "Kuduro", "Moda Africana", "Comédia", "Dança", "Negócios", "Imobiliário",
  "Automóveis", "Fotografia", "Arte", "Política", "Religião"
];

const seguidoresRanges = ["Todos", "1K - 10K", "10K - 50K", "50K - 100K", "100K+"];
const localizacoes = ["Todas", "Luanda", "Benguela", "Huambo", "Cabinda", "Lubango", "Malanje", "Namibe", "Uíge"];
const precoRanges = ["Todos", "Até 50.000 Kz", "50K - 150K Kz", "150K - 500K Kz", "500K+ Kz"];

const marketplaceInfluencers = allInfluencers.map((inf, i) => ({
  ...inf,
  followers: [12400, 87300, 45600, 156000, 23800, 31200, 68900, 19500, 8700, 5200, 14300, 9800][i],
  engagement: [4.8, 3.2, 5.1, 2.9, 6.3, 4.1, 3.7, 5.5, 7.2, 4.4, 3.9, 6.1][i],
  location: ["Luanda", "Luanda", "Benguela", "Luanda", "Huambo", "Luanda", "Cabinda", "Lubango", "Luanda", "Benguela", "Luanda", "Huambo"][i],
  price: [75000, 250000, 120000, 450000, 45000, 80000, 150000, 35000, 20000, 15000, 40000, 25000][i],
  rating: [4.9, 4.7, 4.8, 4.6, 5.0, 4.5, 4.7, 4.8, 4.9, 4.6, 4.4, 4.7][i],
  platform: ["Instagram", "YouTube", "Instagram", "TikTok", "Instagram", "Twitch", "Instagram", "YouTube", "TikTok", "YouTube", "Instagram", "Instagram"][i],
}));

const formatFollowers = (n: number) => {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n.toString();
};


const NativeSelect = ({ value, onChange, options, icon, label }: {
  value: string; onChange: (v: string) => void; options: string[]; icon?: React.ReactNode; label: string;
}) => (
  <div className="relative">
    {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">{icon}</span>}
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={label}
      className={`appearance-none h-9 rounded-lg border border-[hsl(214,32%,91%)] bg-white dark:bg-[hsl(222,84%,8%)] text-sm text-[hsl(222,47%,11%)] dark:text-[hsl(210,40%,98%)] pr-8 ${icon ? "pl-9" : "pl-3"} cursor-pointer hover:border-[hsl(217,91%,60%)] transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(217,91%,60%)] focus:ring-offset-1`}
    >
      {options.map(o => <option key={o} value={o}>{o === "Todos" || o === "Todas" ? label : o}</option>)}
    </select>
    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[hsl(215,16%,47%)] pointer-events-none" />
  </div>
);

const FadeInCard = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {children}
    </div>
  );
};

const EncontrarInfluencer = () => {
  const [query, setQuery] = useState("");
  const [nichoFilter, setNichoFilter] = useState("Todos");
  const [seguidoresFilter, setSeguidoresFilter] = useState("Todos");
  const [localFilter, setLocalFilter] = useState("Todas");
  const [precoFilter, setPrecoFilter] = useState("Todos");
  const [sortBy, setSortBy] = useState("relevantes");
  const [showFilters, setShowFilters] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeaderVisible(true), 100);
  }, []);

  const activeFilters = [nichoFilter, seguidoresFilter, localFilter, precoFilter].filter(f => f !== "Todos" && f !== "Todas");

  const clearFilters = () => {
    setNichoFilter("Todos");
    setSeguidoresFilter("Todos");
    setLocalFilter("Todas");
    setPrecoFilter("Todos");
    setQuery("");
  };

  const filtered = useMemo(() => {
    let list = [...marketplaceInfluencers];

    if (query) {
      const q = query.toLowerCase();
      list = list.filter(inf =>
        inf.name.toLowerCase().includes(q) ||
        inf.niche.toLowerCase().includes(q) ||
        inf.platform.toLowerCase().includes(q)
      );
    }

    if (nichoFilter !== "Todos") list = list.filter(inf => inf.niche === nichoFilter);
    if (localFilter !== "Todas") list = list.filter(inf => inf.location === localFilter);

    if (seguidoresFilter !== "Todos") {
      if (seguidoresFilter === "1K - 10K") list = list.filter(inf => inf.followers >= 1000 && inf.followers < 10000);
      else if (seguidoresFilter === "10K - 50K") list = list.filter(inf => inf.followers >= 10000 && inf.followers < 50000);
      else if (seguidoresFilter === "50K - 100K") list = list.filter(inf => inf.followers >= 50000 && inf.followers < 100000);
      else if (seguidoresFilter === "100K+") list = list.filter(inf => inf.followers >= 100000);
    }

    if (precoFilter !== "Todos") {
      if (precoFilter === "Até 50.000 Kz") list = list.filter(inf => inf.price <= 50000);
      else if (precoFilter === "50K - 150K Kz") list = list.filter(inf => inf.price > 50000 && inf.price <= 150000);
      else if (precoFilter === "150K - 500K Kz") list = list.filter(inf => inf.price > 150000 && inf.price <= 500000);
      else if (precoFilter === "500K+ Kz") list = list.filter(inf => inf.price > 500000);
    }

    if (sortBy === "populares") list.sort((a, b) => b.followers - a.followers);
    else if (sortBy === "baratos") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "engajamento") list.sort((a, b) => b.engagement - a.engagement);
    else list.sort((a, b) => b.campaigns - a.campaigns);

    return list;
  }, [query, nichoFilter, seguidoresFilter, localFilter, precoFilter, sortBy]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(180deg, hsl(220,25%,97%) 0%, hsl(220,20%,95%) 100%)" }}>
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(217,91%,20%) 0%, hsl(217,91%,40%) 50%, hsl(217,91%,55%) 100%)" }}>
          {/* Animated circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 animate-pulse" style={{ background: "hsl(217,91%,80%)" }} />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full opacity-10 animate-pulse" style={{ background: "hsl(217,91%,80%)", animationDelay: "1s" }} />
          </div>

          <div className={`container mx-auto px-4 py-10 md:py-14 relative z-10 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="max-w-2xl mx-auto text-center mb-8">
              <p className="text-sm font-medium mb-3 tracking-wider uppercase" style={{ color: "hsl(217,91%,80%)" }}>
                InfluencerAO — Marketplace
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Encontrar <span style={{ color: "hsl(210,100%,80%)" }}>Influencer</span>
              </h1>
              <p className="text-white/70 text-lg">
                Descubra os melhores criadores de conteúdo angolanos para a sua marca
              </p>
            </div>

            {/* Search bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[hsl(215,16%,47%)]" />
              <input
                placeholder="Buscar influencers por nome, nicho ou plataforma..."
                className="w-full pl-12 pr-12 h-13 text-base rounded-xl border-0 shadow-lg  dark:bg-[hsl(222,84%,8%)] text-[hsl(222,47%,11%)] dark:text-white placeholder:text-[hsl(215,16%,47%)] focus:outline-none focus:ring-2 focus:ring-[hsl(217,91%,60%)] py-3.5"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 md:hidden text-[hsl(215,16%,47%)]"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Filters + Results */}
        <div className="container mx-auto px-4 py-8 lg:py-14  dark:bg-black rounded-lg">
          {/* Filter bar */}
          <div className={`${showFilters ? "block" : "hidden"} md:block mb-6`}>
            <div className="flex flex-wrap gap-3 items-center max-w-7xl mx-auto">
              <NativeSelect value={nichoFilter} onChange={setNichoFilter} options={nichos} label="Nicho" />
              <NativeSelect
                value={seguidoresFilter} onChange={setSeguidoresFilter} options={seguidoresRanges} label="Seguidores"
                icon={<Users className="h-3.5 w-3.5 text-[hsl(215,16%,47%)]" />}
              />
              <NativeSelect
                value={localFilter} onChange={setLocalFilter} options={localizacoes} label="Localização" 
                icon={<MapPin className="h-3.5 w-3.5 text-[hsl(215,16%,47%)]" />}
              />
              <NativeSelect
                value={precoFilter} onChange={setPrecoFilter} options={precoRanges} label="Preço"
                icon={<TrendingUp className="h-3.5 w-3.5 text-[hsl(215,16%,47%)]" />}
              />

              <div className="ml-auto flex items-center gap-3">
                {activeFilters.length > 0 && (
                  <button
                    className="flex items-center gap-1.5 text-sm text-[hsl(215,16%,47%)] hover:text-[hsl(0,84%,60%)] transition-colors"
                    onClick={clearFilters}
                  >
                    <X className="h-3.5 w-3.5" /> Limpar filtros
                  </button>
                )}
                <NativeSelect value={sortBy} onChange={setSortBy} options={["relevantes", "populares", "baratos", "engajamento"]} label="Ordenar" />
              </div>
            </div>
          </div>

          {/* Active filter badges */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {activeFilters.map(f => (
                <span key={f} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium" >
                  {f}
                </span>
              ))} 

            </div>
          )}
        {/* Results count */}
          <p className="text-sm mb-6 mx-auto max-w-7xl" style={{ color: "hsl(215,16%,47%)" }}>
            {filtered.length} influencer{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </p>
         
          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-14 dark:bg-black/50 rounded-lg">
              <Search className="h-12 w-12 mx-auto mb-4" style={{ color: "hsl(215,16%,70%)" }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>Nenhum influencer encontrado</h3>
              <p className="mb-4" style={{ color: "hsl(215,16%,47%)" }}>Tente ajustar os filtros ou a pesquisa</p>
              <Button variant="outline" onClick={clearFilters}>Limpar filtros</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  max-w-7xl px-4 mx-auto gap-6  rounded-lg p-4">
              {filtered.map((inf, idx) => (
                <FadeInCard key={inf.name} delay={idx * 80}>
                  <div className="group rounded-xl overflow-hidden  dark:bg-[hsl(222,84%,8%)] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[hsl(214,32%,91%)] dark:border-[hsl(222,40%,18%)]">
                    {/* Image - no bg overlay on card */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        fill
                        src={inf.img}
                        alt={inf.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)" }} />

                    


                      {/* Name overlay */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="font-bold text-white text-lg leading-tight">{inf.name}</h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <MapPin className="h-3 w-3 text-white/80" />
                          <span className="text-xs text-white/80">{inf.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: "hsl(217,91%,95%)", color: "hsl(217,91%,45%)" }}>
                          {inf.niche}
                        </span>
                      
                      </div>

                      {/* Stats row - clean, no bg */}
                      <div className="grid grid-cols-3 gap-2 text-center py-2 border-t border-b" style={{ borderColor: "hsl(214,32%,93%)" }}>
                        <div>
                          <p className="text-[10px] uppercase tracking-wide" style={{ color: "hsl(215,16%,57%)" }}>Seguidores</p>
                          <p className="text-sm font-bold" style={{ color: "hsl(222,47%,11%)" }}>{formatFollowers(inf.followers)}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wide" style={{ color: "hsl(215,16%,57%)" }}>Engajamento</p>
                          <p className="text-sm font-bold" style={{ color: "hsl(222,47%,11%)" }}>{inf.engagement}%</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wide" style={{ color: "hsl(215,16%,57%)" }}>Campanhas</p>
                          <p className="text-sm font-bold" style={{ color: "hsl(222,47%,11%)" }}>{inf.campaigns}</p>
                        </div>
                      </div>

                      <button
                        className="w-full flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-lg text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                        style={{ background: "linear-gradient(135deg, hsl(217,91%,50%) 0%, hsl(217,91%,60%) 100%)" }}
                      >
                        <Eye className="h-4 w-4" />
                        Ver Perfil
                      </button>
                    </div>
                  </div>
                </FadeInCard>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EncontrarInfluencer;
