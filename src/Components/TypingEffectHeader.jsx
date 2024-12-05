import React, { useEffect, useState, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation'; // Using react-type-animation for typing effect

const TypingEffectHeader = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const sectionRef = useRef(null); // Reference to the component's div

  // Use Intersection Observer to detect when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Set visibility based on whether it's in view
      },
      { threshold: 0.5 } // Trigger when 50% of the component is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the div
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="h-full flex items-center justify-center">
      {/* Only show typing animation when visible */}
      {isVisible && (
        <h1 className="text-4xl lg:text-6xl font-extrabold">
          <TypeAnimation
            sequence={['I use Arch BTW', 1000]} // Text and delay between typing
            speed={50} // Speed of typing
            wrapper="span" // Element wrapper (could be div, h1, etc.)
            repeat={0} // No repeating
          />
        </h1>
      )}
    </div>
  );
};

export default TypingEffectHeader;