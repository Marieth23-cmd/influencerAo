

const reach = [120, 180, 150, 240, 290, 260, 340, 380, 320, 410, 460, 520];
const engagement = [3.2, 3.8, 3.5, 4.1, 4.6, 4.4, 5.0, 5.4, 5.2, 5.8, 6.1, 6.5];
const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

function LineChart({ data, color, height = 200 }: { data: number[]; color: string; height?: number }) {
  const w = 600;
  const h = height;
  const pad = 30;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = (w - pad * 2) / (data.length - 1);

  const points = data.map((v, i) => {
    const x = pad + i * step;
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return `${x},${y}`;
  });

  const path = `M ${points.join(" L ")}`;
  const area = `${path} L ${pad + (data.length - 1) * step},${h - pad} L ${pad},${h - pad} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
      <defs>
        <linearGradient id={`grad-${color}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={pad} x2={w - pad} y1={pad + i * ((h - pad * 2) / 3)} y2={pad + i * ((h - pad * 2) / 3)} stroke="#e2e8f0" strokeDasharray="3 3" />
      ))}
      <path d={area} fill={`url(#grad-${color})`} />
      <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      {data.map((v, i) => (
        <circle key={i} cx={pad + i * step} cy={h - pad - ((v - min) / range) * (h - pad * 2)} r="3" fill="white" stroke={color} strokeWidth="2" />
      ))}
      {months.map((m, i) => (
        <text key={m} x={pad + i * step} y={h - 8} textAnchor="middle" fontSize="10" fill="#94a3b8">{m}</text>
      ))}
    </svg>
  );
}

function BarChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1.5 h-44 px-2">
      {data.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
          <div
            className="w-full rounded-t-md transition-all hover:opacity-80"
            style={{ height: `${(v / max) * 100}%`, backgroundColor: color }}
          />
          <span className="text-[10px] text-slate-400">{months[i]}</span>
        </div>
      ))}
    </div>
  );
}

export default function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white border border-slate-200 rounded-xl p-5 lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-slate-900">Alcance Total</h3>
            <p className="text-xs text-slate-500">Últimos 12 meses</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-slate-900">2.4M</p>
            <p className="text-xs text-emerald-600 font-semibold">+18.3% vs período anterior</p>
          </div>
        </div>
        <LineChart data={reach} color="#2563eb" />
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-slate-900">Engagement Rate</h3>
            <p className="text-xs text-slate-500">Média mensal (%)</p>
          </div>
          <p className="text-xl font-bold text-blue-600">6.5%</p>
        </div>
        <LineChart data={engagement} color="#10b981" height={180} />
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-slate-900">Investimento Mensal</h3>
            <p className="text-xs text-slate-500">Em milhares de Kz</p>
          </div>
          <p className="text-xl font-bold text-blue-600">Kz 4.2M</p>
        </div>
        <BarChart data={reach} color="#2563eb" />
      </div>
    </div>
  );
}
