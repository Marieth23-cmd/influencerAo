import { Megaphone, Users, MessageCircle, Star } from "lucide-react";
import { company } from "./data";

export default function Stats() {
  const items = [
    { label: "Campanhas concluídas", value: company.stats.campaigns, icon: Megaphone },
    { label: "Influencers contratados", value: company.stats.influencers, icon: Users },
    { label: "Taxa de resposta", value: `${company.stats.responseRate}%`, icon: MessageCircle },
    { label: "Avaliações recebidas", value: company.stats.reviews, icon: Star },
  ];

  return (
    <section>
      <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Estatísticas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-sm transition">
              <div className="h-9 w-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Icon className="h-[18px] w-[18px]" />
              </div>
              <p className="text-2xl font-bold text-slate-900 leading-none">{s.value}</p>
              <p className="text-xs text-slate-500 mt-1.5">{s.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
