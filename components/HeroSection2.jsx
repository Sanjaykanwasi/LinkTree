import React from "react";

const HeroSection2 = () => {
  return (
    <div>
      <section className="bg-[#780016] min-h-[100vh] grid grid-cols-2">
        <div className="flex justify-center flex-col gap-10 ml-[10vw]">
          <p className="text-[#E9C0E9] font-bold text-7xl w-3xl tracking-tighter leading-24">
            Share your Linktree from your Instagram, TikTok, Twitter and other
            bios
          </p>
          <p className="text-white text-xl w-3xl font-semibold">
            Add your unique Linktree URL to all the platforms and places you
            find your audience. Then use your QR code to drive your offline
            traffic online.
          </p>
          <div className="input flex gap-5">
            <button className="bg-[#E9C0E9] text-black rounded-full px-8 py-5 font-semibold cursor-pointer">
              Get Started for free
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <img src="/img3.png" alt="Img" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection2;
