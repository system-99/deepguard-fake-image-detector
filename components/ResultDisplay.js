import React from 'react';

const ResultDisplay = ({ isLoading, result, isReal }) => {
  if (isLoading) {
    return (
      <div className="mt-8 text-center">
        <div className="inline-flex flex-col items-center">
          <div className="relative w-16 h-16 mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
            <div className="absolute inset-0 rounded-full border-4 border-purple-600 border-t-transparent animate-spin"></div>
          </div>
          <p className="text-lg font-semibold text-gray-700">
            Analyzing image...
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Please wait while our AI processes your image
          </p>
        </div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  const bgColor = isReal ? 'bg-green-50' : 'bg-red-50';
  const borderColor = isReal ? 'border-green-200' : 'border-red-200';
  const textColor = isReal ? 'text-green-700' : 'text-red-700';
  const badgeColor = isReal ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  const iconColor = isReal ? 'text-green-500' : 'text-red-500';

  return (
    <div
      className={`mt-8 p-8 rounded-xl border-2 ${bgColor} ${borderColor} animate-fadeIn transition-all duration-500 shadow-lg`}
    >
      <div className="flex flex-col items-center">
        <div className={`text-5xl mb-4`}>
          {isReal ? '✅' : '❌'}
        </div>
        <h3 className={`text-3xl font-bold ${textColor} mb-2`}>
          {result}
        </h3>
        <div className={`inline-block px-4 py-2 rounded-full ${badgeColor} text-sm font-semibold mb-4`}>
          {isReal ? 'Authentic' : 'Manipulated'}
        </div>
        <p className={`text-sm ${textColor} text-center`}>
          {isReal
            ? 'The image appears to be genuine and has not been artificially manipulated.'
            : 'The image shows signs of deep fake manipulation and may be artificially generated or altered.'}
        </p>
      </div>
    </div>
  );
};

export default ResultDisplay;
