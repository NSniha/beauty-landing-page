import { useEffect, useRef, useState } from "react";

import testimonialProduct from "../../assets/images/featured/featured-holocena.png";
import starIcon from "../../assets/images/star.svg";

const containerClass =
  "mx-auto w-[min(calc(100%_-_128px),1380px)] max-[1600px]:w-[min(calc(100%_-_112px),1320px)] max-[1440px]:w-[min(calc(100%_-_96px),1240px)] max-[1280px]:w-[min(calc(100%_-_96px),1180px)] max-[1024px]:w-[calc(100%_-_72px)] max-[880px]:w-[calc(100%_-_48px)] max-[767px]:w-[calc(100%_-_30px)] max-[360px]:w-[calc(100%_-_26px)]";

const sectionLabelClass =
  "mb-[25px] mt-0 font-['Inter',sans-serif] text-[clamp(22px,1.52vw,30px)] font-normal leading-none tracking-[-0.04em] text-[#8fa58d] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1280px]:text-[25px] max-[767px]:mb-[16px] max-[767px]:text-[20px]";

const testimonials = [
  {
    id: 1,
    quote:
      "I’ve been feeling pretty stressed with my skin lately, so I picked up a set of HOLOCENA skincare. Oh my goodness! It was AMAZING. My skin felt so soft and moisturized",
    author: "Customer Review",
  },
  {
    id: 2,
    quote:
      "This product feels so gentle and calming on my skin. After a few days, my face looked smoother, softer, and naturally refreshed. I absolutely love the glow it gives me",
    author: "Customer Review",
  },
  {
    id: 3,
    quote:
      "The texture is light, clean, and very comfortable. My skincare routine feels more luxurious now, and the result is beautifully hydrated skin every morning",
    author: "Customer Review",
  },
];

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

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const currentTestimonial = testimonials[activeSlide];

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

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4800);

    return () => clearInterval(autoSlide);
  }, []);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const imageAnimation = isVisible
    ? "translate-x-0 opacity-100 blur-0"
    : "-translate-x-[38px] opacity-0 blur-[8px]";

  const contentAnimation = isVisible
    ? "translate-x-0 opacity-100 blur-0"
    : "translate-x-[38px] opacity-0 blur-[8px]";

  const labelAnimation = isVisible
    ? "translate-y-0 opacity-100 blur-none"
    : "translate-y-[24px] opacity-0 blur-[8px]";

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative z-0 w-full overflow-hidden border-b border-[#8fa58d]/35 bg-[#f2f6ef]"
    >
      {/* ==================== Testimonials Content ==================== */}
      <div
        className={`${containerClass} grid min-h-[clamp(690px,48vw,790px)] grid-cols-[38.8%_1fr] items-center gap-[clamp(76px,6.2vw,118px)] py-[clamp(72px,5.8vw,96px)] max-[1440px]:grid-cols-[39.5%_1fr] max-[1440px]:gap-[74px] max-[1280px]:gap-[62px] max-[1024px]:min-h-0 max-[1024px]:grid-cols-1 max-[1024px]:gap-[56px] max-[1024px]:py-[76px] max-[767px]:gap-[42px] max-[767px]:py-[58px]`}
      >
        {/* ==================== Fixed Product Image ==================== */}
        <div
          className={`relative mx-auto flex h-[clamp(560px,42vw,700px)] w-[min(100%,470px)] items-center justify-center transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1440px]:h-[610px] max-[1280px]:h-[540px] max-[1024px]:h-[510px] max-[767px]:h-[420px] max-[430px]:h-[360px] ${imageAnimation}`}
        >
          <div className="absolute left-1/2 top-1/2 h-full w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#e6eee2]" />

          <img
            src={testimonialProduct}
            alt="Holocena skincare product"
            className="relative z-10 block h-[82%] w-auto object-contain drop-shadow-[34px_12px_28px_rgba(22,49,24,0.15)] max-[767px]:h-[80%]"
          />
        </div>

        {/* ==================== Review Slider ==================== */}
        <div
          className={`relative pr-[112px] transition-all delay-[120ms] duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1280px]:pr-[76px] max-[1024px]:mx-auto max-[1024px]:max-w-[860px] max-[1024px]:pr-0 max-[1024px]:text-center ${contentAnimation}`}
        >
          <p className={`${sectionLabelClass} ${labelAnimation}`}>
            Product Testimonials
          </p>

          <div className="mb-[48px] flex items-center gap-[22px] max-[1440px]:mb-[38px] max-[1024px]:justify-center max-[767px]:mb-[28px] max-[767px]:gap-[12px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                src={starIcon}
                alt=""
                className="h-[44px] w-[44px] object-contain max-[1440px]:h-[38px] max-[1440px]:w-[38px] max-[767px]:h-[25px] max-[767px]:w-[25px]"
              />
            ))}
          </div>

          <div
            key={currentTestimonial.id}
            className="animate-[testimonialFade_650ms_ease_both]"
          >
            <blockquote className="m-0 max-w-[920px] font-['Cormorant_Garamond',serif] text-[clamp(32px,3.85vw,50px)] font-light leading-[1.12] tracking-[-0.052em] text-[#243f2a] max-[1440px]:text-[clamp(32px,3.2vw,50px)] max-[1280px]:text-[clamp(40px,4.25vw,54px)] max-[1024px]:mx-auto max-[767px]:text-[clamp(28px,6.8vw,40px)] max-[767px]:leading-[1.14]">
              “{currentTestimonial.quote}”
            </blockquote>

            <p className="mb-0 mt-[42px] font-['Inter',sans-serif] text-[clamp(20px,1.45vw,26px)] font-normal italic leading-none tracking-[-0.045em] text-[#8fa58d] max-[1280px]:mt-[32px] max-[1280px]:text-[24px] max-[767px]:mt-[24px] max-[767px]:text-[18px]">
              - {currentTestimonial.author}
            </p>
          </div>

          {/* ==================== Slider Controls ==================== */}
          <div className="absolute right-0 top-1/2 flex -translate-y-1/2 flex-col items-center gap-[25px] max-[1024px]:static max-[1024px]:mt-[44px] max-[1024px]:translate-y-0 max-[1024px]:flex-row max-[1024px]:justify-center max-[767px]:mt-[32px] max-[767px]:gap-[18px]">
            <button
              type="button"
              onClick={handleNextSlide}
              aria-label="Next testimonial"
              className="cursor-pointer border-0 bg-transparent p-0 text-[#243f2a]"
            >
              <ArrowIcon className="block h-[20px] w-[38px] max-[767px]:h-[17px] max-[767px]:w-[32px]" />
            </button>

            <div className="flex flex-col items-center gap-[10px] max-[1024px]:flex-row">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={activeSlide === index ? "true" : "false"}
                  className={`h-[6px] w-[6px] rotate-45 cursor-pointer border-0 p-0 transition duration-300 ${
                    activeSlide === index ? "bg-[#243f2a]" : "bg-[#8fa58d]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handlePrevSlide}
              aria-label="Previous testimonial"
              className="rotate-180 cursor-pointer border-0 bg-transparent p-0 text-[#243f2a]"
            >
              <ArrowIcon className="block h-[20px] w-[38px] max-[767px]:h-[17px] max-[767px]:w-[32px]" />
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes testimonialFade {
            from {
              opacity: 0;
              transform: translateY(18px);
              filter: blur(6px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;