"use client";
import { useState } from "react";
import Sidebar, { Section } from "../ComponentsCompany/Sidebar";
import Topbar from "../ComponentsCompany/Topbar";
import StatsCards from "../ComponentsCompany/StatsCards";
import CampaignsManager from "../ComponentsCompany/CampaingnsManager";
import ChatPanel from "../ComponentsCompany/ChatPanel";
import PainelDeNotificacoes from "../ComponentsCompany/PainelDeNotificacoes";
import AnalyticsCharts from "../ComponentsCompany/AnalyticsCharts";
import FavoritesGrid from "../ComponentsCompany/Favoritos";

const titles: Record<Section, { title: string; subtitle: string }> = {
  dashboard: { title: "Dashboard", subtitle: "Visão geral da sua actividade" },
  campanhas: { title: "Campanhas", subtitle: "Gestão completa das suas campanhas" },
  chat: { title: "Mensagens", subtitle: "Converse com influenciadores em tempo real" },
  notificacoes: { title: "Notificações", subtitle: "Tudo o que aconteceu recentemente" },
  analytics: { title: "Analytics", subtitle: "Métricas e desempenho detalhado" },
  favoritos: { title: "Favoritos", subtitle: "Influenciadores guardados" },
  configuracoes: { title: "Configurações", subtitle: "Gerir o seu perfil empresarial" },
  suporte: { title: "Suporte", subtitle: "Precisa de ajuda? Estamos aqui para você" },
};

export default function PerfilEmpresa() {
  const [section, setSection] = useState<Section>("dashboard");
  const meta = titles[section];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar active={section} onChange={setSection} />
      <div className="flex-1 min-w-0">
        <Topbar title={meta.title} subtitle={meta.subtitle} onNewCampaign={() => setSection("campanhas")} />
        <main className="p-6 space-y-6 max-w-[1400px] mx-auto">
          {section === "dashboard" && (
            <>
              <StatsCards />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <AnalyticsCharts />
                  <CampaignsManager />
                </div>
                <div className="space-y-6">
                  <PainelDeNotificacoes />
                </div>
              </div>
            </>
          )}
          {section === "campanhas" && <CampaignsManager />}
          {section === "chat" && <ChatPanel />}
          {section === "notificacoes" && <PainelDeNotificacoes />}
          {section === "analytics" && (
            <>
              <StatsCards />
              <AnalyticsCharts />
            </>
          )}
          {section === "favoritos" && <FavoritesGrid />}
          {section === "configuracoes" && (
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center text-slate-500">
              Em breve: editor de perfil empresarial, equipa, faturação e integrações.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
