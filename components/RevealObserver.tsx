"use client";

import { useEffect } from "react";

/**
 * Aparición suave al hacer scroll para elementos con [data-reveal].
 * Solo oculta lo que está fuera de pantalla, así nada parpadea al cargar,
 * y sin JavaScript o con reduced motion todo queda visible.
 */
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.remove("is-pending");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    for (const el of els) {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add("is-pending");
        io.observe(el);
      }
    }
    return () => io.disconnect();
  }, []);

  return null;
}
