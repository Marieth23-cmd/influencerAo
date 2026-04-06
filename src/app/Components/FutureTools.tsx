import { BarChart3, LineChart, PieChart, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FutureTools = () => {
 
  return (
    <section className="py-24 bg-background relative overflow-hidden max-w-7xl mx-auto px-4">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-on-scroll-left">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 hover:bg-accent/30 text-sm px-4 py-1.5">Em Breve</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">Dashboard de Análises Avançadas</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Estamos construindo uma suíte poderosa de análises para que você possa medir o desempenho das campanhas, acompanhar o ROI e otimizar sua estratégia com influenciadores — tudo em um só lugar.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              {["Acompanhamento de campanhas em tempo real", "Insights de demografia do público", "Análises de ROI e conversão", "Benchmarking com concorrentes"].map((item) => (
                <li key={item} className="flex items-center gap-3 group">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Activity className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-on-scroll-right">
            <div className="perspective-1000">
              <div className="card-3d rounded-3xl border bg-card p-8 shadow-2xl space-y-6 gradient-border" style={{ transform: "rotateY(-3deg)" }}>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-foreground text-lg">Visão Geral da Campanha</p>
                  <Badge variant="outline" className="animate-pulse">Prévia</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: BarChart3, label: "Alcance", val: "2.4M", color: "from-primary to-primary/60" },
                    { icon: LineChart, label: "Engajamento", val: "8.2%", color: "from-accent to-accent/60" },
                    { icon: PieChart, label: "ROI", val: "340%", color: "from-primary to-accent" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-2xl bg-muted/50 p-5 text-center group hover:bg-muted transition-all duration-300 hover:shadow-lg">
                      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center mx-auto mb-3`}>
                        <m.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <p className="text-2xl font-bold text-foreground">{m.val}</p>
                      <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
                <div className="h-36 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 flex items-end justify-between px-6 pb-4 gap-2 overflow-hidden relative">
                  {[40, 60, 35, 80, 55, 90, 70, 95, 65, 85].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-primary/40 opacity-80" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureTools;
