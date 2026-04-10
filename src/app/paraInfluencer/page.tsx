import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles, TrendingUp, DollarSign, Eye, CheckCircle2, Users, BarChart3,
  Heart, Camera,
} from "lucide-react";
import Image from "next/image";
import FaqI from "../Components/FaqI";


const stats = [
  { value: "500+",   label: "Criadores Activos" },
  { value: "1.200+", label: "Campanhas Realizadas" },
  { value: "150+",   label: "Marcas Parceiras" },
  { value: "95%",    label: "Repetem Colaboração" },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Monetize o seu Conteúdo",
    description: "Propostas de marcas que combinam com o seu estilo. Ganhe fazendo o que ama.",
  },
  {
    icon: Eye,
    title: "Visibilidade Garantida",
    description: "O seu perfil é visto por centenas de empresas à procura de criadores como você.",
  },
  {
    icon: TrendingUp,
    title: "Cresça a sua Audiência",
    description: "Campanhas com marcas ajudam a expandir o seu alcance e conquistar novos seguidores.",
  },
  {
    icon: Sparkles,
    title: "Portfólio Profissional",
    description: "Perfil digital completo com métricas verificadas e histórico de campanhas.",
  },
];

const steps = [
  {
    number: "01",
    title: "Crie o seu Perfil",
    description: "Preencha as suas informações, nicho, redes sociais e mostre o seu melhor conteúdo.",
  },
  {
    number: "02",
    title: "Seja Descoberto",
    description: "Empresas encontram o seu perfil através dos nossos filtros de pesquisa avançados.",
  },
  {
    number: "03",
    title: "Receba Propostas",
    description: "Marcas enviam convites para campanhas directamente na plataforma.",
  },
  {
    number: "04",
    title: "Crie e Ganhe",
    description: "Produza conteúdo autêntico, entregue resultados e receba o seu pagamento.",
  },
];

const niches = [
  "Moda", "Beleza", "Fitness", "Gastronomia", "Tech", "Viagens",
  "Música", "Kuduro", "Lifestyle", "Educação", "Humor", "Gaming",
];

const ParaInfluenciadores = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[420px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-influencer.jpg"
            alt="Criadora de conteúdo angolana"
            className="h-full w-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="container relative mx-auto px-4 py-20 md:py-28 max-w-7xl text-white">
          <div className="max-w-xl space-y-5">
            <Badge className="bg-blue-600 border-0 text-xs px-3 py-1">
              Para Influenciadores
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Transforme a sua influência em oportunidades reais
            </h1>
            <p className="text-base md:text-lg text-white/75 leading-relaxed">
              Conecte-se com marcas angolanas e construa uma carreira sólida como criador digital.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              
                
              
               
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b dark:border-gray-600 max-w-7xl mx-auto px-4">
        <div className="container mx-auto px-4 py-8 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Porque os criadores escolhem o InfluencerAo
            </h2>
            <p className="text-muted-foreground mt-3 text-base md:text-lg">
              Tudo o que precisa para transformar a sua paixão numa carreira profissional.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <Card
                key={b.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border dark:border-white/30"
              >
                <CardContent className="p-5 space-y-3">
                  <div className="h-11 w-11 rounded-xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <b.icon className="h-5 w-5 " />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Niches */}
      <section className="py-8 md:py-12 bg-muted/40 max-w-7xl mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Qualquer nicho, há espaço para si
            </h2>
            <p className="text-muted-foreground mt-3 text-base md:text-lg">
              De moda a gaming, as marcas procuram criadores em todas as áreas.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {niches.map((n) => (
              <Badge
                key={n}
                variant="outline"
                className="text-sm px-4 py-2 rounded-full border dark:border-white/30 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors cursor-pointer"
              >
                {n}
              </Badge>
            ))}
          </div>
        </div>
      </section>

     

            {/* How it Works */}
<section className="relative py-12 md:py-16 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/images/imageHeroinfluao.jpg"
      alt="Como funciona"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 text-white">

    {/* Header */}
    <div className="text-center max-w-xl mx-auto mb-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
        4 passos para começar a ganhar
      </h2>
      <p className="mt-3 text-base md:text-lg text-gray-200">
        Em poucos minutos o seu perfil fica visível para marcas prontas para colaborar.
      </p>
    </div>

    {/* Steps */}
    <div className="flex flex-col lg:flex-row gap-6">

      {steps.map((step, i) => (
        <div key={step.number} className="relative flex lg:flex-col items-start lg:items-center gap-4 lg:text-center">

          {/* Linha no desktop */}
          {i < steps.length - 1 && (
            <div className="hidden lg:block absolute top-7 left-[60%] w-[80%] h-px bg-white/20" />
          )}

          {/* Número */}
          <div className="h-12 w-12 shrink-0 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-sm font-semibold text-blue-300">
            {step.number}
          </div>

          {/* Texto */}
          <div className="space-y-1">
            <h3 className="text-base md:text-lg font-semibold">
              {step.title}
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              {step.description}
            </p>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>




      {/* Features */}
      <section className="py-8 md:py-14 bg-muted/40 max-w-7xl mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                Ferramentas para impulsionar a sua carreira
              </h2>
              <div className="space-y-3">
                {[
                  "Perfil profissional com métricas verificadas",
                  "Inbox de propostas de marcas e empresas",
                  "Dashboard com estatísticas de performance",
                  "Pagamentos seguros e transparentes",
                  "Suporte dedicado para criadores",
                  "Comunidade exclusiva de influenciadores angolanos",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5  mt-0.5 shrink-0" />
                    <p className="text-sm md:text-base text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Camera,   label: "Conteúdos Criados",  value: "12K+"  },
                { icon: Heart,    label: "Engajamento Médio",  value: "8.2%"  },
                { icon: Users,    label: "Marcas Conectadas",  value: "150+"  },
                { icon: BarChart3, label: "Crescimento Médio", value: "+45%"  },
              ].map((item) => (
                <Card
                  key={item.label}
                  className="dark:border-white/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-5 text-center space-y-2">
                    <item.icon className="h-7 w-7  mx-auto" />
                    <p className="text-xl md:text-2xl font-bold text-foreground">{item.value}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> 
       
      <FaqI />

    </main>


     {/* CTA */}
    <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left">
          A sua próxima campanha está à espera
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
          
           <a href="#"
            className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium bg-white text-blue-600 rounded-lg text-center hover:bg-blue-50 transition-colors"
          >
            Criar Conta
          </a>
          
           <a href="#"
            className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium border border-white rounded-lg text-center hover:bg-white/10 transition-colors"
          >
            Explorar Marcas
          </a>
        </div>
      </div>

     
    </section>

    <Footer />
  </div>
);

export default ParaInfluenciadores;