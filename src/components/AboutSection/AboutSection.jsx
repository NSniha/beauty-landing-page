import { useEffect, useRef, useState } from "react";

import vogueLogo from "../../assets/images/vogue.svg";
import forbesLogo from "../../assets/images/forbes.svg";
import thoughtCatalogLogo from "../../assets/images/thought-catalog.svg";
import womensHealthLogo from "../../assets/images/womens-health.svg";
import wwdLogo from "../../assets/images/wwd.svg";

import "./AboutSection.css";

const containerClass =
  "mx-auto w-[min(calc(100%_-_128px),1380px)] max-[1600px]:w-[min(calc(100%_-_112px),1320px)] max-[1440px]:w-[min(calc(100%_-_96px),1240px)] max-[1280px]:w-[min(calc(100%_-_96px),1180px)] max-[1024px]:w-[calc(100%_-_72px)] max-[880px]:w-[calc(100%_-_48px)] max-[767px]:w-[calc(100%_-_30px)] max-[360px]:w-[calc(100%_-_26px)]";

const sectionLabelClass =
  "mb-[24px] mt-0 font-['Inter',sans-serif] text-[30px] font-normal leading-none tracking-[-0.035em] text-[#8fa58d] max-[1280px]:text-[26px] max-[767px]:mb-[16px] max-[767px]:text-[20px]";

const sectionHeadingClass =
  "m-0 font-['Cormorant_Garamond',serif] text-[clamp(56px,4.2vw,82px)] font-light leading-[1.08] tracking-[-0.056em] text-[#243f2a] max-[1440px]:text-[clamp(50px,4.35vw,62px)] max-[1280px]:text-[clamp(48px,4.25vw,58px)] max-[1024px]:text-[clamp(52px,6.2vw,68px)] max-[767px]:text-[clamp(38px,11vw,54px)] max-[430px]:text-[40px]";

const bodyTextClass =
  "font-['Inter',sans-serif] text-[clamp(20px,1.42vw,24px)] font-normal leading-[1.34] tracking-[-0.058em] text-[#4f744e] max-[1280px]:text-[21px] max-[767px]:text-[18px] max-[767px]:leading-[1.46]";

const brandLogos = [
  {
    id: 1,
    name: "Vogue",
    image: vogueLogo,
    className: "h-[clamp(48px,5.05vw,82px)] w-auto",
  },
  {
    id: 2,
    name: "Forbes",
    image: forbesLogo,
    className: "h-[clamp(50px,5.2vw,86px)] w-auto",
  },
  {
    id: 3,
    name: "Thought Catalog",
    image: thoughtCatalogLogo,
    className: "h-[clamp(58px,5.35vw,94px)] w-auto",
  },
  {
    id: 4,
    name: "Women’s Health",
    image: womensHealthLogo,
    className: "h-[clamp(42px,4.25vw,70px)] w-auto",
  },
  {
    id: 5,
    name: "WWD",
    image: wwdLogo,
    className: "h-[clamp(66px,6.7vw,112px)] w-auto",
  },
];

const marqueeLogos = [...brandLogos, ...brandLogos];

const ArrowIcon = ({ className = "" }) => (
  <svg viewBox="0 0 116 32" aria-hidden="true" className={className}>
    <path
      d="M2 16H102"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M90 3C96 10 102 14 114 16C102 18 96 22 90 29"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.16,
      }
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  const leftAnimation = isVisible
    ? "translate-x-0 opacity-100 blur-0"
    : "-translate-x-[32px] opacity-0 blur-[8px]";

  const rightAnimation = isVisible
    ? "translate-x-0 opacity-100 blur-0"
    : "translate-x-[32px] opacity-0 blur-[8px]";

  const upAnimation = isVisible
    ? "translate-y-0 opacity-100 blur-0"
    : "translate-y-[30px] opacity-0 blur-[8px]";

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-0 w-full overflow-hidden border-b border-[#8fa58d]/35 bg-[#f2f6ef]"
    >
      {/* ==================== About Content ==================== */}
      <div
        className={`${containerClass} grid grid-cols-[46.8%_1fr] gap-[clamp(70px,6.4vw,118px)] pb-[clamp(86px,6vw,112px)] pt-[clamp(84px,6.2vw,116px)] max-[1440px]:grid-cols-[48.5%_1fr] max-[1440px]:gap-[70px] max-[1280px]:gap-[60px] max-[1024px]:grid-cols-1 max-[1024px]:gap-[44px] max-[1024px]:pb-[78px] max-[1024px]:pt-[76px] max-[767px]:gap-[32px] max-[767px]:pb-[58px] max-[767px]:pt-[56px]`}
      >
        <div
          className={`max-w-[720px] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${leftAnimation}`}
        >
          <p className={sectionLabelClass}>About us</p>

          <h2 className={sectionHeadingClass}>
            <span className="block whitespace-nowrap max-[767px]:whitespace-normal">
              Velvety facial and
            </span>
            <span className="block whitespace-nowrap max-[767px]:whitespace-normal">
              skincare company
            </span>
          </h2>
        </div>

        <div
          className={`pt-[4px] transition-all delay-[120ms] duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1024px]:pt-0 ${rightAnimation}`}
        >
          <p className={`m-0 max-w-[730px] ${bodyTextClass}`}>
            Velvety is an indigenous company that specializes in the manufacture
            and development of facial and skincare products using the medicinal
            properties of the traditional First Nations pharmacopoeia, with a
            concern for sustainable development.
          </p>

          <p className={`mb-0 mt-[36px] max-w-[800px] max-[767px]:mt-[24px] ${bodyTextClass}`}>
            The products offered, whose benefits have been scientifically
            confirmed, are 100% natural and allow you to take care of your body
            and mind: calming teas, energizing infusions, anti-inflammatory
            essential oils, anti-age soaps and creams, etc.
          </p>
        </div>
      </div>

      {/* ==================== Stable Divider ==================== */}
      <div className={containerClass}>
        <div className="h-px w-full bg-[#8fa58d]/30" />
      </div>

      {/* ==================== Brand Logos ==================== */}
      <div
        className={`${containerClass} pb-[clamp(76px,6.1vw,108px)] pt-[clamp(82px,6.25vw,116px)] max-[1024px]:pb-[76px] max-[1024px]:pt-[72px] max-[767px]:pb-[58px] max-[767px]:pt-[52px]`}
      >
        <p
          className={`mb-[clamp(48px,3.85vw,70px)] mt-0 font-['Inter',sans-serif] text-[30px] font-normal leading-none tracking-[-0.035em] text-[#8fa58d] transition-all delay-[160ms] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1280px]:text-[26px] max-[767px]:mb-[34px] max-[767px]:text-[20px] ${upAnimation}`}
        >
          As seen in
        </p>

        <div
          className={`about-brand-marquee relative w-full overflow-hidden transition-all delay-[230ms] duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${upAnimation}`}
        >
          <div className="about-brand-track flex w-max items-center gap-[clamp(74px,6.8vw,124px)] max-[1024px]:gap-[74px] max-[767px]:gap-[54px]">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="about-brand-item flex min-w-max items-center justify-center"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className={`block object-contain ${logo.className}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== Bottom CTA ==================== */}
      <a
        href="#process"
        className="group block w-full bg-[#8fa58d] text-[#f7faf4] no-underline"
      >
        <div
          className={`${containerClass} flex min-h-[clamp(104px,8.55vw,132px)] items-center justify-between gap-[30px] max-[767px]:min-h-[108px]`}
        >
          <span
            className={`font-['Cormorant_Garamond',serif] text-[clamp(32px,3.15vw,54px)] font-light leading-none tracking-[-0.058em] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[767px]:text-[clamp(29px,9.5vw,42px)] ${upAnimation}`}
          >
            Let&apos;s see the processing of our products
          </span>

          <ArrowIcon className="h-[32px] w-[86px] shrink-0 transition-transform duration-500 group-hover:translate-x-[10px] max-[767px]:w-[62px]" />
        </div>
      </a>
    </section>
  );
};

export default AboutSection;