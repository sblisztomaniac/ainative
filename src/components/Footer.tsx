import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 md:px-8 bg-gray-50">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-lg font-semibold text-indigo-600">AI Native</div>
            <p className="text-sm text-gray-500">
              Building the future of AI-powered creation
            </p>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AI Native. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;