import { useState } from "react";

import heroBottle from "../../assets/images/hero/hero-bottle.png";
import heroLeaves from "../../assets/images/hero/hero-leaves.png";

import "./Hero.css";

const sliderDots = [1, 2, 3, 4];

const ArrowIcon = () => (
  <svg viewBox="0 0 64 24" aria-hidden="true">
    <path d="M1 12H51" />
    <path d="M42 3C47 8 52 11 62 12C52 13 47 16 42 21" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 7H19" />
    <path d="M5 12H19" />
    <path d="M5 17H19" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 6L18 18" />
    <path d="M18 6L6 18" />
  </svg>
);

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 9L12 15L18 9" />
  </svg>
);

const Hero = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNextSlide = () => {
    setActiveDot((prev) => (prev + 1) % sliderDots.length);
  };

  const handlePrevSlide = () => {
    setActiveDot((prev) => (prev === 0 ? sliderDots.length - 1 : prev - 1));
  };

  return (
    <section className="beauty-hero" id="home">
      {/* ==================== Hero Background ==================== */}
      <div className="beauty-hero__top">
        <div className="beauty-hero__left-bg" />

        <div className="beauty-hero__right-bg">
          <img src={heroLeaves} alt="Green botanical leaves" />
          <span />
        </div>

        <div className="beauty-hero__mobile-bg">
          <img src={heroLeaves} alt="Green botanical leaves" />
          <span />
        </div>
      </div>

      {/* ==================== Bottom Cream Area ==================== */}
      <div className="beauty-hero__bottom" />

      {/* ==================== Header ==================== */}
      <header className="beauty-header">
        <div className="beauty-container beauty-header__inner">
          <a href="#home" className="beauty-logo" aria-label="Velvety home">
            <span>Velvety</span>
            <small>facial & skincare</small>
          </a>

          <nav className="beauty-nav" aria-label="Main navigation">
            <a href="#pages">
              Pages
              <ChevronIcon />
            </a>

            <a href="#shop">Shop</a>
            <a href="#about">About</a>
          </nav>

          <nav className="beauty-actions" aria-label="Account navigation">
            <a href="#login">Login</a>
            <a href="#cart">Cart (0)</a>
          </nav>

          <nav className="beauty-mobile-quick" aria-label="Mobile quick navigation">
            <a href="#shop">Shop</a>
            <a href="#cart">Cart (0)</a>
          </nav>

          <button
            type="button"
            className="beauty-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* ==================== Hero Content Area ==================== */}
      <div className="beauty-container beauty-hero__inner">
        {/* ==================== Slider Controls ==================== */}
        <div className="beauty-slider">
          <button type="button" onClick={handleNextSlide} aria-label="Next slide">
            <ArrowIcon />
          </button>

          <div className="beauty-slider__dots">
            {sliderDots.map((dot, index) => (
              <button
                key={dot}
                type="button"
                className={activeDot === index ? "active" : ""}
                onClick={() => setActiveDot(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="beauty-slider__prev"
            onClick={handlePrevSlide}
            aria-label="Previous slide"
          >
            <ArrowIcon />
          </button>
        </div>

        {/* ==================== Product Image ==================== */}
        <div className="beauty-product">
          <img src={heroBottle} alt="Velvety skincare bottle" />
        </div>

        {/* ==================== Hero Text ==================== */}
        <div className="beauty-copy">
          <h1>
            <span>Let nature take</span>
            <span>care of your body</span>
            <span>and soul</span>
          </h1>

          <a href="#shop" className="beauty-shop-btn">
            <span>Shop now</span>
            <ArrowIcon />
          </a>
        </div>
      </div>

      {/* ==================== Mobile Slider Dots ==================== */}
      <div className="beauty-mobile-dots">
        {sliderDots.map((dot, index) => (
          <button
            key={dot}
            type="button"
            className={activeDot === index ? "active" : ""}
            onClick={() => setActiveDot(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* ==================== Mobile Menu ==================== */}
      <div
        className={`beauty-menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`beauty-mobile-menu ${menuOpen ? "show" : ""}`}>
        <button
          type="button"
          className="beauty-mobile-menu__close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <CloseIcon />
        </button>

        <nav>
          <a href="#pages" onClick={() => setMenuOpen(false)}>
            Pages
          </a>

          <a href="#shop" onClick={() => setMenuOpen(false)}>
            Shop
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#login" onClick={() => setMenuOpen(false)}>
            Login
          </a>

          <a href="#cart" onClick={() => setMenuOpen(false)}>
            Cart (0)
          </a>
        </nav>
      </aside>
    </section>
  );
};

export default Hero;