import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeaturedInfluencers from "./Components/FeaturedInfluencers";
import HowItWorks from "./Components/HowItWorks";
import Testimonials from "./Components/Testimonials";
import Benefits from "./Components/Benefits";
import FutureTools from "./Components/FutureTools";
import CTASection from "./Components/CTASection";
import Footer from "./Components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <HeroSection />
      <FeaturedInfluencers />
      <HowItWorks />
      <Testimonials />
      <Benefits />
      <FutureTools />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
