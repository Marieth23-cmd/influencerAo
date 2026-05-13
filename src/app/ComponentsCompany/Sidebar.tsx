
import { LayoutDashboard, Megaphone, MessageSquare, Bell, BarChart3, Star, Settings, LogOut, Building2, ChevronLeft, Headset } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

export type Section = "dashboard" | "campanhas" | "chat" | "notificacoes" | "analytics" | "favoritos" | "configuracoes" | "suporte";

interface SidebarProps {
  active: Section;
  onChange: (s: Section) => void;
}

const items: { id: Section; label: string; icon: LucideIcon; badge?: number }[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "campanhas", label: "Campanhas", icon: Megaphone, badge: 4 },
  { id: "chat", label: "Mensagens", icon: MessageSquare, badge: 7 },
  { id: "notificacoes", label: "Notificações", icon: Bell, badge: 3 },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "favoritos", label: "Favoritos", icon: Star },
  { id: "configuracoes", label: "Configurações", icon: Settings },
  { id: "suporte", label: "Suporte", icon: Headset },
];




export default function Sidebar({ active, onChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`${collapsed ? "w-20" : "w-64"} hidden md:flex flex-col bg-white border-r border-slate-200 transition-all duration-300 sticky top-0 h-screen`}
    >
      <div className="flex items-center justify-between p-5 border-b border-slate-100">
        <div className="flex items-center gap-2.5 overflow-hidden">
         
          {!collapsed && (
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">InfluencerAO</p>
              <p className="text-[11px] text-slate-500">Painel Empresa</p>
            </div>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-slate-400 hover:text-slate-700 transition-colors"
        >
          <ChevronLeft className={`h-4 w-4 transition-transform ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all relative group ${
                isActive
                  ? "bg-blue-700 text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon className={`h-[18px] w-[18px] shrink-0 ${isActive ? "text-white" : ""}`} />
              {!collapsed && <span className="flex-1 text-left">{item.label}</span>}
              {!collapsed && item.badge && (
                <span className="text-[10px] font-bold bg-red-600 text-white rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
                  {item.badge}
                </span>
              )}
              {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-blue-600 rounded-r-full" />}
            </button>
          );
        })}
      </nav>

      <div className="p-3 border-t border-slate-100">
        <div className={`flex items-center gap-3 p-2 rounded-lg ${collapsed ? "justify-center" : ""}`}>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-sm font-bold shrink-0">
            <Building2 className="h-4 w-4" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 truncate">Unitel S.A.</p>
              <p className="text-xs text-slate-500 truncate">empresa@unitel.ao</p>
            </div>
          )}
          {!collapsed && (
            <button className="text-slate-400 hover:text-red-500 transition-colors">
              <LogOut className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
