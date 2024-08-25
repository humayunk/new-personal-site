'use client';

import { useEffect, useRef } from 'react';

const AnimatedContent = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.opacity = '1';
    }
  }, []);

  return <div ref={containerRef} style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>{children}</div>;
};

export default AnimatedContent;
