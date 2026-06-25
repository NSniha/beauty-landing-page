import Hero from "../Hero/Hero";
import TraditionSection from "../TraditionSection/TraditionSection";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import AboutSection from "../AboutSection/AboutSection";
import AllProducts from "../AllProducts/AllProducts";
import SkinDiagnosis from "../SkinDiagnosis/SkinDiagnosis";

const Home = () => {
  return (
    <main className="beauty-page">
      {/* ==================== Hero Section ==================== */}
      <Hero />

      {/* ==================== Tradition Section ==================== */}
      <TraditionSection />

      {/* ==================== Featured Products Section ==================== */}
      <FeaturedProducts />

      {/* ==================== About Section ==================== */}
      <AboutSection />

      {/* ==================== All Products Section ==================== */}
      <AllProducts />

      {/* ==================== Skin Diagnosis Section ==================== */}
      <SkinDiagnosis />
    </main>
  );
};

export default Home;