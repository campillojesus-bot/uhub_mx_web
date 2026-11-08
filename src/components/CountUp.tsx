"use client";

import { useEffect, useRef } from "react";

/** Decorative entrance only: the accessible/SSR value is always the real total. */
export function CountUp({ value, prefix = "" }: { value: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const format = (n: number) => `${prefix}${n.toLocaleString("en-US")}`;
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const finish = () => { cancelAnimationFrame(frame); node.textContent = `${prefix}${value.toLocaleString("en-US")}`; };
    if (motion.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      const start = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - start) / 700, 1);
        node.textContent = `${prefix}${Math.round(value * (1 - Math.pow(1 - progress, 3))).toLocaleString("en-US")}`;
        if (progress < 1 && !motion.matches) frame = requestAnimationFrame(animate);
        else finish();
      };
      frame = requestAnimationFrame(animate);
    }, { threshold: 0.5 });
    observer.observe(node);
    motion.addEventListener("change", finish);
    return () => { observer.disconnect(); motion.removeEventListener("change", finish); finish(); };
  }, [value, prefix]);
  return <><span className="uh-visually-hidden">{format(value)}</span><span ref={ref} aria-hidden="true">{format(value)}</span></>;
}
