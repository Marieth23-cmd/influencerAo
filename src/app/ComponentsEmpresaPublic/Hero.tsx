import { BadgeCheck, MapPin, Globe, Send } from "lucide-react";
import { company } from "./data";

export default function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(37,99,235,0.12), transparent 50%), radial-gradient(circle at 90% 100%, rgba(37,99,235,0.08), transparent 50%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 md:items-center">
          {/* Logo */}
          <div className="shrink-0 self-center md:self-auto">
            <div className="h-28 w-28 md:h-32 md:w-32 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-4xl font-bold text-blue-600">
              {company.logo}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{company.name}</h1>
              {company.verified && (
                <BadgeCheck className="h-6 w-6 text-blue-600 fill-blue-600 stroke-white" />
              )}
              <span className="ml-1 text-xs font-medium bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                {company.sector}
              </span>
            </div>

            <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed mt-3 max-w-2xl">
              {company.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-sm text-slate-600">
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-slate-400" /> {company.location}</span>
              <span className="flex items-center gap-1.5"><Globe className="h-4 w-4 text-slate-400" /> {company.website}</span>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-sm shadow-blue-600/20 transition-colors">
                <Send className="h-4 w-4" /> Contactar Empresa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
