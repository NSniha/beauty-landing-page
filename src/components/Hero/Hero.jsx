import { useEffect, useRef, useState } from "react";

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

const getStoredCartSummary = () => {
  if (typeof window === "undefined") {
    return {
      items: [],
      count: 0,
      total: 0,
    };
  }

  try {
    const items = JSON.parse(window.localStorage.getItem("beautyCartItems")) || [];

    const count = items.reduce(
      (total, item) => total + Number(item.quantity || 0),
      0
    );

    const total = items.reduce(
      (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0),
      0
    );

    return {
      items,
      count,
      total,
    };
  } catch {
    return {
      items: [],
      count: 0,
      total: 0,
    };
  }
};

const saveCartSummary = (items) => {
  const count = items.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  const total = items.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );

  localStorage.setItem("beautyCartItems", JSON.stringify(items));
  localStorage.setItem("beautyCartCount", String(count));
  localStorage.setItem("beautyCartTotal", String(total));

  return {
    items,
    count,
    total,
  };
};

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

const StarIcon = ({ isActive = true }) => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    className={`h-[12px] w-[12px] ${
      isActive ? "text-[#243f2a]" : "text-[#8fa58d]/30"
    }`}
  >
    <path
      d="M10 1.4L12.64 6.75L18.55 7.61L14.28 11.77L15.29 17.65L10 14.87L4.71 17.65L5.72 11.77L1.45 7.61L7.36 6.75L10 1.4Z"
      fill="currentColor"
    />
  </svg>
);

const Hero = () => {
  const initialCart = getStoredCartSummary();

  const [activeDot, setActiveDot] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCart.items);
  const [cartCount, setCartCount] = useState(initialCart.count);
  const [cartTotal, setCartTotal] = useState(initialCart.total);
  const [toast, setToast] = useState({
    isOpen: false,
    productName: "",
    productImage: "",
    productRating: 5,
    productPrice: 0,
  });

  const toastTimerRef = useRef(null);

  const activeSlide = heroSlides[activeDot];

  const handleNextSlide = () => {
    setActiveDot((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setActiveDot((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const syncCartState = (summary = getStoredCartSummary()) => {
    setCartItems(summary.items);
    setCartCount(summary.count);
    setCartTotal(summary.total);
  };

  const showCartToast = (product = {}) => {
    setToast({
      isOpen: true,
      productName: product.name || product.productName || "Product",
      productImage: product.image || product.productImage || "",
      productRating: Number(product.rating || product.productRating || 5),
      productPrice: Number(product.price || product.productPrice || 0),
    });

    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        isOpen: false,
      }));
    }, 2600);
  };

  const openCartPopup = () => {
    syncCartState();
    setMenuOpen(false);
    setCartOpen(true);
  };

  const closeCartPopup = () => {
    setCartOpen(false);
  };

  const updateCartItems = (nextItems) => {
    const summary = saveCartSummary(nextItems);

    syncCartState(summary);

    window.dispatchEvent(
      new CustomEvent("beauty-cart-updated", {
        detail: {
          ...summary,
          silent: true,
        },
      })
    );
  };

  const increaseQuantity = (productId) => {
    const nextItems = cartItems.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: Number(item.quantity || 0) + 1,
          }
        : item
    );

    updateCartItems(nextItems);
  };

  const decreaseQuantity = (productId) => {
    const nextItems = cartItems
      .map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.max(Number(item.quantity || 0) - 1, 0),
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCartItems(nextItems);
  };

  const removeCartItem = (productId) => {
    const nextItems = cartItems.filter((item) => item.id !== productId);

    updateCartItems(nextItems);
  };

  const clearCart = () => {
    updateCartItems([]);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(autoSlide);
  }, []);

  useEffect(() => {
    const handleCartUpdated = (event) => {
      const summary = getStoredCartSummary();

      syncCartState(summary);

      if (event.detail?.silent) return;

      const addedProduct =
        event.detail?.product ||
        event.detail?.addedItem ||
        event.detail?.item ||
        event.detail?.items?.[event.detail.items.length - 1] ||
        {};

      showCartToast(addedProduct);
    };

    const handleStorageChange = (event) => {
      if (
        event.key === "beautyCartItems" ||
        event.key === "beautyCartCount" ||
        event.key === "beautyCartTotal"
      ) {
        syncCartState();
      }
    };

    window.addEventListener("beauty-cart-updated", handleCartUpdated);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("beauty-cart-updated", handleCartUpdated);
      window.removeEventListener("storage", handleStorageChange);

      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative isolate z-20 h-[clamp(650px,50.78vw,750px)] min-h-[650px] w-full overflow-visible bg-[#f2f6ef] max-[1024px]:h-[760px] max-[880px]:h-[700px] max-[767px]:h-[100svh] max-[767px]:min-h-[720px] max-[767px]:overflow-hidden max-[767px]:bg-[#07100b]"
    >
      {/* ==================== Hero Background ==================== */}
      <div className="absolute inset-0 z-[1] h-full">
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

      {/* ==================== Add To Cart Toast ==================== */}
      <div
        className={`fixed bottom-[24px] left-[24px] z-[130] w-[min(calc(100%_-_32px),345px)] overflow-hidden border border-[#8fa58d]/35 bg-[#f7faf4]/95 shadow-[0_18px_46px_rgba(12,35,17,0.18)] backdrop-blur-md transition-all duration-500 max-[767px]:bottom-[16px] max-[767px]:left-[16px] max-[767px]:w-[min(calc(100%_-_32px),320px)] ${
          toast.isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }`}
        role="status"
        aria-live="polite"
      >
        <div className="grid grid-cols-[68px_1fr_70px] items-center gap-[12px] px-[14px] py-[12px] max-[767px]:grid-cols-[62px_1fr_62px] max-[767px]:gap-[10px]">
          <div className="flex h-[68px] w-[68px] items-center justify-center bg-[#e6eee2] max-[767px]:h-[62px] max-[767px]:w-[62px]">
            {toast.productImage ? (
              <img
                src={toast.productImage}
                alt={toast.productName}
                className="block h-[58px] w-auto object-contain max-[767px]:h-[52px]"
              />
            ) : (
              <span className="font-['Cormorant_Garamond',serif] text-[28px] text-[#8fa58d]">
                V
              </span>
            )}
          </div>

          <div className="min-w-0">
            <p className="mb-[5px] mt-0 font-['Inter',sans-serif] text-[10px] font-medium uppercase leading-none tracking-[0.18em] text-[#8fa58d]">
              Added to cart
            </p>

            <h3 className="m-0 truncate font-['Inter',sans-serif] text-[16px] font-normal uppercase leading-none tracking-[-0.035em] text-[#243f2a]">
              {toast.productName}
            </h3>

            <div className="mt-[8px] flex items-center gap-[8px]">
              <div className="flex items-center gap-[2px]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    isActive={star <= Math.floor(toast.productRating)}
                  />
                ))}
              </div>

              <span className="font-['Inter',sans-serif] text-[12px] font-normal leading-none text-[#5c7a5d]">
                {toast.productRating.toFixed(1)}
              </span>
            </div>
          </div>

          <div className="flex h-full items-center justify-end border-l border-[#8fa58d]/20 pl-[12px]">
            {toast.productPrice > 0 && (
              <span className="font-['Inter',sans-serif] text-[22px] font-bold leading-none tracking-[-0.05em] text-[#243f2a] max-[767px]:text-[20px]">
                ${toast.productPrice}
              </span>
            )}
          </div>
        </div>

        <div
          key={toast.productName + String(toast.isOpen)}
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#243f2a]"
          style={{
            animation: toast.isOpen
              ? "beautyCartToastLine 2600ms linear forwards"
              : "none",
          }}
        />
      </div>

      {/* ==================== Cart Overlay ==================== */}
      <div
        className={`fixed inset-0 z-[115] bg-black/35 backdrop-blur-[2px] transition-all duration-300 ${
          cartOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeCartPopup}
      />

      {/* ==================== Cart Details Popup ==================== */}
      <aside
        id="cart"
        className={`fixed right-0 top-0 z-[125] flex h-[100dvh] w-[min(calc(100%_-_24px),390px)] flex-col overflow-hidden border-l border-[#8fa58d]/35 bg-[#f7faf4] shadow-[-22px_0_80px_rgba(12,35,17,0.22)] transition-all duration-500 max-[767px]:w-[min(calc(100%_-_18px),360px)] ${
          cartOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
        aria-hidden={!cartOpen}
      >
        <div className="flex items-start justify-between gap-[16px] border-b border-[#8fa58d]/25 px-[20px] py-[20px]">
          <div>
            <p className="mb-[6px] mt-0 font-['Inter',sans-serif] text-[11px] font-medium uppercase tracking-[0.22em] text-[#8fa58d]">
              Shopping cart
            </p>

            <h2 className="m-0 font-['Cormorant_Garamond',serif] text-[34px] font-light leading-none tracking-[-0.045em] text-[#243f2a]">
              Your items
            </h2>
          </div>

          <button
            type="button"
            onClick={closeCartPopup}
            className="flex h-[36px] w-[36px] shrink-0 cursor-pointer items-center justify-center border border-[#8fa58d]/35 bg-transparent p-0 text-[#243f2a] transition hover:bg-[#e6eee2]"
            aria-label="Close cart"
          >
            <CloseIcon className="h-[17px] w-[17px]" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-[20px] py-[20px]">
          {cartItems.length === 0 ? (
            <div className="flex min-h-full flex-col items-center justify-center py-[34px] text-center">
              <p className="m-0 font-['Cormorant_Garamond',serif] text-[31px] font-light leading-[1.08] tracking-[-0.04em] text-[#243f2a]">
                Your cart is empty
              </p>

              <p className="mx-auto mb-0 mt-[10px] max-w-[260px] font-['Inter',sans-serif] text-[14px] leading-[1.55] text-[#5c7a5d]">
                Add your favorite skincare products and they will appear here.
              </p>

              <button
                type="button"
                onClick={closeCartPopup}
                className="mt-[22px] h-[46px] cursor-pointer border-0 bg-[#243f2a] px-[22px] font-['Inter',sans-serif] text-[13px] font-medium uppercase tracking-[0.12em] text-white"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-[16px]">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="grid grid-cols-[76px_1fr] gap-[14px] border-b border-[#8fa58d]/20 pb-[16px]"
                >
                  <div className="flex h-[76px] w-[76px] items-center justify-center bg-[#e6eee2]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="block h-[66px] w-auto object-contain"
                    />
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-[10px]">
                      <div>
                        <h3 className="m-0 font-['Inter',sans-serif] text-[16px] font-normal uppercase leading-none tracking-[-0.035em] text-[#243f2a]">
                          {item.name}
                        </h3>

                        <p className="mb-0 mt-[7px] font-['Inter',sans-serif] text-[14px] font-medium text-[#5c7a5d]">
                          ${Number(item.price).toFixed(2)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeCartItem(item.id)}
                        className="cursor-pointer border-0 bg-transparent p-0 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.1em] text-[#8fa58d] transition hover:text-[#243f2a]"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-[14px] flex items-center justify-between gap-[12px]">
                      <div className="flex h-[32px] items-center border border-[#8fa58d]/35">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          className="h-full w-[32px] cursor-pointer border-0 bg-transparent text-[17px] text-[#243f2a]"
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          −
                        </button>

                        <span className="min-w-[31px] text-center font-['Inter',sans-serif] text-[13px] text-[#243f2a]">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          className="h-full w-[32px] cursor-pointer border-0 bg-transparent text-[17px] text-[#243f2a]"
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          +
                        </button>
                      </div>

                      <p className="m-0 font-['Inter',sans-serif] text-[15px] font-bold text-[#243f2a]">
                        ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-[#8fa58d]/25 px-[20px] py-[20px]">
            <div className="mb-[16px] flex items-center justify-between">
              <span className="font-['Inter',sans-serif] text-[14px] uppercase tracking-[0.12em] text-[#5c7a5d]">
                Subtotal
              </span>

              <strong className="font-['Inter',sans-serif] text-[21px] text-[#243f2a]">
                ${cartTotal.toFixed(2)}
              </strong>
            </div>

            <button
              type="button"
              className="h-[52px] w-full cursor-pointer border-0 bg-[#243f2a] font-['Inter',sans-serif] text-[13px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-[#1a2f1f]"
            >
              Checkout
            </button>

            <button
              type="button"
              onClick={clearCart}
              className="mt-[11px] h-[42px] w-full cursor-pointer border border-[#8fa58d]/35 bg-transparent font-['Inter',sans-serif] text-[12px] font-medium uppercase tracking-[0.14em] text-[#243f2a] transition hover:bg-[#e6eee2]"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>

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

            <small className="mt-[5px] block font-['Great_Vibes',cursive] text-[17px] font-normal lowercase leading-none tracking-[0.04em] max-[1440px]:text-[16px] max-[1024px]:mt-[6px] max-[1024px]:text-[14px] max-[880px]:text-[13px] max-[767px]:mt-[5px] max-[767px]:pl-[17px] max-[767px]:text-[clamp(12px,3.6vw,14px)] max-[360px]:pl-[15px]">
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

            <button
              type="button"
              onClick={openCartPopup}
              className={`${desktopLinkClass} cursor-pointer border-0 bg-transparent p-0`}
            >
              Cart ({cartCount})
            </button>
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

            <button
              type="button"
              onClick={openCartPopup}
              className="cursor-pointer border-0 bg-transparent p-0 font-['Inter',sans-serif] text-[14px] font-normal uppercase leading-none text-[#f8faf4] max-[767px]:text-[clamp(12px,4vw,14px)]"
            >
              Cart ({cartCount})
            </button>
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
                aria-current={activeDot === index ? "true" : "false"}
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
          className="beauty-product-animate pointer-events-none absolute left-[2.1%] top-[14%] z-[23] h-[clamp(650px,46.5vw,730px)] origin-center max-[1600px]:left-[2.2%] max-[1600px]:top-[11.6%] max-[1600px]:h-[clamp(620px,47vw,700px)] max-[1600px]:min-h-0 max-[1440px]:left-[2.1%] max-[1440px]:top-[13.2%] max-[1440px]:h-[clamp(690px,46.2vw,700px)] max-[1440px]:min-h-0 max-[1280px]:left-[2.4%] max-[1280px]:top-[6.2%] max-[1280px]:h-[clamp(500px,46vw,550px)] max-[1280px]:min-h-0 max-[1024px]:left-[2%] max-[1024px]:top-[13%] max-[1024px]:h-[76%] max-[1024px]:min-h-[470px] max-[880px]:left-[1%] max-[880px]:top-[13%] max-[880px]:h-[74%] max-[880px]:min-h-[440px] max-[767px]:!left-1/2 max-[767px]:!right-auto max-[767px]:top-[clamp(335px,47svh,382px)] max-[767px]:z-[24] max-[767px]:h-[clamp(285px,42svh,355px)] max-[767px]:min-h-0 max-[767px]:!-translate-x-1/2 max-[767px]:![animation:none] max-[430px]:top-[clamp(370px,47svh,450px)] max-[390px]:top-[clamp(355px,47svh,382px)] max-[360px]:h-[clamp(270px,41svh,335px)]"
        >
          <img
            src={activeSlide.productImage}
            alt={activeSlide.productName}
            className="z-10 block h-full w-auto max-w-none object-contain"
          />
        </div>

        {/* ==================== Hero Text ==================== */}
        <div
          key={`copy-${activeSlide.id}`}
          className="beauty-copy-animate absolute left-[36.8%] top-[20.6%] z-[25] w-[900px] max-[1600px]:left-[36.4%] max-[1600px]:top-[25.2%] max-[1600px]:w-[860px] max-[1440px]:left-[36.7%] max-[1440px]:top-[25%] max-[1440px]:w-[780px] max-[1280px]:left-[36%] max-[1280px]:top-[21.5%] max-[1280px]:w-[720px] max-[1024px]:left-[36.2%] max-[1024px]:top-[24%] max-[1024px]:w-[560px] max-[880px]:left-[36.5%] max-[880px]:top-[30%] max-[880px]:w-[500px] max-[767px]:!left-1/2 max-[767px]:!right-auto max-[767px]:top-[clamp(120px,13svh,106px)] max-[767px]:z-[25] max-[767px]:w-[min(calc(100%_-_52px),330px)] max-[767px]:!-translate-x-1/2 max-[767px]:text-center max-[767px]:![animation:none] max-[360px]:w-[min(calc(100%_-_42px),306px)]"
        >
          <h1 className="m-0 font-['Cormorant_Garamond',serif] text-[clamp(78px,6.35vw,110px)] font-light leading-[1.025] tracking-[-0.048em] text-[#f7faf4] max-[1600px]:text-[clamp(76px,6.55vw,104px)] max-[1440px]:text-[clamp(72px,6.65vw,94px)] max-[1280px]:text-[clamp(66px,6.8vw,86px)] max-[1024px]:text-[clamp(56px,6.9vw,70px)] max-[1024px]:leading-[1.04] max-[880px]:text-[clamp(50px,7vw,58px)] max-[767px]:mx-auto max-[767px]:text-[clamp(40px,12.9vw,50px)] max-[767px]:leading-[1.02] max-[767px]:tracking-[-0.052em]">
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
            className={`h-[5px] w-[5px] rotate-45 cursor-pointer border-0 p-0 ${
              activeDot === index ? "bg-[#25482d]" : "bg-[#f7faf4]"
            }`}
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

          <button
            type="button"
            onClick={openCartPopup}
            className={`${mobileMenuLinkClass} cursor-pointer border-0 bg-transparent p-0 text-left`}
          >
            Cart ({cartCount})
          </button>
        </nav>
      </aside>
    </section>
  );
};

export default Hero;