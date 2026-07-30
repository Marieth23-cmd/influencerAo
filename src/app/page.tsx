import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

import Footer from "./Components/Footer";
import Catalogo from "./Components/Catalogo";


const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <HeroSection />

          <Catalogo/>
            </main>
      
      <Footer />
     </div>
);

export default Index;
