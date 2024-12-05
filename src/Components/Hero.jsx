import React from "react";

const Hero = ({ navOpacity }) => {
  return (
    <section
      className="w-full flex items-center justify-center bg-white text-black border-t-2 border-b-2 border-grey-100 overflow-hidden"
      style={{ opacity: navOpacity }} // Added opacity prop to control fade-in
    >
      <div className="w-5/6 lg:w-5/6 m-4"> {/* Responsive width: full on small screens, 75% on large */}
        <section className="bg-white w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 max-w-screen-xl mx-auto px-4 lg:px-16"> {/* Responsive grid */}
            {/* Left Column: Text */}
            <div className="flex flex-col justify-center pt-4 pb-4 ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none mb-4">
                Hey!
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight leading-none mb-4">
                Welcome to my space!
              </h2>
              <p className="text-base md:text-lg lg:text-xl font-light text-gray-500 mb-6 text-justify">
                I'm a CS student passionate about building low-level software and integrating AI. Excited to learn, create, and connect with others who share my love for technology and innovation! ❤️
                <br />
                <br />
                PS: I AM NOT A WEB DEVELOPER!😅 
                <br />
                <i>(I can prompt engineer websites though)</i>
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-center lg:justify-end p-20">
              <img
                src="src/assets/cat_hello.png"
                alt="mockup"
                className="rounded-lg w-[200px] md:w-[250px] lg:w-[300px] h-auto jumping-cat" // Responsive image size with jumping animation
              />
            </div>
          </div>
        </section>
      </div>

      {/* CSS for Jumping Animation */}
      <style jsx>{`
        @keyframes jump {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); } /* Adjust height for jump */
          100% { transform: translateY(0); }
        }

        .jumping-cat {
          animation: jump 0.5s ease-in-out infinite;
          animation-delay: 0s;
        }
      `}</style>
    </section>
  );
};

export default Hero;