"use client";

import React, {useEffect, useRef, useState} from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animationClass: string; // e.g., 'animate-fade-in-up'
  delay?: number; // ms
  threshold?: number; // IntersectionObserver threshold
  triggerOnce?: boolean;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animationClass,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => setIsVisible(true), delay);
            } else {
              setIsVisible(true);
            }
            if (triggerOnce && targetRef.current) {
              observer.unobserve(targetRef.current);
            }
          } else {
            if (!triggerOnce) {
              // Option to reset animation if it scrolls out of view and triggerOnce is false
              // setIsVisible(false);
            }
          }
        });
      },
      { threshold }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [delay, threshold, triggerOnce]);

  return (
    <div ref={targetRef} className={`${animationClass} ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
