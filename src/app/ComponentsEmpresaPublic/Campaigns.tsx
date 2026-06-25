"use client";
import { useState } from "react";
import { Users, TrendingUp, Film, BadgeCheck } from "lucide-react";
import { company, formatN } from "./data";
import Image from "next/image"

export default function Campaigns() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? company.campaigns : company.campaigns.slice(0, 3);

  return (
    <section>
      <div className="flex items-end justify-between mb-3">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Campanhas realizadas</h2>
        <span className="text-xs text-slate-500">Verificadas pela plataforma</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((c) => (
          <article key={c.title} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-blue-200 transition-all">
            <div className="relative h-40 overflow-hidden">
              <Image height={200}  width={200}  src={c.cover} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-white/95 backdrop-blur text-[11px] font-medium text-blue-600 px-2 py-0.5 rounded-full">
                <BadgeCheck className="h-3 w-3" /> Verificada
              </span>
              <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-slate-900/80 text-white text-[11px] font-medium px-2 py-0.5 rounded-full">
                <Film className="h-3 w-3" /> {c.format}
              </span>
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-slate-900">{c.title}</p>
              <div className="flex items-center gap-2 mt-2.5">
                <Image height={200}  width={200} src={c.img} alt={c.influencer} className="h-6 w-6 rounded-full object-cover border border-slate-200" />
                <span className="text-xs text-slate-600 truncate">{c.influencer}</span>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 text-slate-500">
                <span title="Alcance" className="inline-flex items-center gap-1 text-xs"><Users className="h-3.5 w-3.5" /> {formatN(c.reach)}</span>
                <span title="Engajamento" className="inline-flex items-center gap-1 text-xs"><TrendingUp className="h-3.5 w-3.5" /> {c.engagement}%</span>
                <span className="text-xs font-medium text-blue-600">{c.result}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {company.campaigns.length > 3 && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 border border-slate-200 hover:border-blue-200 bg-white rounded-full px-5 py-2 transition-colors"
          >
            {showAll ? "Ver menos" : `Ver mais (${company.campaigns.length - 3})`}
          </button>
        </div>
      )}
    </section>
  );
}
