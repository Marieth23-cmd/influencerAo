import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../ComponentsEmpresaPublic/Hero";
import Stats from "../ComponentsEmpresaPublic/Stats";
import Campaigns from "../ComponentsEmpresaPublic/Campaigns";
import Reviews from "../ComponentsEmpresaPublic/Reviews";

export default function PerfilEmpresaPublico() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        <Stats />
        <Campaigns />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
} 
