"use client";

import type React from "react";
import { Shield } from "lucide-react";

/* ── StatusPill ────────────────────────────────────────────── */
export function StatusPill({
  status,
}: {
  status: "available" | "busy" | "limited" | "off";
}) {
  const map = {
    available: {
      label: "Disponível",
      cls: "bg-emerald-50 text-emerald-700",
      dot: "bg-emerald-500",
    },
    busy: { label: "Ocupada", cls: "bg-rose-50 text-rose-700", dot: "bg-rose-500" },
    limited: {
      label: "Limitada",
      cls: "bg-amber-50 text-amber-700",
      dot: "bg-amber-500",
    },
    off: { label: "Folga", cls: "bg-slate-100 text-slate-600", dot: "bg-slate-400" },
  };
  const v = map[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium ${v.cls}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${v.dot}`} /> {v.label}
    </span>
  );
}

/* ── Input ─────────────────────────────────────────────────── */
export function Input({
  label,
  value,
  onChange,
  type = "text",
  icon: Icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  icon?: React.ElementType;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <div className="relative mt-1">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full h-10 rounded-lg border border-slate-200 bg-white ${
            Icon ? "pl-9" : "pl-3"
          } pr-3 text-sm outline-none focus:border-blue-600`}
        />
      </div>
    </div>
  );
}

/* ── PriceInput ─────────────────────────────────────────────── */
export function PriceInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <div className="relative mt-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600">
          Kz
        </span>
        <input
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
          className="w-full h-10 rounded-lg border border-slate-200 bg-white pl-10 pr-3 text-sm font-medium outline-none focus:border-blue-600"
        />
      </div>
    </div>
  );
}

/* ── SocialInput ─────────────────────────────────────────────── */
export function SocialInput({
  icon: Icon,
  prefix,
  label,
  value,
  onChange,
  verified,
}: {
  icon: React.ElementType;
  prefix: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  verified?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
        <Icon className="h-4 w-4 text-blue-600" /> {label}
        {verified && (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 text-blue-700 px-1.5 py-0.5 text-[10px] font-semibold">
            <Shield className="h-2.5 w-2.5 fill-blue-600 text-blue-600" /> verificado
          </span>
        )}
      </label>
      <div className="relative mt-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
          {prefix}
        </span>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-10 rounded-lg border border-slate-200 bg-white pr-3 text-sm outline-none focus:border-blue-600"
          style={{ paddingLeft: `${prefix.length * 7 + 16}px` }}
        />
      </div>
    </div>
  );
}

/* ── MiniStat ─────────────────────────────────────────────── */
export function MiniStat({
  icon: Icon,
  label,
  value,
  sub,
  tone,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
  tone: string;
}) {
  const map: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-600",
    blue: "bg-blue-50 text-blue-600",
    rose: "bg-rose-50 text-rose-600",
  };
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className={`h-9 w-9 rounded-lg grid place-items-center ${map[tone]}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="mt-3 text-2xl font-bold tracking-tight">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-[11px] text-emerald-600 font-medium mt-1">{sub}</div>
    </div>
  );
}

/* ── LineChart ─────────────────────────────────────────────── */
export function LineChart({
  data,
  labels,
  color,
}: {
  data: number[];
  labels: string[];
  color: string;
}) {
  const w = 600,
    h = 200,
    pad = 30;
  const max = Math.max(...data) * 1.1;
  const min = Math.min(...data) * 0.9;
  const sx = (i: number) => pad + (i * (w - pad * 2)) / (data.length - 1);
  const sy = (v: number) =>
    h - pad - ((v - min) / (max - min)) * (h - pad * 2);
  const path = data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${sx(i)} ${sy(v)}`)
    .join(" ");
  const area = `${path} L ${sx(data.length - 1)} ${h - pad} L ${sx(0)} ${h - pad} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-48">
      <defs>
        <linearGradient id={`grad-${color}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75, 1].map((p, i) => (
        <line
          key={i}
          x1={pad}
          x2={w - pad}
          y1={pad + (h - pad * 2) * p}
          y2={pad + (h - pad * 2) * p}
          stroke="#e2e8f0"
          strokeDasharray="3 3"
        />
      ))}
      <path d={area} fill={`url(#grad-${color})`} />
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {data.map((v, i) => (
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
      {labels.map((l, i) => (
        <text
          key={i}
          x={sx(i)}
          y={h - 8}
          textAnchor="middle"
          className="fill-slate-400"
          fontSize="10"
        >
          {l}
        </text>
      ))}
    </svg>
  );
}

/* ── BarChart ─────────────────────────────────────────────── */
export function BarChart({
  data,
  labels,
}: {
  data: number[];
  labels: string[];
}) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1.5 h-48">
      {data.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
          <div className="w-full flex items-end h-full">
            <div
              className="w-full rounded-t bg-gradient-to-t from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transition-all"
              style={{ height: `${(v / max) * 100}%` }}
              title={String(v)}
            />
          </div>
          <span className="text-[10px] text-slate-400">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}