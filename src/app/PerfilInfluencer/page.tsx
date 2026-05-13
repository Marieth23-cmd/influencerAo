"use client";
import { useState } from "react";
import {
  LayoutDashboard, MessageSquare, Calendar as CalendarIcon, Megaphone, Bell, BarChart3, Settings,
   Sparkles, Shield , Search,
   LucideIcon} from "lucide-react";
import DashboardTab from "../ComponentsInfluencer/DashboardTab";
import AgendaTab from "../ComponentsInfluencer/AgendaTab";
import Campanhas from  "../ComponentsInfluencer/Campanhas";
import Notificacoes from "../ComponentsInfluencer/Notificacoes";
import Chattab from "../ComponentsInfluencer/Chattab";
import ConfigTab from "../ComponentsInfluencer/ConfigTab";
import PerformanceTab from "../ComponentsInfluencer/PerformanceTab";



type TabKey = "dashboard" | "chat" | "agenda" | "campanhas" | "notificacoes" | "performance" | "config";

export default function PerfilInfluencer() {
  const [tab, setTab] = useState<TabKey>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const nav: { key: TabKey; label: string; icon: LucideIcon }[] = [
    { key: "dashboard", label: "Visão Geral", icon: LayoutDashboard },
    { key: "chat", label: "Mensagens", icon: MessageSquare },
    { key: "agenda", label: "Agenda", icon: CalendarIcon },
    { key: "campanhas", label: "Campanhas", icon: Megaphone },
    { key: "notificacoes", label: "Notificações", icon: Bell },
    { key: "performance", label: "Performance", icon: BarChart3 },
    { key: "config", label: "Configurações", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden rounded-lg p-2 hover:bg-slate-100"
              aria-label="Menu"
            >
              <LayoutDashboard className="h-5 w-5" />
            </button>
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600 grid place-items-center text-white font-black text-sm">IA</div>
              <span className="font-bold text-lg hidden sm:block">InfluencerAO</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                placeholder="Pesquisar..."
                className="w-full h-10 rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative rounded-lg p-2 hover:bg-slate-100">
              <Bell className="h-5 w-5 text-slate-600" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-600" />
            </button>
            <div className="flex items-center gap-2 pl-2 border-l">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center text-white font-bold text-sm ring-2 ring-white shadow">
                LF
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold leading-tight flex items-center gap-1">
                  Luísa Fernandes
                  <Shield className="h-3.5 w-3.5 text-blue-600 fill-blue-600" />
                </div>
                <div className="text-xs text-slate-500">Influenciadora · Moda</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:sticky top-16 z-30 h-[calc(100vh-4rem)] w-64 bg-white border-r transition-transform duration-200 overflow-y-auto`}
        >
          <nav className="p-3 space-y-1">
            {nav.map((n) => {
              const Icon = n.icon;
              const active = tab === n.key;
              return (
                <button
                  key={n.key}
                  onClick={() => { setTab(n.key); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {n.label}
                </button>
              );
            })}
          </nav>
          <div className="p-3 mt-2 border-t">
            <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-semibold">Plano Pro</span>
              </div>
              <p className="text-xs text-blue-100 mb-3">Desbloqueie estatísticas avançadas e prioridade nas propostas.</p>
              <button className="w-full bg-white text-blue-700 rounded-lg py-1.5 text-xs font-semibold hover:bg-blue-50 transition-colors">
                Fazer upgrade
              </button>
            </div>
          </div>
        </aside>

        {/* Backdrop mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-20 lg:hidden top-16"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-full overflow-x-hidden">
          {tab === "dashboard" && <DashboardTab onNavigate={setTab} />}
          {tab === "chat" && <Chattab />}
          {tab === "agenda" && <AgendaTab />}
          {tab === "campanhas" && <Campanhas />}
          {tab === "notificacoes" && <Notificacoes />}
          {tab === "performance" && <PerformanceTab />}
          {tab === "config" && <ConfigTab />}
        </main>
      </div>
    </div>
  );
}
