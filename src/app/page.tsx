import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeaturedInfluencers from "./Components/FeaturedInfluencers";
import HowItWorks from "./Components/HowItWorks";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <HeroSection />
      <FeaturedInfluencers />
      <HowItWorks />
      <Testimonials />
     
    </main>
    <Footer />
  </div>
);

export default Index;
