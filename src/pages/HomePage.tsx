import ContactSection from "@/components/contact-section/ContactSection";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero-section/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import SponsorsSection from "@/components/sponsors-caroussel/SponsorsCaroussel";
import TeamSection from "@/components/team-section/TeamSection";
import WhatWeDoSection from "@/components/what-we-do-section/WhatWeDoSection";
import { useState, useEffect } from "react";

const HomePage: React.FC = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "boyDark",
  );

  const handleScrollComponent = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        theme={theme}
        setTheme={setTheme}
        handleScrollComponent={handleScrollComponent}
      />
      <div id="Hero">
        <HeroSection />
      </div>
      <div id="The Team">
        <TeamSection />
      </div>
      <div id="What We Do">
        <WhatWeDoSection />
      </div>
      <div id="Sponsors">
        {" "}
        <SponsorsSection />
      </div>
      <div id="Contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
