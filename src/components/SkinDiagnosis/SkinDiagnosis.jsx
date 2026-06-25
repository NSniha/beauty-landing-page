import { useEffect, useRef, useState } from "react";

import diagnosisImage from "../../assets/images/skin-diagnosis.png";

const containerClass =
  "mx-auto w-[min(calc(100%_-_128px),1380px)] max-[1600px]:w-[min(calc(100%_-_112px),1320px)] max-[1440px]:w-[min(calc(100%_-_96px),1240px)] max-[1280px]:w-[min(calc(100%_-_96px),1180px)] max-[1024px]:w-[calc(100%_-_72px)] max-[880px]:w-[calc(100%_-_48px)] max-[767px]:w-[calc(100%_-_30px)] max-[360px]:w-[calc(100%_-_26px)]";

const sectionLabelClass =
  "mb-[25px] mt-0 font-['Inter',sans-serif] text-[clamp(22px,1.52vw,30px)] font-normal leading-none tracking-[-0.04em] text-[#8fa58d] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1280px]:text-[25px] max-[767px]:mb-[16px] max-[767px]:text-[20px]";

const sectionHeadingClass =
  "m-0 font-['Cormorant_Garamond',serif] text-[clamp(56px,4.2vw,82px)] font-light leading-[1.08] tracking-[-0.056em] text-[#243f2a] max-[1440px]:text-[clamp(52px,4.25vw,72px)] max-[1280px]:text-[clamp(48px,4.9vw,64px)] max-[1024px]:text-[clamp(52px,6.2vw,68px)] max-[767px]:text-[clamp(38px,11vw,54px)] max-[430px]:text-[40px]";

const bodyTextClass =
  "mb-0 mt-[32px] max-w-[700px] font-['Inter',sans-serif] text-[clamp(20px,1.42vw,24px)] font-normal leading-[1.34] tracking-[-0.058em] text-[#4f744e] max-[1280px]:mt-[26px] max-[1280px]:text-[21px] max-[1024px]:mx-auto max-[767px]:mt-[20px] max-[767px]:text-[18px] max-[767px]:leading-[1.46]";

const buttonClass =
  "group mt-[46px] inline-flex h-[64px] w-[306px] items-center justify-center gap-[20px] border border-[#243f2a] bg-transparent font-['Inter',sans-serif] text-[20px] font-normal leading-none tracking-[-0.045em] text-[#243f2a] no-underline transition duration-300 hover:bg-[#243f2a] hover:text-[#f7faf4] max-[1280px]:mt-[38px] max-[1280px]:h-[60px] max-[1280px]:w-[286px] max-[1280px]:text-[19px] max-[767px]:mt-[32px] max-[767px]:h-[54px] max-[767px]:w-[244px] max-[767px]:gap-[15px] max-[767px]:text-[16px]";

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

const SkinDiagnosis = () => {
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

  const leftAnimation = isVisible
    ? "translate-x-0 opacity-100 blur-0"
    : "-translate-x-[34px] opacity-0 blur-[8px]";

  const rightAnimation = isVisible
    ? "translate-x-0 opacity-100 blur-0"
    : "translate-x-[34px] opacity-0 blur-[8px]";

  const labelAnimation = isVisible
    ? "translate-y-0 opacity-100 blur-none"
    : "translate-y-[24px] opacity-0 blur-[8px]";

  return (
    <section
      ref={sectionRef}
      id="diagnosis"
      className="relative z-0 w-full overflow-hidden border-b border-[#8fa58d]/35 bg-[#f2f6ef]"
    >
      {/* ==================== Skin Diagnosis Content ==================== */}
      <div
        className={`${containerClass} grid min-h-[clamp(500px,37vw,620px)] grid-cols-[42.5%_1fr] items-center gap-[clamp(70px,6vw,108px)] py-[clamp(66px,5.2vw,88px)] max-[1440px]:grid-cols-[43.5%_1fr] max-[1440px]:gap-[70px] max-[1280px]:grid-cols-[42%_1fr] max-[1280px]:gap-[58px] max-[1024px]:min-h-0 max-[1024px]:grid-cols-1 max-[1024px]:gap-[38px] max-[1024px]:py-[74px] max-[767px]:gap-[24px] max-[767px]:py-[56px]`}
      >
        {/* ==================== Left Image ==================== */}
        <div
          className={`relative mx-auto flex h-[clamp(320px,27vw,430px)] w-[min(100%,500px)] items-center justify-center transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1280px]:h-[390px] max-[1024px]:h-[360px] max-[767px]:h-[290px] max-[430px]:h-[260px] ${leftAnimation}`}
        >
          <img
            src={diagnosisImage}
            alt="Floral face line art"
            className="block h-full w-full object-contain"
          />
        </div>

        {/* ==================== Right Content ==================== */}
        <div
          className={`max-w-[790px] pb-[4px] transition-all delay-[120ms] duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1024px]:mx-auto max-[1024px]:max-w-[720px] max-[1024px]:pb-0 max-[1024px]:text-center ${rightAnimation}`}
        >
          <p className={`${sectionLabelClass} ${labelAnimation}`}>
            Try Our Service
          </p>

          <h2 className={sectionHeadingClass}>
            <span className="block whitespace-nowrap max-[1024px]:whitespace-normal">
              Your skin diagnosis in
            </span>
            <span className="block">3 minutes</span>
          </h2>

          <p className={bodyTextClass}>
            Say hello to a more radiant, healthier you with personalized
            skincare that&apos;s as unique as you are.
          </p>

          <a href="#contact" className={buttonClass}>
            <span>Start my diagnosis</span>

            <ArrowIcon className="h-[18px] w-[34px] transition-transform duration-300 group-hover:translate-x-[6px] max-[767px]:h-[17px] max-[767px]:w-[30px]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkinDiagnosis;