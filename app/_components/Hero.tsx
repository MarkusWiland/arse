"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import arsenalHero  from '@/assets/arsena.jpg'
import Image from "next/image";
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current?.getBoundingClientRect();
      offsetX.set(e.x - rect?.x);
      offsetY.set(e.y - rect?.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_2100%_100%_at_bottom_left,#C8102E,#F9D1D1_66%)]
">
      <div className="container">
        <div className="md:flex items-center gap-6">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Lyssna på senaste podd avsnittet här 
            </div>
            <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b  from-black to-[#C8102E] text-transparent bg-clip-text
 mt-6">
             ARSENAL GÖTEBORG
            </h1>
            <p className="text-lg text-[#010D3E] tracking-tight mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad
              culpa nemo ex accusamus, non, quam suscipit iusto numquam, tempore
              consequatur quod illo adipisci vel eos a. Odit, eos cupiditate.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <Image src={arsenalHero} alt="cog" width={500} height={500} className="md:absolute md:h-full md:w-auto md:max-w-none"/>
          </div>
        </div>
      </div>
    </section>
  );
}
