import { useEffect, useRef, type ReactNode, type ElementType } from "react";

type Variant = "up" | "left" | "right" | "zoom" | "blur" | "stagger";

const classFor: Record<Variant, string> = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  zoom: "reveal-zoom",
  blur: "reveal-blur",
  stagger: "stagger",
};

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  className?: string;
  delay?: number;
  threshold?: number;
  once?: boolean;
  id?: string;
}

export function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  className = "",
  delay = 0,
  threshold = 0.18,
  once = true,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (delay) {
              setTimeout(() => el.classList.add("is-visible"), delay);
            } else {
              el.classList.add("is-visible");
            }
            if (once) io.unobserve(el);
          } else if (!once) {
            el.classList.remove("is-visible");
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, threshold, once]);

  const merged = `${classFor[variant]} ${className}`.trim();
  return (
    <Tag ref={ref as never} id={id} className={merged}>
      {children}
    </Tag>
  );
}
