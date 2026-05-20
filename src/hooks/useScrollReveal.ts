import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    const selectors = [
      "h2.section-title",
      ".fv-header",
      ".hero-lede",
      ".hero-inner > div:last-child",
      ".stamp",
      ".problem-card",
      ".building-card",
      ".pub-card",
      ".command-block",
      ".inspire-card",
      ".about-prose",
      ".about-stats",
      ".stat-row",
      "footer",
    ];

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        el.classList.add("reveal");
        const delay = Math.min(i, 5);
        if (delay > 0) el.classList.add(`reveal-delay-${delay}`);
        observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, []);
}
