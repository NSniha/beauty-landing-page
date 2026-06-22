import { useEffect, useState } from "react";

import heroBottle from "../../assets/images/hero/hero-bottle.png";
import heroLeaves from "../../assets/images/hero/hero-leaves.png";

import "./Hero.css";

const slides = [
  {
    id: 1,
    desktopTitle: ["Let nature take", "care of your body", "and soul"],
    mobileTitle: ["Let nature take", "care of your", "body and soul"],
    buttonText: "Shop now",
  },
  {
    id: 2,
    desktopTitle: ["Botanical care", "for your glowing", "soft skin"],
    mobileTitle: ["Botanical care", "for glowing", "soft skin"],
    buttonText: "Explore now",
  },
  {
    id: 3,
    desktopTitle: ["Pure skincare", "made with nature", "and love"],
    mobileTitle: ["Pure skincare", "made with nature", "and love"],
    buttonText: "Discover",
  },
  {
    id: 4,
    desktopTitle: ["Fresh beauty", "for your body", "and soul"],
    mobileTitle: ["Fresh beauty", "for your body", "and soul"],
    buttonText: "Shop now",
  },
];

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

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 9L12 15L18 9" />
  </svg>
);

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const currentSlide = slides[activeSlide];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="beauty-hero" id="home">
      {/* ==================== Hero Background ==================== */}
      <div className="beauty-hero__left-bg" />

      <div className="beauty-hero__right-bg">
        <img src={heroLeaves} alt="Green botanical leaves" />
        <span />
      </div>

      <div className="beauty-hero__mobile-bg">
        <img src={heroLeaves} alt="Green botanical leaves" />
        <span />
      </div>

      {/* ==================== Header ==================== */}
      <header className="beauty-header">
        <div className="beauty-container beauty-header__container">
          <a href="#home" className="beauty-logo" aria-label="Velvety home">
            <span>Velvety</span>
            <small>facial & skincare</small>
          </a>

          <nav className="beauty-header__nav" aria-label="Main navigation">
            <a href="#pages">
              Pages
              <ChevronDownIcon />
            </a>
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
          </nav>

          <nav className="beauty-header__actions" aria-label="Account navigation">
            <a href="#login">Login</a>
            <a href="#cart">Cart (0)</a>
          </nav>

          <nav className="beauty-header__mobile-links" aria-label="Mobile quick links">
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

      {/* ==================== Slider Controls ==================== */}
      <div className="beauty-slider-control" aria-label="Hero slider controls">
        <button type="button" onClick={handleNextSlide} aria-label="Next slide">
          <ArrowIcon />
        </button>

        <div>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={activeSlide === index ? "active" : ""}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handlePrevSlide}
          className="prev"
          aria-label="Previous slide"
        >
          <ArrowIcon />
        </button>
      </div>

      {/* ==================== Product Image ==================== */}
      <div key={activeSlide} className="beauty-hero__product">
        <span />
        <img src={heroBottle} alt="Velvety glasswing skincare bottle" />
      </div>

      {/* ==================== Hero Content ==================== */}
      <div className="beauty-container beauty-hero__content">
        <div className="beauty-hero__text" key={currentSlide.id}>
          <h1 className="beauty-title beauty-title--desktop">
            {currentSlide.desktopTitle.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>

          <h1 className="beauty-title beauty-title--mobile">
            {currentSlide.mobileTitle.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>

          <a href="#shop" className="beauty-hero__btn">
            <span>{currentSlide.buttonText}</span>
            <ArrowIcon />
          </a>
        </div>
      </div>

      {/* ==================== Mobile Slider Dots ==================== */}
      <div className="beauty-mobile-dots" aria-label="Mobile hero slider dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={activeSlide === index ? "active" : ""}
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