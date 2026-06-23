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
        threshold: 0.22,
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
      className="relative z-0 grid w-full grid-cols-[49.35%_50.65%] overflow-hidden border-b border-[#8fa58d]/35 bg-[#f2f6ef] max-[1024px]:grid-cols-1"
    >
      {/* ==================== Left Content ==================== */}
      <div className="relative min-h-[526px] bg-[#f2f6ef] max-[1600px]:min-h-[526px] max-[1280px]:min-h-[526px] max-[1024px]:min-h-0">
        <div className="relative h-full pl-[clamp(56px,5.65vw,116px)] pt-[clamp(82px,5.9vw,112px)] max-[1280px]:pl-[48px] max-[1024px]:mx-auto max-[1024px]:w-[min(calc(100%_-_72px),760px)] max-[1024px]:pl-0 max-[1024px]:pt-[70px] max-[1024px]:pb-[390px] max-[767px]:w-[calc(100%_-_30px)] max-[767px]:pt-[54px] max-[767px]:pb-[300px] max-[430px]:pt-[48px] max-[430px]:pb-[265px] max-[360px]:pb-[245px]">
          <h2
            className={`m-0 max-w-[760px] font-['Cormorant_Garamond',serif] text-[clamp(64px,4.55vw,94px)] font-light leading-[1.08] tracking-[-0.055em] text-[#243f2a] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1280px]:text-[clamp(54px,5.2vw,72px)] max-[1024px]:max-w-none max-[1024px]:text-center max-[1024px]:text-[clamp(56px,8vw,82px)] max-[767px]:text-[clamp(42px,13vw,58px)] max-[767px]:leading-[1.08] max-[430px]:text-[43px] max-[360px]:text-[39px] ${headingAnimation}`}
          >
            Inspired by traditional
            <span className="block">knowledge and nature</span>
          </h2>

          <div
            className={`pointer-events-none absolute bottom-[-40px] left-1/2 w-[min(620px,78%)] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1600px]:w-[min(560px,80%)] max-[1280px]:bottom-[-34px] max-[1280px]:w-[min(500px,82%)] max-[1024px]:bottom-[-34px] max-[1024px]:w-[min(560px,92%)] max-[767px]:bottom-[-22px] max-[767px]:w-[min(430px,108%)] max-[430px]:bottom-[-20px] max-[430px]:w-[392px] max-[430px]:max-w-[112%] max-[360px]:w-[350px] ${imageAnimation}`}
          >
            <img
              src={traditionBowl}
              alt="Green organic skincare powder with leaves"
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* ==================== Right Features ==================== */}
      <div className="relative min-h-[526px] bg-[#e6eee2] pl-0 max-[1024px]:min-h-0 max-[1024px]:py-[82px_78px] max-[767px]:py-[58px_62px] max-[430px]:pt-[52px]">
        <div className="ml-[clamp(54px,4.45vw,88px)] w-[min(calc(100%_-_120px),680px)] pt-[clamp(82px,6.1vw,112px)] max-[1280px]:ml-[54px] max-[1280px]:w-[min(calc(100%_-_96px),620px)] max-[1280px]:pt-[78px] max-[1024px]:mx-auto max-[1024px]:w-[min(calc(100%_-_72px),760px)] max-[1024px]:pt-0 max-[767px]:w-[calc(100%_-_30px)]">
          {features.map((feature, index) => (
            <article
              key={feature.id}
              className={`grid grid-cols-[64px_1fr] items-start gap-x-[36px] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1280px]:grid-cols-[62px_1fr] max-[1280px]:gap-x-[34px] max-[1024px]:grid-cols-[76px_1fr] max-[1024px]:gap-x-[36px] max-[767px]:grid-cols-[58px_1fr] max-[767px]:gap-x-[22px] max-[430px]:grid-cols-[52px_1fr] max-[430px]:gap-x-[18px] max-[360px]:grid-cols-[48px_1fr] max-[360px]:gap-x-[16px] ${
                index !== features.length - 1
                  ? "mb-[62px] max-[1280px]:mb-[48px] max-[1024px]:mb-[46px] max-[767px]:mb-[38px]"
                  : ""
              } ${featureAnimation}`}
              style={{
                transitionDelay: isVisible ? `${index * 0.12}s` : "0s",
              }}
            >
              <div className="h-[64px] w-[64px] max-[1280px]:h-[62px] max-[1280px]:w-[62px] max-[1024px]:h-[76px] max-[1024px]:w-[76px] max-[767px]:h-[58px] max-[767px]:w-[58px] max-[430px]:h-[52px] max-[430px]:w-[52px] max-[360px]:h-[48px] max-[360px]:w-[48px]">
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="block h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="mb-[10px] mt-0 font-['Inter',sans-serif] text-[clamp(26px,1.65vw,34px)] font-normal leading-[1.1] tracking-[-0.035em] text-[#243f2a] max-[1280px]:text-[28px] max-[767px]:mb-[8px] max-[767px]:text-[25px] max-[430px]:text-[23px] max-[360px]:text-[22px]">
                  {feature.title}
                </h3>

                <p className="m-0 max-w-[590px] font-['Inter',sans-serif] text-[clamp(17px,1.04vw,22px)] font-normal leading-[1.42] tracking-[-0.045em] text-[#5c7a5d] max-[1280px]:text-[19px] max-[767px]:text-[17px] max-[767px]:leading-[1.45] max-[767px]:tracking-[-0.035em] max-[430px]:text-[16px] max-[360px]:text-[15px]">
                  {feature.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TraditionSection;