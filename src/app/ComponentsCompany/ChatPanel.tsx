import { useState, useRef, useEffect } from "react";
import { Search, Phone, Video, MoreVertical, Send, Paperclip, Smile, Check, CheckCheck, Circle } from "lucide-react";

interface Conversation {
  id: string;
  name: string;
  niche: string;
  initials: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  verified: boolean;
}

interface Message {
  id: string;
  from: "me" | "them";
  text: string;
  time: string;
  read: boolean;
}

const conversations: Conversation[] = [
  { id: "1", name: "Nara Costa", niche: "Lifestyle", initials: "NC", lastMessage: "Posso enviar o briefing amanhã?", time: "10:42", unread: 2, online: true, verified: true },
  { id: "2", name: "Edmilson Vieira", niche: "Tech", initials: "EV", lastMessage: "Aceito a proposta!", time: "09:15", unread: 0, online: true, verified: true },
  { id: "3", name: "Maria Bragança", niche: "Moda", initials: "MB", lastMessage: "Obrigada pela oportunidade", time: "Ontem", unread: 1, online: false, verified: false },
  { id: "4", name: "Toty Sa'Med", niche: "Música", initials: "TS", lastMessage: "Vamos marcar uma call?", time: "Ontem", unread: 0, online: false, verified: true },
  { id: "5", name: "Yola Araújo", niche: "Lifestyle", initials: "YA", lastMessage: "Vi o contrato, está óptimo", time: "Seg", unread: 0, online: false, verified: true },
];

const initialMessages: Message[] = [
  { id: "1", from: "them", text: "Olá! Vi a vossa proposta de campanha 👋", time: "10:30", read: true },
  { id: "2", from: "me", text: "Olá Nara! Que bom falar consigo. Tem disponibilidade para Junho?", time: "10:32", read: true },
  { id: "3", from: "them", text: "Sim, tenho. Quais são os entregáveis?", time: "10:35", read: true },
  { id: "4", from: "me", text: "3 stories + 1 reel + 1 post no feed. Budget Kz 450K.", time: "10:38", read: true },
  { id: "5", from: "them", text: "Posso enviar o briefing amanhã?", time: "10:42", read: false },
];

export default function ChatPanel() {
  const [activeId, setActiveId] = useState("1");
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const active = conversations.find((c) => c.id === activeId)!;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now().toString(), from: "me", text: input, time: "agora", read: false },
    ]);
    setInput("");
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-[320px_1fr] h-[640px]">
      {/* List */}
      <div className="border-r border-slate-100 flex flex-col">
        <div className="p-4 border-b border-slate-100">
          <h2 className="font-bold text-slate-900 mb-3">Mensagens</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              placeholder="Buscar conversas..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-400"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`w-full flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors text-left ${
                activeId === c.id ? "bg-blue-50/60" : ""
              }`}
            >
              <div className="relative shrink-0">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center text-white font-bold text-sm">
                  {c.initials}
                </div>
                {c.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 bg-emerald-500 rounded-full ring-2 ring-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900 truncate flex items-center gap-1">
                    {c.name}
                    {c.verified && <span className="text-blue-600">✓</span>}
                  </p>
                  <span className="text-[10px] text-slate-400 shrink-0">{c.time}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs text-slate-500 truncate">{c.lastMessage}</p>
                  {c.unread > 0 && (
                    <span className="text-[10px] font-bold bg-blue-600 text-white rounded-full px-1.5 min-w-[18px] text-center">
                      {c.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Conversation */}
      <div className="flex flex-col bg-slate-50">
        <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center text-white font-bold text-sm">
                {active.initials}
              </div>
              {active.online && (
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-emerald-500 rounded-full ring-2 ring-white" />
              )}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{active.name}</p>
              <p className="text-[11px] text-emerald-600 flex items-center gap-1">
                <Circle className="h-1.5 w-1.5 fill-current" /> {active.online ? "Online agora" : "Visto há 1h"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <button className="p-2 hover:bg-slate-100 rounded-lg"><Phone className="h-4 w-4" /></button>
            <button className="p-2 hover:bg-slate-100 rounded-lg"><Video className="h-4 w-4" /></button>
            <button className="p-2 hover:bg-slate-100 rounded-lg"><MoreVertical className="h-4 w-4" /></button>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-3">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[75%] px-3.5 py-2 rounded-2xl text-sm shadow-sm ${
                  m.from === "me"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-white text-slate-800 rounded-bl-sm border border-slate-100"
                }`}
              >
                <p className="leading-snug">{m.text}</p>
                <div className={`flex items-center gap-1 justify-end mt-1 text-[10px] ${m.from === "me" ? "text-blue-100" : "text-slate-400"}`}>
                  {m.time}
                  {m.from === "me" && (m.read ? <CheckCheck className="h-3 w-3" /> : <Check className="h-3 w-3" />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border-t border-slate-100 p-3 flex items-center gap-2">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg"><Paperclip className="h-4 w-4" /></button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Escreva uma mensagem..."
            className="flex-1 px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:bg-white focus:border-blue-400"
          />
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg"><Smile className="h-4 w-4" /></button>
          <button onClick={send} className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
