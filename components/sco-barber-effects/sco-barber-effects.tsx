"use client";

import { useEffect } from "react";

const assignStaggerIndices = (): void => {
  document.querySelectorAll(".reveal-stagger").forEach((group) => {
    const items = Array.from(group.querySelectorAll(".reveal")).filter(
      (element) => element.closest(".reveal-stagger") === group,
    );

    items.forEach((element, index) => {
      (element as HTMLElement).style.setProperty("--reveal-index", String(index));
    });
  });
};

const revealElement = (element: Element): void => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.classList.add("visible");
    });
  });
};

export const ScrollRevealEffects = () => {
  useEffect(() => {
    const observedElements = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          revealElement(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    const observeRevealElements = (): void => {
      assignStaggerIndices();

      document.querySelectorAll(".reveal:not(.visible)").forEach((element) => {
        if (observedElements.has(element)) {
          return;
        }

        observedElements.add(element);
        observer.observe(element);
      });
    };

    observeRevealElements();

    const mutationObserver = new MutationObserver(() => {
      observeRevealElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
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
