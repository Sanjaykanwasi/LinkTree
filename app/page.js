"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import HeroSection2 from "@/components/HeroSection2";
import HeroSection3 from "@/components/HeroSection3";
import HeroSection4 from "@/components/HeroSection4";
import LinkFooter from "@/components/LinkFooter";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };

  return (
    <main>
      <section className="bg-[#254F1A] min-h-[100vh] grid grid-cols-2">
        <div className="flex justify-center flex-col ml-[10vw] gap-10">
          <p className="text-[#D2E823] font-bold text-8xl leading-24">
            Everything you are. In one, simple link in bio
          </p>
          <p className="text-white text-xl font-semibold">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="input flex gap-5">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="px-5 py-5 focus:outline-emerald-700 bg-white rounded-lg"
              type="text"
              placeholder="Enter your handle"
            />
            <button
              onClick={() => createTree()}
              className="bg-pink-200 rounded-full px-5 py-5 font-semibold cursor-pointer"
            >
              Claim your Linktree
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mr-[10vw]">
          <img src="/home.png" alt="Img" />
        </div>
      </section>
      <section className="bg-[#E9C0E9] min-h-[100vh]">
        <HeroSection />
      </section>
      <section className="bg-[#780016] min-h-[100vh]">
        <HeroSection2 />
      </section>
      <section className="bg-[#E8EFD6] min-h-[100vh]">
        <HeroSection3 />
      </section>
      <section className="bg-[#F3F3F1] min-h-[100vh]">
        <HeroSection4 />
      </section>
      <LinkFooter />
    </main>
  );
}
