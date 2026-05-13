"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Loader2,
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Building2,
} from "lucide-react";
import Image from "next/image";

/* ============================================================
   InfluencerAO — Login (single-file, zero external components)
   Cole este ficheiro em src/pages/Login.tsx e está pronto.
   ============================================================ */

type Mode = "login" | "register-choice" | "register-influencer" | "register-company";

const Login = () => {
  const navigate = useRouter();
  const [mode, setMode] = useState<Mode>("login");

  /* ---------- Login state ---------- */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  /* ---------- Influencer registration state ---------- */
  const [iName, setIName] = useState("");
  const [iEmail, setIEmail] = useState("");
  const [iPassword, setIPassword] = useState("");
  const [iNiche, setINiche] = useState("");
  const [iInstagram, setIInstagram] = useState("");
  const [iTiktok, setITiktok] = useState("");
  const [iYoutube, setIYoutube] = useState("");
  const [iPhoto, setIPhoto] = useState<File | null>(null);
  const [iPhotoPreview, setIPhotoPreview] = useState<string>("");

  /* ---------- Company registration state ---------- */
  const [cName, setCName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cNif, setCNif] = useState("");
  const [cPassword, setCPassword] = useState("");

  const NICHES = [
    "Lifestyle", "Moda Africana", "Beleza", "Tecnologia", "Gaming",
    "Kuduro", "Música", "Comédia", "Gastronomia", "Viagens", "Fitness",
    "Negócios", "Educação",
  ];

  /* ---------- Helpers de validação ---------- */
  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const isCorporateEmail = (v: string) => {
    if (!isEmail(v)) return false;
    const free = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "live.com", "icloud.com"];
    const domain = v.split("@")[1]?.toLowerCase() ?? "";
    return !free.includes(domain);
  };
  const isStrongPw = (v: string) =>
    v.length >= 10 && /[A-Z]/.test(v) && /[a-z]/.test(v) && /\d/.test(v) && /[^A-Za-z0-9]/.test(v);
  const isNif = (v: string) => /^\d{9,10}$/.test(v.trim());

  const passwordStrength = (pw: string) => {
    let s = 0;
    if (pw.length >= 10) s++;
    if (pw.length >= 14) s++;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw) && /\d/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw) && pw.length >= 12) s++;
    const labels = ["Muito fraca", "Fraca", "Razoável", "Forte", "Muito forte"];
    const colors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-blue-500", "bg-blue-700"];
    return { score: Math.min(s, 4), label: labels[Math.min(s, 4)], color: colors[Math.min(s, 4)] };
  };

  /* ---------- Submit handlers ---------- */
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!isEmail(email)) errs.email = "Email inválido";
    if (!password) errs.password = "Senha obrigatória";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate.push("/"); }, 800);
  };

  const handleInfluencer = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (iName.trim().length < 3) errs.iName = "Nome muito curto";
    if (!isEmail(iEmail)) errs.iEmail = "Email inválido";
    if (!isStrongPw(iPassword)) errs.iPassword = "Senha fraca (10+ chars, maiúscula, número e símbolo)";
    if (!iNiche) errs.iNiche = "Selecione um nicho";
    if (!iInstagram && !iTiktok && !iYoutube) errs.iInstagram = "Forneça pelo menos uma rede social";
    if (!iPhoto) errs.iPhoto = "Carregue uma foto de perfil";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  };

  const handleCompany = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (cName.trim().length < 2) errs.cName = "Nome obrigatório";
    if (!isCorporateEmail(cEmail)) errs.cEmail = "Use um email corporativo (não @gmail, @hotmail...)";
    if (!isNif(cNif)) errs.cNif = "NIF angolano inválido (9-10 dígitos)";
    if (!isStrongPw(cPassword)) errs.cPassword = "Senha fraca (10+ chars, maiúscula, número e símbolo)";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  };

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 3 * 1024 * 1024) {
      setErrors((p) => ({ ...p, iPhoto: "Imagem máx. 3MB" }));
      return;
    }
    setIPhoto(f);
    setIPhotoPreview(URL.createObjectURL(f));
  };

  const resetAll = () => {
    setSubmitted(false);
    setErrors({});
    setMode("login");
  };

  /* ============================================================
     INLINE COMPONENTS (no imports needed)
     ============================================================ */

  const Field = ({
    id, label, value, onChange, type = "text", placeholder, error, icon, prefix, optional,
  }: {
    id: string;
    label: string;
    value: string;
    onChange: (v: string) => void;
    type?: string;
    placeholder?: string;
    error?: string;
    icon?: React.ReactNode;
    prefix?: string;
    optional?: boolean;
  }) => (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-medium text-slate-700">{label}</label>
        {optional && <span className="text-xs text-slate-400">opcional</span>}
      </div>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">{icon}</span>
        )}
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm pointer-events-none">{prefix}</span>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full h-11 rounded-lg border text-slate-900 outline-none transition-all bg-white
            ${icon ? "pl-10" : prefix ? "pl-7" : "pl-3"} pr-3
            ${error ? "border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"}`}
        />
      </div>
      {error && (
        <p className="text-xs text-red-600 flex items-center gap-1">
          <AlertCircle className="h-3 w-3" /> {error}
        </p>
      )}
    </div>
  );

  const PasswordInput = ({
    id, label, value, onChange, error, showStrength,
  }: {
    id: string; label: string; value: string; onChange: (v: string) => void;
    error?: string; showStrength?: boolean;
  }) => {
    const strength = passwordStrength(value);
    return (
      <div className="space-y-1.5">
        <label htmlFor={id} className="text-sm font-medium text-slate-700">{label}</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            id={id}
            type={showPw ? "text" : "password"}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`w-full h-11 rounded-lg border pl-10 pr-10 text-slate-900 outline-none transition-all
              ${error ? "border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"}`}
          />
          <button
            type="button"
            onClick={() => setShowPw((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
          >
            {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {showStrength && value && (
          <div className="space-y-1">
            <div className="flex gap-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i < strength.score ? strength.color : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-slate-500">Força: <span className="font-medium">{strength.label}</span></p>
          </div>
        )}
        {error && (
          <p className="text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {error}
          </p>
        )}
      </div>
    );
  };

  const Shell = ({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-slate-900">Influencer<span className="text-blue-600">AO</span></span>
        </Link>

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
            {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
          </div>
          {children}
        </div>

        <p className="text-center text-xs text-slate-400 mt-6 flex items-center justify-center gap-1">
          <ShieldCheck className="h-3 w-3" /> Protegido por encriptação TLS
        </p>
      </div>
    </div>
  );

  /* ============================================================
     RENDER STATES
     ============================================================ */

  // Sucesso após registo
  if (submitted) {
    return (
      <Shell title="Conta criada com sucesso!" subtitle="Verifique o seu email para activar a conta">
        <div className="text-center space-y-6">
          <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-blue-600" />
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-left">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-slate-900">Verificação em curso</p>
                <p className="text-xs text-slate-600 mt-1">
                  Enviámos um link de confirmação. Após verificação manual (até 24h),
                  receberá o badge <span className="font-semibold text-blue-600">Verificado</span>.
                </p>
              </div>
            </div>
          </div>
          <button onClick={resetAll} className="w-full h-11 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
            Voltar ao login
          </button>
        </div>
      </Shell>
    );
  }

  // Tela de escolha de perfil
  if (mode === "register-choice") {
    return (
      <Shell title="Como pretende usar a InfluencerAO?" subtitle="Escolha o tipo de conta">
        <div className="space-y-3">
          <button
            onClick={() => setMode("register-influencer")}
            className="group w-full text-left rounded-xl border-2 border-slate-200 hover:border-blue-600 p-5 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Sparkles className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Sou Influencer</h3>
                <p className="text-sm text-slate-600 mt-0.5">Monetizar conteúdo e fechar campanhas</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setMode("register-company")}
            className="group w-full text-left rounded-xl border-2 border-slate-200 hover:border-blue-600 p-5 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Building2 className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Sou Empresa</h3>
                <p className="text-sm text-slate-600 mt-0.5">Contratar influencers para a minha marca</p>
              </div>
            </div>
          </button>
        </div>

        <button onClick={() => setMode("login")} className="w-full mt-6 text-sm text-slate-600 hover:text-blue-600 transition-colors">
          ← Já tenho conta
        </button>
      </Shell>
    );
  }

  // Cadastro Influencer
  if (mode === "register-influencer") {
    return (
      <Shell title="Cadastro de Influencer" subtitle="Conte-nos sobre si para conectarmos com marcas">
        <form onSubmit={handleInfluencer} className="space-y-4">
          {/* Foto */}
          <div className="flex flex-col items-center gap-3 pb-2">
            <label className="cursor-pointer group">
              <div className={`h-24 w-24 rounded-full border-2 border-dashed flex items-center justify-center overflow-hidden transition-colors
                ${errors.iPhoto ? "border-red-500" : "border-slate-300 group-hover:border-blue-600"}`}>
                {iPhotoPreview ? (
                  <Image height={100} width={100} src={iPhotoPreview} alt="preview" className="h-full w-full object-cover" />
                ) : (
                  <span className="text-xs text-slate-400 text-center px-2">Carregar foto</span>
                )}
              </div>
              <input type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
            </label>
            {errors.iPhoto && <p className="text-xs text-red-600">{errors.iPhoto}</p>}
          </div>

          <Field id="iName" label="Nome completo" value={iName} onChange={setIName} error={errors.iName} icon={<Sparkles className="h-4 w-4" />} />
          <Field id="iEmail" label="Email" type="email" value={iEmail} onChange={setIEmail} error={errors.iEmail} icon={<Mail className="h-4 w-4" />} />
          <PasswordInput id="iPassword" label="Senha" value={iPassword} onChange={setIPassword} error={errors.iPassword} showStrength />

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700">Nicho principal</label>
            <select
              value={iNiche}
              onChange={(e) => setINiche(e.target.value)}
              className={`w-full h-11 rounded-lg border bg-white px-3 text-slate-900 outline-none focus:ring-2
                ${errors.iNiche ? "border-red-500 focus:ring-red-200" : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"}`}
            >
              <option value="">Selecione...</option>
              {NICHES.map((n) => <option key={n}>{n}</option>)}
            </select>
            {errors.iNiche && <p className="text-xs text-red-600">{errors.iNiche}</p>}
          </div>

          <div className="pt-1">
            <p className="text-sm font-medium text-slate-700 mb-2">Redes sociais</p>
            <div className="space-y-3">
              <Field id="iInstagram" label="Instagram" value={iInstagram} onChange={setIInstagram} prefix="@" placeholder="seuhandle" error={errors.iInstagram} />
              <Field id="iTiktok" label="TikTok" value={iTiktok} onChange={setITiktok} prefix="@" placeholder="seuhandle" optional />
              <Field id="iYoutube" label="YouTube" value={iYoutube} onChange={setIYoutube} placeholder="https://youtube.com/@..." optional />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setMode("register-choice")} className="flex-1 h-11 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium transition-colors">
              Voltar
            </button>
            <button type="submit" disabled={loading} className="flex-1 h-11 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-60 transition-colors">
              {loading && <Loader2 className="h-4 w-4 animate-spin" />} Criar conta
            </button>
          </div>
        </form>
      </Shell>
    );
  }

  // Cadastro Empresa
  if (mode === "register-company") {
    return (
      <Shell title="Cadastro de Empresa" subtitle="Os seus dados serão verificados pela nossa equipa">
        <form onSubmit={handleCompany} className="space-y-4">
          <Field id="cName" label="Nome da empresa" value={cName} onChange={setCName} error={errors.cName} icon={<Building2 className="h-4 w-4" />} />
          <Field id="cEmail" label="Email corporativo" type="email" value={cEmail} onChange={setCEmail} error={errors.cEmail} icon={<Mail className="h-4 w-4" />} placeholder="voce@empresa.ao" />
          <Field id="cNif" label="NIF" value={cNif} onChange={setCNif} error={errors.cNif} placeholder="5417XXXXXX" />
          <PasswordInput id="cPassword" label="Senha" value={cPassword} onChange={setCPassword} error={errors.cPassword} showStrength />

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-600">
              Após verificação do NIF, a empresa receberá o badge <span className="font-semibold text-blue-600">Verificado</span>.
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setMode("register-choice")} className="flex-1 h-11 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium transition-colors">
              Voltar
            </button>
            <button type="submit" disabled={loading} className="flex-1 h-11 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-60 transition-colors">
              {loading && <Loader2 className="h-4 w-4 animate-spin" />} Criar conta
            </button>
          </div>
        </form>
      </Shell>
    );
  }

  // Login (default)
  return (
    <Shell title="Bem-vindo de volta" subtitle="Aceda à sua conta InfluencerAO">
      <form onSubmit={handleLogin} className="space-y-4">
        <Field id="email" label="Email" type="email" value={email} onChange={setEmail} error={errors.email} icon={<Mail className="h-4 w-4" />} placeholder="voce@email.com" />
        <PasswordInput id="password" label="Senha" value={password} onChange={setPassword} error={errors.password} />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            Manter sessão
          </label>
          <Link href="/recuperar-senha" className="text-blue-600 hover:underline">Esqueceu a senha?</Link>
        </div>

        <button type="submit" disabled={loading} className="w-full h-11 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-60 transition-colors">
          {loading && <Loader2 className="h-4 w-4 animate-spin" />} Entrar
        </button>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200" /></div>
          <div className="relative flex justify-center text-xs"><span className="bg-white px-3 text-slate-500">Novo na InfluencerAO?</span></div>
        </div>

        <button
          type="button"
          onClick={() => setMode("register-choice")}
          className="w-full h-11 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition-colors"
        >
          Criar conta gratuita
        </button>
      </form>
    </Shell>
  );
};

export default Login;
