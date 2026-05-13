import { useState } from "react";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

export default function AgendaTab() {
  const today = new Date();
  const [cursor, setCursor] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const events: Record<
    string,
    { title: string; type: "campanha" | "reuniao" | "gravacao"; time: string }[]
  > = {
    [`${today.getFullYear()}-${today.getMonth()}-5`]: [
      { title: "Gravação Unitel", type: "gravacao", time: "10:00" },
    ],
    [`${today.getFullYear()}-${today.getMonth()}-12`]: [
      { title: "Reunião BAI", type: "reuniao", time: "14:30" },
    ],
    [`${today.getFullYear()}-${today.getMonth()}-18`]: [
      { title: "Campanha Refriango", type: "campanha", time: "09:00" },
      { title: "Post Instagram", type: "campanha", time: "18:00" },
    ],
    [`${today.getFullYear()}-${today.getMonth()}-24`]: [
      { title: "Briefing Score", type: "reuniao", time: "11:00" },
    ],
  };

  const monthNames = [
    "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
    "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
  ];

  const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  while (cells.length % 7 !== 0) cells.push(null);

  const typeColor: Record<string, string> = {
    campanha: "bg-blue-600",
    reuniao: "bg-violet-500",
    gravacao: "bg-amber-500",
  };

  return (
    <div className="space-y-4">
      {/* HEADER */}
      <div className="flex items-end justify-between flex-wrap gap-2">
        <div>
          <h1 className="text-2xl font-bold">Agenda</h1>
          <p className="text-sm text-slate-500">
            Campanhas marcadas e disponibilidade.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-sm font-semibold">
          <Plus className="h-4 w-4" /> Novo evento
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* CALENDÁRIO */}
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-4 md:p-5">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setCursor(new Date(year, month - 1, 1))}
              className="rounded-lg p-2 hover:bg-slate-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <h3 className="font-semibold capitalize">
              {monthNames[month]} {year}
            </h3>

            <button
              onClick={() => setCursor(new Date(year, month + 1, 1))}
              className="rounded-lg p-2 hover:bg-slate-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {dayNames.map((d) => (
              <div key={d} className="text-[11px] font-semibold text-slate-400 py-2">
                {d}
              </div>
            ))}

            {cells.map((day, i) => {
              if (day === null) return <div key={i} />;

              const key = `${year}-${month}-${day}`;
              const dayEvents = events[key] || [];

              const isToday =
                day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear();

              return (
                <div
                  key={i}
                  className={`min-h-[72px] rounded-lg border p-1.5 text-left transition-colors hover:bg-slate-50 ${
                    isToday ? "border-blue-600 bg-blue-50" : "border-slate-100"
                  }`}
                >
                  <div
                    className={`text-xs font-semibold ${
                      isToday ? "text-blue-700" : "text-slate-700"
                    }`}
                  >
                    {day}
                  </div>

                  <div className="mt-1 space-y-0.5">
                    {dayEvents.slice(0, 2).map((e, j) => (
                      <div
                        key={j}
                        className={`text-[10px] text-white rounded px-1 py-0.5 truncate ${
                          typeColor[e.type]
                        }`}
                      >
                        {e.time} {e.title}
                      </div>
                    ))}

                    {dayEvents.length > 2 && (
                      <div className="text-[10px] text-slate-500">
                        +{dayEvents.length - 2} mais
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* LATERAL */}
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-sm mb-3">Próximos eventos</h3>

            <div className="space-y-3">
              {[
                { title: "Gravação Unitel", date: "5 deste mês", time: "10:00", type: "gravacao" },
                { title: "Reunião BAI", date: "12 deste mês", time: "14:30", type: "reuniao" },
                { title: "Campanha Refriango", date: "18 deste mês", time: "09:00", type: "campanha" },
              ].map((e, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`h-9 w-1 rounded-full ${typeColor[e.type]}`} />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{e.title}</div>
                    <div className="text-xs text-slate-500">
                      {e.date} · {e.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-sm mb-3">Legenda</h3>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                Campanhas
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
                Reuniões
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                Gravações
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}