import React, { useState } from "react";

const CardLanding = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to card
    const y = e.clientY - rect.top;  // Mouse Y relative to card
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="relative border-4 border-black p-10 hover:bg-black hover:text-white duration-500 card bg-white text-black"
      onMouseMove={handleMouseMove} // Track mouse movement
    >
      <h1 className="text-4xl">Hello, nice to meet you!</h1>
      <h2 className="text-2xl">My name is Tanay</h2>
      <p className="text-lg">And I am a CS student</p>

      {/* Wave Effect */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), transparent)`,
        }}
      />

      {/* Custom CSS */}
      <style jsx>{`
        .card {
          position: relative;
          overflow: hidden;
        }

        .card div {
          transition: background 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CardLanding;