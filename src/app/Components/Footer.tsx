import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900/95 dark:bg-slate-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 py-6">

          {/* Esquerda — Redes sociais */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-base md:text-lg font-medium text-white">
              Siga-nos
            </p>

            <div className="flex items-center gap-3">
              {[FaInstagram, FaTwitter, FaLinkedin, FaYoutube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={`Rede social ${i + 1}`}
                    className="p-2 bg-white/10 rounded-full text-slate-200 hover:text-blue-600 hover:bg-white/90 transition"
                  >
                    <Icon size={17} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Centro — Logo */}
          <div className="flex justify-center">
            <Link
              href="/"
              aria-label="InfluencerAO - Página inicial"
              className="text-xl md:text-2xl font-bold tracking-tight text-white"
            >
              {/* Substituir pelo logotipo */}
              InfluencerAO
            </Link>
          </div>

          {/* Direita — Links legais */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-base md:text-lg font-medium text-white">
              Informações
            </p>

            <nav className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2 text-sm text-slate-300">
              <Link
                href="/privacidade"
                className="hover:text-white transition"
              >
                Privacidade
              </Link>

              <Link
                href="/termos"
                className="hover:text-white transition"
              >
                Termos
              </Link>

              <Link
                href="/contacto"
                className="hover:text-white transition"
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-500 pt-5 pb-1">
          <p className="text-xs text-slate-300/75 text-center">
            © {new Date().getFullYear()} InfluencerAO. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}