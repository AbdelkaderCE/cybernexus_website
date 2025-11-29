import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Terminal, Zap } from "lucide-react";
import GridBackground from "@/components/ui/GridBackground";
import { useCyberScrollAnimation } from "@/hooks/useCyberScrollAnimation";

const HeroSection: React.FC = () => {
  // Animation refs for different elements
  const badgeRef = useCyberScrollAnimation({
    animation: "glitchFadeIn",
    duration: 0.8,
    delay: 0.2,
  });

  const titleRef = useCyberScrollAnimation({
    animation: "matrixReveal",
    duration: 1.2,
    delay: 0.4,
  });

  const subtitleRef = useCyberScrollAnimation({
    animation: "dataStream",
    duration: 0.8,
    delay: 0.6,
  });

  const descriptionRef = useCyberScrollAnimation({
    animation: "scanlineReveal",
    duration: 1,
    delay: 0.8,
    stagger: 0.1,
  });

  const ctaRef = useCyberScrollAnimation({
    animation: "glitchFadeIn",
    duration: 0.8,
    delay: 1,
  });

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-background overflow-hidden">
      {/* Circuit Board Grid */}
      <div className="absolute inset-0">
        <GridBackground />

        {/* Animated circuit lines */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="circuitGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.5 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M 0 50 L 200 50 L 200 150 L 400 150"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              fill="none"
              className="cyber-circuit-line"
              style={{ strokeDasharray: "10 5" }}
            />
          </svg>
        </div>
      </div>

      {/* Status Badge */}
      <div ref={badgeRef}>
        <Badge
          variant="outline"
          className="mb-8 border-primary/50 bg-background/80 backdrop-blur-sm px-4 py-2 font-mono relative z-10"
        >
          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
          SYSTEM ONLINE // STATUS: OPERATIONAL
        </Badge>
      </div>

      {/* Title */}
      <div ref={titleRef} className="mb-8 relative z-10 cyber-perspective">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-4 tracking-tight font-mono">
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            CyberNexus
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <div
        ref={subtitleRef}
        className="flex items-center justify-center gap-3 text-2xl sm:text-3xl font-bold font-mono text-foreground mb-8 relative z-10"
      >
        <Terminal className="w-7 h-7 text-primary animate-pulse" />
        <h2>
          <span className="text-primary"></span> For Students. By Students.
        </h2>
      </div>

      {/* Description */}
      <div
        ref={descriptionRef}
        className="max-w-2xl mb-12 space-y-3 relative z-10"
      >
        <p className="text-lg text-foreground/90 leading-relaxed font-mono">
          <span className="text-primary font-bold">[MISSION]</span> Your
          student-run tech hub at Ibn Khaldoun University. Building skills,
          sharing knowledge, and creating awesome projects together.
        </p>
        <p className="text-sm text-muted-foreground italic font-mono border-l-2 border-primary pl-4">
          <span className="text-secondary">&gt;_</span> Whether you're just
          starting out or already a tech wizard, there's a place for you here.
        </p>
      </div>

      {/* CTA Button */}
      <div
        ref={ctaRef}
        className="flex flex-col sm:flex-row gap-4 mb-12 relative z-10"
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfTswK69iamz_XcmYAz8jTTm8ZAZSMS4RL9-WMBiZaXh9UR-w/viewform?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-lg px-8 py-6 transition-all duration-200 hover:scale-105"
          >
            <Zap className="w-5 h-5 mr-2 group-hover:animate-spin" />
            JOIN THE NEXIANS
          </Button>
        </a>
      </div>

      {/* Subtle Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute w-full h-[1px] bg-primary cyber-scanline" />
      </div>
    </section>
  );
};

export default HeroSection;
