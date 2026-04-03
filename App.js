import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ImageUploader from './components/ImageUploader';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [imagePreview, setImagePreview] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [isReal, setIsReal] = useState(null);
  const [detectionCount, setDetectionCount] = useState(0);

  const handleImageUpload = (preview, name) => {
    setImagePreview(preview);
    setFileName(name);
    setResult(null);
    setIsLoading(false);
  };

  const handleDetect = async () => {
    if (!imagePreview) {
      alert('Please upload an image first');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call with 2-second delay
    setTimeout(() => {
      const isRealImage = Math.random() > 0.5;
      setIsReal(isRealImage);
      setResult(isRealImage ? 'Real Image ✅' : 'Fake Image ❌');
      setIsLoading(false);
      setDetectionCount(detectionCount + 1);
    }, 2000);
  };

  const handleReset = () => {
    setImagePreview(null);
    setFileName('');
    setResult(null);
    setIsLoading(false);
    setIsReal(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
      <Navbar />
      
      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Deepfake Image Detection
          </h1>
          <p className="text-lg sm:text-xl text-purple-100 mb-2">
            Advanced AI-powered detection system
          </p>
          <p className="text-sm sm:text-base text-purple-100 opacity-90">
            Upload an image to check if it's real or fake
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 transform hover:shadow-3xl transition-shadow duration-300">
          {/* Upload Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Upload Your Image
            </h2>
            <ImageUploader
              onImageUpload={handleImageUpload}
              imagePreview={imagePreview}
              fileName={fileName}
            />
          </div>

          {/* Result Section */}
          {result && (
            <ResultDisplay
              isLoading={isLoading}
              result={result}
              isReal={isReal}
            />
          )}

          {/* Loading State */}
          {isLoading && (
            <ResultDisplay
              isLoading={isLoading}
              result={null}
            />
          )}

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {imagePreview && (
              <>
                <button
                  onClick={handleDetect}
                  disabled={isLoading}
                  className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isLoading ? 'Analyzing...' : 'Detect'}
                </button>

                <button
                  onClick={handleReset}
                  disabled={isLoading}
                  className="px-8 py-3 rounded-lg font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Clear
                </button>
              </>
            )}
          </div>

          {/* Stats Footer */}
          {detectionCount > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm">
                Total detections: <span className="font-bold text-purple-600">{detectionCount}</span>
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-purple-100 text-sm">
            © 2024 Deepfake Detection System. All rights reserved.
          </p>
          <p className="text-purple-200 text-xs mt-2">
            This is a demonstration system. For production use, integrate with actual ML models.
          </p>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;
