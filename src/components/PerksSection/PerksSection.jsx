import { useEffect, useRef, useState } from "react";

import giftIcon from "../../assets/images/perk-gift.svg";
import referralIcon from "../../assets/images/perk-referral.svg";
import faceIcon from "../../assets/images/perk-face.svg";

const containerClass =
  "mx-auto w-[min(calc(100%_-_128px),1380px)] max-[1600px]:w-[min(calc(100%_-_112px),1320px)] max-[1440px]:w-[min(calc(100%_-_96px),1240px)] max-[1280px]:w-[min(calc(100%_-_96px),1180px)] max-[1024px]:w-[calc(100%_-_72px)] max-[880px]:w-[calc(100%_-_48px)] max-[767px]:w-[calc(100%_-_30px)] max-[360px]:w-[calc(100%_-_26px)]";

const labelClass =
  "mb-[21px] mt-0 font-['Inter',sans-serif] text-[clamp(22px,1.52vw,30px)] font-normal leading-none tracking-[-0.04em] text-[#8fa58d] max-[1280px]:text-[25px] max-[767px]:mb-[14px] max-[767px]:text-[20px]";

const titleClass =
  "m-0 font-['Cormorant_Garamond',serif] text-[clamp(38px,2.58vw,52px)] font-light leading-[1.08] tracking-[-0.056em] text-[#243f2a] max-[1280px]:text-[clamp(35px,3vw,44px)] max-[767px]:text-[clamp(34px,9vw,42px)]";

const buttonClass =
  "group mt-[29px] inline-flex h-[74px] w-[324px] items-center justify-center gap-[20px] border border-[#243f2a] bg-transparent font-['Inter',sans-serif] text-[20px] font-normal leading-none tracking-[-0.045em] text-[#243f2a] no-underline transition duration-300 hover:bg-[#243f2a] hover:text-[#f7faf4] max-[1280px]:h-[66px] max-[1280px]:w-[290px] max-[1280px]:text-[19px] max-[767px]:mt-[24px] max-[767px]:h-[56px] max-[767px]:w-[240px] max-[767px]:gap-[15px] max-[767px]:text-[16px]";

const ArrowIcon = ({ className = "" }) => (
  <svg viewBox="0 0 64 24" aria-hidden="true" className={className}>
    <path
      d="M1 12H51"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 3C47 8 52 11 62 12C52 13 47 16 42 21"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const perks = [
  {
    id: 1,
    label: "Loyalty Program",
    title: "For Happy Skin",
    button: "Join the program",
    href: "#loyalty",
    icon: giftIcon,
    alt: "Loyalty program gift icon",
  },
  {
    id: 2,
    label: "Organic beauty is shared,",
    title: "Sponsor those you love!",
    button: "Refer a Friend",
    href: "#refer",
    icon: referralIcon,
    alt: "Referral program icon",
  },
  {
    id: 3,
    label: "Treat yourself to good weather",
    title: "at Maison Absolution",
    button: "Try Our Treatments",
    href: "#treatments",
    icon: faceIcon,
    alt: "Skincare treatment face icon",
  },
];

const PerksSection = () => {
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

  return (
    <section
      ref={sectionRef}
      id="perks"
      className="relative z-0 w-full overflow-hidden border-b border-[#8fa58d]/35 bg-[#f2f6ef]"
    >
      {/* ==================== Perks Content ==================== */}
      <div
        className={`${containerClass} grid min-h-[clamp(430px,32vw,570px)] grid-cols-3 items-center py-[clamp(82px,6.3vw,112px)] max-[1024px]:grid-cols-1 max-[1024px]:gap-[58px] max-[1024px]:py-[78px] max-[767px]:gap-[48px] max-[767px]:py-[58px]`}
      >
        {perks.map((perk, index) => (
          <article
            key={perk.id}
            className={`relative flex flex-col items-center text-center transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1024px]:border-b max-[1024px]:border-[#8fa58d]/25 max-[1024px]:pb-[56px] last:max-[1024px]:border-b-0 last:max-[1024px]:pb-0 ${
              index !== 0
                ? "before:absolute before:left-0 before:top-1/2 before:h-[126px] before:w-px before:-translate-y-1/2 before:bg-[#8fa58d]/25 max-[1024px]:before:hidden"
                : ""
            } ${
              isVisible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-[34px] opacity-0 blur-[8px]"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 0.13}s` : "0s",
            }}
          >
            <img
              src={perk.icon}
              alt={perk.alt}
              className="mb-[58px] block h-[86px] w-[86px] object-contain max-[1280px]:mb-[50px] max-[1280px]:h-[76px] max-[1280px]:w-[76px] max-[767px]:mb-[34px] max-[767px]:h-[64px] max-[767px]:w-[64px]"
            />

            <p className={labelClass}>{perk.label}</p>

            <h2 className={titleClass}>{perk.title}</h2>

            <a href={perk.href} className={buttonClass}>
              <span>{perk.button}</span>

              <ArrowIcon className="h-[18px] w-[43px] transition-transform duration-300 group-hover:translate-x-[7px] max-[767px]:h-[17px] max-[767px]:w-[32px]" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PerksSection;