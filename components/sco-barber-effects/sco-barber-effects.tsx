"use client";

import { useEffect } from "react";

export const ScrollRevealEffects = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("visible");
            }, 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
};

export const HeroParallaxEffect = () => {
  useEffect(() => {
    const bgText = document.querySelector<HTMLElement>(".hero-bg-text");

    if (!bgText) {
      return;
    }

    const handleScroll = () => {
      bgText.style.transform = `translate(-50%, calc(-50% + ${window.scrollY * 0.3}px))`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};
