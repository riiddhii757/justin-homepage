import React from "react";

const steps = ["Design", "Code", "Test", "Deploy", "Iterate"];

function ScrollSection() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-[#1c1e26]" id="process">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-purple-700">Our Process</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative bg-white dark:bg-[#2e303a] p-8 rounded-2xl shadow-xl w-44 text-center border border-transparent hover:border-purple-500 hover:-translate-y-3 transition-all duration-300 group"
            >
              {/* Step Number Bubble */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition">
                {idx + 1}
              </div>
              <span className="text-xl font-semibold text-gray-800 dark:text-white">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;