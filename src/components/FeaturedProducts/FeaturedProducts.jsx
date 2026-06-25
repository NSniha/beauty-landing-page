import { useEffect, useRef, useState } from "react";

import chicoriImage from "../../assets/images/featured/featured-chicori.png";
import notoriousImage from "../../assets/images/featured/featured-notorious.png";
import holocenaImage from "../../assets/images/featured/featured-holocena.png";

import starIcon from "../../assets/images/star.svg";

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[20px] w-[20px]">
    <path
      d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[20px] w-[20px]">
    <path
      d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[20px] w-[20px]">
    <path
      d="M6 6H21L19 14H8L6 6Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L5.3 3H2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 21C9.55228 21 10 20.5523 10 20C10 19.4477 9.55228 19 9 19C8.44772 19 8 19.4477 8 20C8 20.5523 8.44772 21 9 21Z"
      fill="currentColor"
    />
    <path
      d="M18 21C18.5523 21 19 20.5523 19 20C19 19.4477 18.5523 19 18 19C17.4477 19 17 19.4477 17 20C17 20.5523 17.4477 21 18 21Z"
      fill="currentColor"
    />
  </svg>
);

const products = [
  {
    id: "chicori",
    name: "CHICORI",
    price: 20,
    rating: 4.0,
    image: chicoriImage,
    imageStyle: "panel",
  },
  {
    id: "notorious",
    name: "NOTORIOUS",
    price: 23,
    rating: 5.0,
    image: notoriousImage,
    imageStyle: "oval",
  },
  {
    id: "holocena",
    name: "HOLOCENA",
    price: 20,
    rating: 5.0,
    image: holocenaImage,
    imageStyle: "panel",
  },
];

const containerClass =
  "mx-auto w-[min(calc(100%_-_128px),1380px)] max-[1600px]:w-[min(calc(100%_-_112px),1320px)] max-[1440px]:w-[min(calc(100%_-_96px),1240px)] max-[1280px]:w-[min(calc(100%_-_96px),1180px)] max-[1024px]:w-[calc(100%_-_72px)] max-[880px]:w-[calc(100%_-_48px)] max-[767px]:w-[calc(100%_-_30px)] max-[360px]:w-[calc(100%_-_26px)]";

const productGridClass =
  "grid w-full grid-cols-3 min-[1501px]:mx-auto min-[1501px]:w-[min(calc(100%_-_128px),1380px)] max-[1024px]:mx-auto max-[1024px]:w-[calc(100%_-_72px)] max-[1024px]:grid-cols-2 max-[880px]:w-[calc(100%_-_48px)] max-[767px]:w-[calc(100%_-_30px)] max-[680px]:grid-cols-1 max-[360px]:w-[calc(100%_-_26px)]";

const FeaturedProducts = () => {
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

  const addToCart = (product) => {
    const savedCart = JSON.parse(localStorage.getItem("beautyCartItems")) || [];
    const existingProduct = savedCart.find((item) => item.id === product.id);

    const updatedCart = existingProduct
      ? savedCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      : [
          ...savedCart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
          },
        ];

    const cartCount = updatedCart.reduce(
      (total, item) => total + item.quantity,
      0
    );

    const cartTotal = updatedCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    localStorage.setItem("beautyCartItems", JSON.stringify(updatedCart));
    localStorage.setItem("beautyCartCount", String(cartCount));
    localStorage.setItem("beautyCartTotal", String(cartTotal));

    window.dispatchEvent(
      new CustomEvent("beauty-cart-updated", {
        detail: {
          count: cartCount,
          total: cartTotal,
          items: updatedCart,
          productName: product.name,
          product,
        },
      })
    );
  };

  return (
    <section
      ref={sectionRef}
      id="shop"
      className="relative w-full overflow-hidden bg-[#f2f6ef]"
    >
      {/* ==================== Section Heading ==================== */}
      <div className={`${containerClass} text-center`}>
        <div className="mx-auto max-w-[1120px] pb-[clamp(60px,4.55vw,72px)] pt-[clamp(66px,5.05vw,86px)] max-[1280px]:pb-[58px] max-[1280px]:pt-[64px] max-[767px]:pb-[42px] max-[767px]:pt-[54px]">
          <p
            className={`mb-[25px] mt-0 font-['Inter',sans-serif] text-[clamp(22px,1.52vw,30px)] font-normal leading-none tracking-[-0.04em] text-[#8fa58d] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1280px]:text-[25px] max-[767px]:mb-[16px] max-[767px]:text-[20px] ${
              isVisible
                ? "translate-y-0 opacity-100 blur-none"
                : "translate-y-[24px] opacity-0 blur-[8px]"
            }`}
          >
            Our featured products
          </p>

          <h2
            className={`m-0 font-['Cormorant_Garamond',serif] text-[clamp(56px,4.2vw,82px)] font-light leading-[1.08] tracking-[-0.056em] text-[#243f2a] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1440px]:text-[clamp(52px,4.25vw,72px)] max-[1280px]:text-[clamp(48px,4.9vw,64px)] max-[767px]:text-[clamp(38px,11vw,54px)] max-[430px]:text-[40px] ${
              isVisible
                ? "translate-y-0 opacity-100 blur-none"
                : "translate-y-[34px] opacity-0 blur-[8px]"
            }`}
          >
            Facial and skincare, natural and
            <span className="block">certified organic</span>
          </h2>
        </div>
      </div>

      {/* ==================== Product Grid ==================== */}
      <div className="border-y border-[#8fa58d]/35">
        <div className={productGridClass}>
          {products.map((product, index) => (
            <article
              key={product.id}
              className={`group relative border-[#8fa58d]/35 px-[clamp(14px,1.35vw,26px)] pb-[40px] pt-[32px] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1500px]:px-[24px] max-[1280px]:px-[18px] max-[1024px]:px-[20px] max-[767px]:px-0 max-[767px]:pb-[34px] max-[767px]:pt-[30px] max-[1024px]:border-b ${
                index !== 0 ? "border-l max-[680px]:border-l-0" : ""
              } ${
                isVisible
                  ? "translate-y-0 opacity-100 blur-none"
                  : "translate-y-[46px] opacity-0 blur-[8px]"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 0.13}s` : "0s",
              }}
            >
              {/* ==================== Product Image ==================== */}
              <div className="relative flex h-[clamp(455px,33.2vw,520px)] items-center justify-center overflow-visible min-[1501px]:h-[clamp(500px,33.5vw,560px)] max-[1500px]:h-[520px] max-[1280px]:h-[430px] max-[1024px]:h-[420px] max-[767px]:h-[390px] max-[430px]:h-[330px]">
                {product.imageStyle === "panel" && (
                  <div className="absolute inset-0 bg-[#e6eee2]" />
                )}

                {product.imageStyle === "oval" && (
                  <div className="absolute left-1/2 top-1/2 h-[min(96%,500px)] w-[min(76%,385px)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#e6eee2] min-[1501px]:h-[min(98%,535px)] min-[1501px]:w-[min(90%,470px)] max-[1500px]:h-[500px] max-[1500px]:w-[400px] max-[1280px]:h-[380px] max-[1280px]:w-[300px] max-[767px]:h-[340px] max-[767px]:w-[270px] max-[430px]:h-[295px] max-[430px]:w-[235px]" />
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className={`relative z-10 block w-auto max-w-none object-contain transition-transform duration-500 group-hover:scale-[1.025] ${
                    product.imageStyle === "oval"
                      ? "h-[74%] min-[1501px]:h-[76%] max-[767px]:h-[72%]"
                      : "h-[82%] max-[767px]:h-[78%]"
                  }`}
                />

                {/* ==================== Hover Actions ==================== */}
                <div className="absolute right-[24px] top-[24px] z-20 flex translate-x-[18px] flex-col gap-[12px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 max-[767px]:right-[16px] max-[767px]:top-[16px] max-[767px]:translate-x-0 max-[767px]:opacity-100">
                  <button
                    type="button"
                    aria-label="Add to wishlist"
                    className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full border border-[#8fa58d]/40 bg-[#f7faf4] p-0 text-[#243f2a] transition hover:-translate-y-[2px] hover:bg-white max-[767px]:h-[40px] max-[767px]:w-[40px]"
                  >
                    <HeartIcon />
                  </button>

                  <button
                    type="button"
                    aria-label="View product details"
                    className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full border border-[#8fa58d]/40 bg-[#f7faf4] p-0 text-[#243f2a] transition hover:-translate-y-[2px] hover:bg-white max-[767px]:h-[40px] max-[767px]:w-[40px]"
                  >
                    <EyeIcon />
                  </button>

                  <button
                    type="button"
                    aria-label={`Add ${product.name} to cart`}
                    onClick={() => addToCart(product)}
                    className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full border border-[#8fa58d]/40 bg-[#f7faf4] p-0 text-[#243f2a] transition hover:-translate-y-[2px] hover:bg-white max-[767px]:h-[40px] max-[767px]:w-[40px]"
                  >
                    <CartIcon />
                  </button>
                </div>
              </div>

              {/* ==================== Product Info ==================== */}
              <div className="mt-[30px] flex items-end justify-between gap-[20px] max-[1280px]:mt-[28px] max-[767px]:mt-[24px]">
                <div>
                  <h3 className="m-0 font-['Inter',sans-serif] text-[clamp(24px,1.72vw,30px)] font-normal uppercase leading-none tracking-[-0.045em] text-[#243f2a] max-[1280px]:text-[26px] max-[767px]:text-[24px]">
                    {product.name}
                  </h3>

                  <p className="mb-0 mt-[18px] font-['Inter',sans-serif] text-[clamp(21px,1.38vw,24px)] font-bold leading-none tracking-[-0.04em] text-[#243f2a] max-[767px]:mt-[14px]">
                    ${product.price}
                  </p>
                </div>

                <div className="mb-[3px] flex items-center gap-[14px] max-[1280px]:gap-[11px] max-[767px]:gap-[10px]">
                  <div className="flex items-center gap-[4px] max-[1280px]:gap-[3px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <img
                        key={star}
                        src={starIcon}
                        alt=""
                        className={`h-[20px] w-[20px] object-contain max-[1280px]:h-[18px] max-[1280px]:w-[18px] max-[767px]:h-[17px] max-[767px]:w-[17px] ${
                          star <= Math.floor(product.rating)
                            ? "opacity-100"
                            : "opacity-35"
                        }`}
                      />
                    ))}
                  </div>

                  <span className="font-['Inter',sans-serif] text-[clamp(18px,1.3vw,22px)] font-normal leading-none tracking-[-0.035em] text-[#5c7a5d] max-[767px]:text-[18px]">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;