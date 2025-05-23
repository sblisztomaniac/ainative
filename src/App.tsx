import React, { useEffect, useState } from 'react';
import MainLayout from './layout/MainLayout';
import PoweredByAINative from './components/PoweredByAINative';
import WhatYoullLearn from './components/WhatYoullLearn';
import WhoIsThisFor from './components/WhoIsThisFor';
import MeetTheTeam from './components/MeetTheTeam';
import JustTheBeginning from './components/JustTheBeginning';
import TypeformEmbed from './components/TypeformEmbed';

function App() {
  const [showTypeform, setShowTypeform] = useState(false);

  // Update document title
  useEffect(() => {
    document.title = 'Vibe Coding Workshop | AI Native';
  }, []);

  // Set up global handler for the Typeform
  useEffect(() => {
    // Create a global function to open the Typeform
    window.openTypeform = () => {
      setShowTypeform(true);
    };

    // If direct Typeform link is needed instead of embed
    const handleCTAClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-typeform-trigger]')) {
        e.preventDefault();
        window.open('https://form.typeform.com/to/fysGcNBG', '_blank');
      }
    };

    document.addEventListener('click', handleCTAClick);

    return () => {
      document.removeEventListener('click', handleCTAClick);
    };
  }, []);

  return (
    <MainLayout>
      <PoweredByAINative />
      <WhatYoullLearn />
      <WhoIsThisFor />
      <MeetTheTeam />
      <JustTheBeginning />
      
      <TypeformEmbed 
        isOpen={showTypeform} 
        onClose={() => setShowTypeform(false)} 
      />
    </MainLayout>
  );
}

declare global {
  interface Window {
    openTypeform: () => void;
  }
}

export default App;