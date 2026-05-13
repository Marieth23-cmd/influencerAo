import { TrendingUp, TrendingDown, Megaphone, Users, Eye, DollarSign, Star } from "lucide-react";

const stats = [
  { label: "Campanhas Activas", value: "12", change: "+3", up: true, icon: Megaphone, color: "blue" },
  { label: "Influenciadores", value: "48", change: "+8", up: true, icon: Users, color: "indigo" },
  { label: "Alcance Total", value: "2.4M", change: "+18%", up: true, icon: Eye, color: "sky" },
  { label: "Investimento", value: "Kz 4.2M", change: "+12%", up: true, icon: DollarSign, color: "green" },
  { label: "ROI Médio", value: "3.8x", change: "-0.2", up: false, icon: Star, color: "amber" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  indigo: "bg-indigo-50 text-indigo-600",
  sky: "bg-sky-50 text-sky-600",
  green: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
};

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.label}
            className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md hover:border-slate-300 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${colorMap[s.color]}`}>
                <Icon className="h-[18px] w-[18px]" />
              </div>
              <span
                className={`flex items-center gap-0.5 text-xs font-semibold ${s.up ? "text-emerald-600" : "text-red-500"}`}
              >
                {s.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {s.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-slate-900 leading-none mb-1">{s.value}</p>
            <p className="text-xs text-slate-500">{s.label}</p>
          </div>
        );
      })}
    </div>
  );
}
