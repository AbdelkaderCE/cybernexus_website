import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Hook for fade and slide up animation
 * @param {Object} options - Animation options
 * @param {number} options.delay - Delay before animation starts (in seconds)
 * @param {number} options.duration - Duration of animation (in seconds)
 * @param {number} options.y - Initial Y offset (default: 30)
 * @param {string} options.ease - GSAP easing function (default: "power3.out")
 */
export const useFadeSlideUp = ({
  delay = 0,
  duration = 0.8,
  y = 30,
  ease = "power3.out",
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.set(ref.current, { opacity: 0, y });

    const animation = gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
    });

    return () => animation.kill();
  }, [delay, duration, y, ease]);

  return ref;
};

/**
 * Hook for scale and fade animation (pop effect)
 * @param {Object} options - Animation options
 * @param {number} options.delay - Delay before animation starts
 * @param {number} options.duration - Duration of animation
 * @param {number} options.scale - Initial scale (default: 0.95)
 * @param {number} options.y - Initial Y offset (default: 30)
 * @param {string} options.ease - GSAP easing function (default: "back.out(1.2)")
 */
export const useScaleFade = ({
  delay = 0,
  duration = 0.8,
  scale = 0.95,
  y = 30,
  ease = "back.out(1.2)",
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.set(ref.current, { opacity: 0, scale, y });

    const animation = gsap.to(ref.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration,
      delay,
      ease,
    });

    return () => animation.kill();
  }, [delay, duration, scale, y, ease]);

  return ref;
};

/**
 * Hook for rotate and scale animation (robots, icons, etc.)
 * @param {Object} options - Animation options
 * @param {number} options.delay - Delay before animation starts
 * @param {number} options.duration - Duration of animation
 * @param {number} options.rotate - Target rotation (in degrees)
 * @param {number} options.scale - Initial scale (default: 0.8)
 * @param {string} options.ease - GSAP easing function (default: "back.out(1.7)")
 */
export const useRotateScale = ({
  delay = 0,
  duration = 0.6,
  rotate = 0,
  scale = 0.8,
  ease = "back.out(1.7)",
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.set(ref.current, { opacity: 0, scale, rotate: 0 });

    const animation = gsap.to(ref.current, {
      opacity: 1,
      scale: 1,
      rotate,
      duration,
      delay,
      ease,
    });

    return () => animation.kill();
  }, [delay, duration, rotate, scale, ease]);

  return ref;
};

/**
 * Hook for staggered children animations
 * @param {Object} options - Animation options
 * @param {number} options.delay - Delay before animation starts
 * @param {number} options.stagger - Delay between each child (default: 0.1)
 * @param {number} options.duration - Duration of animation
 * @param {number} options.y - Initial Y offset (default: 20)
 * @param {string} options.ease - GSAP easing function
 */
export const useStaggerFade = ({
  delay = 0,
  stagger = 0.1,
  duration = 0.6,
  y = 20,
  ease = "power2.out",
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const children = ref.current.children;
    if (!children.length) return;

    gsap.set(children, { opacity: 0, y });

    const animation = gsap.to(children, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease,
    });

    return () => animation.kill();
  }, [delay, stagger, duration, y, ease]);

  return ref;
};

/**
 * Hook for scroll-triggered animations
 * @param {Object} options - Animation options
 * @param {string} options.trigger - Trigger element (default: uses ref element)
 * @param {string} options.start - Start position (default: "top 80%")
 * @param {boolean} options.toggleActions - Toggle actions (default: "play none none none")
 * @param {number} options.y - Initial Y offset
 * @param {number} options.duration - Duration of animation
 */
export const useScrollReveal = ({
  start = "top 80%",
  toggleActions = "play none none none",
  y = 50,
  duration = 0.8,
  ease = "power3.out",
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.set(ref.current, { opacity: 0, y });

    const animation = gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      duration,
      ease,
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [start, toggleActions, y, duration, ease]);

  return ref;
};
