import { useEffect } from 'react';

// Function to create intersection observer for animation
export const useScrollAnimation = (selector: string, animationClass: string) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        }
      });
    }, {
      threshold: 0.1
    });
    
    elements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, [selector, animationClass]);
};

// Animate elements when they come into view
export const setupScrollAnimations = () => {
  useScrollAnimation('.animate-on-scroll', 'animate-fade-in');
};