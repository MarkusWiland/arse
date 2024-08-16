"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useEffect, useRef } from "react";
const features = [
  {
    title: "MEDLEMSKAP",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "BILJETTER",
    description: "Vill du köpa biljett?asdassssssssssssssssssssssssdasdasd",
  },
  {
    title: "LONDONRESA",
    description: "Londonreso asdassssssssssssssssssssssssdasdasdr",
  },
];
export default function Features() {
  return (
    <div className="bg-white text-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl tracking-tighter">
          Everytinh you seed
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio totam
            neque vero labore qui ipsum error nesciunt quibusdam, nam quae
            incidunt enim, velit inventore provident quaerat consequuntur
            repudiandae dolorum reprehenderit?
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 flex-col gap-4 sm:grid-cols-3">
          {features.map((item, index) => (
            <Feature
              key={index}
              index={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) => {
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
    <div
      key={index}
      className="relative border bg-black border-white/30 px-6 py-8 text-center rounded-lg shadow-lg  overflow-hidden cursor-pointer"
    >
      <motion.div
        ref={ref}
        className="absolute inset-0 border-4 border-red-700 rounded-lg"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
          zIndex: 0, // Ensure the mask div is behind the content
        }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      ></motion.div>
      <div className="relative z-10">
        <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};
