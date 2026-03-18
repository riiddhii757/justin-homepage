import React from "react";

const features = [
  { title: "Fast", description: "Lightning fast rendering with Vite + React." },
  { title: "Responsive", description: "Looks perfect on mobile, tablet, and desktop." },
  { title: "Creative", description: "Show off your unique design style." },
];

function FeatureSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#1f2028]" id="features">
      <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white dark:bg-[#2e303a] rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">{feature.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;