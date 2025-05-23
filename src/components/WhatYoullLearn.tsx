import React from 'react';
import { Code, Puzzle as PuzzlePiece, Rocket } from 'lucide-react';

const WhatYoullLearn: React.FC = () => {
  const learningPoints = [
    {
      icon: <Code className="w-12 h-12 text-indigo-500" />,
      title: "Build with AI copilots",
      description: "How to build tools using AI copilots like GPT, Windsurf, and Bolt"
    },
    {
      icon: <PuzzlePiece className="w-12 h-12 text-indigo-500" />,
      title: "Think modularly",
      description: "How to think modularly and build like a founder"
    },
    {
      icon: <Rocket className="w-12 h-12 text-indigo-500" />,
      title: "Break through blockers",
      description: "How to break through technical and creative blockers using expressive logic"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-indigo-50">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          What You'll Learn
        </h2>
        
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            In this free 1-hour live session, you'll discover:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {learningPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {point.title}
              </h3>
              <p className="text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;