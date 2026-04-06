import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-800 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Conteúdo principal */}
        <div className="grid gap-12 lg:grid-cols-3">

          {/* Branding */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Influencer<span className="text-blue-600">AO</span>
            </h2>

            <p className="text-slate-300 leading-relaxed max-w-sm">
              Conectamos marcas e criadores para campanhas que geram resultados reais.
              Cresça com estratégia, dados e influência.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 pt-2">
              {[FaInstagram, FaTwitter, FaLinkedin, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-yellow-400 hover:bg-slate-700 transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 lg:col-span-2">

            {/* Empresa */}
            <div>
              <h3 className="font-semibold text-white mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white transition">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>

           
            {/* Suporte */}
            <div>
              <h3 className="font-semibold text-white mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Parceiros</a></li>
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h3 className="font-semibold text-white mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Guias</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} InfluencerAO. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition">Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos</a>
             <a href="#" className="hover:text-white transition">Cookies</a>
          </div>

        </div>
      </div>
    </footer>
  );
}