import React from "react";

function HeroSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#16171d]" id="hero">
      <div 
        className="max-w-3xl mx-auto flex flex-col items-center text-center"
        data-aos="zoom-in" 
        data-aos-duration="1000"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-6 leading-tight">
          Reimagine your home page
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
          Build interactive, responsive, and beautiful UI components that impress users and recruiters alike.
        </p>
        
        {/* UPDATED: href changed from #get-started to #contact */}
        <a
          href="#contact"
          className="bg-purple-700 text-white px-10 py-4 rounded-xl shadow-lg hover:bg-purple-600 hover:scale-105 active:scale-95 transition-all duration-300 font-bold text-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default HeroSection;