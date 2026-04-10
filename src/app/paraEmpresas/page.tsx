import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target, BarChart3, Users, Zap, CheckCircle2,
  TrendingUp, Shield, MessageSquare, 
} from "lucide-react";
import Image from "next/image";
import FaqE from "../Components/FaqE";

const stats = [
  { value: "500+", label: "Influenciadores Verificados" },
  { value: "2.5M+", label: "Alcance Total" },
  { value: "98%",   label: "Taxa de Satisfação" },
  { value: "150+",  label: "Marcas Parceiras" },
];

const benefits = [
  {
    icon: Target,
    title: "Segmentação por Nicho",
    description: "Influenciadores especializados no seu mercado — moda, tech, fitness e muito mais.",
  },
  {
    icon: BarChart3,
    title: "Métricas Transparentes",
    description: "Dados reais de engajamento e alcance antes de fechar qualquer parceria.",
  },
  {
    icon: Users,
    title: "Conexão Directa",
    description: "Sem intermediários. Negocie directamente e feche parcerias em minutos.",
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "Lance campanhas em minutos e acompanhe tudo em tempo real.",
  },
];

const ParaEmpresas = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[420px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/empresa-hero.jpg"
            alt="Equipa de negócios"
            className="h-full w-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="container relative mx-auto px-4 py-20 md:py-28 max-w-7xl text-white">
          <div className="max-w-xl space-y-5">
            <Badge className="bg-blue-600 border-0 text-xs px-3 py-1">Para Empresas</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Conecte a sua marca aos melhores criadores de Angola
            </h1>
            <p className="text-base md:text-lg text-white/75 leading-relaxed">
              Rede curada de influenciadores verificados. Campanhas com resultados mensuráveis.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b dark:border-gray-600 max-w-7xl mx-auto px-4">
        <div className="container mx-auto px-4 py-8 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-4xl font-semibold text-blue-600">{s.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 md:py-14 max-w-7xl mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold ">
              Porque as empresas escolhem o InfluencerAo
            </h2>
            <p className="text-muted-foreground mt-3 text-base md:text-lg">
              Ferramentas para maximizar o ROI das suas campanhas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <Card key={b.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border dark:border-white/30">
                <CardContent className="p-5 space-y-3">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 md:py-16 bg-muted/40 max-w-7xl mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                Tudo numa só plataforma
              </h2>
              <div className="space-y-3">
                {[
                  "Pesquisa por nicho, localização e alcance",
                  "Dashboard com métricas em tempo real",
                  "Sistema de mensagens integrado",
                  "Gestão de campanhas múltiplas",
                  "Relatórios de performance exportáveis",
                  "Suporte dedicado para empresas",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm md:text-base text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: TrendingUp,    label: "Crescimento",        value: "+340%" },
                { icon: Shield,        label: "Segurança",          value: "100%"  },
                { icon: MessageSquare, label: "Tempo de Resposta",  value: "<2h"   },
                { icon: Users,         label: "Taxa de Match",      value: "95%"   },
              ].map((item) => (
                <Card key={item.label} className=" dark:border-white/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-5 text-center space-y-2">
                    <item.icon className="h-7 w-7 text-primary mx-auto" />
                    <p className="text-xl md:text-2xl font-bold text-foreground">{item.value}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqE />
    </main>

    {/* CTA */}
    <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left">
          Pronto para transformar as suas parcerias?
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
          <a href="#" className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium bg-white text-blue-600 rounded-lg text-center hover:bg-blue-50 transition-colors">
            Criar Conta Empresarial
          </a>
          <a href="#" className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium border border-white rounded-lg text-center hover:bg-white/10 transition-colors">
            Explorar Influencers
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ParaEmpresas;