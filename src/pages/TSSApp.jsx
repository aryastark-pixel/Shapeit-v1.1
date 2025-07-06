import React, { useRef, useEffect } from "react";
import HeroSection from "../components/tss/HeroSection";
import BoostCards from "../components/tss/BoostCards";
import FigmaModal from "../components/tss/FigmaModal";

// ✅ Import component-level CSS
import "../components/tss/HeroSection.css";
import "../components/tss/BoostCards.module.css";
import "../components/tss/FigmaModal.css";

// ✅ Import global TSS-specific styles
import "../styles/tss/App.css"; // This contains your `.app-root`, `.footer-min`, body, html styles

const TssApp = () => {
  const boostRef = useRef(null);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (boostRef.current) {
        boostRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 5000);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <div className="app-root">
      <HeroSection />
      <BoostCards ref={boostRef} />
      <FigmaModal />
    </div>
  );
};

export default TssApp;