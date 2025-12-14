import { useState, memo } from "react";
import { Github, Users, Calendar, Terminal, Zap } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const ProjectCard = memo(({ project, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (loading) {
    return (
      <div className="relative group perspective-1000 w-full h-full">
        {/* Corner Brackets */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary/40 pointer-events-none z-10" />
        <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-primary/40 pointer-events-none z-10" />
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-primary/40 pointer-events-none z-10" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary/40 pointer-events-none z-10" />

        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-40 transition-opacity duration-300" />

        <div className="relative bg-gradient-to-br from-base-200/80 via-base-200/60 to-base-200/80 rounded-xl overflow-hidden border-2 border-base-content/10 backdrop-blur-md w-full h-full flex flex-col">
          {/* Data Line Top */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <figure className="relative h-40 sm:h-48 bg-base-300 animate-pulse flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="loading loading-spinner loading-md sm:loading-lg text-primary"></span>
            </div>
          </figure>

          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <div className="h-5 sm:h-6 bg-base-300 rounded animate-pulse mb-2"></div>
            <div className="h-3 sm:h-4 bg-base-300 rounded animate-pulse mb-2 w-3/4"></div>
            <div className="h-3 sm:h-4 bg-base-300 rounded animate-pulse mb-4 w-1/2"></div>
            <div className="flex gap-2 mt-auto">
              <div className="h-11 bg-base-300 rounded animate-pulse flex-1"></div>
              <div className="h-11 bg-base-300 rounded animate-pulse flex-1"></div>
            </div>
          </div>

          {/* Data Line Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>
      </div>
    );
  }

  const {
    id,
    name = "Untitled Project",
    description = "No description available",
    imageURL = "",
    images = [],
    technologies = [],
    githubURL = "",
    liveURL = "",
    contributors = 0,
    createdAt = "",
  } = project || {};

  const displayImage = imageURL || (images && images[0]) || "";

  return (
    <div
      className="relative group perspective-1000 w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Corner Brackets */}
      <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary/40 group-hover:border-primary/80 transition-all duration-300 pointer-events-none z-10" />
      <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-primary/40 group-hover:border-primary/80 transition-all duration-300 pointer-events-none z-10" />
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-primary/40 group-hover:border-primary/80 transition-all duration-300 pointer-events-none z-10" />
      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary/40 group-hover:border-primary/80 transition-all duration-300 pointer-events-none z-10" />

      {/* Outer Glow */}
      <div
        className={`absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 transition-opacity duration-300 ${
          isHovered ? "opacity-60" : "opacity-30"
        }`}
      />

      {/* Main Border */}
      <div
        className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 neon-border-subtle ${
          isHovered ? "border-primary/50" : "border-primary/20"
        }`}
      />

      {/* Hover Scanning Effect */}
      {isHovered && (
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-scan" />
        </div>
      )}

      {/* Card Content */}
      <div
        className={`relative bg-gradient-to-br from-base-200/80 via-base-200/60 to-base-200/80 rounded-xl overflow-hidden border-2 border-base-content/10 backdrop-blur-md w-full h-full flex flex-col transition-all duration-300 ${
          isHovered ? "bg-base-200/90" : ""
        }`}
      >
        {/* Data Line Top */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <figure className="relative h-40 sm:h-48 bg-base-200 flex-shrink-0 overflow-hidden">
          {displayImage ? (
            <>
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-base-200">
                  <span className="loading loading-spinner loading-md sm:loading-lg text-primary"></span>
                </div>
              )}

              <img
                src={displayImage}
                alt={name}
                loading="lazy"
                decoding="async"
                width={600}
                height={360}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out ${
                  isHovered ? "scale-105" : "scale-100"
                } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />

              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-base-200">
                  <div className="text-center text-base-content/50">
                    <div
                      aria-hidden="true"
                      className="text-3xl sm:text-4xl mb-2"
                    >
                      🖼️
                    </div>
                    <p className="text-xs sm:text-sm font-mono">
                      IMAGE_NOT_FOUND
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
              <div className="text-center text-base-content/50">
                <div aria-hidden="true" className="text-4xl sm:text-5xl mb-2">
                  ⚡
                </div>
                <p className="text-xs sm:text-sm font-bold font-mono">
                  CYBERNEXUS
                </p>
              </div>
            </div>
          )}

          {/* Image Counter Badge */}
          {images && images.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-primary/90 backdrop-blur-sm px-2 py-1 rounded-md border border-primary/50 font-mono text-xs font-bold text-white">
              +{images.length - 1}
            </div>
          )}

          {/* Scanline Effect on Image */}
          <div className="absolute inset-0 scanline-slow opacity-20 pointer-events-none" />
        </figure>

        <div className="p-4 sm:p-6 flex flex-col flex-grow relative">
          {/* Title with ID Badge */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <h2 className="text-base sm:text-lg font-black text-base-content font-mono flex-1 break-words group-hover:text-primary transition-colors duration-300">
              <span className="text-primary/60">&gt;</span> {name}
            </h2>
            {id && (
              <div className="bg-secondary/20 border border-secondary/50 px-2 py-1 rounded text-xs font-bold font-mono text-secondary flex-shrink-0">
                #{id}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-base-content/70 text-xs sm:text-sm line-clamp-2 break-words mb-3 font-mono">
            {description}
          </p>

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {technologies.slice(0, 2).map((tech, index) => {
                const techIcons = {
                  react: "⚛️",
                  python: "🐍",
                  tensorflow: "🧠",
                  java: "☕",
                  sqlite: "💾",
                  tailwindcss: "🌊",
                  vite: "⚡",
                  javascript: "🟨",
                  typescript: "🟦",
                  html: "📄",
                  css: "🎨",
                  iot: "📡",
                  raspberrypi: "🍓",
                };

                const normalized = tech.toLowerCase().replace(/\s+/g, "");
                const icon = techIcons[normalized] || "💡";

                return (
                  <span key={index} className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full opacity-0 group-hover/tech:opacity-100 transition-opacity blur-sm" />
                    <span className="relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-base-content/80 backdrop-blur-sm border border-primary/30 hover:border-primary/50 transition-all duration-300 font-mono">
                      <span className="text-sm">{icon}</span>
                      <span className="uppercase">{tech}</span>
                    </span>
                  </span>
                );
              })}

              {technologies.length > 2 && (
                <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-base-200 text-base-content/70 border border-primary/30 font-mono">
                  +{technologies.length - 2}
                </span>
              )}
            </div>
          )}

          {/* Meta Info */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs text-primary/70 font-mono font-bold mb-4">
            {contributors > 0 && (
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{contributors}</span>
              </div>
            )}
            {createdAt && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span className="truncate">{createdAt}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 w-full mt-auto">
            {githubURL && (
              <a
                href={githubURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source of ${name}`}
                onClick={() => trackEvent("project_view_code", { id, name })}
                className="relative group/btn overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <div className="relative inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-4 py-2 bg-gradient-to-r from-base-300 to-base-300 hover:from-primary/20 hover:to-secondary/20 text-base-content font-bold rounded-lg border-2 border-primary/40 hover:border-primary/60 transition-all duration-300 font-mono text-sm">
                  <Github className="w-4 h-4" />
                  <span>VIEW_CODE</span>
                </div>
              </a>
            )}

            {liveURL && (
              <a
                href={liveURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View demo of ${name}`}
                onClick={() => trackEvent("project_launch", { id, name })}
                className="relative group/btn overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <div className="relative inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg border-2 border-primary/50 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-mono text-sm">
                  <Zap className="w-4 h-4" />
                  <span>LAUNCH</span>
                </div>
              </a>
            )}

            {!githubURL && !liveURL && (
              <button
                className="relative group/btn overflow-hidden w-full"
                aria-label={`View details of ${name}`}
                onClick={() => trackEvent("project_view_details", { id, name })}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <div className="relative inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg border-2 border-primary/50 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-mono text-sm">
                  <Terminal className="w-4 h-4" />
                  <span>VIEW_DETAILS</span>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Data Line Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
