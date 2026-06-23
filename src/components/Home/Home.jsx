import Hero from "../Hero/Hero";
import TraditionSection from "../TraditionSection/TraditionSection";

const Home = () => {
  return (
    <main className="beauty-page">
      {/* ==================== Hero Section ==================== */}
      <Hero />

      {/* ==================== Tradition Section ==================== */}
      <TraditionSection />
    </main>
  );
};

export default Home;