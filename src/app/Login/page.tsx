
"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Futuramente:
    // chamada à API para autenticar o influencer
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

      

        {/* Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl shadow-slate-200/60 p-8">
      {/* Logo */}
            <div className="flex justify-center mb-8">
              <Link
                href="/"
                className="text-2xl font-bold text-slate-900"
              >
                Influencer<span className="text-blue-600">AO</span>
              </Link>
            </div>

          {/* Título */}
          <div className="text-center mb-7">
            <h1 className="text-2xl font-bold text-slate-900">
              Bem-vindo de volta
            </h1>

           
          </div>

          {/* Formulário */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
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
                  className="w-full h-11 rounded-lg border border-slate-300 bg-white pl-10 pr-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Palavra-passe */}
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
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 rounded-lg border border-slate-300 bg-white pl-10 pr-10 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition"
                  aria-label={
                    showPassword
                      ? "Ocultar palavra-passe"
                      : "Mostrar palavra-passe"
                  }
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Opções */}
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

              <Link
                href="/recuperar-senha"
                className="text-blue-600 hover:text-blue-700 hover:underline transition"
              >
                Esqueceu senha?
              </Link>

            </div>

            {/* Entrar */}
            <button
              type="submit"
              className="w-full h-11 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              Iniciar sessão
            </button>

          </form>

          {/* Voltar */}
          <div className="text-center mt-6">
            <Link
              href="/"
              className="text-sm text-slate-500 hover:text-blue-600 transition"
            >
               Já tem conta? <span className="text-blue-600 cursor-pointer">Criar conta</span>
            </Link>
          </div>

        </div>

            <Link
        href="/"
        className="fixed bottom-4 left-4 flex items-center gap-2 text-sm px-3 py-2 rounded-lg   text-gray-600 transition"
      >
        ← Voltar
      </Link>

      </div>

    </main>
  );
}

