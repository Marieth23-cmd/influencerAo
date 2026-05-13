import { Search, Bell, Plus, Menu } from "lucide-react";

interface TopbarProps {
  title: string;
  subtitle?: string;
  onNewCampaign?: () => void;
  onMenuClick?: () => void;
}

export default function Topbar({ title, subtitle, onNewCampaign, onMenuClick }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="flex items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-3 min-w-0">
          <button onClick={onMenuClick} className="md:hidden text-slate-600 p-2 -ml-2">
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <h1 className="text-xl font-bold text-slate-900 truncate">{title}</h1>
            {subtitle && <p className="text-xs text-slate-500 truncate">{subtitle}</p>}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              placeholder="Buscar influenciadores, campanhas..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <button className="relative p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white" />
          </button>

          <button
            onClick={onNewCampaign}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm shadow-blue-600/20"
          >
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Nova Campanha</span>
          </button>
        </div>
      </div>
    </header>
  );
}
