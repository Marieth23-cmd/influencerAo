import HeroSection from "../ComponentsPort2/HeroSection";
import BrandsSection from "../ComponentsPort2/Brandssection";
import PortfolioSection from "../ComponentsPort2/Portfoliosection";

import Metricasection from "../ComponentsPort2/Metricassection";
import ReviewsSection from "../ComponentsPort2/Reviewssection";
import Ctasection from     "../ComponentsPort2/Ctasection";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function InfluencerProfilePage() {
  return (
    <main >
        <Navbar />
        <div className="min-h-screen bg-white font-sans antialiased">
      <HeroSection />
      <BrandsSection />
      <PortfolioSection />
      <Metricasection />
      <ReviewsSection />
      <Ctasection />
        </div>
      <Footer />
    </main>
  );
}