import React, { useEffect, useRef } from 'react';

interface TypeformEmbedProps {
  isOpen: boolean;
  onClose: () => void;
}

const TypeformEmbed: React.FC<TypeformEmbedProps> = ({ isOpen, onClose }) => {
  const typeformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typeformUrl = 'https://form.typeform.com/to/fysGcNBG';
    
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative w-full max-w-4xl h-[80vh]">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-indigo-200 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <div 
          ref={typeformRef}
          className="w-full h-full" 
          data-tf-widget="fysGcNBG"
          data-tf-opacity="100" 
          data-tf-iframe-props="title=Vibe Coding Workshop Registration"
          data-tf-medium="embed"
        ></div>
      </div>
    </div>
  );
};

export default TypeformEmbed;