import { useEffect, useMemo, useRef, useState } from "react";
import { Search, MoreVertical, Send} from "lucide-react";

/* =============== CHAT =============== */
export default function ChatTab() {
  type Msg = {
    id: number;
    from: "me" | "them";
    text: string;
    time: string;
    read?: boolean;
  };

  type Conv = {
    id: number;
    name: string;
    company: string;
    avatar: string;
    last: string;
    time: string;
    unread: number;
    online: boolean;
    messages: Msg[];
  };

  const initial: Conv[] = [
    {
      id: 1,
      name: "Marta Silva",
      company: "Unitel Angola",
      avatar: "MS",
      last: "Podemos avançar com o briefing amanhã?",
      time: "10:42",
      unread: 2,
      online: true,
      messages: [
        { id: 1, from: "them", text: "Olá Luísa! Vimos o teu perfil e adoramos o conteúdo.", time: "10:30" },
        { id: 2, from: "me", text: "Oi Marta, muito obrigada! 💙", time: "10:34", read: true },
        { id: 3, from: "them", text: "Temos uma campanha de verão. Tens disponibilidade?", time: "10:40" },
        { id: 4, from: "them", text: "Podemos avançar com o briefing amanhã?", time: "10:42" },
      ],
    },
    {
      id: 2,
      name: "João Cabral",
      company: "BAI",
      avatar: "JC",
      last: "Enviei a proposta por email também.",
      time: "ontem",
      unread: 0,
      online: false,
      messages: [
        { id: 1, from: "them", text: "Boa tarde Luísa, tudo bem?", time: "14:10" },
        { id: 2, from: "me", text: "Tudo óptimo João, obrigada!", time: "14:20", read: true },
        { id: 3, from: "them", text: "Enviei a proposta por email também.", time: "14:22" },
      ],
    },
    {
      id: 3,
      name: "Equipa Refriango",
      company: "Refriango",
      avatar: "RE",
      last: "Combinado para sexta!",
      time: "seg",
      unread: 0,
      online: true,
      messages: [{ id: 1, from: "them", text: "Combinado para sexta!", time: "09:00" }],
    },
    {
      id: 4,
      name: "Score Angola",
      company: "Score",
      avatar: "SC",
      last: "Vamos rever os valores.",
      time: "12 nov",
      unread: 1,
      online: false,
      messages: [{ id: 1, from: "them", text: "Vamos rever os valores.", time: "08:45" }],
    },
  ];

  const [convs, setConvs] = useState<Conv[]>(initial);
  const [activeId, setActiveId] = useState<number>(1);
  const [draft, setDraft] = useState("");
  const [search, setSearch] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);

  const active = convs.find((c) => c.id === activeId)!;

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [activeId, active?.messages.length]);

  const filtered = useMemo(() => {
    return convs.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.company.toLowerCase().includes(search.toLowerCase())
    );
  }, [convs, search]);

  const send = () => {
    if (!draft.trim()) return;

    const newMsg: Msg = {
      id: Date.now(),
      from: "me",
      text: draft.trim(),
      time: new Date().toLocaleTimeString("pt-PT", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      read: false,
    };

    setConvs((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              messages: [...c.messages, newMsg],
              last: newMsg.text,
              time: "agora",
            }
          : c
      )
    );

    setDraft("");
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Mensagens</h1>
        <p className="text-sm text-slate-500">Conversa em tempo real com empresas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] rounded-xl border border-slate-200 bg-white overflow-hidden h-[70vh]">
        {/* LISTA */}
        <div className="border-r flex flex-col">
          <div className="p-3 border-b relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquisar conversas"
              className="w-full h-9 rounded-lg border pl-9 text-sm bg-slate-50"
            />
          </div>

          <div className="overflow-y-auto flex-1">
            {filtered.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`w-full flex items-center gap-3 p-3 border-b text-left ${
                  c.id === activeId ? "bg-blue-50" : "hover:bg-slate-50"
                }`}
              >
                <div className="h-10 w-10 rounded-full bg-slate-500 text-white grid place-items-center">
                  {c.avatar}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold truncate">{c.name}</span>
                    <span className="text-[10px] text-slate-400">{c.time}</span>
                  </div>
                  <div className="text-xs text-blue-600">{c.company}</div>
                  <div className="text-xs text-slate-500 truncate">{c.last}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CHAT */}
        <div className="flex flex-col">
          <div className="p-3 border-b flex justify-between">
            <div className="text-sm font-semibold">{active.name}</div>
            <MoreVertical className="h-4 w-4" />
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-2">
            {active.messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-3 py-2 rounded-xl text-sm max-w-[75%] ${
                    m.from === "me" ? "bg-blue-600 text-white" : "bg-white border"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              className="flex-1 border rounded-lg px-3 text-sm"
              placeholder="Escreve uma mensagem..."
            />
            <button
              onClick={send}
              disabled={!draft.trim()}
              className="bg-blue-600 text-white px-4 rounded-lg"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}