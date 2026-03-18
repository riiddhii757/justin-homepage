import React, { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import ProcessSection from "./components/ScrollSection";
import CTASection from "./components/CTASection";
import Footer from "./components/FooterSection";
import "./App.css";

function App() {
  useEffect(() => {
    // This stops the browser from remembering your scroll position on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Forces the window to the top right away
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App bg-white dark:bg-[#16171d]">
      <Header />
      {/* Reduced mt-20 to ensure your HeroSection isn't pushed too far down */}
      <main className="mt-16">
        <HeroSection />
        <FeatureSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;