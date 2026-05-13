import { useState } from "react";
import { MoreVertical, Calendar, Users, TrendingUp } from "lucide-react";

type Status = "activas" | "pendentes" | "concluidas";

interface Campaign {
  id: string;
  title: string;
  brand: string;
  influencers: number;
  budget: string;
  progress: number;
  deadline: string;
  status: Status;
  niche: string;
}

const campaigns: Campaign[] = [
  { id: "1", title: "Lançamento Net Móvel 5G", brand: "Unitel", influencers: 8, budget: "Kz 1.2M", progress: 72, deadline: "20 Mai", status: "activas", niche: "Tecnologia" },
  { id: "2", title: "Campanha Verão Cuca", brand: "Cuca", influencers: 12, budget: "Kz 850K", progress: 45, deadline: "28 Mai", status: "activas", niche: "Lifestyle" },
  { id: "3", title: "Black Friday Jumbo", brand: "Jumbo", influencers: 6, budget: "Kz 600K", progress: 90, deadline: "15 Mai", status: "activas", niche: "Retail" },
  { id: "4", title: "Nova Conta BAI Direto", brand: "BAI", influencers: 5, budget: "Kz 1.5M", progress: 0, deadline: "10 Jun", status: "pendentes", niche: "Finanças" },
  { id: "5", title: "Festival Luanda Vibes", brand: "TPA", influencers: 15, budget: "Kz 2M", progress: 0, deadline: "25 Jun", status: "pendentes", niche: "Entretenimento" },
  { id: "6", title: "Promoção Páscoa", brand: "Shoprite", influencers: 4, budget: "Kz 320K", progress: 100, deadline: "Concluído", status: "concluidas", niche: "Retail" },
  { id: "7", title: "App Movicel Recarga", brand: "Movicel", influencers: 7, budget: "Kz 540K", progress: 100, deadline: "Concluído", status: "concluidas", niche: "Tecnologia" },
];

const tabs: { id: Status; label: string }[] = [
  { id: "activas", label: "Activas" },
  { id: "pendentes", label: "Pendentes" },
  { id: "concluidas", label: "Concluídas" },
];

export default function CampaignsManager() {
  const [tab, setTab] = useState<Status>("activas");
  const filtered = campaigns.filter((c) => c.status === tab);
  const counts = {
    activas: campaigns.filter((c) => c.status === "activas").length,
    pendentes: campaigns.filter((c) => c.status === "pendentes").length,
    concluidas: campaigns.filter((c) => c.status === "concluidas").length,
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <div>
          <h2 className="text-base font-bold text-slate-900">Gestão de Campanhas</h2>
          <p className="text-xs text-slate-500">Acompanhe o estado de todas as suas campanhas</p>
        </div>
      </div>

      <div className="flex border-b border-slate-100 px-5 gap-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`relative py-3 px-4 text-sm font-medium transition-colors ${
              tab === t.id ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {t.label}
            <span className="ml-2 text-[11px] bg-slate-100 text-slate-600 rounded-full px-1.5 py-0.5">
              {counts[t.id]}
            </span>
            {tab === t.id && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full" />}
          </button>
        ))}
      </div>

      <div className="divide-y divide-slate-100">
        {filtered.map((c) => (
          <div key={c.id} className="p-5 hover:bg-slate-50 transition-colors">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-slate-900 truncate">{c.title}</h3>
                  <span className="text-[10px] font-bold bg-blue-50 text-blue-700 rounded-full px-2 py-0.5 shrink-0">
                    {c.niche}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{c.brand}</p>
              </div>
              <button className="text-slate-400 hover:text-slate-700">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Users className="h-3.5 w-3.5 text-slate-400" />
                {c.influencers} influencers
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <TrendingUp className="h-3.5 w-3.5 text-slate-400" />
                {c.budget}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                {c.deadline}
              </div>
            </div>

            {c.status !== "pendentes" && (
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                  <span>Progresso</span>
                  <span className="font-semibold text-slate-700">{c.progress}%</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      c.progress === 100 ? "bg-emerald-500" : "bg-blue-600"
                    }`}
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
              </div>
            )}
            {c.status === "pendentes" && (
              <div className="flex gap-2 mt-2">
                <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">Aprovar</button>
                <span className="text-slate-300">·</span>
                <button className="text-xs font-semibold text-slate-500 hover:text-red-500">Rejeitar</button>
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-slate-500">Nenhuma campanha nesta categoria.</div>
        )}
      </div>
    </div>
  );
}
