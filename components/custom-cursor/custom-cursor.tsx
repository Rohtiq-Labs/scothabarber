"use client";

import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!isFinePointer) {
      return;
    }

    document.body.classList.add("sco-cursor-enabled");

    const cursor = cursorRef.current;
    const ring = ringRef.current;

    if (!cursor || !ring) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
      cursor.style.left = `${event.clientX - 6}px`;
      cursor.style.top = `${event.clientY - 6}px`;
    };

    const animateRing = () => {
      const { x, y } = mouseRef.current;
      ringPosRef.current.x += (x - ringPosRef.current.x - 18) * 0.12;
      ringPosRef.current.y += (y - ringPosRef.current.y - 18) * 0.12;
      ring.style.left = `${ringPosRef.current.x}px`;
      ring.style.top = `${ringPosRef.current.y}px`;
      frameRef.current = requestAnimationFrame(animateRing);
    };

    const interactiveSelector =
      'a, button, .work-card, .service-item, [data-cursor-hover="true"]';

    const handleMouseEnter = () => {
      cursor.style.transform = "scale(2.5)";
      ring.style.transform = "scale(1.5)";
    };

    const handleMouseLeave = () => {
      cursor.style.transform = "scale(1)";
      ring.style.transform = "scale(1)";
    };

    const bindInteractiveElements = () => {
      document.querySelectorAll(interactiveSelector).forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    const unbindInteractiveElements = () => {
      document.querySelectorAll(interactiveSelector).forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    bindInteractiveElements();
    frameRef.current = requestAnimationFrame(animateRing);

    const observer = new MutationObserver(bindInteractiveElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove("sco-cursor-enabled");
      document.removeEventListener("mousemove", handleMouseMove);
      unbindInteractiveElements();
      observer.disconnect();

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};
