import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="bg-[#E9C0E9] min-h-[100vh] grid grid-cols-2">
        <div className="flex items-center justify-center flex-col ">
          <img src="/img2.png" alt="Img" />
        </div>
        <div className="flex justify-center flex-col gap-10">
          <p className="text-purple-900 font-bold text-7xl w-3xl tracking-tighter leading-24">
            Create and customize your Linktree in minutes
          </p>
          <p className="text-black text-xl w-3xl font-semibold">
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, podcast, events and more. It all comes together in a link in
            bio landing page designed to convert.
          </p>
          <div className="input flex gap-5">
            <button
              onClick={() => createTree()}
              className="bg-purple-900 text-white rounded-full px-8 py-5 font-semibold cursor-pointer"
            >
              Get Started for free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
