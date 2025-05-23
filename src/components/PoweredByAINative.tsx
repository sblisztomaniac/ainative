import React from 'react';

const PoweredByAINative: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="container max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Powered by AI Native
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              This workshop series is proudly powered by <span className="font-semibold">AI Native</span> — a deep-tech venture revolutionizing code generation through Quantum Neural Networks.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We're merging high-performance AI workflows with creative freedom to unlock the next generation of software creation.
            </p>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
                alt="AI Native Branding" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="text-white font-semibold">AI Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoweredByAINative;