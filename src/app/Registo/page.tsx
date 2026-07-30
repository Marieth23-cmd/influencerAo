
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

type Step = 1 | 2 | 3;

export default function Register() {
  const [step, setStep] = useState<Step>(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [instagram, setInstagram] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [youtube, setYoutube] = useState("");
  const [niche, setNiche] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const niches = [
    "Lifestyle",
    "Moda",
    "Beleza",
    "Tecnologia",
    "Gaming",
    "Música",
    "Comédia",
    "Gastronomia",
    "Viagens",
    "Fitness",
    "Negócios",
    "Educação",
  ];

  /* ---------------- VALIDAÇÃO ---------------- */

  const isEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    /* PASSO 1 */
    if (step === 1) {
      if (name.trim().length < 3) {
        newErrors.name = "Introduza o seu nome completo.";
      }

      if (!isEmail(email)) {
        newErrors.email = "Introduza um email válido.";
      }
    }

    /* PASSO 2 */
    if (step === 2) {
      if (!niche) {
        newErrors.niche = "Selecione pelo menos um nicho.";
      }
    }

    /* PASSO 3 */
    if (step === 3) {
      if (password.length < 8) {
        newErrors.password = "A senha deve ter pelo menos 8 caracteres.";
      }

      if (password.length > 20) {
        newErrors.password = "A senha pode ter no máximo 20 caracteres.";
      }

      if (!/^[A-Za-z0-9]+$/.test(password)) {
        newErrors.password =
          "A senha deve conter apenas letras e números.";
      }

      if (password !== confirmPassword) {
        newErrors.confirmPassword = "As senhas não coincidem.";
      }

      if (!acceptTerms) {
        newErrors.terms = "Aceite os termos para continuar.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* ---------------- NAVEGAÇÃO ---------------- */

  const nextStep = () => {
    if (!validateStep()) return;

    if (step < 3) {
      setStep((step + 1) as Step);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((step - 1) as Step);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep()) return;

    // Futuramente:
    // enviar os dados para a API
    console.log({
      name,
      email,
      instagram,
      tiktok,
      youtube,
      niche,
      password,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* LOGO */}
        <div className="flex justify-center mb-7">
          <Link
            href="/"
            className="text-2xl font-bold text-slate-900"
          >
            Influencer<span className="text-blue-600">AO</span>
          </Link>
        </div>

        {/* STEPPER */}
        <div className="flex items-center justify-center mb-6">

          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center">

              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                ${
                  item <= step
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {item < step ? (
                  <Check className="h-4 w-4" />
                ) : (
                  item
                )}
              </div>

              {item !== 3 && (
                <div
                  className={`w-12 h-px mx-2 ${
                    item < step
                      ? "bg-blue-600"
                      : "bg-slate-200"
                  }`}
                />
              )}

            </div>
          ))}

        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl shadow-slate-200/60 p-7">

          {/* ---------------- PASSO 1 ---------------- */}

          {step === 1 && (
            <div className="space-y-5">

              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  Criar a sua conta
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                  Comece com os seus dados básicos.
                </p>
              </div>

              {/* NOME */}
              <div className="space-y-1.5">

                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-700"
                >
                  Nome 
                </label>

                <div className="relative">

                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />

                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Joana Manuel"
                    className="w-full h-11 rounded-lg border border-slate-300 pl-10 pr-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                </div>

                {errors.name && (
                  <p className="text-xs text-red-600">
                    {errors.name}
                  </p>
                )}

              </div>

              {/* EMAIL */}
              <div className="space-y-1.5">

                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email
                </label>

                <div className="relative">

                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="voce@email.com"
                    className="w-full h-11 rounded-lg border border-slate-300 pl-10 pr-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                </div>

                {errors.email && (
                  <p className="text-xs text-red-600">
                    {errors.email}
                  </p>
                )}

              </div>

            </div>
          )}

          {/* ---------------- PASSO 2 ---------------- */}

          {step === 2 && (
            <div className="space-y-5">

              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  O seu perfil
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                  Conte-nos onde podemos encontrar o seu conteúdo.
                </p>
              </div>

              {/* INSTAGRAM */}
              <div className="space-y-1.5">

                <label className="text-sm font-medium text-slate-700">
                  Instagram
                </label>

                <div className="relative">

                  <FaInstagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />

                  <input
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="@seunome"
                    className="w-full h-11 rounded-lg border border-slate-300 pl-10 pr-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                </div>

              </div>

              {/* TIKTOK */}
              <div className="space-y-1.5">

                <label className="text-sm font-medium text-slate-700">
                  TikTok
                </label>

                <input
                  value={tiktok}
                  onChange={(e) => setTiktok(e.target.value)}
                  placeholder="@seunome"
                  className="w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* YOUTUBE */}
              <div className="space-y-1.5">

                <label className="text-sm font-medium text-slate-700">
                  YouTube
                </label>

                <input
                  value={youtube}
                  onChange={(e) => setYoutube(e.target.value)}
                  placeholder="Nome do canal"
                  className="w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* NICHO */}
              <div className="space-y-1.5">

                <label className="text-sm font-medium text-slate-700">
                  Principal nicho
                </label>

                <select
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full h-11 rounded-lg border border-slate-300 px-3 bg-white outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">
                    Selecione o seu nicho
                  </option>

                  {niches.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                {errors.niche && (
                  <p className="text-xs text-red-600">
                    {errors.niche}
                  </p>
                )}

              </div>

            </div>
          )}

          {/* ---------------- PASSO 3 ---------------- */}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  Defina a sua senha
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                  Use letras e números para proteger a sua conta.
                </p>
              </div>

              {/* SENHA */}
              <div className="space-y-1.5">

                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Senha
                </label>

                <div className="relative">

                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    maxLength={20}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-11 rounded-lg border border-slate-300 pl-10 pr-10 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>

                </div>

                <p className="text-xs text-slate-400">
                  8 a 20 caracteres, apenas letras e números.
                </p>

                {errors.password && (
                  <p className="text-xs text-red-600">
                    {errors.password}
                  </p>
                )}

              </div>

              {/* CONFIRMAR SENHA */}
              <div className="space-y-1.5">

                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-slate-700"
                >
                  Confirmar senha
                </label>

                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  maxLength={20}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

                {errors.confirmPassword && (
                  <p className="text-xs text-red-600">
                    {errors.confirmPassword}
                  </p>
                )}

              </div>

              {/* TERMOS */}
              <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">

                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />

                <span>
                  Aceito os{" "}
                  <Link
                    href="/termos"
                    className="text-blue-600 hover:underline"
                  >
                    Termos
                  </Link>{" "}
                  e a{" "}
                  <Link
                    href="/privacidade"
                    className="text-blue-600 hover:underline"
                  >
                    Política de Privacidade
                  </Link>
                  .
                </span>

              </label>

              {errors.terms && (
                <p className="text-xs text-red-600">
                  {errors.terms}
                </p>
              )}

            </form>
          )}

          {/* NAVEGAÇÃO */}

          <div className="flex items-center justify-between mt-7">

            {step > 1 ? (
              <button
                type="button"
                onClick={previousStep}
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </button>
            ) : (
              <Link
                href="/Login"
                className="text-sm text-slate-500 hover:text-blue-600 transition"
              >
                Já tenho conta
              </Link>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 h-11 px-5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
              >
                Continuar
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex items-center gap-2 h-11 px-5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
              >
                Criar conta
               
              </button>
            )}

          </div>

        </div>

        {/* VOLTAR */}
        <Link
          href="/"
          className="fixed bottom-6 left-6 flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>

      </div>

    </main>
  );
}
