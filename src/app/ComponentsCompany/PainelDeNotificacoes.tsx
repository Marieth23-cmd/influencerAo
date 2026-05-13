import { Bell, Eye, MessageSquare, CheckCircle2, UserPlus, DollarSign } from "lucide-react";

const items = [
  { icon: Eye, color: "blue", title: "Unitel viu o seu perfil", time: "há 5 min", read: false },
  { icon: MessageSquare, color: "indigo", title: "Nova mensagem de Nara Costa", time: "há 12 min", read: false },
  { icon: CheckCircle2, color: "emerald", title: "Candidatura aceite — Campanha BAI", time: "há 1h", read: false },
  { icon: UserPlus, color: "blue", title: "Nova proposta recebida da TPA", time: "há 3h", read: true },
  { icon: DollarSign, color: "amber", title: "Pagamento confirmado — Kz 320.000", time: "Ontem", read: true },
  { icon: Eye, color: "blue", title: "Cuca viu o seu portfólio", time: "Ontem", read: true },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  indigo: "bg-indigo-50 text-indigo-600",
  emerald: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
};

export default function NotificationsPanel() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl">
      <div className="flex items-center justify-between p-5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4 text-slate-500" />
          <h2 className="font-bold text-slate-900">Notificações</h2>
          <span className="text-[10px] font-bold bg-blue-600 text-white rounded-full px-1.5 py-0.5">3</span>
        </div>
        <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">Marcar como lidas</button>
      </div>
      <div className="divide-y divide-slate-100">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <div
              key={i}
              className={`flex items-start gap-3 p-4 hover:bg-slate-50 transition-colors ${
                !it.read ? "bg-blue-50/30" : ""
              }`}
            >
              <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${colorMap[it.color]}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-800 font-medium">{it.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{it.time}</p>
              </div>
              {!it.read && <span className="h-2 w-2 bg-blue-600 rounded-full mt-2 shrink-0" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
