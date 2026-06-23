import Hero from "../Hero/Hero";
import TraditionSection from "../TraditionSection/TraditionSection";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <main className="beauty-page">
      {/* ==================== Hero Section ==================== */}
      <Hero />

      {/* ==================== Tradition Section ==================== */}
      <TraditionSection />

      {/* ==================== Featured Products Section ==================== */}
      <FeaturedProducts />
    </main>
  );
};

export default Home;