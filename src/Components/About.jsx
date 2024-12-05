import React from 'react';

const About = () => {
  return (
    <section className="w-5/6 lg:w-4/6 mx-auto py-16">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        
        {/* Left Column - Personal Photo */}
        <div className="mb-8 md:mb-0 md:mr-8 flex justify-center">
          <img
            src="/src/assets/tanay.jpeg" // Replace with your actual photo path
            alt="Tanay Matta"
            className="w-1000 h-1000 border-4 border-black object-cover"
          />
        </div>

        {/* Right Column - About Me Text */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 ">About Me</h2>
          <p className="text-lg leading-relaxed text-justify">
          Hey, I’m Tanay! I’m a computer science student diving into low-level programming with Rust, and I’m pretty comfortable working with Linux systems. Lately, I’ve been learning AI with the goal of blending it into low-level systems to create smarter, more efficient solutions. I love building optimized systems that connect hardware and software.<br />
          When I’m not coding, you’ll find me blogging random thoughts on Medium—definitely check it out! I’m also a huge football fan (Chelsea is 💙) and love traveling to new places, sharing my adventures along the way.<br/> My dream is to bridge the gap between computers and human intelligence by creating systems that can learn and adapt to user needs. I’m also super interested in how technology can tackle real-world problems and make a positive impact on society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;