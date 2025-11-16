import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, Zap, Calendar } from "lucide-react";
import CountdownToNov18 from "./CountdownToNov18";
import useGlitchAnimation from "../../hooks/useGlitchAnimation";
import { useFadeSlideUp, useScaleFade } from "../../hooks/useGsapAnimation";
import { TerminalBadge, CornerBrackets, DataLine } from "../ui/CyberBackground";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ theme }) => {
  const [robot, setRobot] = useState(localStorage.getItem("robot") || "boy");
  const [previousRobot, setPreviousRobot] = useState(robot);
  const robotRefMobileLeft = useRef(null);
  const robotRefMobileRight = useRef(null);
  const robotRefDesktop = useRef(null);

  // Reusable animation hooks
  const countdownCardRef = useScaleFade({ delay: 0.2, duration: 0.8 });
  const titleRef = useFadeSlideUp({ delay: 0.5, duration: 0.8 });
  const subtitleRef = useFadeSlideUp({ delay: 0.7, duration: 0.8 });
  const descriptionRef = useFadeSlideUp({ delay: 0.9, duration: 0.8, y: 20 });

  // Apply glitch effect to title
  const { ref: glitchRef } = useGlitchAnimation({ repeatDelay: 2 });

  // Robot animations with manual setup since they need special handling
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // Only run initial animation once
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const robots = [
      { ref: robotRefMobileLeft, rotate: -15, delay: 1.1 },
      { ref: robotRefMobileRight, rotate: 15, delay: 1.2 },
      { ref: robotRefDesktop, rotate: 45, delay: 1.1 },
    ];

    robots.forEach(({ ref, rotate, delay }) => {
      if (!ref.current) return;

      gsap.set(ref.current, { opacity: 0, scale: 0.8, rotate: 0 });

      gsap.to(ref.current, {
        opacity: 1,
        scale: 1,
        rotate,
        duration: 0.6,
        delay,
        ease: "back.out(1.7)",
      });
    });
  }, []);

  useEffect(() => {
    const newRobot = localStorage.getItem("robot") || "boy";

    // Only animate if robot actually changed
    if (newRobot !== previousRobot) {
      const glitchExit = gsap.timeline();

      // Animate all robots
      const robotElements = [
        robotRefMobileLeft.current,
        robotRefMobileRight.current,
        robotRefDesktop.current,
      ].filter(Boolean);

      // RGB Glitch effect with color separation
      glitchExit
        .to(robotElements, {
          x: -30,
          opacity: 0.7,
          filter: "hue-rotate(90deg) saturate(3)",
          duration: 0.1,
          ease: "power2.inOut",
        })
        .to(robotElements, {
          x: 20,
          filter: "hue-rotate(-90deg) saturate(3) contrast(1.5)",
          duration: 0.1,
        })
        .to(robotElements, {
          x: -10,
          filter: "hue-rotate(180deg) saturate(5) brightness(1.2)",
          duration: 0.08,
        })
        .to(robotElements, {
          opacity: 0,
          filter: "blur(2px) brightness(2)",
          duration: 0.15,
          ease: "power2.in",
        })
        .call(() => {
          setRobot(newRobot);
          setPreviousRobot(newRobot);
          gsap.set(robotElements, { x: 0, y: 0, opacity: 0, filter: "none" });
        })
        .to(robotElements, {
          opacity: 1,
          filter: "none",
          duration: 0.3,
          ease: "power2.out",
        })
        // Settle into position
        .to(
          robotRefMobileLeft.current,
          {
            rotate: -15,
            duration: 0.3,
            ease: "back.out(1.5)",
          },
          "<",
        )
        .to(
          robotRefMobileRight.current,
          {
            rotate: 15,
            duration: 0.3,
            ease: "back.out(1.5)",
          },
          "<",
        )
        .to(
          robotRefDesktop.current,
          {
            rotate: 45,
            duration: 0.3,
            ease: "back.out(1.5)",
          },
          "<",
        );
    }
  }, [theme, previousRobot]);

  return (
    <section className="relative min-h-screen mt-4 flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-b from-base-100 via-base-200/20 to-base-100 text-base-content transition-all duration-500 overflow-hidden">
      {/* Welcome Day Focus - NOW FIRST */}
      <div className="w-full max-w-4xl mt-8 mb-12 relative z-10">
        {/* Mobile Robots */}
        <div
          ref={robotRefMobileLeft}
          className="md:hidden absolute -top-16 -left-4 w-[100px] -rotate-15 pointer-events-none z-20"
        >
          <img
            src={robot === "boy" ? "/boy.png" : "/girl.png"}
            className="w-full scale-x-[-1]"
            alt="CyberNexus Robot"
          />
        </div>

        <div
          ref={robotRefMobileRight}
          className="md:hidden absolute -top-16 -right-4 w-[100px] rotate-15 pointer-events-none z-20"
        >
          <img
            src={robot === "boy" ? "/boy.png" : "/girl.png"}
            className="w-full"
            alt="CyberNexus Robot"
          />
        </div>

        <div ref={countdownCardRef} className="relative group">
          {/* Corner Brackets */}
          <CornerBrackets size="md" />

          {/* Simplified glow - only on hover */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

          {/* Main border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 group-hover:border-primary/50 transition-all duration-300" />

          {/* Card Content - Removed backdrop-blur and reduced opacity layers */}
          <div className="relative bg-base-200/95 p-8 md:p-12 rounded-3xl border-2 border-base-content/10 shadow-2xl">
            {/* Data Lines */}
            <DataLine position="top" intensity="medium" />
            <DataLine position="bottom" intensity="medium" />

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-bold uppercase tracking-wider mb-4 shadow-lg border-2 border-primary/50 relative overflow-hidden group/badge">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300" />
                  <Calendar className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 font-mono">
                    WELCOME_DAY_2025
                  </span>
                  <Zap className="w-4 h-4 relative z-10" />
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-3 font-mono tracking-tight">
                  Join Us on November 18th!
                </h3>

                <p className="text-base sm:text-lg text-base-content/85 max-w-2xl mx-auto font-mono leading-relaxed">
                  <span className="text-primary font-bold">&gt;</span> Meet the
                  team, explore what we do, and kick off your journey with
                  CyberNexus. It's going to be epic! 🚀
                </p>
              </div>

              {/* Countdown Component */}
              <CountdownToNov18 />
            </div>
          </div>
        </div>
      </div>

      {/* Title with GSAP Glitch Effect - NOW SECOND */}
      <div className="mb-6 relative z-10">
        <div className="mb-4">
          <TerminalBadge icon={Terminal}>&lt;SYSTEM_ONLINE&gt;</TerminalBadge>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-3 tracking-tight relative"
        >
          <span
            ref={glitchRef}
            className="bg-gradient-to-r from-primary via-secondary to-info bg-clip-text text-transparent"
          >
            CyberNexus
          </span>
        </h1>
        <h2
          ref={(el) => {
            subtitleRef.current = el;
          }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-secondary font-mono"
        >
          <span className="text-primary/80">&gt;</span> For Students. By
          Students.
        </h2>
      </div>

      {/* Description - NOW THIRD */}
      <div
        ref={descriptionRef}
        className="max-w-3xl mb-8 space-y-4 relative z-10"
      >
        <p className="text-base sm:text-lg md:text-xl text-base-content/90 leading-relaxed font-mono">
          Your student-run tech hub at Ibn Khaldoun University. We're all about
          building skills, sharing knowledge, and creating awesome projects
          together through workshops, courses, and hands-on experience.
        </p>

        <p className="text-sm sm:text-base text-base-content/75 italic font-mono">
          <span className="text-secondary">&gt;_</span> Whether you're just
          starting out or already a tech wizard, there's a place for you here!
        </p>
      </div>

      {/* Desktop Robot - Removed drop-shadow filters */}
      <div
        ref={robotRefDesktop}
        className="hidden md:block absolute top-[80px] -left-[120px] rotate-45 w-[380px] opacity-100 pointer-events-none z-10"
      >
        <img
          src={robot === "boy" ? "/boy.png" : "/girl.png"}
          className="w-full transition-all duration-300"
          alt="CyberNexus Robot"
        />
      </div>
    </section>
  );
};

export default HeroSection;
