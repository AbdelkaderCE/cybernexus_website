import { Link } from "react-router-dom";
import { Home, AlertTriangle, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Title } from "@/components/ui/title";
import GridBackground from "@/components/ui/GridBackground";
import { useCyberScrollAnimation } from "@/hooks/useCyberScrollAnimation";

const NotFound = () => {
  const badgeRef = useCyberScrollAnimation({
    animation: "cyberGlitchCenter",
    duration: 0.8,
    delay: 0.1,
  });

  const titleRef = useCyberScrollAnimation({
    animation: "cyberGlitchCenter",
    duration: 1.2,
    delay: 0.3,
  });

  const subtitleRef = useCyberScrollAnimation({
    animation: "cyberGlitchLeft",
    duration: 0.8,
    delay: 0.5,
  });

  const descriptionRef = useCyberScrollAnimation({
    animation: "cyberGlitchRight",
    duration: 1,
    delay: 0.7,
  });

  const ctaRef = useCyberScrollAnimation({
    animation: "cyberGlitchCenter",
    duration: 0.8,
    delay: 0.9,
  });

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-20 bg-gradient-to-b from-base-100 via-base-200/20 to-base-100 overflow-hidden">
      {/* Circuit Board Grid Background */}
      <div className="absolute inset-0">
        <GridBackground />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Status Badge */}
        <div ref={badgeRef} className="mb-6 sm:mb-8">
          <Badge
            variant="outline"
            className="border-error/50 bg-background/80 backdrop-blur-sm px-4 py-2 font-mono text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <span className="inline-block w-2 h-2 bg-error rounded-full animate-pulse" />
            ERROR // SYSTEM_OFFLINE
          </Badge>
        </div>

        {/* Error Code Display */}
        <div ref={titleRef} className="mb-8 sm:mb-12 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-[100px] sm:text-[180px] md:text-[250px] font-black text-primary/15 blur-sm select-none font-mono">
              404
            </div>
          </div>
          <h1 className="relative text-[80px] sm:text-[140px] md:text-[200px] font-black leading-none bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent uppercase tracking-tighter font-mono">
            404
          </h1>
        </div>

        {/* Alert Icon with Glow */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-error/30 rounded-full animate-pulse" />
            <AlertTriangle className="w-20 h-20 sm:w-24 sm:h-24 text-error relative z-10 animate-bounce" />
          </div>
        </div>

        {/* Error Messages */}
        <div ref={subtitleRef} className="mb-8 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-base-content font-mono tracking-tight">
            <span className="text-error">&gt;</span> PAGE_NOT_FOUND
          </h2>
        </div>

        {/* Description */}
        <div ref={descriptionRef} className="mb-10 sm:mb-14 space-y-3 max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl text-base-content/80 font-mono leading-relaxed">
            <span className="text-warning animate-pulse">⚠</span> The resource you're
            looking for has been removed, lost in the void, or never existed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs sm:text-sm text-base-content/60 font-mono divide-y sm:divide-y-0 sm:divide-x divide-base-content/20">
            <p className="py-2 sm:py-0 sm:px-4">
              <span className="text-primary font-bold">ERROR:</span> 404_NOT_FOUND
            </p>
            <p className="py-2 sm:py-0 sm:px-4">
              <span className="text-secondary font-bold">STATUS:</span> OFFLINE
            </p>
            <p className="py-2 sm:py-0 sm:px-4">
              <span className="text-accent font-bold">CODE:</span> VOID_DETECTED
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
          <Link
            to="/"
            className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold font-mono text-base sm:text-lg rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Home className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:-translate-x-1 transition-transform" />
            <span className="relative z-10">RETURN_HOME</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-base-300 text-base-content font-bold font-mono text-base sm:text-lg rounded-lg border-2 border-base-content/20 hover:border-primary/50 hover:bg-base-300/50 transition-all duration-300"
          >
            <span className="relative z-10">GO_BACK</span>
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center items-center gap-4 text-primary/40">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <div className="flex gap-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>

        {/* Helpful Links */}
        <div className="mt-14 sm:mt-16 pt-8 sm:pt-12 border-t border-base-content/10 max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-base-content/50 font-mono mb-4">
            SUGGESTED_ACTIONS:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            <Link
              to="/"
              className="px-4 py-2 rounded bg-base-300/50 text-base-content/70 hover:text-primary hover:bg-base-300 transition-all font-mono border border-base-content/10 hover:border-primary/30"
            >
              → Home
            </Link>
            <a
              href="/#Hero"
              className="px-4 py-2 rounded bg-base-300/50 text-base-content/70 hover:text-primary hover:bg-base-300 transition-all font-mono border border-base-content/10 hover:border-primary/30"
            >
              → About
            </a>
            <a
              href="/#Contact"
              className="px-4 py-2 rounded bg-base-300/50 text-base-content/70 hover:text-primary hover:bg-base-300 transition-all font-mono border border-base-content/10 hover:border-primary/30"
            >
              → Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
