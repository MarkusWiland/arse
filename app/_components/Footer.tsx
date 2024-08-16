import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <h1 className="font-medium text-3xl">
          Arsenal <span className="font-light">Göteborg</span>
        </h1>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <span>socials</span>
          <span>socials</span>
          <span>socials</span>
          <span>socials</span>
          <span>socials</span>
          <span>socials</span>
        </div>
        <p className="mt-6">2024 göteboprg</p>
      </div>
    </footer>
  );
}
