import { useState } from "react";

const containerClass =
  "mx-auto w-[min(calc(100%_-_128px),1380px)] max-[1600px]:w-[min(calc(100%_-_112px),1320px)] max-[1440px]:w-[min(calc(100%_-_96px),1240px)] max-[1280px]:w-[min(calc(100%_-_96px),1180px)] max-[1024px]:w-[calc(100%_-_72px)] max-[880px]:w-[calc(100%_-_48px)] max-[767px]:w-[calc(100%_-_30px)] max-[360px]:w-[calc(100%_-_26px)]";

const footerLinks = {
  shop: ["Skincare", "Facial", "Soap", "Candles", "Auto Fragrances", "Gifts"],
  help: [
    "Chat",
    "FAQ",
    "Shipping & Returns",
    "Contact",
    "Policies",
    "Accessibility",
    "My Account",
  ],
  stores: ["Manhattan", "Brooklyn", "Tokyo", "Jakarta", "Paris", "Buenos Aires"],
};

const footerTitleClass =
  "mb-[30px] mt-0 font-['Inter',sans-serif] text-[24px] font-normal leading-none tracking-[-0.04em] text-[#8fa58d] max-[767px]:text-[21px]";

const footerLinkClass =
  "font-['Inter',sans-serif] text-[19px] font-normal leading-none tracking-[-0.045em] text-[#243f2a] no-underline transition hover:text-[#8fa58d] max-[767px]:text-[17px]";

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

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[28px] w-[28px]">
    <rect
      x="3.2"
      y="3.2"
      width="17.6"
      height="17.6"
      rx="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <circle
      cx="12"
      cy="12"
      r="4.1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <circle cx="17.1" cy="6.9" r="1.2" fill="currentColor" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[29px] w-[29px]">
    <path
      d="M22 5.8C21.2 6.2 20.3 6.4 19.4 6.5C20.3 5.9 21 5.1 21.3 4C20.4 4.5 19.4 4.9 18.4 5.1C17.6 4.2 16.4 3.7 15.2 3.7C12.8 3.7 10.9 5.7 10.9 8.1C10.9 8.4 10.9 8.8 11 9.1C7.4 8.9 4.2 7.2 2.1 4.6C1.7 5.2 1.5 5.9 1.5 6.7C1.5 8.2 2.3 9.5 3.4 10.3C2.7 10.3 2.1 10.1 1.5 9.8V9.9C1.5 12 3 13.7 5 14.1C4.6 14.2 4.2 14.3 3.8 14.3C3.5 14.3 3.2 14.3 2.9 14.2C3.5 15.9 5.1 17.2 7 17.2C5.5 18.4 3.6 19.1 1.6 19.1C1.2 19.1 0.9 19.1 0.5 19C2.5 20.3 4.8 21 7.3 21C15.2 21 19.6 14.4 19.6 8.7V8.1C20.5 7.5 21.3 6.7 22 5.8Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[28px] w-[28px]">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <path
      d="M13.2 20V12.7H15.6L16 9.9H13.2V8.1C13.2 7.3 13.45 6.7 14.65 6.7H16.15V4.2C15.4 4.1 14.8 4.05 14.1 4.05C12 4.05 10.55 5.35 10.55 7.75V9.9H8.2V12.7H10.55V20"
      fill="currentColor"
    />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formError, setFormError] = useState("");

  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setFormMessage("");
    setFormError("");

    if (!trimmedEmail) {
      setFormError("Please enter your email address.");
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    let savedEmails = [];

    try {
      savedEmails =
        JSON.parse(localStorage.getItem("beautyNewsletterEmails")) || [];
    } catch {
      savedEmails = [];
    }

    const updatedEmails = savedEmails.includes(trimmedEmail)
      ? savedEmails
      : [...savedEmails, trimmedEmail];

    localStorage.setItem(
      "beautyNewsletterEmails",
      JSON.stringify(updatedEmails)
    );

    setEmail("");
    setFormMessage("Thank you! Your email has been added.");
  };

  return (
    <footer
      id="footer"
      className="w-full max-w-full overflow-x-hidden bg-[#f2f6ef]"
    >
      {/* ==================== Newsletter Area ==================== */}
      <div className="w-full max-w-full overflow-x-hidden bg-[#8fa58d] text-[#f7faf4]">
        <div
          className={`${containerClass} flex min-h-[214px] items-center justify-between gap-[70px] max-[1024px]:min-h-[260px] max-[1024px]:flex-col max-[1024px]:items-start max-[1024px]:justify-center max-[1024px]:gap-[34px] max-[767px]:min-h-[235px] max-[767px]:gap-[28px]`}
        >
          <h2 className="m-0 max-w-[610px] font-['Cormorant_Garamond',serif] text-[clamp(54px,4.2vw,70px)] font-light leading-[1.08] tracking-[-0.055em] text-[#f7faf4] max-[1280px]:text-[clamp(48px,4.6vw,62px)] max-[767px]:max-w-[330px] max-[767px]:text-[clamp(32px,10vw,40px)]">
            Subscribe to get 10% off
            <span className="block">your first order</span>
          </h2>

          <form
            onSubmit={handleNewsletterSubmit}
            className="w-[min(100%,538px)] max-w-full"
          >
            <div className="flex h-[72px] w-full max-w-full overflow-hidden border border-[#f7faf4]/80 bg-[#f7faf4] max-[767px]:h-[58px]">
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setFormError("");
                  setFormMessage("");
                }}
                placeholder="Drop your email here"
                className="h-full min-w-0 flex-1 border-0 bg-transparent px-[24px] font-['Inter',sans-serif] text-[20px] font-normal leading-none tracking-[-0.04em] text-[#243f2a] outline-none placeholder:text-[#8fa58d] max-[767px]:px-[16px] max-[767px]:text-[16px]"
                aria-label="Email address"
              />

              <button
                type="submit"
                className="flex h-full w-[88px] shrink-0 cursor-pointer items-center justify-center border-0 border-l border-[#8fa58d]/45 bg-transparent p-0 text-[#243f2a] transition duration-300 hover:bg-[#e6eee2] max-[767px]:w-[66px]"
                aria-label="Subscribe"
              >
                <ArrowIcon className="h-[22px] w-[48px] transition-transform duration-300 hover:translate-x-[5px] max-[767px]:w-[36px]" />
              </button>
            </div>

            {(formMessage || formError) && (
              <p
                className={`mb-0 mt-[12px] font-['Inter',sans-serif] text-[14px] font-normal leading-none tracking-[-0.02em] ${
                  formError ? "text-[#fff2f2]" : "text-[#f7faf4]"
                }`}
              >
                {formError || formMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* ==================== Footer Links Area ==================== */}
      <div className="w-full max-w-full overflow-x-hidden border-b border-[#8fa58d]/35">
        <div className="grid max-w-full grid-cols-[21.4%_26%_26.2%_1fr] overflow-hidden max-[1024px]:grid-cols-2 max-[680px]:grid-cols-1">
          {/* ==================== Brand Column ==================== */}
          <div className="flex min-h-[468px] flex-col justify-between border-r border-[#8fa58d]/35 px-[52px] pb-[43px] pt-[62px] max-[1280px]:px-[36px] max-[1024px]:min-h-[390px] max-[1024px]:items-center max-[1024px]:border-b max-[1024px]:text-center max-[680px]:min-h-[360px] max-[680px]:border-r-0 max-[680px]:px-[26px] max-[680px]:pt-[48px]">
            <div className="max-[1024px]:flex max-[1024px]:w-full max-[1024px]:flex-col max-[1024px]:items-center">
              <a
                href="#home"
                className="inline-block text-[#243f2a] no-underline"
              >
                <span className="block font-['Cormorant_Garamond',serif] text-[39px] font-normal uppercase leading-[0.86] tracking-[0.04em] max-[767px]:text-[34px]">
                  Velvety
                </span>

                <small className="mt-[7px] block pl-[23px] font-['Great_Vibes',cursive] text-[18px] font-normal lowercase leading-none tracking-[0.03em] max-[1024px]:pl-0 max-[767px]:text-[16px]">
                  facial &amp; skincare
                </small>
              </a>

              <div className="mt-[55px] text-center">
                <p className="mb-[6px] mt-0 font-['Inter',sans-serif] text-[18px] font-normal leading-none tracking-[-0.035em] text-[#8fa58d] max-[767px]:text-[17px]">
                  Opening hours
                </p>

                <p className="m-0 font-['Inter',sans-serif] text-[20px] font-normal leading-[1.38] tracking-[-0.045em] text-[#243f2a] max-[767px]:text-[18px]">
                  Monday to Saturday:
                  <span className="block">10:30 a.m. to 7 p.m.</span>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-[22px] text-[#243f2a] max-[1024px]:mt-[46px]">
              <a
                href="#instagram"
                aria-label="Instagram"
                className="text-current"
              >
                <InstagramIcon />
              </a>

              <a href="#twitter" aria-label="Twitter" className="text-current">
                <TwitterIcon />
              </a>

              <a
                href="#facebook"
                aria-label="Facebook"
                className="text-current"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* ==================== Shop Column ==================== */}
          <div className="min-h-[468px] border-r border-[#8fa58d]/35 px-[34px] pb-[42px] pt-[60px] text-center max-[1024px]:min-h-[390px] max-[1024px]:border-b max-[680px]:min-h-0 max-[680px]:border-r-0 max-[680px]:px-[26px] max-[680px]:py-[42px]">
            <h3 className={footerTitleClass}>Shop</h3>

            <nav className="flex flex-col items-center gap-[18px]">
              {footerLinks.shop.map((link) => (
                <a key={link} href="#shop" className={footerLinkClass}>
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* ==================== Help Desk Column ==================== */}
          <div className="min-h-[468px] border-r border-[#8fa58d]/35 px-[34px] pb-[42px] pt-[60px] text-center max-[1024px]:min-h-[390px] max-[1024px]:border-r-0 max-[1024px]:border-b max-[680px]:min-h-0 max-[680px]:px-[26px] max-[680px]:py-[42px]">
            <h3 className={footerTitleClass}>Help Desk</h3>

            <nav className="flex flex-col items-center gap-[18px]">
              {footerLinks.help.map((link) => (
                <a key={link} href="#help" className={footerLinkClass}>
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* ==================== Stores Column ==================== */}
          <div className="min-h-[468px] px-[34px] pb-[42px] pt-[60px] text-center max-[1024px]:min-h-[390px] max-[680px]:min-h-0 max-[680px]:px-[26px] max-[680px]:py-[42px]">
            <h3 className={footerTitleClass}>Stores</h3>

            <nav className="flex flex-col items-center gap-[18px]">
              {footerLinks.stores.map((link) => (
                <a key={link} href="#stores" className={footerLinkClass}>
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* ==================== Footer Bottom ==================== */}
      <div
        className={`${containerClass} flex min-h-[62px] max-w-full items-center justify-between gap-[28px] overflow-hidden max-[767px]:flex-col max-[767px]:items-center max-[767px]:justify-center max-[767px]:gap-[14px] max-[767px]:py-[18px] max-[767px]:text-center`}
      >
        <p className="m-0 font-['Inter',sans-serif] text-[16px] font-normal leading-none tracking-[-0.035em] text-[#6d8b69] max-[767px]:max-w-[310px] max-[767px]:text-center max-[767px]:text-[14px] max-[767px]:leading-[1.45]">
          © {currentYear}{" "}
          <span className="font-semibold text-[#243f2a]">Velvety</span>. All
          rights reserved. Beauty crafted with care.
        </p>

        <nav className="flex max-w-full flex-wrap items-center justify-center gap-[38px] max-[767px]:w-full max-[767px]:gap-[24px] max-[360px]:gap-[18px]">
          {["Licenses", "Privacy", "Terms"].map((link) => (
            <a
              key={link}
              href="#footer"
              className="font-['Inter',sans-serif] text-[16px] font-normal leading-none tracking-[-0.035em] text-[#243f2a] no-underline transition hover:text-[#8fa58d] max-[767px]:text-[14px]"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;