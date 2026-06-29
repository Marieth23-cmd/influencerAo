import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeaturedInfluencers from "./Components/FeaturedInfluencers";
import Footer from "./Components/Footer";
import Cta from "./Components/Cta";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <HeroSection />
      <FeaturedInfluencers />
       </main>
      <Cta />
      <Footer />
     </div>
);

export default Index;
