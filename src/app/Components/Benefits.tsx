import { Target, Eye, Link2, TrendingUp } from "lucide-react";


const Benefits = () => {
  
  const benefits = [
    { icon: Target, title: "Segmentação por Nicho", desc: "Encontre influenciadores que correspondem exatamente ao seu público e segmento de mercado", gradient: "from-primary to-primary/60" },
    { icon: Eye, title: "Transparência", desc: "Acesse métricas reais e dados de desempenho antes de se comprometer", gradient: "from-accent to-accent/60" },
    { icon: Link2, title: "Conexão Direta", desc: "Comunique-se diretamente com criadores — sem intermediários, sem taxas extras", gradient: "from-primary to-accent" },
    { icon: TrendingUp, title: "Foco em Resultados", desc: "Acompanhe o ROI da campanha com análises e relatórios detalhados", gradient: "from-accent to-primary" },
  ];

  return (
    <section className="py-8 lg:py-14 bg-muted/30 relative overflow-hidden max-w-7xl mx-auto px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">Por Que Escolher a InfluConnect</h2>
          <p className="text-muted-foreground mt-3 text-lg">Construída para marketing orientado a resultados</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={b.title} className="card-3d group rounded-2xl bg-card border p-8 text-center relative overflow-hidden animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${b.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${b.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                <b.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground text-xl mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
