import React from "react";

function CTASection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#16171d]" id="contact">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
          Ready to start your project?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Join Just In. and turn your ideas into beautiful interactive UI.
        </p>
        
        <a
          href="mailto:riddhithakkar@example.com" 
          className="bg-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-purple-600 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-lg"
        >
          Contact Me Now
        </a>
      </div>
    </section>
  );
}

export default CTASection;