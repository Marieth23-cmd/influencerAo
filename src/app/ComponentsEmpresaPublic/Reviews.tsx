import { Star } from "lucide-react";
import { company } from "./data";

function Stars({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={i < Math.round(value) ? "fill-blue-600 text-blue-600" : "fill-slate-200 text-slate-200"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section>
      <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
        Avaliações de influencers
      </h2>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-5xl font-bold text-slate-900 leading-none">{company.stats.rating}</p>
            <Stars value={company.stats.rating} size={16} />
            <p className="text-xs text-slate-500 mt-1.5">{company.stats.reviews} avaliações</p>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-4 text-center sm:border-l sm:border-slate-100 sm:pl-6">
            <div>
              <p className="text-xl font-bold text-slate-900">{company.stats.campaigns}</p>
              <p className="text-xs text-slate-500 mt-0.5">Campanhas</p>
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900">{company.stats.influencers}</p>
              <p className="text-xs text-slate-500 mt-0.5">Influencers</p>
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900">{company.stats.responseRate}%</p>
              <p className="text-xs text-slate-500 mt-0.5">Resposta</p>
            </div>
          </div>
        </div>
      </div>

      <ul className="divide-y divide-slate-100 bg-white border border-slate-200 rounded-2xl">
        {company.reviews.map((r, i) => (
          <li key={i} className="p-5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-600">
                  {r.influencer.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{r.influencer}</p>
                  <p className="text-[11px] text-slate-500">{r.campaign} · {r.date}</p>
                </div>
              </div>
              <Stars value={r.rating} />
            </div>
            <p className="text-sm text-slate-700 mt-3 leading-relaxed">{r.text}</p>
          </li>
        ))}
      </ul>

      <p className="text-[11px] text-slate-400 text-center mt-3">
        Apenas influencers que trabalharam com esta empresa pela plataforma podem avaliar.
      </p>
    </section>
  );
}
