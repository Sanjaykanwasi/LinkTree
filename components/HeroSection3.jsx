import React from "react";

const HeroSection3 = () => {
  return (
    <div>
      <section className="bg-[#E8EFD6] min-h-[100vh] grid grid-cols-2">
        <div className="flex items-center justify-center flex-col ">
          <img src="/img4.png" alt="Img" />
        </div>
        <div className="flex justify-center flex-col gap-10">
          <p className="text-black font-bold text-7xl w-3xl tracking-tighter leading-24">
            Analyze your audience and keep your followers engaged
          </p>
          <p className="text-black text-xl w-3xl font-semibold">
            Track your engagement over time, monitor revenue and learn what’s
            converting your audience. Make informed updates on the fly to keep
            them coming back.
          </p>
          <div className="input flex gap-5">
            <button className="bg-[#E9C0E9] text-black rounded-full px-8 py-5 font-semibold cursor-pointer">
              Get Started for free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection3;
