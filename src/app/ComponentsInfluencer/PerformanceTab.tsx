import React from "react";
import { TrendingUp, Users, Heart, LucideIcon } from "lucide-react";

/* ================== TYPES ================== */

interface MiniStatProps {
  icon: LucideIcon;
  label: string;
  value: string;
  sub: string;
  tone: "emerald" | "blue" | "rose";
}

interface LineChartProps {
  data: number[];
  labels: string[];
  color: string;
  suffix?: string;
}

interface BarChartProps {
  data: number[];
  labels: string[];
}

/* ================== COMPONENTE PRINCIPAL ================== */

export default function PerformanceTab() {
  const growth = [12, 18, 16, 24, 28, 32, 30, 38, 42, 48, 55, 62];

  const views = [
    820, 950, 1100, 1300, 1180, 1420,
    1680, 1550, 1800, 2100, 2400, 2650,
  ];

  const engagement = [
    4.2, 4.5, 4.8, 5.1, 5.0, 5.4,
    5.8, 5.6, 6.1, 6.4, 6.8, 7.2,
  ];

  const months = [
    "Jan", "Fev", "Mar", "Abr",
    "Mai", "Jun", "Jul", "Ago",
    "Set", "Out", "Nov", "Dez",
  ];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Performance</h1>
        <p className="text-sm text-slate-500">
          Análise dos últimos 12 meses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MiniStat
          icon={TrendingUp}
          label="Crescimento"
          value="+62%"
          sub="vs ano anterior"
          tone="emerald"
        />

        <MiniStat
          icon={Users}
          label="Seguidores totais"
          value="148.2k"
          sub="+8.4k este mês"
          tone="blue"
        />

        <MiniStat
          icon={Heart}
          label="Engagement médio"
          value="7.2%"
          sub="acima da média"
          tone="rose"
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">
            Crescimento de seguidores
          </h3>

          <span className="text-xs text-slate-500">
            milhares
          </span>
        </div>

        <LineChart
          data={growth}
          labels={months}
          color="#2563eb"
          suffix="k"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">
              Visualizações do perfil
            </h3>

            <span className="text-xs text-slate-500">
              por mês
            </span>
          </div>

          <BarChart data={views} labels={months} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">
              Taxa de engagement
            </h3>

            <span className="text-xs text-slate-500">%</span>
          </div>

          <LineChart
            data={engagement}
            labels={months}
            color="#7c3aed"
            suffix="%"
          />
        </div>
      </div>
    </div>
  );
}

/* ================== MINI STAT ================== */

function MiniStat({
  icon: Icon,
  label,
  value,
  sub,
  tone,
}: MiniStatProps) {
  const map: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-600",
    blue: "bg-blue-50 text-blue-600",
    rose: "bg-rose-50 text-rose-600",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div
        className={`h-9 w-9 rounded-lg grid place-items-center ${map[tone]}`}
      >
        <Icon className="h-4 w-4" />
      </div>

      <div className="mt-3 text-2xl font-bold">
        {value}
      </div>

      <div className="text-xs text-slate-500">
        {label}
      </div>

      <div className="text-[11px] text-emerald-600 font-medium mt-1">
        {sub}
      </div>
    </div>
  );
}

/* ================== LINE CHART ================== */

function LineChart({
  data,
  labels,
  color,
}: LineChartProps) {
  const w = 600;
  const h = 200;
  const pad = 30;

  const max = Math.max(...data) * 1.1;
  const min = Math.min(...data) * 0.9;

  const sx = (i: number) =>
    pad + (i * (w - pad * 2)) / (data.length - 1);

  const sy = (v: number) =>
    h - pad - ((v - min) / (max - min)) * (h - pad * 2);

  const path = data
    .map(
      (v: number, i: number) =>
        `${i === 0 ? "M" : "L"} ${sx(i)} ${sy(v)}`
    )
    .join(" ");

  const area = `
    ${path}
    L ${sx(data.length - 1)} ${h - pad}
    L ${sx(0)} ${h - pad}
    Z
  `;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-48">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop
            offset="0%"
            stopColor={color}
            stopOpacity="0.3"
          />

          <stop
            offset="100%"
            stopColor={color}
            stopOpacity="0"
          />
        </linearGradient>
      </defs>

      <path d={area} fill="url(#grad)" />

      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
      />

      {data.map((v: number, i: number) => (
        <circle
          key={i}
          cx={sx(i)}
          cy={sy(v)}
          r="3"
          fill="white"
          stroke={color}
          strokeWidth="2"
        />
      ))}

      {labels.map((l: string, i: number) => (
        <text
          key={i}
          x={sx(i)}
          y={h - 8}
          textAnchor="middle"
          fontSize="10"
          className="fill-slate-400"
        >
          {l}
        </text>
      ))}
    </svg>
  );
}

/* ================== BAR CHART ================== */

function BarChart({
  data,
  labels,
}: BarChartProps) {
  const max = Math.max(...data);

  return (
    <div className="flex items-end gap-1.5 h-48">
      {data.map((v: number, i: number) => (
        <div
          key={i}
          className="flex-1 flex flex-col items-center gap-1.5"
        >
          <div className="w-full flex items-end h-full">
            <div
              className="w-full rounded-t bg-blue-500"
              style={{
                height: `${(v / max) * 100}%`,
              }}
            />
          </div>

          <span className="text-[10px] text-slate-400">
            {labels[i]}
          </span>
        </div>
      ))}
    </div>
  );
}