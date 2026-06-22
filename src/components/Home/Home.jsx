import { useEffect } from "react";
import Hero from "../Hero/Hero";

const Home = () => {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".beauty-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("beauty-reveal-show");
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="beauty-page">
      {/* ==================== Hero Section ==================== */}
      <Hero />
    </main>
  );
};

export default Home;