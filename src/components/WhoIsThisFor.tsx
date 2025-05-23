import React from 'react';
import { Code, PenTool, Briefcase, GraduationCap } from 'lucide-react';

const WhoIsThisFor: React.FC = () => {
  const audienceTypes = [
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Developers",
      description: "Tired of boilerplate and gatekeeping"
    },
    {
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: "Creators",
      description: "Who want to build tools, not just content"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Startup Founders",
      description: "Validating ideas and building prototypes"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Students",
      description: "Curious about AI-powered creation"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Who Is This For?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audienceTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="bg-white/10 p-3 rounded-full w-fit mb-4">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {type.title}
              </h3>
              <p className="text-indigo-100">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;