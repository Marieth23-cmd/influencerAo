"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import { Search, MapPin, Calendar, Briefcase,  X, Filter, Building2, Users, TrendingUp, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

/* ── Fade-in on scroll ── */
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}>
      {children}
    </div>
  );
};


const campanhas = [
  { id: 1, titulo: "Lançamento Nova Colecção Verão 2026", empresa: "Moda Luanda", logo: "ML", nicho: "Moda", orcamento: 500000, local: "Luanda", prazo: "30 Jun 2026", descricao: "Procuramos influenciadores de moda para promover a nova colecção de verão em Angola.", vagas: 5, candidaturas: 12, tipo: "Publicação + Stories", urgente: true },
  { id: 2, titulo: "Review de Smartphone Galaxy S26", empresa: "TechZone AO", logo: "TZ", nicho: "Tecnologia", orcamento: 300000, local: "Luanda", prazo: "15 Mai 2026", descricao: "Queremos criadores de conteúdo tech para fazer unboxing e review detalhado.", vagas: 3, candidaturas: 8, tipo: "Vídeo YouTube", urgente: false },
  { id: 3, titulo: "Campanha Fitness Challenge 30 Dias", empresa: "GymPro Angola", logo: "GP", nicho: "Fitness", orcamento: 200000, local: "Benguela", prazo: "01 Jul 2026", descricao: "Desafio fitness de 30 dias com publicações diárias no Instagram.", vagas: 10, candidaturas: 25, tipo: "Reels + Stories", urgente: true },
  { id: 4, titulo: "Promoção Restaurante Gourmet", empresa: "Sabores de Angola", logo: "SA", nicho: "Gastronomia", orcamento: 150000, local: "Luanda", prazo: "20 Mai 2026", descricao: "Convidar influenciadores para experiência gastronómica e criação de conteúdo.", vagas: 4, candidaturas: 6, tipo: "Publicação + Reels", urgente: false },
  { id: 5, titulo: "Tour Turístico pelo Namibe", empresa: "Angola Travel", logo: "AT", nicho: "Viagem", orcamento: 800000, local: "Namibe", prazo: "10 Ago 2026", descricao: "Viagem patrocinada ao Namibe com produção de conteúdo para redes sociais.", vagas: 2, candidaturas: 18, tipo: "Vlog + Stories", urgente: false },
  { id: 6, titulo: "Lançamento App de Pagamentos", empresa: "PayKwanza", logo: "PK", nicho: "Tecnologia", orcamento: 450000, local: "Nacional", prazo: "25 Mai 2026", descricao: "Promover novo app de pagamentos digitais em Angola com tutoriais.", vagas: 8, candidaturas: 14, tipo: "Vídeo + Stories", urgente: true },
  { id: 7, titulo: "Campanha de Beleza Natural", empresa: "Beleza Negra AO", logo: "BN", nicho: "Beleza", orcamento: 250000, local: "Luanda", prazo: "15 Jun 2026", descricao: "Linha de produtos de beleza natural. Precisamos de embaixadoras.", vagas: 6, candidaturas: 20, tipo: "Reels + Publicação", urgente: false },
  { id: 8, titulo: "Torneio E-Sports Mobile", empresa: "GamersAO", logo: "GA", nicho: "Games", orcamento: 350000, local: "Nacional", prazo: "05 Jul 2026", descricao: "Cobertura do maior torneio de e-sports mobile de Angola.", vagas: 4, candidaturas: 9, tipo: "Streaming + Clips", urgente: false },
  { id: 9, titulo: "Festival de Kuduro 2026", empresa: "Kuduro Nation", logo: "KN", nicho: "Kuduro", orcamento: 600000, local: "Luanda", prazo: "20 Ago 2026", descricao: "Cobertura completa do festival de kuduro com conteúdo exclusivo.", vagas: 6, candidaturas: 30, tipo: "Vlog + Reels + Stories", urgente: true },
  { id: 10, titulo: "Imobiliária Premium Luanda", empresa: "Casa Nova AO", logo: "CN", nicho: "Imobiliário", orcamento: 400000, local: "Luanda", prazo: "30 Jun 2026", descricao: "Apresentar imóveis de luxo em Luanda através de tours virtuais.", vagas: 3, candidaturas: 5, tipo: "Vídeo + Stories", urgente: false },
  { id: 11, titulo: "Campanha Educação Online", empresa: "EduTech AO", logo: "ET", nicho: "Educação", orcamento: 180000, local: "Nacional", prazo: "10 Jun 2026", descricao: "Promover plataforma de cursos online para jovens angolanos.", vagas: 8, candidaturas: 11, tipo: "Vídeo + Publicação", urgente: false },
  { id: 12, titulo: "Marca de Roupa Africana", empresa: "AfroStyle", logo: "AS", nicho: "Moda Africana", orcamento: 320000, local: "Luanda", prazo: "25 Jul 2026", descricao: "Lançamento de linha de roupa com estampas africanas contemporâneas.", vagas: 5, candidaturas: 16, tipo: "Photoshoot + Reels", urgente: true },
];

const nichos = ["Todos", "Moda", "Tecnologia", "Fitness", "Gastronomia", "Viagem", "Beleza", "Games", "Kuduro", "Moda Africana", "Educação", "Imobiliário", "Música", "Comédia", "Saúde", "Negócios"];
const orcamentoRanges = ["Todos", "Até 200K Kz", "200K - 500K Kz", "500K+ Kz"];
const localizacoes = ["Todas", "Luanda", "Benguela", "Huambo", "Cabinda", "Namibe", "Nacional"];
const ordenacao = ["Mais Recentes", "Maior Orçamento", "Menor Orçamento", "Mais Candidaturas", "Urgentes"];

const formatKz = (n: number) => new Intl.NumberFormat("pt-AO").format(n) + " Kz";

const Campanhas = () => {
  const [query, setQuery] = useState("");
  const [nicho, setNicho] = useState("Todos");
  const [orcamento, setOrcamento] = useState("Todos");
  const [local, setLocal] = useState("Todas");
  const [ordem, setOrdem] = useState("Mais Recentes");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCampanha, setSelectedCampanha] = useState<number | null>(null);

  const filtered = useMemo(() => {
    let list = [...campanhas];

    if (query) {
      const q = query.toLowerCase();
      list = list.filter(c => c.titulo.toLowerCase().includes(q) || c.empresa.toLowerCase().includes(q) || c.nicho.toLowerCase().includes(q));
    }
    if (nicho !== "Todos") list = list.filter(c => c.nicho === nicho);
    if (local !== "Todas") list = list.filter(c => c.local === local);
    if (orcamento !== "Todos") {
      if (orcamento === "Até 200K Kz") list = list.filter(c => c.orcamento <= 200000);
      else if (orcamento === "200K - 500K Kz") list = list.filter(c => c.orcamento > 200000 && c.orcamento <= 500000);
      else list = list.filter(c => c.orcamento > 500000);
    }

    switch (ordem) {
      case "Maior Orçamento": list.sort((a, b) => b.orcamento - a.orcamento); break;
      case "Menor Orçamento": list.sort((a, b) => a.orcamento - b.orcamento); break;
      case "Mais Candidaturas": list.sort((a, b) => b.candidaturas - a.candidaturas); break;
      case "Urgentes": list.sort((a, b) => (b.urgente ? 1 : 0) - (a.urgente ? 1 : 0)); break;
    }

    return list;
  }, [query, nicho, orcamento, local, ordem]);

  const activeFilters = [nicho !== "Todos" ? nicho : null, orcamento !== "Todos" ? orcamento : null, local !== "Todas" ? local : null].filter(Boolean);

  return (
    <div className="min-h-screen bg-white dark:bg-[hsl(222,84%,5%)] ">
      <Navbar />
        <main className="flex-1 max-w-7xl mx-auto px-4">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[hsl(214,32%,91%)] dark:border-[hsl(217,33%,18%)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/5 via-transparent to-[#2563eb]/3" />
        <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-[#2563eb]/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-10 w-56 h-56 rounded-full bg-[#2563eb]/3 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="container mx-auto px-4 py-8 md:py-14 relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-3">
             
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[hsl(222,47%,11%)] dark:text-[hsl(210,40%,98%)] mb-3">
              Encontre a campanha <span className="text-blue-600">perfeita</span>
            </h1>
            <p className="text-[hsl(215,16%,47%)] dark:text-[hsl(215,20%,65%)] text-lg max-w-2xl mb-8">
              Conecte-se com marcas e empresas angolanas. Candidate-se a campanhas que combinam com o seu perfil.
            </p>
          </FadeIn>

          {/* Search bar */}
          <FadeIn delay={100}>
            <div className="flex flex-col sm:flex-row gap-3 max-w-3xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[hsl(215,16%,47%)]" />
                <Input
                  placeholder="Buscar campanhas por nome, empresa ou nicho..."
                  className="pl-12 h-12 text-base bg-white dark:bg-[hsl(222,84%,8%)] border-[hsl(214,32%,91%)] dark:border-[hsl(217,33%,18%)] rounded-xl shadow-sm focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb]"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                className="h-12 px-6 gap-2 bg-blue-600 hover:bg-[#1d4ed8] text-white rounded-xl shadow-sm"
              >
                <Filter className="h-4 w-4" />
                Filtros
                {activeFilters.length > 0 && (
                  <span className="ml-1 bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">{activeFilters.length}</span>
                )}
              </Button>
            </div>
          </FadeIn>

          {/* Active filters */}
          {activeFilters.length > 0 && (
            <FadeIn delay={150}>
              <div className="flex flex-wrap gap-2 mt-4 max-w-3xl">
                {activeFilters.map((f) => (
                  <span key={f} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm bg-[#2563eb]/10 text-blue-600 font-medium">
                    {f}
                    <button onClick={() => {
                      if (f === nicho) setNicho("Todos");
                      if (f === orcamento) setOrcamento("Todos");
                      if (f === local) setLocal("Todas");
                    }}>
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </span>
                ))}
                <button onClick={() => { setNicho("Todos"); setOrcamento("Todos"); setLocal("Todas"); }} className="text-sm text-[hsl(215,16%,47%)] hover:text-[#2563eb] transition-colors">
                  Limpar tudo
                </button>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Sidebar filters (desktop) / Collapsible (mobile) */}
          <aside className={`lg:w-72 shrink-0 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
            <FadeIn>
              <div className="bg-white dark:bg-[hsl(222,84%,8%)] rounded-2xl border border-[hsl(214,32%,91%)] dark:border-[hsl(217,33%,18%)] p-5 space-y-5 shadow-sm">
                <h3 className="font-semibold text-[hsl(222,47%,11%)] dark:text-[hsl(210,40%,98%)] flex items-center gap-2">
                  <Filter className="h-4 w-4 text-[#2563eb]" />
                  Filtros
                </h3>

                {/* Nicho */}
                <div>
                  <label className="text-sm font-medium text-[hsl(215,16%,47%)] dark:text-[hsl(215,20%,65%)] mb-2 block">Nicho</label>
                  <div className="flex flex-wrap gap-1.5">
                    {nichos.map((n) => (
                      <button
                        key={n}
                        onClick={() => setNicho(n)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                          nicho === n
                            ? "bg-[#2563eb] text-white shadow-sm"
                            : "bg-[hsl(210,40%,96%)] dark:bg-[hsl(217,33%,15%)] text-[hsl(222,47%,11%)] dark:text-[hsl(210,40%,90%)] hover:bg-[#2563eb]/10"
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Orçamento */}
                <div>
                  <label className="text-sm font-medium text-[hsl(215,16%,47%)] dark:text-[hsl(215,20%,65%)] mb-2 block">Orçamento</label>
                  <div className="space-y-1.5">
                    {orcamentoRanges.map((o) => (
                      <button
                        key={o}
                        onClick={() => setOrcamento(o)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          orcamento === o
                            ? "bg-[#2563eb]/10 text-blue-600 font-medium"
                            : "text-[hsl(222,47%,11%)] dark:text-[hsl(210,40%,90%)] hover:bg-[hsl(210,40%,96%)] dark:hover:bg-[hsl(217,33%,15%)]"
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Localização */}
                <div>
                  <label className="text-sm font-medium text-[hsl(215,16%,47%)] dark:text-[hsl(215,20%,65%)] mb-2 block">Localização</label>
                  <div className="space-y-1.5">
                    {localizacoes.map((l) => (
                      <button
                        key={l}
                        onClick={() => setLocal(l)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
                          local === l
                            ? "bg-[#2563eb]/10 text-blue-600 font-medium"
                            : "text-[hsl(222,47%,11%)] dark:text-[hsl(210,40%,90%)] hover:bg-[hsl(210,40%,96%)] dark:hover:bg-[hsl(217,33%,15%)]"
                        }`}
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <p className="text-sm text-[hsl(215,16%,47%)] dark:text-[hsl(215,20%,65%)]">
                <span className="font-semibold text-[hsl(222,47%,11%)] dark:text-[hsl(210,40%,98%)]">{filtered.length}</span> campanhas encontradas
              </p>
              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4 text-[hsl(215,16%,47%)]" />
                <select
                  value={ordem}
                  onChange={(e) => setOrdem(e.target.value)}
                  className="text-sm bg-white dark:bg-[hsl(222,84%,8%)] border border-[hsl(214,32%,91%)] dark:border-[hsl(217,33%,18%)] rounded-lg px-3 py-2 text-[hsl(222,47%,11%)] dark:text-[hsl(210,40%,98%)] focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] outline-none"
                >
                  {ordenacao.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>

            {/* Campaign cards */}
            <div className="space-y-4">
              {filtered.map((c, i) => (
                <FadeIn key={c.id} delay={i * 60}>
                  <div
                    className={`group bg-white dark:bg-[hsl(222,84%,8%)] rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      selectedCampanha === c.id
                        ? "border-[#2563eb] shadow-lg shadow-[#2563eb]/10 ring-1 ring-[#2563eb]/20"
                        : "border-[hsl(214,32%,91%)] dark:border-[hsl(217,33%,18%)] hover:border-[#2563eb]/40 hover:shadow-md"
                    }`}
                    onClick={() => setSelectedCampanha(selectedCampanha === c.id ? null : c.id)}
                  >
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        {/* Company logo */}
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">
                          {c.logo}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3 flex-wrap">
                            <div>
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <h3 className="text-lg font-semibold text-[hsl(222,47%,11%)] dark:text-[hsl(210,40%,98%)] group-hover:text-[#2563eb] transition-colors">
                                  {c.titulo}
                                </h3>
                                {c.urgente && (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400 uppercase tracking-wide">
                                    Urgente
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-[hsl(215,16%,47%)] dark:text-[hsl(215,20%,65%)] flex items-center gap-1.5">
                                <Building2 className="h-3.5 w-3.5" />
                                {c.empresa}
                              </p>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-xl font-bold text-[#2563eb]">{formatKz(c.orcamento)}</p>
                              <p className="text-xs text-[hsl(215,16%,47%)] dark:text-[hsl(215,20%,65%)]">orçamento</p>
                            </div>
                          </div>

                          {/* Meta */}
                          <div className="flex flex-wrap gap-3 mt-3">
                            <span className="inline-flex items-center gap-1.5 text-xs text-[hsl(215,16%,47%)] dark:text-[hsl(215,20%,65%)]">
                              <MapPin className="h-3.5 w-3.5" /> {c.local}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs text-[hsl(215,16%,47%)] dark:text-[hsl(215,20%,65%)]">
                              <Calendar className="h-3.5 w-3.5" /> {c.prazo}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs text-[hsl(215,16%,47%)] dark:text-[hsl(215,20%,65%)]">
                              <Users className="h-3.5 w-3.5" /> {c.vagas} vagas
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs text-[hsl(215,16%,47%)] dark:text-[hsl(215,20%,65%)]">
                              <TrendingUp className="h-3.5 w-3.5" /> {c.candidaturas} candidaturas
                            </span>
                          </div>

                          <div className="flex items-center gap-2 mt-3">
                            <Badge className="bg-[#2563eb]/10 text-[#2563eb] hover:bg-[#2563eb]/15 border-none text-xs">{c.nicho}</Badge>
                            <Badge className="bg-[hsl(210,40%,96%)] dark:bg-[hsl(217,33%,15%)] text-[hsl(215,16%,47%)] dark:text-[hsl(215,20%,65%)] hover:bg-[hsl(210,40%,93%)] border-none text-xs">{c.tipo}</Badge>
                          </div>

                          {/* Expanded details */}
                          {selectedCampanha === c.id && (
                            <div className="mt-4 pt-4 border-t border-[hsl(214,32%,91%)] dark:border-[hsl(217,33%,18%)]" style={{ animation: "fadeSlideIn 0.3s ease forwards" }}>
                              <p className="text-sm text-[hsl(222,47%,11%)] dark:text-[hsl(210,40%,90%)] leading-relaxed mb-4">{c.descricao}</p>
                              <div className="flex flex-wrap gap-3">
                                <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all">
                                  Candidatar-se
                                </Button>
                                <Button variant="outline" className="rounded-xl border-[hsl(214,32%,91%)] dark:border-[hsl(217,33%,18%)] text-[hsl(222,47%,11%)] dark:text-[hsl(210,40%,98%)] hover:border-[#2563eb] hover:text-[#2563eb]">
                                  Ver Detalhes
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}

              {filtered.length === 0 && (
                <div className="text-center py-16">
                  <Briefcase className="h-12 w-12 text-[hsl(215,16%,47%)] mx-auto mb-4 opacity-40" />
                  <p className="text-lg font-medium text-[hsl(222,47%,11%)] dark:text-[hsl(210,40%,98%)]">Nenhuma campanha encontrada</p>
                  <p className="text-sm text-[hsl(215,16%,47%)] dark:text-[hsl(215,20%,65%)] mt-1">Tente ajustar os filtros ou a pesquisa</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </main>
      <Footer />
    </div>
  );
};

export default Campanhas;
