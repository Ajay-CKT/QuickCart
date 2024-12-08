import { useState } from "react";

const Footer = () => {
  const [hovered, setHovered] = useState("");
  const handleMouseEnter = (platform) => setHovered(platform);
  const handleMouseLeave = () => setHovered("");
  return (
    <footer className="bg-[#FFD9DA] flex flex-col gap-6 px-2 py-4 md:flex-row md:justify-between md:px-8">
      <div className="flex flex-col gap-6 md:w-1/2 md:justify-center">
        <div className="flex items-center gap-4">
          <img src="/quickCart.png" alt="" className="size-12" />
          <h1 className="text-3xl font-['Righteous'] text-[#89023E]">
            QuickCart
          </h1>
        </div>
        <p className="font-['Inter'] text-sm md:w-3/4">
          Your one-stop destination for premium men&lsquo;s and women&lsquo;s
          fashion, stunning jewelry, and cutting-edge electronics. Explore a
          curated collection that blends quality, style, and innovation, all at
          unbeatable prices. Shop with confidence and elevate your lifestyle
          with us!
        </p>
        <div className=" flex flex-col gap-6">
          <h3 className="font-semibold font-['Poppins']">Follow Us</h3>
          <div className="flex gap-4">
            <div
              className="social-media-btns"
              onMouseEnter={() => handleMouseEnter("facebook")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={hovered === "facebook" ? "/facebook.gif" : "/facebook.png"}
                alt="Facebook"
                className="size-8"
              />
            </div>
            <div
              className="social-media-btns"
              onMouseEnter={() => handleMouseEnter("instagram")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={
                  hovered === "instagram" ? "/instagram.gif" : "/instagram.png"
                }
                alt="Instagram"
                className="size-8"
              />
            </div>
            <div
              className="social-media-btns"
              onMouseEnter={() => handleMouseEnter("youtube")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={hovered === "youtube" ? "/youtube.gif" : "/youtube.png"}
                alt="YouTube"
                className="size-8"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:flex md:flex-col md:justify-center md:items-center">
        <div className="font-['Quicksand'] text-sm space-y-3 md:w-3/4">
          <p className="quick-links">Blog</p>
          <p className="quick-links">Terms & Conditions</p>
          <p className="quick-links">Privacy & Policy</p>
          <p className="quick-links">Warranty Policy</p>
          <p className="quick-links">Warranty Registration</p>
          <p className="quick-links">Warranty Claim</p>
          <p className="quick-links">Shipping Returns, Exchange Policy</p>
        </div>
        <p className="text-xs font-['mono'] text-center pt-6">
          2024 © QuickCart Company Limited. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
