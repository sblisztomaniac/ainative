import React from 'react';
import CTAButton from './CTAButton';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-4 md:px-8 py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Build With Flow. Launch Faster.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            Learn to create AI-native tools using logic, creativity, and modular systems — no matter your background. Join the Vibe Coding Workshop Series.
          </p>
          
          <div className="mb-8">
            <CTAButton />
          </div>
          
          <div className="flex justify-center items-center gap-2 text-gray-500 text-sm">
            <span>Proudly presented by</span>
            <div className="font-semibold text-indigo-600">AI Native</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;