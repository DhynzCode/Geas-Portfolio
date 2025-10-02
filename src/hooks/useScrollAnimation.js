import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px 0px -100px 0px', triggerOnce = true) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay for smoother animation
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, 100);

          // Unobserve after first trigger if triggerOnce is true
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          // Remove animate class when out of view if triggerOnce is false
          entry.target.classList.remove('animate');
        }
      },
      {
        threshold: threshold,
        rootMargin: rootMargin
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return elementRef;
};

export const useStaggerAnimation = (itemCount, threshold = 0.1, staggerDelay = 150) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.stagger-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate');
            }, index * staggerDelay + 200); // Added base delay for better effect
          });

          // Unobserve after animation starts
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    const currentElement = containerRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [itemCount, threshold, staggerDelay]);

  return containerRef;
};

// New hook for complex animations
export const useComplexAnimation = (animationType = 'fade-in', threshold = 0.2) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');

          // Add specific animation class if needed
          if (animationType !== 'fade-in') {
            entry.target.classList.add(animationType);
          }

          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -150px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animationType, threshold]);

  return elementRef;
}; 