import { useEffect, useRef, useState } from "react";

import traditionBowl from "../../assets/images/tradition-bowl.png";
import organicIcon from "../../assets/images/tradition-organic-icon.png";
import skinIcon from "../../assets/images/tradition-skin-icon.png";
import easyIcon from "../../assets/images/tradition-easy-icon.png";

const features = [
  {
    id: 1,
    icon: organicIcon,
    title: "100% Organic",
    text: "We craft skincare using the most exquisite ingredients from the plant, earth and mineral realms.",
  },
  {
    id: 2,
    icon: skinIcon,
    title: "Fits your skin",
    text: "It’s all natural and processed based on traditional knowledge with modern technology.",
  },
  {
    id: 3,
    icon: easyIcon,
    title: "Easy to use",
    text: "Packed with a unique design as well as usefull that can help you perform routine skin care.",
  },
];

const containerClass =
  "mx-auto w-[min(calc(100%_-_128px),1380px)] max-[1600px]:w-[min(calc(100%_-_112px),1320px)] max-[1440px]:w-[min(calc(100%_-_96px),1240px)] max-[1280px]:w-[min(calc(100%_-_96px),1180px)] max-[1024px]:w-[calc(100%_-_72px)] max-[880px]:w-[calc(100%_-_48px)] max-[767px]:w-[calc(100%_-_30px)] max-[360px]:w-[calc(100%_-_26px)]";

const TraditionSection = () => {
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
        threshold: 0.18,
      }
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  const headingAnimation = isVisible
    ? "translate-y-0 opacity-100 blur-0"
    : "translate-y-[34px] opacity-0 blur-[8px]";

  const imageAnimation = isVisible
    ? "-translate-x-1/2 translate-y-0 scale-100 opacity-100 blur-0"
    : "-translate-x-1/2 translate-y-[42px] scale-[0.96] opacity-0 blur-[8px]";

  const featureAnimation = isVisible
    ? "translate-y-0 opacity-100 blur-0"
    : "translate-y-[36px] opacity-0 blur-[8px]";

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-0 w-full overflow-hidden border-b border-[#8fa58d]/35 bg-[#f2f6ef]"
    >
      {/* ==================== Section Background ==================== */}
      <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-[49.35%_50.65%] max-[1024px]:grid-cols-1">
        <div className="bg-[#f2f6ef]" />
        <div className="bg-[#e6eee2] max-[1024px]:hidden" />
      </div>

      {/* ==================== Section Content ==================== */}
      <div
        className={`${containerClass} relative z-10 grid min-h-[clamp(560px,37.9vw,690px)] grid-cols-[49.35%_50.65%] max-[1280px]:min-h-[540px] max-[1024px]:grid-cols-1 max-[1024px]:min-h-0`}
      >
        {/* ==================== Left Content ==================== */}
        <div className="relative min-h-[clamp(560px,37.9vw,690px)] pr-[44px] pt-[clamp(54px,4vw,74px)] max-[1280px]:min-h-[540px] max-[1280px]:pr-[34px] max-[1024px]:min-h-0 max-[1024px]:px-0 max-[1024px]:pb-[390px] max-[1024px]:pt-[72px] max-[767px]:pb-[305px] max-[767px]:pt-[54px] max-[430px]:pb-[270px] max-[430px]:pt-[48px] max-[360px]:pb-[246px]">
          <h2
            className={`m-0 max-w-[790px] font-['Cormorant_Garamond',serif] text-[clamp(58px,4.35vw,80px)] font-light leading-[1.07] tracking-[-0.056em] text-[#243f2a] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1440px]:text-[clamp(54px,4.45vw,70px)] max-[1280px]:text-[clamp(50px,4.7vw,62px)] max-[1024px]:max-w-none max-[1024px]:text-center max-[1024px]:text-[clamp(54px,7.7vw,78px)] max-[767px]:text-[clamp(42px,13vw,58px)] max-[767px]:leading-[1.08] max-[430px]:text-[43px] max-[360px]:text-[39px] ${headingAnimation}`}
          >
            Inspired by traditional
            <span className="block">knowledge and nature</span>
          </h2>

          <div
            className={`pointer-events-none absolute bottom-[-6px] left-1/2 w-[min(640px,92%)] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1600px]:w-[min(600px,92%)] max-[1440px]:w-[min(560px,92%)] max-[1280px]:bottom-[-4px] max-[1280px]:w-[min(520px,92%)] max-[1024px]:bottom-[-28px] max-[1024px]:w-[min(540px,92%)] max-[767px]:bottom-[-18px] max-[767px]:w-[min(425px,108%)] max-[430px]:bottom-[-15px] max-[430px]:w-[382px] max-[430px]:max-w-[112%] max-[360px]:w-[345px] ${imageAnimation}`}
          >
            <img
              src={traditionBowl}
              alt="Green organic skincare powder with leaves"
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* ==================== Right Features ==================== */}
        <div className="relative flex min-h-[clamp(560px,37.9vw,690px)] items-center bg-[#e6eee2] max-[1280px]:min-h-[540px] max-[1024px]:left-1/2 max-[1024px]:min-h-0 max-[1024px]:w-screen max-[1024px]:-translate-x-1/2 max-[1024px]:bg-[#e6eee2]">
          <div className="ml-[clamp(58px,4.75vw,96px)] w-[min(calc(100%_-_116px),720px)] py-[clamp(60px,4.7vw,86px)] max-[1440px]:ml-[clamp(52px,4.3vw,76px)] max-[1440px]:w-[min(calc(100%_-_100px),660px)] max-[1280px]:ml-[48px] max-[1280px]:w-[min(calc(100%_-_88px),610px)] max-[1280px]:py-[54px] max-[1024px]:mx-auto max-[1024px]:w-[calc(100%_-_72px)] max-[1024px]:py-[76px] max-[880px]:w-[calc(100%_-_48px)] max-[767px]:w-[calc(100%_-_30px)] max-[767px]:py-[58px] max-[430px]:py-[50px] max-[360px]:w-[calc(100%_-_26px)]">
            {features.map((feature, index) => (
              <article
                key={feature.id}
                className={`grid grid-cols-[72px_1fr] items-start gap-x-[38px] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1440px]:grid-cols-[66px_1fr] max-[1440px]:gap-x-[34px] max-[1280px]:grid-cols-[60px_1fr] max-[1280px]:gap-x-[30px] max-[1024px]:grid-cols-[76px_1fr] max-[1024px]:gap-x-[36px] max-[767px]:grid-cols-[58px_1fr] max-[767px]:gap-x-[22px] max-[430px]:grid-cols-[52px_1fr] max-[430px]:gap-x-[18px] max-[360px]:grid-cols-[48px_1fr] max-[360px]:gap-x-[16px] ${
                  index !== features.length - 1
                    ? "mb-[clamp(52px,4vw,72px)] max-[1440px]:mb-[48px] max-[1280px]:mb-[40px] max-[1024px]:mb-[42px] max-[767px]:mb-[34px]"
                    : ""
                } ${featureAnimation}`}
                style={{
                  transitionDelay: isVisible ? `${index * 0.12}s` : "0s",
                }}
              >
                <div className="h-[72px] w-[72px] max-[1440px]:h-[66px] max-[1440px]:w-[66px] max-[1280px]:h-[60px] max-[1280px]:w-[60px] max-[1024px]:h-[76px] max-[1024px]:w-[76px] max-[767px]:h-[58px] max-[767px]:w-[58px] max-[430px]:h-[52px] max-[430px]:w-[52px] max-[360px]:h-[48px] max-[360px]:w-[48px]">
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="block h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="mb-[12px] mt-0 font-['Inter',sans-serif] text-[clamp(28px,1.82vw,36px)] font-normal leading-[1.08] tracking-[-0.038em] text-[#243f2a] max-[1440px]:text-[clamp(26px,1.8vw,32px)] max-[1280px]:text-[26px] max-[767px]:mb-[8px] max-[767px]:text-[25px] max-[430px]:text-[23px] max-[360px]:text-[22px]">
                    {feature.title}
                  </h3>

                  <p className="m-0 max-w-[690px] font-['Inter',sans-serif] text-[clamp(18px,1.22vw,23px)] font-normal leading-[1.42] tracking-[-0.04em] text-[#5c7a5d] max-[1440px]:text-[clamp(17px,1.2vw,20px)] max-[1280px]:text-[18px] max-[767px]:text-[17px] max-[767px]:leading-[1.45] max-[767px]:tracking-[-0.035em] max-[430px]:text-[16px] max-[360px]:text-[15px]">
                    {feature.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraditionSection;