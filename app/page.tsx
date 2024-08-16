import Image from "next/image";
import Hero from "./_components/Hero";
import LogoTicker from "./_components/LogoTicker";
import Features from "./_components/Features";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Features />

    </>
  );
}
