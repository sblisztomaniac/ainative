import React from 'react';
import CTAButton from './CTAButton';

const JustTheBeginning: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="container max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            This Is Just the Beginning...
          </h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Vibe Coding isn't just a workshop — it's the start of a new way of building.
          </p>
          
          <p className="text-gray-600 mb-10 leading-relaxed">
            After you RSVP, you'll get an email and WhatsApp invite with all the workshop details. The session is live and interactive — come ready to learn, build, and vibe.
          </p>
          
          <div className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 p-0.5 rounded-lg">
            <div className="bg-white px-6 py-5 rounded-lg">
              <p className="text-gray-700 font-medium mb-5">
                We're building a trusted global community of builders, artists, and thinkers who want to use AI to express, ship, and transform. This first session is your entry point into a new way of working and living.
              </p>
              <CTAButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JustTheBeginning;
