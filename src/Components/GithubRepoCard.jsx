import React, { useState } from 'react';

const repositories = [
  {
    name: 'handwritten_document_analyser',
    tech: 'React, JavaScript',
    idea: 'A tool to analyze handwritten documents and convert them into digital text using machine learning.',
  },
  {
    name: 'RotiOS',
    tech: 'MongoDB, Mongoose',
    idea: 'An operating system designed for managing tasks related to food delivery logistics.',
  },
  {
    name: 'portfolio_website',
    tech: 'TypeScript, GraphQL',
    idea: 'My personal portfolio website built with TypeScript and GraphQL to showcase my projects and skills.',
  },
  {
    name: 'coherence',
    tech: 'TypeScript, GraphQL',
    idea: 'My personal portfolio website built with TypeScript and GraphQL to showcase my projects and skills.',
  },
];

const GithubRepoCard = () => {
  const [selectedRepo, setSelectedRepo] = useState(null);

  const handleSelectRepo = (repoName) => {
    setSelectedRepo(selectedRepo === repoName ? null : repoName); // Toggle selection
  };

  return (
    <div className="lb:h-full border-grey-100">
      <div className="w-5/6 lg:w-4/6 mx-auto my-10 border-4 border-black rounded-md bg-gray-100">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-black mb-8 mt-8">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* List of Repositories */}
          {repositories.map((repo, idx) => (
            <div key={idx} className="relative">
              {/* Card */}
              <div
                className={`border-4 border-black rounded-md p-4 cursor-pointer transition-all transform duration-300 ${
                  selectedRepo === repo.name
                    ? 'bg-black text-white' // Selected card has black background and white text
                    : 'bg-white text-black hover:bg-gray-100 hover:-translate-y-1 hover:scale-102 hover:shadow-md hover:text-black'
                }`}
                onClick={() => handleSelectRepo(repo.name)}
              >
                {/* Ensure text wraps properly and breaks long words */}
                <h2 className="text-xl font-bold break-words">{repo.name}</h2>
                <p className="text-sm">{repo.tech}</p>
              </div>

              {/* Dropdown Content - Only visible if this repo is selected */}
              {selectedRepo === repo.name && (
                <div className="p-4 bg-white border-l-2 border-r-2 border-b-2 border-black rounded-b-md transition-all duration-300">
                  <h3 className="text-lg font-semibold">Project Idea</h3>
                  <p className="text-sm mt-2">{repo.idea}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubRepoCard;