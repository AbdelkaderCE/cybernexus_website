import React, { useRef, useState, useEffect } from "react";
import { SocialLink } from "@/data/team";
import gsap from "gsap";

// Type definitions

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  socialLinks?: SocialLink[];
  backContent?: React.ReactNode;
  borderClass?: string;
  bgGradientClass?: string;
  accentClass?: string;
  roleColor?: string;
  flipAngle?: number;
  maxTiltY?: number;
  flipDuration?: number;
  resetTiltDuration?: number;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  image,
  socialLinks = [],
  backContent = null,
  borderClass = "border-base-200",
  bgGradientClass = "from-white/5 to-base-300",
  accentClass = "text-base-content",
  roleColor = "text-white/70",
  flipAngle = 180,
  maxTiltY = 15,
  flipDuration = 0.6,
  resetTiltDuration = 0.4,
  className = "",
}) => {
  // Refs for animation
  const cardRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ y: 0 });
  const baseRotationRef = useRef(0);
  const currentTweenRef = useRef<gsap.core.Tween | null>(null);
  const isFlipping = useRef(false);

  // State
  const [flipped, setFlipped] = useState(false);

  // Filter out invalid social links
  const validLinks = socialLinks.filter(
    (link) => link && link.href && link.href.trim() !== "" && link.href !== "#",
  );

  // Theme-aware CSS classes for consistent styling
  const LINKS_WRAPPER_CLASS =
    "mt-3 rounded-2xl px-3 sm:px-4 py-2 flex items-center justify-center gap-2 sm:gap-3 " +
    "bg-base-100/80 backdrop-blur-sm border border-base-content/10";

  const LINK_BUTTON_CLASS =
    "p-1.5 sm:p-2 rounded-lg inline-flex items-center justify-center text-base-content " +
    "transition-all duration-200 border border-base-content/6 hover:scale-105 hover:bg-base-content/5";

  // Platform-specific hover colors
  const getPlatformHoverClass = (platform?: string): string => {
    const hoverColors: Record<string, string> = {
      github: "hover:text-white hover:bg-gray-800/20",
      linkedin: "hover:text-blue-500 hover:bg-blue-500/10",
      twitter: "hover:text-sky-400 hover:bg-sky-400/10",
      portfolio: "hover:text-purple-400 hover:bg-purple-400/10",
      email: "hover:text-green-400 hover:bg-green-400/10",
    };
    return platform
      ? hoverColors[platform] || "hover:text-white"
      : "hover:text-white";
  };

  // Mouse move handler for tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card || isFlipping.current) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const centerX = rect.width / 2;
    const normalizedX = (x - centerX) / centerX;
    const tiltY = normalizedX * maxTiltY;
    rotationRef.current.y = tiltY;

    const target = baseRotationRef.current + tiltY;
    gsap.to(card, {
      duration: 0.25,
      rotationY: target,
      transformPerspective: 1000,
      transformOrigin: "center",
      ease: "power2.out",
      overwrite: true,
    });
  };

  // Mouse leave handler - reset tilt
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    rotationRef.current.y = 0;
    gsap.to(card, {
      duration: resetTiltDuration,
      rotationY: baseRotationRef.current,
      ease: "power2.out",
      overwrite: true,
    });
  };

  // Click handler for flip
  const handleClick = () => {
    const card = cardRef.current;
    if (!card) return;

    // Kill any ongoing animation
    if (isFlipping.current && currentTweenRef.current) {
      currentTweenRef.current.kill();
    }

    isFlipping.current = true;

    const tiltY = rotationRef.current.y;
    const direction = Math.sign(tiltY) || 1;

    baseRotationRef.current += flipAngle * direction;

    currentTweenRef.current = gsap.to(card, {
      duration: flipDuration,
      rotationY: baseRotationRef.current,
      transformPerspective: 1000,
      transformOrigin: "center",
      ease: "back.out(1.2)",
      overwrite: "auto",
      onComplete: () => {
        const halfTurns = Math.round(baseRotationRef.current / 180);
        setFlipped(Math.abs(halfTurns % 2) === 1);
        currentTweenRef.current = null;
        isFlipping.current = false;
      },
    });
  };

  // Keyboard handler for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (currentTweenRef.current) {
        currentTweenRef.current.kill();
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      aria-pressed={flipped}
      aria-label={`Profile card for ${name}. Click to flip.`}
      tabIndex={0}
      className={`
        relative w-64 sm:w-72 md:w-80 h-[480px] sm:h-[520px] md:h-[560px] 
        rounded-3xl bg-gradient-to-b ${bgGradientClass} p-6 text-center 
        border ${borderClass} cursor-pointer shadow-2xl hover:shadow-3xl 
        transition-shadow duration-300 focus:outline-none focus:ring-2 
        focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
        ${className}
      `}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        perspective: 1000,
      }}
    >
      {/* FRONT FACE */}
      <div
        className="rounded-3xl w-full h-full flex flex-col overflow-hidden"
        style={{
          position: "relative",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(0deg)",
        }}
      >
        {/* Header */}
        <div className="mb-3 flex-shrink-0">
          <h2 className={`text-xl sm:text-2xl font-bold ${accentClass} mb-2`}>
            {name}
          </h2>

          <div className={LINKS_WRAPPER_CLASS}>
            <p className={`text-xs sm:text-sm ${roleColor}`}>{role}</p>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex items-center justify-center relative min-h-0 mb-3">
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src={image}
              alt={`${name}'s profile`}
              className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Social Links */}
        {validLinks.length > 0 && (
          <div className={`${LINKS_WRAPPER_CLASS} flex-shrink-0`}>
            {validLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={`${social.label}-${index}`}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`${LINK_BUTTON_CLASS} ${getPlatformHoverClass(social.platform)}`}
                  title={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* BACK FACE */}
      <div
        className="rounded-3xl w-full h-full overflow-hidden"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1.5rem",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        {backContent ? (
          backContent
        ) : (
          <div className="text-center w-full flex flex-col items-center gap-4">
            <h3 className={`text-lg font-semibold ${accentClass}`}>
              More about {name}
            </h3>
            <p className={`text-xs sm:text-sm ${roleColor}`}>{role}</p>

            {validLinks.length > 0 && (
              <div className={LINKS_WRAPPER_CLASS}>
                {validLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={`${social.label}-back-${index}`}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`${LINK_BUTTON_CLASS} ${getPlatformHoverClass(social.platform)}`}
                      title={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
