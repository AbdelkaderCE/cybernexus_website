import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, Zap } from "lucide-react";
import useGlitchAnimation from "../../hooks/useGlitchAnimation";
import { useFadeSlideUp } from "../../hooks/useGsapAnimation";
import { TerminalBadge } from "../ui/CyberBackground";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ theme }) => {
  const [robot, setRobot] = useState(localStorage.getItem("robot") || "boy");
  const [previousRobot, setPreviousRobot] = useState(robot);
  const robotRefMobileLeft = useRef(null);
  const robotRefMobileRight = useRef(null);
  const robotRefDesktop = useRef(null);

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

        <div className="relative z-10 mt-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfTswK69iamz_XcmYAz8jTTm8ZAZSMS4RL9-WMBiZaXh9UR-w/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-content font-bold text-lg rounded-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--p),0.5)] transition-all duration-300 group"
          >
            <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span className="font-mono">JOIN CYBERNEXUS</span>
            <span className="font-mono text-sm opacity-80">&gt;_</span>
          </a>
        </div>
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
