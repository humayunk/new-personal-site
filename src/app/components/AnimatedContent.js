'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimatedContent({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.fromTo(
      container.querySelectorAll('[data-gsap="slide-up"]'),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.5 }
    );

    gsap.fromTo(
      container.querySelectorAll('[data-gsap="slide-left"]'),
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
