import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animation options type
export interface CyberScrollOptions {
  animation?:
    | "glitchFadeIn"
    | "dataStream"
    | "matrixReveal"
    | "scanlineReveal"
    | "parallax";
  duration?: number;
  delay?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  ease?: string;
  stagger?: number;
}

// Reusable hook for cyberpunk scroll animations
export const useCyberScrollAnimation = (options: CyberScrollOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const {
      animation = "glitchFadeIn",
      duration = 1,
      delay = 0,
      start = "top 80%",
      end = "bottom 20%",
      scrub = false,
      markers = false,
      ease = "power3.out",
      stagger = 0,
    } = options;

    const ctx = gsap.context(() => {
      // Get all children or the element itself
      const targets = element.children.length > 0 ? element.children : element;

      switch (animation) {
        case "glitchFadeIn":
          gsap.set(targets, {
            opacity: 0,
            y: 30,
            rotateX: -15,
            filter: "blur(10px) saturate(0)",
          });

          gsap.to(targets, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px) saturate(1)",
            duration,
            delay,
            ease,
            stagger,
            scrollTrigger: {
              trigger: element,
              start,
              end,
              scrub,
              markers,
            },
          });
          break;

        case "dataStream":
          gsap.set(targets, {
            opacity: 0,
            x: -100,
            skewX: 10,
          });

          gsap.to(targets, {
            opacity: 1,
            x: 0,
            skewX: 0,
            duration,
            delay,
            ease,
            stagger,
            scrollTrigger: {
              trigger: element,
              start,
              end,
              scrub,
              markers,
            },
          });
          break;

        case "matrixReveal":
          gsap.set(targets, {
            opacity: 0,
            scale: 0.8,
            rotateY: 45,
          });

          gsap.to(targets, {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration,
            delay,
            ease,
            stagger,
            scrollTrigger: {
              trigger: element,
              start,
              end,
              scrub,
              markers,
            },
          });
          break;

        case "scanlineReveal":
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              start,
              end,
              scrub,
              markers,
            },
          });

          gsap.set(targets, {
            opacity: 0,
            y: 20,
          });

          tl.to(targets, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease,
            stagger,
          });
          break;

        case "parallax":
          gsap.to(targets, {
            y: (i: number, target: Element) => {
              const speed = (target as HTMLElement).dataset.speed || "-50";
              return parseInt(speed);
            },
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              markers,
            },
          });
          break;

        default:
          // Default fade in
          gsap.set(targets, { opacity: 0, y: 20 });
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease,
            stagger,
            scrollTrigger: {
              trigger: element,
              start,
              end,
              scrub,
              markers,
            },
          });
      }
    }, element);

    return () => {
      ctx.revert();
    };
  }, [options]);

  return elementRef;
};
