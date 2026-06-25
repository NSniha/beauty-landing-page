import { useEffect, useRef, useState } from "react";

import vogueLogo from "../../assets/images/vogue.svg";
import forbesLogo from "../../assets/images/forbes.svg";
import thoughtCatalogLogo from "../../assets/images/thought-catalog.svg";
import womensHealthLogo from "../../assets/images/womens-health.svg";
import wwdLogo from "../../assets/images/wwd.svg";

const containerClass =
  "mx-auto w-[min(calc(100%_-_128px),1380px)] max-[1600px]:w-[min(calc(100%_-_112px),1320px)] max-[1440px]:w-[min(calc(100%_-_96px),1240px)] max-[1280px]:w-[min(calc(100%_-_96px),1180px)] max-[1024px]:w-[calc(100%_-_72px)] max-[880px]:w-[calc(100%_-_48px)] max-[767px]:w-[calc(100%_-_30px)] max-[360px]:w-[calc(100%_-_26px)]";

const brandLogos = [
  {
    id: 1,
    name: "Vogue",
    image: vogueLogo,
    className:
      "h-[clamp(54px,5.2vw,88px)] max-[1180px]:h-[70px] max-[767px]:h-[54px]",
  },
  {
    id: 2,
    name: "Forbes",
    image: forbesLogo,
    className:
      "h-[clamp(58px,5.4vw,94px)] max-[1180px]:h-[74px] max-[767px]:h-[58px]",
  },
  {
    id: 3,
    name: "Thought Catalog",
    image: thoughtCatalogLogo,
    className:
      "h-[clamp(72px,6.1vw,108px)] max-[1180px]:h-[86px] max-[767px]:h-[70px]",
  },
  {
    id: 4,
    name: "Women’s Health",
    image: womensHealthLogo,
    className:
      "h-[clamp(46px,4.1vw,74px)] max-[1180px]:h-[62px] max-[767px]:h-[48px]",
  },
  {
    id: 5,
    name: "WWD",
    image: wwdLogo,
    className:
      "h-[clamp(72px,6.9vw,116px)] max-[1180px]:h-[90px] max-[767px]:h-[72px]",
  },
];

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

  const fadeUpClass = isVisible
    ? "translate-y-0 opacity-100 blur-0"
    : "translate-y-[34px] opacity-0 blur-[8px]";

  const fadeLeftClass = isVisible
    ? "translate-x-0 opacity-100 blur-0"
    : "-translate-x-[34px] opacity-0 blur-[8px]";

  const fadeRightClass = isVisible
    ? "translate-x-0 opacity-100 blur-0"
    : "translate-x-[34px] opacity-0 blur-[8px]";

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full overflow-hidden bg-[#f2f6ef]"
    >
      {/* ==================== About Content ==================== */}
      <div
        className={`${containerClass} grid grid-cols-[45.5%_1fr] gap-[clamp(72px,7.2vw,132px)] pb-[clamp(88px,6.55vw,124px)] pt-[clamp(92px,6.9vw,128px)] max-[1280px]:gap-[68px] max-[1024px]:grid-cols-1 max-[1024px]:gap-[42px] max-[1024px]:pb-[78px] max-[1024px]:pt-[76px] max-[767px]:gap-[30px] max-[767px]:pb-[58px] max-[767px]:pt-[56px]`}
      >
        <div
          className={`transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${fadeLeftClass}`}
        >
          <p className="mb-[26px] mt-0 font-['Inter',sans-serif] text-[clamp(24px,1.9vw,33px)] font-normal leading-none tracking-[-0.055em] text-[#8fa58d] max-[767px]:mb-[18px] max-[767px]:text-[22px]">
            About us
          </p>

          <h2 className="m-0 max-w-[620px] font-['Cormorant_Garamond',serif] text-[clamp(60px,4.85vw,84px)] font-light leading-[1.08] tracking-[-0.06em] text-[#243f2a] max-[1440px]:text-[clamp(56px,5.05vw,76px)] max-[1024px]:max-w-[720px] max-[767px]:text-[clamp(42px,12vw,58px)]">
            Velvety facial and skincare company
          </h2>
        </div>

        <div
          className={`pt-[5px] transition-all delay-[120ms] duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1024px]:pt-0 ${fadeRightClass}`}
        >
          <p className="m-0 max-w-[760px] font-['Inter',sans-serif] text-[clamp(20px,1.36vw,24px)] font-normal leading-[1.34] tracking-[-0.058em] text-[#4f744e] max-[1280px]:text-[21px] max-[767px]:text-[18px] max-[767px]:leading-[1.45]">
            Velvety is an indigenous company that specializes in the manufacture
            and development of facial and skincare products using the medicinal
            properties of the traditional First Nations pharmacopoeia, with a
            concern for sustainable development.
          </p>

          <p className="mb-0 mt-[36px] max-w-[800px] font-['Inter',sans-serif] text-[clamp(20px,1.36vw,24px)] font-normal leading-[1.34] tracking-[-0.058em] text-[#4f744e] max-[1280px]:text-[21px] max-[767px]:mt-[24px] max-[767px]:text-[18px] max-[767px]:leading-[1.45]">
            The products offered, whose benefits have been scientifically
            confirmed, are 100% natural and allow you to take care of your body
            and mind: calming teas, energizing infusions, anti-inflammatory
            essential oils, anti-age soaps and creams, etc.
          </p>
        </div>
      </div>

      {/* ==================== Divider ==================== */}
      <div className={containerClass}>
        <div
          className={`h-px w-full origin-left bg-[#8fa58d]/30 transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </div>

      {/* ==================== Brand Logos ==================== */}
      <div
        className={`${containerClass} pb-[clamp(82px,6.45vw,122px)] pt-[clamp(82px,6.25vw,116px)] max-[1024px]:pb-[78px] max-[1024px]:pt-[72px] max-[767px]:pb-[58px] max-[767px]:pt-[52px]`}
      >
        <p
          className={`mb-[clamp(50px,4.1vw,76px)] mt-0 font-['Inter',sans-serif] text-[clamp(24px,1.9vw,33px)] font-normal leading-none tracking-[-0.055em] text-[#8fa58d] transition-all delay-[170ms] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[767px]:mb-[34px] max-[767px]:text-[22px] ${fadeUpClass}`}
        >
          As seen in
        </p>

        <div className="grid grid-cols-[1fr_1.03fr_1.02fr_1.22fr_0.84fr] items-center gap-[clamp(34px,4.15vw,76px)] max-[1180px]:grid-cols-3 max-[1180px]:gap-y-[44px] max-[767px]:grid-cols-2 max-[767px]:gap-x-[28px] max-[767px]:gap-y-[34px] max-[430px]:grid-cols-1">
          {brandLogos.map((logo, index) => (
            <div
              key={logo.id}
              className={`flex items-center max-[430px]:justify-center transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                index === 4 ? "justify-end max-[1180px]:justify-start" : ""
              } ${
                isVisible
                  ? "translate-y-0 opacity-100 blur-0"
                  : "translate-y-[30px] opacity-0 blur-[8px]"
              }`}
              style={{
                transitionDelay: isVisible ? `${0.22 + index * 0.08}s` : "0s",
              }}
            >
              <img
                src={logo.image}
                alt={logo.name}
                className={`${logo.className} block w-auto max-w-full select-none object-contain`}
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ==================== Bottom CTA ==================== */}
      <a
        href="#process"
        className="group block w-full bg-[#8fa58d] text-[#f7faf4] no-underline"
      >
        <div
          className={`${containerClass} flex min-h-[clamp(104px,8.65vw,132px)] items-center justify-between gap-[30px] max-[767px]:min-h-[108px]`}
        >
          <span
            className={`font-['Cormorant_Garamond',serif] text-[clamp(32px,3.1vw,54px)] font-light leading-none tracking-[-0.062em] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[767px]:text-[clamp(29px,9.5vw,42px)] ${
              isVisible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-[24px] opacity-0 blur-[8px]"
            }`}
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