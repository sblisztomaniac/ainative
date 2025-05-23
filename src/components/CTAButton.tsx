import React from 'react';

interface CTAButtonProps {
  variant?: 'primary' | 'white';
}

const CTAButton: React.FC<CTAButtonProps> = ({ variant = 'primary' }) => {
  const openGoogleForm = () => {
    const formUrl = 'https://forms.gle/GJsNoiUvtX6DdUAL7';
    window.open(formUrl, '_blank');
  };

  const baseClasses = "relative inline-flex items-center justify-center font-medium rounded-lg text-center transition-all duration-300 group overflow-hidden px-8 py-4";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg",
    white: "bg-white text-indigo-600 hover:bg-indigo-50"
  };
  
  return (
    <button
      onClick={openGoogleForm}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      <span className="relative z-10 flex items-center">
        Save Your Spot
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
    </button>
  );
};

export default CTAButton;