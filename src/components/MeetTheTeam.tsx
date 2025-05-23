import React from 'react';

interface TeamMember {
  name: string;
  title: string;
  credibility: string;
}

const MeetTheTeam: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Toby",
      title: "Workshop Lead",
      credibility: "Silicon Valley founder & head of AI-native venture studio ainative.studio. Leads high-performance AI-native workflows using GenAI tools."
    },
    {
      name: "Keyur Prabhu",
      title: "GenAI Consultant",
      credibility: "IIM alum building cutting-edge Retrieval-Augmented Generation (RAG) products for enterprise clients. Works at the intersection of product and GenAI deployment."
    },
    {
      name: "Nova (Sanket Bojewar)",
      title: "Curator & AI-Native Strategist",
      credibility: "Curator of the Vibe Coding Workshop Series and initiator of Nova Transmutes(novatransmutes.com)  Nova began as a personal reset; now it's about helping others unlock what's possible."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-indigo-50">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          The Builders
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Meet the experts behind the Vibe Coding Workshop Series
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-5 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">
                {member.name}
              </h3>
              <div className="text-indigo-600 mb-4">
                {member.title}
              </div>
              <p className="text-gray-600 text-sm">
                {member.credibility}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;