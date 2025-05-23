import React, { useEffect } from 'react';
import CTAButton from './CTAButton';
import { Sparkles } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      <div className="container max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-white/20 p-3 rounded-full">
              <Sparkles className="w-8 h-8" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Experience the Vibe
          </h2>
          
          <p className="text-xl mb-10 font-light opacity-90">
            Free 1-hour workshop on AI-native toolbuilding. No fluff. No barriers. Just build.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <p className="text-lg mb-6">
              Join us for this exclusive workshop and be part of the AI-native building revolution.
            </p>
            <CTAButton variant="white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;