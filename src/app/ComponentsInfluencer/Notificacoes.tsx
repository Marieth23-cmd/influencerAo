import { useState } from "react";
import {
  Eye,
  Inbox,
  CheckCircle2,
  MessageSquare,
  CheckCheck,
} from "lucide-react";

type NotificationType = "view" | "proposal" | "accepted" | "message";

type Notification = {
  id: number;
  type: NotificationType;
  title: string;
  sub: string;
  time: string;
  read: boolean;
};

const config = {
  view: { icon: Eye, cls: "bg-violet-50 text-violet-600" },
  proposal: { icon: Inbox, cls: "bg-blue-50 text-blue-600" },
  accepted: { icon: CheckCircle2, cls: "bg-emerald-50 text-emerald-600" },
  message: { icon: MessageSquare, cls: "bg-amber-50 text-amber-600" },
};

export default function NotificacoesTab() {
  const [items, setItems] = useState<Notification[]>([
    {
      id: 1,
      type: "view",
      title: "Unitel Angola viu o teu perfil",
      sub: "Marta Silva consultou as tuas estatísticas.",
      time: "há 5 min",
      read: false,
    },
    {
      id: 2,
      type: "proposal",
      title: "Nova proposta de Refriango",
      sub: "Campanha Cuca Light · Kz 320.000",
      time: "há 1h",
      read: false,
    },
    {
      id: 3,
      type: "accepted",
      title: "Candidatura aceite",
      sub: "BAI confirmou a tua participação na campanha de verão.",
      time: "há 3h",
      read: false,
    },
    {
      id: 4,
      type: "message",
      title: "Nova mensagem de Score Angola",
      sub: "“Vamos rever os valores...”",
      time: "ontem",
      read: true,
    },
    {
      id: 5,
      type: "view",
      title: "Coca-Cola Angola viu o teu perfil",
      sub: "Visualizou 3 vezes nesta semana.",
      time: "ontem",
      read: true,
    },
    {
      id: 6,
      type: "proposal",
      title: "Proposta de Shoprite",
      sub: "Campanha Black Friday · Kz 180.000",
      time: "2 dias",
      read: true,
    },
  ]);

  const markAll = () => {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-end justify-between flex-wrap gap-2">
        <div> 
          <h1 className="text-2xl font-bold"> Notificações </h1>
          <p className="text-sm text-slate-500">
            Tudo o que está a acontecer no teu perfil.
          </p>
        </div>

        <button
          onClick={markAll}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50"
        >
          <CheckCheck className="h-4 w-4" />
          Marcar tudo como lido
        </button>
      </div>

      {/* Lista */}
      <div className="rounded-xl border border-slate-200 bg-white divide-y">
        {items.map((n) => {
          const C = config[n.type];
          const Icon = C.icon;

          return (
            <div
              key={n.id}
              className={`flex items-start gap-3 p-4 hover:bg-slate-50 transition-colors ${
                !n.read ? "bg-blue-50/30" : ""
              }`}
            >
              <div
                className={`h-10 w-10 rounded-lg grid place-items-center shrink-0 ${C.cls}`}
              >
                <Icon className="h-4 w-4" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-sm font-semibold flex items-center gap-2">
                    {n.title}
                    {!n.read && (
                      <span className="h-2 w-2 rounded-full bg-blue-600" />
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 shrink-0">
                    {n.time}
                  </div>
                </div>

                <div className="text-sm text-slate-500 mt-0.5">{n.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}