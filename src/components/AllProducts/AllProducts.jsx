import { useEffect, useMemo, useRef, useState } from "react";

import classwingImage from "../../assets/images/all-products/all-classwing.png";
import holocaneImage from "../../assets/images/all-products/all-holocane.png";
import inamorataImage from "../../assets/images/all-products/all-inamorata.png";
import lightcoolImage from "../../assets/images/all-products/all-lightcool.png";

const containerClass =
  "mx-auto w-[min(calc(100%_-_128px),1380px)] max-[1600px]:w-[min(calc(100%_-_112px),1320px)] max-[1440px]:w-[min(calc(100%_-_96px),1240px)] max-[1280px]:w-[min(calc(100%_-_96px),1180px)] max-[1024px]:w-[calc(100%_-_72px)] max-[880px]:w-[calc(100%_-_48px)] max-[767px]:w-[calc(100%_-_30px)] max-[360px]:w-[calc(100%_-_26px)]";

const tabs = [
  { id: "all-needs", label: "All needs" },
  { id: "protect", label: "Protect" },
  { id: "regenerates", label: "Regenerates" },
  { id: "revitalizes", label: "Revitalizes" },
  { id: "feeds", label: "Feeds" },
  { id: "regulates", label: "Regulates" },
  { id: "purifies", label: "Purifies" },
  { id: "makeup-removal", label: "Makeup Removal" },
  { id: "exfoliate", label: "Exfoliate" },
  { id: "antioxidant", label: "Antioxidant" },
  { id: "soothes", label: "Soothes" },
  { id: "smoothes-skin-texture", label: "Smoothes skin texture" },
  { id: "tones", label: "Tones" },
  { id: "anti-waste", label: "Anti-waste" },
  { id: "hydrate", label: "Hydrate" },
  { id: "strengthens", label: "Strengthens" },
  {
    id: "regenerates-after-uv-exposure-strengthens",
    label: "Regenerates after UV exposure Strengthens",
  },
];

const products = [
  {
    id: "all-classwing",
    name: "CLASSWING",
    price: 20,
    rating: 5.0,
    image: classwingImage,
    tags: ["all-needs"],
  },
  {
    id: "all-holocane",
    name: "HOLOCANE",
    price: 23,
    rating: 5.0,
    image: holocaneImage,
    tags: ["all-needs"],
  },
  {
    id: "all-inamorata",
    name: "INAMORATA",
    price: 12,
    rating: 4.5,
    image: inamorataImage,
    tags: ["all-needs"],
  },
  {
    id: "all-lightcool",
    name: "LIGHTCOOL",
    price: 22.5,
    rating: 5.0,
    image: lightcoolImage,
    tags: ["all-needs"],
  },
];

const HeartIcon = ({ filled = false }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[20px] w-[20px]">
    <path
      d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z"
      fill={filled ? "currentColor" : "none"}
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

const EmptyBoxIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="h-[42px] w-[42px]">
    <path
      d="M15 23L32 13L49 23V43L32 53L15 43V23Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M15 23L32 33L49 23"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M32 33V53"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M44 47L52 55"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle
      cx="41"
      cy="44"
      r="8"
      fill="#e6eee2"
      stroke="currentColor"
      strokeWidth="3"
    />
  </svg>
);

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-[4px]">
    {[1, 2, 3, 4, 5].map((star) => {
      const isFull = star <= Math.floor(rating);
      const isHalf = !isFull && star - rating <= 0.5;

      return (
        <svg
          key={star}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="h-[19px] w-[19px] text-[#2f6334] max-[767px]:h-[17px] max-[767px]:w-[17px]"
        >
          <defs>
            <linearGradient id={`star-${rating}-${star}`}>
              <stop offset={isHalf ? "50%" : "100%"} stopColor="currentColor" />
              <stop offset={isHalf ? "50%" : "100%"} stopColor="transparent" />
            </linearGradient>
          </defs>

          <path
            d="M10 1.4L12.64 6.75L18.55 7.61L14.28 11.77L15.29 17.65L10 14.87L4.71 17.65L5.72 11.77L1.45 7.61L7.36 6.75L10 1.4Z"
            fill={isFull || isHalf ? `url(#star-${rating}-${star})` : "none"}
            stroke="currentColor"
            strokeWidth="1.1"
            opacity={isFull || isHalf ? 1 : 0.45}
          />
        </svg>
      );
    })}
  </div>
);

const getStoredWishlistIds = () => {
  try {
    return JSON.parse(localStorage.getItem("beautyWishlistIds")) || [];
  } catch {
    return [];
  }
};

const AllProducts = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("all-needs");
  const [isVisible, setIsVisible] = useState(false);
  const [wishlistIds, setWishlistIds] = useState(() => getStoredWishlistIds());
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.tags.includes(activeTab));
  }, [activeTab]);

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
        threshold: 0.14,
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
                quantity: Number(item.quantity || 0) + 1,
              }
            : item
        )
      : [
          ...savedCart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            rating: product.rating,
            image: product.image,
            quantity: 1,
          },
        ];

    const cartCount = updatedCart.reduce(
      (total, item) => total + Number(item.quantity || 0),
      0
    );

    const cartTotal = updatedCart.reduce(
      (total, item) => total + Number(item.price || 0) * Number(item.quantity || 0),
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

  const toggleWishlist = (product) => {
    const savedWishlistItems =
      JSON.parse(localStorage.getItem("beautyWishlistItems")) || [];

    const exists = wishlistIds.includes(product.id);

    const updatedWishlistIds = exists
      ? wishlistIds.filter((id) => id !== product.id)
      : [...wishlistIds, product.id];

    const updatedWishlistItems = exists
      ? savedWishlistItems.filter((item) => item.id !== product.id)
      : [
          ...savedWishlistItems,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            rating: product.rating,
            image: product.image,
          },
        ];

    setWishlistIds(updatedWishlistIds);

    localStorage.setItem("beautyWishlistIds", JSON.stringify(updatedWishlistIds));
    localStorage.setItem(
      "beautyWishlistItems",
      JSON.stringify(updatedWishlistItems)
    );
    localStorage.setItem("beautyWishlistCount", String(updatedWishlistIds.length));

    window.dispatchEvent(
      new CustomEvent("beauty-wishlist-updated", {
        detail: {
          count: updatedWishlistIds.length,
          items: updatedWishlistItems,
          product,
          active: !exists,
        },
      })
    );
  };

  return (
    <section
      ref={sectionRef}
      id="all-products"
      className="relative w-full overflow-hidden border-y border-[#8fa58d]/35 bg-[#f2f6ef]"
    >
      {/* ==================== Main Layout ==================== */}
      <div
        className={`${containerClass} grid min-h-[clamp(900px,70vw,1120px)] grid-cols-[42.2%_1fr] gap-[clamp(58px,6.1vw,96px)] pb-[clamp(72px,6vw,98px)] pt-[clamp(82px,6.6vw,112px)] max-[1280px]:grid-cols-[43%_1fr] max-[1280px]:gap-[54px] max-[1024px]:min-h-0 max-[1024px]:grid-cols-1 max-[1024px]:gap-[58px] max-[1024px]:pb-[78px] max-[1024px]:pt-[76px] max-[767px]:gap-[42px] max-[767px]:pb-[58px] max-[767px]:pt-[56px]`}
      >
        {/* ==================== Left Content ==================== */}
        <div
          className={`max-w-[540px] transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[1024px]:max-w-[680px] ${
            isVisible
              ? "translate-x-0 opacity-100 blur-0"
              : "-translate-x-[34px] opacity-0 blur-[8px]"
          }`}
        >
          <p className="mb-[24px] mt-0 font-['Inter',sans-serif] text-[clamp(22px,1.75vw,30px)] font-normal leading-none tracking-[-0.055em] text-[#8fa58d] max-[767px]:mb-[18px] max-[767px]:text-[21px]">
            All Products
          </p>

          <h2 className="m-0 max-w-[520px] font-['Cormorant_Garamond',serif] text-[clamp(54px,4.45vw,78px)] font-light leading-[1.12] tracking-[-0.058em] text-[#243f2a] max-[1280px]:text-[clamp(50px,4.75vw,68px)] max-[767px]:text-[clamp(42px,12vw,58px)]">
            Mild skincare &amp; facial routine
          </h2>

          <div className="mt-[42px] flex flex-wrap gap-x-[14px] gap-y-[14px] max-[767px]:mt-[34px] max-[767px]:gap-x-[10px] max-[767px]:gap-y-[12px]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`h-[48px] cursor-pointer rounded-full border px-[25px] font-['Inter',sans-serif] text-[16px] font-normal leading-none tracking-[-0.04em] transition duration-300 max-[767px]:h-[43px] max-[767px]:px-[18px] max-[767px]:text-[14px] ${
                    isActive
                      ? "border-[#c7d9bf] bg-[#e6eee2] text-[#243f2a]"
                      : "border-[#c7d9bf] bg-transparent text-[#8fa58d] hover:bg-[#e6eee2]/60 hover:text-[#243f2a]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================== Right Products Area ==================== */}
        <div
          className={`transition-all delay-[120ms] duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-x-0 opacity-100 blur-0"
              : "translate-x-[34px] opacity-0 blur-[8px]"
          }`}
        >
          {filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 gap-x-[38px] gap-y-[40px] max-[1280px]:gap-x-[26px] max-[1280px]:gap-y-[34px] max-[680px]:grid-cols-1">
                {filteredProducts.map((product, index) => (
                  <article
                    key={product.id}
                    className={`group relative border border-[#c7d9bf] bg-[#f2f6ef] transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isVisible
                        ? "translate-y-0 opacity-100 blur-0"
                        : "translate-y-[34px] opacity-0 blur-[8px]"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${0.16 + index * 0.09}s` : "0s",
                    }}
                  >
                    {/* ==================== Product Image ==================== */}
                    <div className="relative flex h-[clamp(270px,22.15vw,314px)] items-center justify-center overflow-hidden border-b border-[#c7d9bf] bg-[#e6eee2] max-[1024px]:h-[330px] max-[767px]:h-[295px]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="relative z-10 block h-[78%] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.035]"
                      />

                      <div className="absolute right-[18px] top-[18px] z-20 flex translate-x-[16px] flex-col gap-[10px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 max-[767px]:right-[14px] max-[767px]:top-[14px] max-[767px]:translate-x-0 max-[767px]:opacity-100">
                        <button
                          type="button"
                          onClick={() => toggleWishlist(product)}
                          aria-label={`Add ${product.name} to wishlist`}
                          className={`flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-[#8fa58d]/40 bg-[#f7faf4] p-0 transition hover:-translate-y-[2px] hover:bg-white ${
                            wishlistIds.includes(product.id)
                              ? "text-[#243f2a]"
                              : "text-[#5c7a5d]"
                          }`}
                        >
                          <HeartIcon filled={wishlistIds.includes(product.id)} />
                        </button>

                        <button
                          type="button"
                          onClick={() => setQuickViewProduct(product)}
                          aria-label={`View ${product.name}`}
                          className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-[#8fa58d]/40 bg-[#f7faf4] p-0 text-[#5c7a5d] transition hover:-translate-y-[2px] hover:bg-white hover:text-[#243f2a]"
                        >
                          <EyeIcon />
                        </button>

                        <button
                          type="button"
                          onClick={() => addToCart(product)}
                          aria-label={`Add ${product.name} to cart`}
                          className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-[#8fa58d]/40 bg-[#f7faf4] p-0 text-[#5c7a5d] transition hover:-translate-y-[2px] hover:bg-white hover:text-[#243f2a]"
                        >
                          <CartIcon />
                        </button>
                      </div>
                    </div>

                    {/* ==================== Product Info ==================== */}
                    <div className="px-[22px] pb-[25px] pt-[24px] max-[767px]:px-[20px] max-[767px]:pb-[23px] max-[767px]:pt-[22px]">
                      <h3 className="m-0 font-['Inter',sans-serif] text-[20px] font-normal uppercase leading-none tracking-[-0.04em] text-[#243f2a] max-[767px]:text-[18px]">
                        {product.name}
                      </h3>

                      <p className="mb-0 mt-[17px] font-['Inter',sans-serif] text-[21px] font-bold leading-none tracking-[-0.04em] text-[#243f2a] max-[767px]:mt-[14px] max-[767px]:text-[19px]">
                        ${product.price}
                      </p>

                      <div className="mt-[19px] flex items-center gap-[12px]">
                        <StarRating rating={product.rating} />

                        <span className="font-['Inter',sans-serif] text-[18px] font-normal leading-none tracking-[-0.035em] text-[#4f744e] max-[767px]:text-[16px]">
                          {product.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <a
                href="#shop"
                className="group mx-auto mt-[42px] flex h-[52px] w-[170px] items-center justify-center gap-[14px] border border-[#243f2a] bg-transparent font-['Inter',sans-serif] text-[15px] font-normal leading-none text-[#243f2a] no-underline transition duration-300 hover:bg-[#243f2a] hover:text-[#f7faf4] max-[767px]:mt-[34px]"
              >
                <span>Shop now</span>

                <ArrowIcon className="h-[18px] w-[28px] transition-transform duration-300 group-hover:translate-x-[5px]" />
              </a>
            </>
          ) : (
            <div className="flex min-h-[520px] items-center justify-center text-center max-[1024px]:min-h-[360px] max-[767px]:min-h-[300px]">
              <div>
                <div className="mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#e6eee2] text-[#8fa58d]">
                  <EmptyBoxIcon />
                </div>

                <h3 className="mb-0 mt-[25px] font-['Inter',sans-serif] text-[19px] font-bold leading-none tracking-[-0.04em] text-[#243f2a]">
                  No items found!
                </h3>

                <p className="mx-auto mb-0 mt-[18px] max-w-[430px] font-['Inter',sans-serif] text-[16px] font-normal leading-[1.45] tracking-[-0.04em] text-[#2f6334]">
                  This product category will be available shortly.
                  <span className="block">
                    Explore other products. Happy shopping!
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ==================== Quick View Modal ==================== */}
      <div
        className={`fixed inset-0 z-[140] bg-black/40 backdrop-blur-[2px] transition-all duration-300 ${
          quickViewProduct ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setQuickViewProduct(null)}
      />

      <aside
        className={`fixed left-1/2 top-1/2 z-[150] grid w-[min(calc(100%_-_32px),760px)] -translate-x-1/2 grid-cols-[45%_1fr] overflow-hidden border border-[#8fa58d]/35 bg-[#f7faf4] shadow-[0_28px_90px_rgba(12,35,17,0.25)] transition-all duration-500 max-[767px]:grid-cols-1 ${
          quickViewProduct
            ? "visible -translate-y-1/2 opacity-100"
            : "invisible -translate-y-[45%] opacity-0"
        }`}
        aria-hidden={!quickViewProduct}
      >
        {quickViewProduct && (
          <>
            <div className="flex min-h-[340px] items-center justify-center bg-[#e6eee2] p-[28px] max-[767px]:min-h-[260px]">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="block h-[250px] w-auto object-contain max-[767px]:h-[210px]"
              />
            </div>

            <div className="relative p-[32px] max-[767px]:p-[24px]">
              <button
                type="button"
                onClick={() => setQuickViewProduct(null)}
                className="absolute right-[18px] top-[18px] flex h-[36px] w-[36px] cursor-pointer items-center justify-center border border-[#8fa58d]/35 bg-transparent p-0 text-[#243f2a] transition hover:bg-[#e6eee2]"
                aria-label="Close quick view"
              >
                ×
              </button>

              <p className="mb-[10px] mt-0 font-['Inter',sans-serif] text-[12px] font-medium uppercase tracking-[0.22em] text-[#8fa58d]">
                Product details
              </p>

              <h3 className="m-0 pr-[38px] font-['Cormorant_Garamond',serif] text-[42px] font-light uppercase leading-none tracking-[-0.05em] text-[#243f2a]">
                {quickViewProduct.name}
              </h3>

              <p className="mb-0 mt-[16px] font-['Inter',sans-serif] text-[24px] font-bold text-[#243f2a]">
                ${quickViewProduct.price}
              </p>

              <div className="mt-[20px] flex items-center gap-[12px]">
                <StarRating rating={quickViewProduct.rating} />

                <span className="font-['Inter',sans-serif] text-[17px] text-[#4f744e]">
                  {quickViewProduct.rating.toFixed(1)}
                </span>
              </div>

              <p className="mb-0 mt-[24px] font-['Inter',sans-serif] text-[16px] leading-[1.55] tracking-[-0.04em] text-[#4f744e]">
                A gentle skincare essential made for a calm, clean, and balanced
                facial routine.
              </p>

              <div className="mt-[30px] flex gap-[12px] max-[430px]:flex-col">
                <button
                  type="button"
                  onClick={() => addToCart(quickViewProduct)}
                  className="h-[50px] flex-1 cursor-pointer border-0 bg-[#243f2a] font-['Inter',sans-serif] text-[13px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-[#1a2f1f]"
                >
                  Add to cart
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(quickViewProduct)}
                  className="h-[50px] flex-1 cursor-pointer border border-[#8fa58d]/45 bg-transparent font-['Inter',sans-serif] text-[13px] font-medium uppercase tracking-[0.14em] text-[#243f2a] transition hover:bg-[#e6eee2]"
                >
                  Wishlist
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </section>
  );
};

export default AllProducts;