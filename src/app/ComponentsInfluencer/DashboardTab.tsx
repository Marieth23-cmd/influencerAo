"use client";

import {
  Megaphone, Eye, Inbox, Wallet, Activity, MessageSquare,
  CheckCircle2, ArrowUpRight, Camera, Plus, Star, Edit3,
  MapPin, Shield,
} from "lucide-react";
import { TabKey } from "./types";
import { StatusPill } from "./Ui";

const toneMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  violet: "bg-violet-50 text-violet-600",
  amber: "bg-amber-50 text-amber-600",
  emerald: "bg-emerald-50 text-emerald-600",
  rose: "bg-rose-50 text-rose-600",
};

type AvailabilityStatus = "available" | "busy" | "limited" | "off";

const DashboardTab = ({ onNavigate }: { onNavigate: (t: TabKey) => void }) => {
  const stats = [
    { label: "Campanhas activas", value: "8", delta: "+2 esta semana", icon: Megaphone, tone: "blue" },
    { label: "Visualizações do perfil", value: "12.4k", delta: "+18%", icon: Eye, tone: "violet" },
    { label: "Propostas recebidas", value: "23", delta: "+5 hoje", icon: Inbox, tone: "amber" },
    { label: "Ganhos estimados", value: "Kz 1.85M", delta: "+12% mês", icon: Wallet, tone: "emerald" },
    { label: "Taxa de resposta", value: "96%", delta: "Excelente", icon: Activity, tone: "rose" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Olá, Luísa 👋</h1>
          <p className="text-slate-500 text-sm">Aqui está o resumo da tua actividade hoje.</p>
        </div>
        <button
          onClick={() => onNavigate("config")}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50"
        >
          <Edit3 className="h-4 w-4" /> Editar perfil
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="rounded-xl border border-slate-200 bg-white p-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className={`h-9 w-9 rounded-lg grid place-items-center ${toneMap[s.tone]}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="mt-3 text-2xl font-bold tracking-tight">{s.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              <div className="text-[11px] text-emerald-600 mt-1.5 font-medium flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3" /> {s.delta}
              </div>
            </div>
          );
        })}
      </div>

      {/* Profile + brands */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 relative">
            <button className="absolute top-3 right-3 rounded-lg bg-white/90 px-2.5 py-1.5 text-xs font-medium hover:bg-white inline-flex items-center gap-1">
              <Camera className="h-3.5 w-3.5" /> Capa
            </button>
          </div>
          <div className="px-5 pb-5  -mt-5 mx-3 rounded-lg  relative">
            <div className="flex items-end gap-4">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 ring-4 ring-white grid place-items-center text-white font-bold text-2xl">
                LF
              </div>
              <div className="flex-1 pb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl font-bold">Luísa Fernandes</h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 text-blue-700 px-2 py-0.5 text-[11px] font-semibold">
                    <Shield className="h-3 w-3 fill-blue-600 text-blue-600" /> Verificada
                  </span>
                </div>
                <div className="text-sm text-slate-500 flex items-center gap-3 mt-0.5 flex-wrap">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Luanda, Angola</span>
                  <span>·</span>
                  <span>Moda & Lifestyle</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Criadora de conteúdo focada em moda urbana angolana. Já colaborei com mais de 40 marcas locais e internacionais. Disponível para campanhas presenciais em Luanda e online.
            </p>
            <div className="mt-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold">Marcas com que já trabalhei</h3>
                <button className="text-xs text-blue-600 font-medium inline-flex items-center gap-1 hover:underline">
                  <Plus className="h-3 w-3" /> Adicionar
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Unitel", "BAI", "Nestlé Angola", "Refriango", "TPA", "Score", "Shoprite", "Coca-Cola"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
                    <Star className="h-3 w-3 text-blue-600" /> {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disponibilidade rápida */}
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold">Disponibilidade</h3>
            <button className="text-xs text-blue-600 font-medium hover:underline">Editar</button>
          </div>
          <div className="space-y-2">
            {(
              [
                { d: "Segunda", s: "available" },
                { d: "Terça", s: "available" },
                { d: "Quarta", s: "busy" },
                { d: "Quinta", s: "available" },
                { d: "Sexta", s: "available" },
                { d: "Sábado", s: "limited" },
                { d: "Domingo", s: "off" },
              ] as { d: string; s: AvailabilityStatus }[]
            ).map((row) => (
              <div key={row.d} className="flex items-center justify-between text-sm">
                <span className="text-slate-700">{row.d}</span>
                <StatusPill status={row.s} />
              </div>
            ))}
          </div>
          <button className="mt-4 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 transition-colors">
            Definir agenda
          </button>
        </div>
      </div>

      {/* Actividades recentes */}
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold">Actividades recentes</h3>
          <button onClick={() => onNavigate("notificacoes")} className="text-xs text-blue-600 font-medium hover:underline">
            Ver tudo
          </button>
        </div>
        <div className="space-y-3">
          {[
            { icon: Eye, color: "violet", title: "Unitel viu o teu perfil", time: "há 5 min" },
            { icon: Inbox, color: "blue", title: "Nova proposta de Refriango — Kz 250.000", time: "há 1h" },
            { icon: CheckCircle2, color: "emerald", title: "Candidatura aceite — Campanha BAI Verão", time: "há 3h" },
            { icon: MessageSquare, color: "amber", title: "Mensagem nova de Score Angola", time: "ontem" },
          ].map((a, i) => {
            const Icon = a.icon;
            return (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <div className={`h-9 w-9 rounded-lg grid place-items-center ${toneMap[a.color]}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{a.title}</div>
                  <div className="text-xs text-slate-500">{a.time}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardTab;