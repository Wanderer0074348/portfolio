import React, { useState } from 'react';

// Sample data for internship experiences with image paths
const clubData = [
  {
    title: 'Club 1',
    company: 'BITS Linux Users Group',
    description: 'Created CRON jobs and monitored AWS resource usage.',
    image: 'src/assets/Linux.png',
  },
  {
    title: 'Club 2',
    company: 'Expressions: The Public Speaking and Literary Club',
    description: 'Contributed to manipulating data in a Django server.',
    image: 'src/assets/expressions.png', // Add the path to the image
  },
];

const Clubs = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Track current card

  // Function to handle card click (circular queue)
  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % clubData.length);
  };

  return (
    <div className="w-5/6 lg:w-4/6 mx-auto py-10 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-8 text-center">Club Experiences</h1>

      {/* Main Content */}
      <div className="w-full flex flex-col md:flex-row items-center">
        {/* Left Column - Stacked Cards (1/3 of width) */}
        <div className="relative w-full md:w-1/3 h-80 flex justify-center items-center order-first md:order-last">
          {clubData.map((internship, index) => {
            const isCurrent = index === currentCardIndex;
            const isNext = (index === (currentCardIndex + 1) % clubData.length);

            return (
              <div
                key={index}
                className={`absolute w-full h-full bg-white hover:bg-gray-100 hover:text-white text-black border-4 border-black font-mono rounded-lg p-6 shadow-lg transition-transform duration-500 cursor-pointer ${
                  isCurrent ? 'z-20 transform scale-100 hover:translate-x-3 hover:-translate-y-3' : isNext ? 'z-10 transform scale-95 lg:-translate-x-6 translate-y-6 ' : 'z-0 opacity-0'
                }`}
                onClick={handleNextCard}
              >
                {/* Image in the center of the card */}
                <div className="flex justify-center items-center h-full">
                  <img src={internship.image} alt={internship.title} className="w-[300px] h-[300px] object-cover rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column - Description (2/3 of width) */}
        <div className="w-full md:w-2/3 h-80 mt-8 md:mt-0 md:mr-8 p-6 bg-gray-100 border-4 border-black rounded-lg shadow-lg flex items-center order-last md:order-first">
          <div>
            <h3 className="text-xl font-bold text-black">{clubData[currentCardIndex].company}</h3>
            <p className="text-sm text-gray-700 mt-4">{clubData[currentCardIndex].description}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Clubs;