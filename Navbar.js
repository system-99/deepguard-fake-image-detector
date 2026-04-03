import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                🔍 Deepfake Detector
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm font-medium">
              AI-Powered Detection
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
