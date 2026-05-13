 "use client";
import { useState, useMemo, useRef } from "react";
import {
  Building2,
  Sparkles,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Upload,
  Music2,
  ShieldCheck,
  CheckCircle2,
  Loader2,
  ArrowLeft,
  BadgeCheck,
  AlertCircle,
 
} from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";


type Role = "influencer" | "company" | null;
type Step = "choose" | "form" | "verify" | "done";

const NICHES = [
  "Lifestyle",
  "Moda Africana",
  "Beleza",
  "Tecnologia",
  "Gaming",
  "Kuduro / Música",
  "Comédia",
  "Gastronomia",
  "Viagens",
  "Fitness",
  "Negócios",
  "Educação",
];

/* ---------- Utilidades de validação (locais) ---------- */
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const isCorporateEmail = (v: string) => {
  if (!isEmail(v)) return false;
  const free = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "icloud.com", "live.com"];
  const domain = v.split("@")[1]?.toLowerCase() ?? "";
  return !free.includes(domain);
};
const isNIF = (v: string) => /^\d{9,10}$/.test(v.trim());
const passwordScore = (pw: string) => {
  let s = 0;
  if (pw.length >= 10) s++;
  if (pw.length >= 14) s++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw) && /[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw) && pw.length >= 12) s++;
  return Math.min(s, 4);
};
const STRENGTH = [
  { label: "Muito fraca", color: "bg-red-500" },
  { label: "Fraca", color: "bg-orange-500" },
  { label: "Razoável", color: "bg-yellow-500" },
  { label: "Forte", color: "bg-blue-500" },
  { label: "Muito forte", color: "bg-blue-700" },
];

/* ============================================================
                          PÁGINA
   ============================================================ */
export default function Register() {
  const [role, setRole] = useState<Role>(null);
  const [step, setStep] = useState<Step>("choose");

  /* Campos partilhados */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [accept, setAccept] = useState(false);
  const [showPw, setShowPw] = useState(false);

  /* Influencer */
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [instagram, setInstagram] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [youtube, setYoutube] = useState("");
  const [niche, setNiche] = useState("");

  /* Empresa */
  const [company, setCompany] = useState("");
  const [nif, setNif] = useState("");

  /* Verificação */
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const codeRefs = useRef<Array<HTMLInputElement | null>>([]);

  /* UI */
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const score = useMemo(() => passwordScore(password), [password]);
  const fileRef = useRef<HTMLInputElement | null>(null);

  /* ---------- handlers ---------- */
  const onPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 3 * 1024 * 1024) {
      setErrors((p) => ({ ...p, photo: "Máximo 3MB" }));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result as string);
    reader.readAsDataURL(f);
  };

  const validateForm = () => {
    const e: Record<string, string> = {};
    if (role === "influencer") {
      if (name.trim().length < 3) e.name = "Nome muito curto";
      if (!isEmail(email)) e.email = "Email inválido";
      if (!instagram && !tiktok && !youtube)
        e.social = "Adicione pelo menos uma rede social";
      if (!niche) e.niche = "Escolha um nicho";
    } else {
      if (company.trim().length < 2) e.company = "Nome da empresa obrigatório";
      if (!isCorporateEmail(email))
        e.email = "Use um email corporativo (não @gmail, @hotmail...)";
      if (!isNIF(nif)) e.nif = "NIF inválido (9 ou 10 dígitos)";
    }
    if (score < 3) e.password = "Senha demasiado fraca";
    if (password !== confirm) e.confirm = "As senhas não coincidem";
    if (!accept) e.accept = "Deve aceitar os termos";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submitForm = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("verify");
    }, 900);
  };

  const onCodeChange = (i: number, v: string) => {
    const clean = v.replace(/\D/g, "").slice(0, 1);
    const next = [...code];
    next[i] = clean;
    setCode(next);
    if (clean && i < 5) codeRefs.current[i + 1]?.focus();
  };

  const submitCode = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (code.join("").length !== 6) {
      setErrors({ code: "Insira o código de 6 dígitos" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("done");
    }, 900);
  };

  /* ============================================================
                            RENDER
     ============================================================ */
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col">
      {/* Top bar */}
      <header className="px-6 py-4 flex items-center justify-between max-w-6xl mx-auto w-full">
        <a href="/" className="flex items-center gap-2 group">
         
          <span className="font-bold text-slate-900">InfluencerAO</span>
        </a>
        <a
          href="/login"
          className="text-sm text-slate-600 hover:text-blue-600 font-medium"
        >
          Já tem conta? <span className="text-blue-600">Entrar</span>
        </a>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl">
          {/* Stepper */}
          <Stepper step={step} />

          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-blue-600/5 p-6 sm:p-8">
            {/* ========== STEP 1: ESCOLHA ========== */}
            {step === "choose" && (
              <div>
                <h1 className="text-2xl font-bold text-slate-900 mb-1">
                  Crie a sua conta
                </h1>
                <p className="text-slate-600 mb-6 text-sm">
                  Como pretende usar a InfluencerAO?
                </p>

                <div className="grid gap-3">
                  <RoleCard
                    icon={<Sparkles className="h-6 w-6" />}
                    title="Sou Influencer"
                    desc="Quero monetizar o meu conteúdo e fechar campanhas com marcas."
                    onClick={() => {
                      setRole("influencer");
                      setStep("form");
                    }}
                  />
                  <RoleCard
                    icon={<Building2 className="h-6 w-6" />}
                    title="Sou Empresa"
                    desc="Quero contratar influencers para divulgar a minha marca."
                    onClick={() => {
                      setRole("company");
                      setStep("form");
                    }}
                  />
                </div>

                <TrustNote />
              </div>
            )}

            {/* ========== STEP 2: FORM ========== */}
            {step === "form" && (
              <form onSubmit={submitForm} className="space-y-4">
                <button
                  type="button"
                  onClick={() => setStep("choose")}
                  className="flex items-center gap-1 text-sm text-slate-600 hover:text-blue-600"
                >
                  <ArrowLeft className="h-4 w-4" /> voltar
                </button>

                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    {role === "influencer"
                      ? "Cadastro de Influencer"
                      : "Cadastro de Empresa"}
                  </h1>
                  <p className="text-sm text-slate-600">
                    Preencha os dados para criar a sua conta verificada.
                  </p>
                </div>

                {/* Influencer-only: foto */}
                {role === "influencer" && (
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 rounded-full bg-blue-100 border-2 border-blue-200 overflow-hidden flex items-center justify-center">
                      {photo ? (
                        <Image
                          height={80}
                          width={80}
                          src={photo}
                          alt="avatar"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <User className="h-8 w-8 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => fileRef.current?.click()}
                        className="inline-flex items-center gap-2 h-9 px-3 rounded-lg border border-slate-300 hover:border-blue-600 hover:text-blue-600 text-sm font-medium text-slate-700"
                      >
                        <Upload className="h-4 w-4" /> Carregar foto
                      </button>
                      <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        onChange={onPhoto}
                        className="hidden"
                      />
                      <p className="text-xs text-slate-500 mt-1">
                        JPG ou PNG. Máx. 3MB.
                      </p>
                      {errors.photo && (
                        <p className="text-xs text-red-600 mt-1">{errors.photo}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Campos por tipo */}
                {role === "influencer" ? (
                  <>
                    <Field
                      label="Nome completo"
                      icon={<User className="h-4 w-4" />}
                      value={name}
                      onChange={setName}
                      placeholder="Ex: Joana Manuel"
                      error={errors.name}
                    />
                    <Field
                      label="Email"
                      type="email"
                      icon={<Mail className="h-4 w-4" />}
                      value={email}
                      onChange={setEmail}
                      placeholder="voce@exemplo.com"
                      error={errors.email}
                    />

                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                        Redes sociais{" "}
                        <span className="text-xs text-slate-400">
                          (pelo menos uma)
                        </span>
                      </label>
                      <div className="space-y-2">
                        <SocialField
                          icon={<FaInstagram className="h-4 w-4 text-pink-500" />}
                          prefix="@"
                          value={instagram}
                          onChange={setInstagram}
                          placeholder="instagram"
                        />
                        <SocialField
                          icon={<Music2 className="h-4 w-4 text-slate-900" />}
                          prefix="@"
                          value={tiktok}
                          onChange={setTiktok}
                          placeholder="tiktok"
                        />
                        <SocialField
                          icon={< FaYoutube  className="h-4 w-4 text-red-500" />}
                          value={youtube}
                          onChange={setYoutube}
                          placeholder="https://youtube.com/@..."
                        />
                      </div>
                      {errors.social && (
                        <p className="text-xs text-red-600 mt-1">{errors.social}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                        Nicho principal
                      </label>
                      <select
                        value={niche}
                        onChange={(e) => setNiche(e.target.value)}
                        className={`w-full h-11 rounded-lg border bg-white px-3 text-slate-900 outline-none focus:ring-2 ${
                          errors.niche
                            ? "border-red-500 focus:ring-red-200"
                            : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                        }`}
                      >
                        <option value="">Selecione...</option>
                        {NICHES.map((n) => (
                          <option key={n}>{n}</option>
                        ))}
                      </select>
                      {errors.niche && (
                        <p className="text-xs text-red-600 mt-1">{errors.niche}</p>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <Field
                      label="Nome da empresa"
                      icon={<Building2 className="h-4 w-4" />}
                      value={company}
                      onChange={setCompany}
                      placeholder="Ex: Acme Lda."
                      error={errors.company}
                    />
                    <Field
                      label="Email corporativo"
                      type="email"
                      icon={<Mail className="h-4 w-4" />}
                      value={email}
                      onChange={setEmail}
                      placeholder="nome@empresa.co.ao"
                      error={errors.email}
                      hint="Não aceitamos emails pessoais (@gmail, @hotmail...)"
                    />
                    <Field
                      label="NIF"
                      icon={<BadgeCheck className="h-4 w-4" />}
                      value={nif}
                      onChange={setNif}
                      placeholder="5417XXXXXX"
                      error={errors.nif}
                      hint="9 ou 10 dígitos"
                    />
                  </>
                )}

                {/* Senhas */}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPw ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full h-11 rounded-lg border pl-9 pr-10 text-slate-900 outline-none focus:ring-2 ${
                        errors.password
                          ? "border-red-500 focus:ring-red-200"
                          : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                    >
                      {showPw ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {password && (
                    <div className="mt-2 space-y-1">
                      <div className="flex gap-1 h-1.5">
                        {[0, 1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-full transition-colors ${
                              i < score ? STRENGTH[score].color : "bg-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-slate-600">
                        Força:{" "}
                        <span className="font-medium">{STRENGTH[score].label}</span>
                      </p>
                    </div>
                  )}
                  {errors.password && (
                    <p className="text-xs text-red-600 mt-1">{errors.password}</p>
                  )}
                </div>

                <Field
                  label="Confirmar senha"
                  type={showPw ? "text" : "password"}
                  icon={<Lock className="h-4 w-4" />}
                  value={confirm}
                  onChange={setConfirm}
                  error={errors.confirm}
                />

                <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={accept}
                    onChange={(e) => setAccept(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>
                    Aceito os{" "}
                    <a className="text-blue-600 hover:underline" href="#">
                      Termos
                    </a>{" "}
                    e a{" "}
                    <a className="text-blue-600 hover:underline" href="#">
                      Política de Privacidade
                    </a>
                    .
                  </span>
                </label>
                {errors.accept && (
                  <p className="text-xs text-red-600 -mt-2">{errors.accept}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-60 transition"
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  Criar conta
                </button>

                <TrustNote />
              </form>
            )}

            {/* ========== STEP 3: VERIFICAÇÃO ========== */}
            {step === "verify" && (
              <form onSubmit={submitCode} className="space-y-5">
                <div className="text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    Verifique o seu email
                  </h1>
                  <p className="text-sm text-slate-600 mt-1">
                    Enviámos um código de 6 dígitos para{" "}
                    <strong className="text-slate-900">{email}</strong>
                  </p>
                </div>

                <div className="flex justify-center gap-2">
                  {code.map((c, i) => (
                    <input
                      key={i}
                      ref={(el) => {
                        codeRefs.current[i] = el;
                      }}
                      value={c}
                      onChange={(e) => onCodeChange(i, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace" && !c && i > 0)
                          codeRefs.current[i - 1]?.focus();
                      }}
                      inputMode="numeric"
                      maxLength={1}
                      className="h-12 w-11 text-center text-lg font-bold rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
                    />
                  ))}
                </div>
                {errors.code && (
                  <p className="text-xs text-red-600 text-center">{errors.code}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  Verificar conta
                </button>

                <p className="text-center text-sm text-slate-600">
                  Não recebeu?{" "}
                  <button
                    type="button"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Reenviar código
                  </button>
                </p>
              </form>
            )}

            {/* ========== STEP 4: SUCESSO ========== */}
            {step === "done" && (
              <div className="text-center space-y-5 py-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center">
                  <CheckCircle2 className="h-9 w-9 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    Bem-vindo à InfluencerAO!
                  </h1>
                  <p className="text-sm text-slate-600 mt-1">
                    A sua conta foi criada com sucesso.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
                  <BadgeCheck className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">
                    Em análise para o badge &quot;Verificado&quot;
                  </span>
                </div>

                <div className="text-left bg-blue-50/50 border border-blue-100 rounded-lg p-4 text-sm text-slate-700 space-y-2">
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                    Email verificado.
                  </p>
                  <p className="flex items-start gap-2">
                    <Loader2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0 animate-spin" />
                    {role === "company"
                      ? "Validação do NIF e dados fiscais (até 24h)."
                      : "Verificação das redes sociais (até 24h)."}
                  </p>
                  <p className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
                    Receberá um email assim que for activada.
                  </p>
                </div>

                <a
                  href="/"
                  className="inline-block w-full h-11 leading-[44px] rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
                >
                  Ir para a página inicial
                </a>
              </div>
            )}
          </div>

          <p className="text-center text-xs text-slate-500 mt-6">
            © {new Date().getFullYear()} InfluencerAO · Luanda, Angola
          </p>
        </div>
      </main>
    </div>
  );
}

/* ============================================================
              COMPONENTES INTERNOS (mesmo arquivo)
   ============================================================ */

function Stepper({ step }: { step: Step }) {
  const idx = step === "choose" ? 0 : step === "form" ? 1 : step === "verify" ? 2 : 3;
  const labels = ["Perfil", "Dados", "Verificar", "Pronto"];
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {labels.map((l, i) => (
        <div key={l} className="flex items-center gap-2">
          <div
            className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              i <= idx
                ? "bg-blue-600 text-white"
                : "bg-slate-200 text-slate-500"
            }`}
          >
            {i < idx ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
          </div>
          <span
            className={`text-xs font-medium hidden sm:inline ${
              i <= idx ? "text-blue-600" : "text-slate-400"
            }`}
          >
            {l}
          </span>
          {i < labels.length - 1 && (
            <div
              className={`w-6 h-px ${i < idx ? "bg-blue-600" : "bg-slate-200"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function RoleCard({
  icon,
  title,
  desc,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left rounded-xl border-2 border-slate-200 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/5 p-5 transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600 mt-0.5">{desc}</p>
        </div>
      </div>
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  hint,
  icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700 mb-1.5 block">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full h-11 rounded-lg border ${
            icon ? "pl-9 pr-3" : "px-3"
          } text-slate-900 outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-200"
              : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
          }`}
        />
      </div>
      {hint && !error && (
        <p className="text-xs text-slate-500 mt-1">{hint}</p>
      )}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}

function SocialField({
  icon,
  prefix,
  value,
  onChange,
  placeholder,
}: {
  icon: React.ReactNode;
  prefix?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</span>
      {prefix && (
        <span className="absolute left-9 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
          {prefix}
        </span>
      )}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full h-11 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none ${
          prefix ? "pl-12" : "pl-9"
        } pr-3 text-slate-900`}
      />
    </div>
  );
}

function TrustNote() {
  return (
    <div className="flex items-start gap-2 text-xs text-slate-500 mt-5 pt-4 border-t border-slate-100">
      <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
      <p>
        Todas as contas passam por verificação manual antes de poderem
        transaccionar. Os seus dados são encriptados e nunca partilhados.
      </p>
    </div>
  );
}
