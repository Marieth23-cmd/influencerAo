import React, { useState } from "react";
import { Activity, Clock, CheckCircle2, Filter, MoreVertical } from "lucide-react";

/* =============== CAMPANHAS =============== */
export default function CampanhasTab() {
  type Status = "activas" | "pendentes" | "concluidas";
  const [tab, setTab] = useState<Status>("activas");

  const data: Record<
    Status,
    { title: string; brand: string; budget: string; deadline: string; progress?: number }[]
  > = {
    activas: [
      { title: "Verão Unitel 2026", brand: "Unitel Angola", budget: "Kz 450.000", deadline: "15 dias", progress: 65 },
      { title: "Lançamento Cuca Light", brand: "Refriango", budget: "Kz 320.000", deadline: "8 dias", progress: 30 },
      { title: "Cartão BAI Kazukuta", brand: "BAI", budget: "Kz 280.000", deadline: "20 dias", progress: 45 },
    ],
    pendentes: [
      { title: "Black Friday Score", brand: "Score Angola", budget: "Kz 180.000", deadline: "Aguarda aprovação" },
      { title: "Campanha TPA Notícias", brand: "TPA", budget: "Kz 200.000", deadline: "Em análise" },
    ],
    concluidas: [
      { title: "Natal Shoprite 2025", brand: "Shoprite", budget: "Kz 350.000", deadline: "Concluída" },
      { title: "Coca-Cola Kizomba Fest", brand: "Coca-Cola", budget: "Kz 500.000", deadline: "Concluída" },
      { title: "Lançamento App Unitel", brand: "Unitel", budget: "Kz 220.000", deadline: "Concluída" },
    ],
  };

  const tabs: { key: Status; label: string; count: number; icon: React.ElementType }[] = [
    { key: "activas", label: "Activas", count: data.activas.length, icon: Activity },
    { key: "pendentes", label: "Pendentes", count: data.pendentes.length, icon: Clock },
    { key: "concluidas", label: "Concluídas", count: data.concluidas.length, icon: CheckCircle2 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between flex-wrap gap-2">
        <div>
          <h1 className="text-2xl font-bold">Campanhas</h1>
          <p className="text-sm text-slate-500">
            Acompanha o estado de todas as tuas campanhas.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50">
          <Filter className="h-4 w-4" /> Filtrar
        </button>
      </div>

      <div className="flex gap-1 border-b border-slate-200 overflow-x-auto">
        {tabs.map((t) => {
          const Icon = t.icon;
          const active = tab === t.key;

          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors whitespace-nowrap ${
                active
                  ? "border-blue-600 text-blue-700"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Icon className="h-4 w-4" />
              {t.label}
              <span
                className={`inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full text-[10px] font-bold ${
                  active ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                }`}
              >
                {t.count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data[tab].map((c, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-xs text-blue-600 font-semibold">{c.brand}</div>
                <h3 className="font-semibold mt-0.5">{c.title}</h3>
              </div>

              <button className="rounded-lg p-1.5 hover:bg-slate-100">
                <MoreVertical className="h-4 w-4 text-slate-400" />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div>
                <div className="text-[11px] text-slate-500">Orçamento</div>
                <div className="text-base font-bold text-blue-700">{c.budget}</div>
              </div>

              <div>
                <div className="text-[11px] text-slate-500">Prazo</div>
                <div className="text-sm font-medium text-slate-700">{c.deadline}</div>
              </div>
            </div>

            {c.progress !== undefined && (
              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                  <span>Progresso</span>
                  <span className="font-semibold text-slate-700">{c.progress}%</span>
                </div>

                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
              </div>
            )}

            <div className="mt-4 flex gap-2">
              <button className="flex-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 transition-colors">
                Ver detalhes
              </button>

              <button className="rounded-lg border border-slate-200 px-3 text-xs font-medium hover:bg-slate-50">
                Mensagem
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}