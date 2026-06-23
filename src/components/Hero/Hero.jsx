import { useEffect, useState } from "react";

import heroBottle from "../../assets/images/hero/hero-bottle.png";
import heroBottleTwo from "../../assets/images/hero/hero-bottle-2.png";
import heroBottleThree from "../../assets/images/hero/hero-bottle-3.png";
import heroLeaves from "../../assets/images/hero/hero-leaves.png";

import "./Hero.css";

const heroSlides = [
  {
    id: 1,
    productName: "Glasswing Serum",
    productImage: heroBottle,
    title: ["Let nature take", "care of your body", "and soul"],
  },
  {
    id: 2,
    productName: "Botanical Face Oil",
    productImage: heroBottleTwo,
    title: ["Glow softly with", "pure green beauty", "every day"],
  },
  {
    id: 3,
    productName: "Velvety Skin Toner",
    productImage: heroBottleThree,
    title: ["Fresh skincare for", "your calm body", "and mind"],
  },
];

const containerClass =
  "mx-auto w-[min(calc(100%_-_128px),1380px)] max-[1600px]:w-[min(calc(100%_-_112px),1320px)] max-[1440px]:w-[min(calc(100%_-_96px),1240px)] max-[1280px]:w-[min(calc(100%_-_96px),1180px)] max-[1024px]:w-[calc(100%_-_72px)] max-[880px]:w-[calc(100%_-_48px)] max-[767px]:w-[calc(100%_-_30px)] max-[360px]:w-[calc(100%_-_26px)]";

const desktopLinkClass =
  "relative inline-flex items-center gap-[11px] font-['Inter',sans-serif] text-[17px] font-normal uppercase leading-none text-[#f8faf4] no-underline after:absolute after:left-0 after:bottom-[-9px] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-[350ms] hover:after:w-full max-[1440px]:text-[16px] max-[1024px]:text-[14px]";

const mobileMenuLinkClass =
  "font-['Inter',sans-serif] text-[17px] font-normal uppercase tracking-[0.08em] text-[#233b25] no-underline";

const ArrowIcon = ({ className = "", strokeWidth = 1.45 }) => (
  <svg viewBox="0 0 64 24" aria-hidden="true" className={className}>
    <path
      d="M1 12H51"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 3C47 8 52 11 62 12C52 13 47 16 42 21"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path
      d="M5 7H19"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    <path
      d="M5 12H19"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    <path
      d="M5 17H19"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path
      d="M6 6L18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    <path
      d="M18 6L6 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path
      d="M6 9L12 15L18 9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Hero = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeSlide = heroSlides[activeDot];

  const handleNextSlide = () => {
    setActiveDot((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setActiveDot((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate h-screen min-h-[850px] w-full overflow-hidden bg-[#eef3ec] max-[1600px]:min-h-[820px] max-[1440px]:min-h-[800px] max-[1280px]:min-h-[760px] max-[1024px]:min-h-[700px] max-[880px]:min-h-[660px] max-[767px]:h-[100svh] max-[767px]:min-h-[720px] max-[767px]:bg-[#07100b]"
    >
      {/* ==================== Hero Background ==================== */}
      <div className="absolute inset-x-0 top-0 z-[1] h-[83.34%] max-[767px]:h-full">
        <div className="absolute left-0 top-0 h-full w-[49.35%] bg-[#8fa58d] max-[767px]:hidden" />

        <div className="absolute right-0 top-0 h-full w-[50.65%] overflow-hidden max-[767px]:hidden">
          <img
            src={heroLeaves}
            alt="Green botanical leaves"
            className="block h-full w-full object-cover object-center"
          />

          <span className="absolute inset-0 bg-black/25" />
        </div>

        <div className="absolute inset-0 z-[1] hidden overflow-hidden max-[767px]:block">
          <img
            src={heroLeaves}
            alt="Green botanical leaves"
            className="block h-full w-full scale-[1.02] object-cover object-[center_top]"
          />

          <span className="absolute inset-0 bg-black/[0.18]" />
        </div>
      </div>

      {/* ==================== Bottom Cream Area ==================== */}
      <div className="absolute bottom-0 left-0 z-0 h-[16.66%] w-full bg-[#eef3ec] max-[767px]:hidden" />

      {/* ==================== Header ==================== */}
      <header className="absolute left-0 top-0 z-40 w-full pt-[27px] max-[1024px]:pt-[22px] max-[767px]:pt-[15px]">
        <div className={`${containerClass} relative h-[64px] max-[767px]:h-[44px]`}>
          <a
            href="#home"
            className="absolute left-[16px] top-0 text-center text-[#f8faf4] no-underline max-[1024px]:left-0 max-[767px]:text-left"
            aria-label="Velvety home"
          >
            <span className="block font-['Cormorant_Garamond',serif] text-[36px] font-normal uppercase leading-[0.82] tracking-[0.035em] max-[1440px]:text-[34px] max-[1024px]:text-[30px] max-[880px]:text-[27px] max-[767px]:text-[clamp(23px,7.6vw,26px)] max-[767px]:leading-[0.78] max-[767px]:tracking-[0.04em]">
              Velvety
            </span>

            <small className="mt-[8px] block font-['Great_Vibes',cursive] text-[17px] font-normal lowercase leading-none tracking-[0.01em] max-[1440px]:text-[16px] max-[1024px]:mt-[6px] max-[1024px]:text-[14px] max-[880px]:text-[13px] max-[767px]:mt-[5px] max-[767px]:pl-[17px] max-[767px]:text-[clamp(12px,3.6vw,14px)] max-[360px]:pl-[15px]">
              facial & skincare
            </small>
          </a>

          {/* ==================== Desktop Navigation ==================== */}
          <nav
            className="absolute left-[51.5%] top-[24px] flex items-center gap-[52px] max-[1600px]:gap-[48px] max-[1440px]:left-[51.2%] max-[1440px]:gap-[42px] max-[1280px]:gap-[36px] max-[1024px]:left-[51.5%] max-[1024px]:gap-[22px] max-[880px]:hidden"
            aria-label="Main navigation"
          >
            <a href="#pages" className={desktopLinkClass}>
              Pages
              <ChevronIcon className="h-[18px] w-[18px] max-[1024px]:h-[15px] max-[1024px]:w-[15px]" />
            </a>

            <a href="#shop" className={desktopLinkClass}>
              Shop
            </a>

            <a href="#about" className={desktopLinkClass}>
              About
            </a>
          </nav>

          <nav
            className="absolute right-0 top-[24px] flex items-center gap-[56px] max-[1600px]:gap-[52px] max-[1440px]:gap-[42px] max-[1280px]:gap-[34px] max-[1024px]:gap-[22px] max-[880px]:hidden"
            aria-label="Account navigation"
          >
            <a href="#login" className={desktopLinkClass}>
              Login
            </a>

            <a href="#cart" className={desktopLinkClass}>
              Cart (0)
            </a>
          </nav>

          {/* ==================== Mobile Quick Navigation ==================== */}
          <nav
            className="absolute right-[48px] top-[17px] hidden items-center gap-[18px] max-[880px]:flex max-[767px]:right-[51px] max-[767px]:top-[10px] max-[767px]:gap-[clamp(12px,4vw,20px)] max-[360px]:right-[45px]"
            aria-label="Mobile quick navigation"
          >
            <a
              href="#shop"
              className="font-['Inter',sans-serif] text-[14px] font-normal uppercase leading-none text-[#f8faf4] no-underline max-[767px]:text-[clamp(12px,4vw,14px)]"
            >
              Shop
            </a>

            <a
              href="#cart"
              className="font-['Inter',sans-serif] text-[14px] font-normal uppercase leading-none text-[#f8faf4] no-underline max-[767px]:text-[clamp(12px,4vw,14px)]"
            >
              Cart (0)
            </a>
          </nav>

          <button
            type="button"
            className="absolute right-0 top-[4px] hidden h-[31px] w-[31px] cursor-pointer items-center justify-center rounded-full border-0 bg-[#f7faf4] p-0 text-[#213724] max-[880px]:flex max-[767px]:top-[2px] max-[767px]:bg-[#eef3ec]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon className="h-[18px] w-[18px]" />
          </button>
        </div>
      </header>

      {/* ==================== Hero Content Area ==================== */}
      <div className={`${containerClass} relative z-20 h-full max-[767px]:mx-auto max-[767px]:w-full`}>
        {/* ==================== Desktop Slider Controls ==================== */}
        <div className="absolute left-0 top-[37.2%] z-[26] flex flex-col items-center gap-[25px] max-[1024px]:top-[38%] max-[1024px]:gap-[18px] max-[767px]:hidden">
          <button
            type="button"
            onClick={handleNextSlide}
            aria-label="Next slide"
            className="cursor-pointer border-0 bg-transparent p-0 text-[#f7faf4]"
          >
            <ArrowIcon className="block h-[20px] w-[38px] max-[1440px]:h-[18px] max-[1440px]:w-[31px] max-[1024px]:h-[16px] max-[1024px]:w-[28px]" />
          </button>

          <div className="my-[1px] flex flex-col items-center gap-[10px]">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`h-[5px] w-[5px] rotate-45 cursor-pointer border-0 p-0 ${
                  activeDot === index ? "bg-[#25482d]" : "bg-[#f7faf4]"
                }`}
                onClick={() => setActiveDot(index)}
                aria-label={`Go to ${slide.productName}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="rotate-180 cursor-pointer border-0 bg-transparent p-0 text-[#f7faf4]"
            onClick={handlePrevSlide}
            aria-label="Previous slide"
          >
            <ArrowIcon className="block h-[20px] w-[38px] max-[1440px]:h-[18px] max-[1440px]:w-[31px] max-[1024px]:h-[16px] max-[1024px]:w-[28px]" />
          </button>
        </div>

        {/* ==================== Product Image ==================== */}
        <div
          key={activeSlide.id}
          className="beauty-product-animate pointer-events-none absolute left-[3.2%] top-[9.5%] z-[22] h-[87%] min-h-[680px] origin-center max-[1600px]:left-[3%] max-[1600px]:top-[9.2%] max-[1600px]:h-[88%] max-[1600px]:min-h-[660px] max-[1440px]:left-[2.7%] max-[1440px]:top-[9.8%] max-[1440px]:h-[86.5%] max-[1440px]:min-h-[625px] max-[1280px]:left-[2.8%] max-[1280px]:top-[10.6%] max-[1280px]:h-[85.5%] max-[1280px]:min-h-[590px] max-[1024px]:left-[2.2%] max-[1024px]:top-[12.5%] max-[1024px]:h-[80%] max-[1024px]:min-h-[500px] max-[880px]:left-[1%] max-[880px]:top-[13%] max-[880px]:h-[78%] max-[880px]:min-h-[470px] max-[767px]:!left-1/2 max-[767px]:!right-auto max-[767px]:top-[clamp(335px,47svh,382px)] max-[767px]:z-[24] max-[767px]:h-[clamp(285px,42svh,355px)] max-[767px]:min-h-0 max-[767px]:!-translate-x-1/2 max-[767px]:![animation:none] max-[430px]:top-[clamp(370px,47svh,450px)] max-[390px]:top-[clamp(355px,47svh,382px)] max-[360px]:h-[clamp(270px,41svh,335px)]"
        >
          <img
            src={activeSlide.productImage}
            alt={activeSlide.productName}
            className="block h-full w-auto max-w-none object-contain"
          />
        </div>

        {/* ==================== Hero Text ==================== */}
        <div
          key={`copy-${activeSlide.id}`}
          className="beauty-copy-animate absolute left-[35.1%] top-[20.3%] z-[24] w-[940px] max-[1600px]:left-[35.1%] max-[1600px]:top-[20.3%] max-[1600px]:w-[900px] max-[1440px]:left-[36.1%] max-[1440px]:top-[21%] max-[1440px]:w-[820px] max-[1280px]:left-[35.4%] max-[1280px]:top-[21.2%] max-[1280px]:w-[780px] max-[1024px]:left-[35.8%] max-[1024px]:top-[23.5%] max-[1024px]:w-[610px] max-[880px]:left-[36.5%] max-[880px]:top-[25%] max-[880px]:w-[520px] max-[767px]:!left-1/2 max-[767px]:!right-auto max-[767px]:top-[clamp(92px,13svh,106px)] max-[767px]:z-[25] max-[767px]:w-[min(calc(100%_-_52px),330px)] max-[767px]:!-translate-x-1/2 max-[767px]:text-center max-[767px]:![animation:none] max-[360px]:w-[min(calc(100%_-_42px),306px)]"
        >
          <h1 className="mt-8 lg:mt-0 font-['Cormorant_Garamond',serif] text-[clamp(86px,7.1vw,122px)] font-light leading-[1.02] tracking-[-0.052em] text-[#f7faf4] max-[1440px]:text-[clamp(82px,7.2vw,104px)] max-[1280px]:text-[clamp(74px,7.45vw,96px)] max-[1024px]:text-[clamp(62px,7.6vw,78px)] max-[1024px]:leading-[1.04] max-[880px]:text-[clamp(54px,7.6vw,66px)] max-[767px]:mx-auto max-[767px]:text-[clamp(40px,12.9vw,50px)] max-[767px]:leading-[1.02] max-[767px]:tracking-[-0.052em]">
            {activeSlide.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <a
            href="#shop"
            className="group mt-[78px] flex h-[72px] w-[356px] items-center justify-center gap-[25px] bg-[#f7faf4] font-['Inter',sans-serif] text-[23px] font-normal leading-none text-[#203823] no-underline transition duration-[350ms] hover:-translate-y-[2px] hover:bg-white max-[1440px]:mt-[55px] max-[1440px]:h-[68px] max-[1440px]:w-[260px] max-[1440px]:text-[22px] max-[1280px]:mt-[58px] max-[1280px]:h-[68px] max-[1280px]:w-[330px] max-[1280px]:text-[22px] max-[1024px]:mt-[48px] max-[1024px]:h-[62px] max-[1024px]:w-[280px] max-[1024px]:gap-[20px] max-[1024px]:text-[20px] max-[880px]:mt-[40px] max-[880px]:h-[58px] max-[880px]:w-[235px] max-[880px]:text-[18px] max-[767px]:mx-auto max-[767px]:mt-[clamp(24px,3.8svh,29px)] max-[767px]:h-[clamp(49px,6.5svh,53px)] max-[767px]:w-[clamp(160px,46vw,176px)] max-[767px]:gap-[13px] max-[767px]:text-[clamp(15px,4.3vw,17px)]"
          >
            <span>Shop now</span>

            <ArrowIcon
              strokeWidth={1.55}
              className="block h-[18px] w-[31px] transition-transform duration-[350ms] group-hover:translate-x-[7px] max-[1024px]:h-[16px] max-[1024px]:w-[28px] max-[767px]:h-[17px] max-[767px]:w-[32px]"
            />
          </a>
        </div>
      </div>

      {/* ==================== Mobile Slider Dots ==================== */}
      <div className="absolute bottom-[clamp(22px,4svh,31px)] left-1/2 z-30 hidden -translate-x-1/2 items-center gap-[10px] max-[767px]:flex">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className="h-[5px] w-[5px] rotate-45 cursor-pointer border-0 bg-[#f7faf4] p-0"
            onClick={() => setActiveDot(index)}
            aria-label={`Go to ${slide.productName}`}
            aria-current={activeDot === index ? "true" : "false"}
          />
        ))}
      </div>

      {/* ==================== Mobile Menu ==================== */}
      <div
        className={`fixed inset-0 z-[80] hidden bg-black/[0.52] transition-all duration-300 max-[880px]:block ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-[90] hidden h-full w-[min(78vw,330px)] bg-[#eef4ec] p-[25px] transition-transform duration-500 max-[880px]:block ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="ml-auto flex h-[39px] w-[39px] cursor-pointer items-center justify-center border border-[#233b25]/20 bg-transparent p-0 text-[#233b25]"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <CloseIcon className="h-[18px] w-[18px]" />
        </button>

        <nav className="mt-[55px] flex flex-col gap-[25px]">
          <a href="#pages" onClick={() => setMenuOpen(false)} className={mobileMenuLinkClass}>
            Pages
          </a>

          <a href="#shop" onClick={() => setMenuOpen(false)} className={mobileMenuLinkClass}>
            Shop
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)} className={mobileMenuLinkClass}>
            About
          </a>

          <a href="#login" onClick={() => setMenuOpen(false)} className={mobileMenuLinkClass}>
            Login
          </a>

          <a href="#cart" onClick={() => setMenuOpen(false)} className={mobileMenuLinkClass}>
            Cart (0)
          </a>
        </nav>
      </aside>
    </section>
  );
};

export default Hero;