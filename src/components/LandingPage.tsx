import React from 'react';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  console.log('Rendering LandingPage');
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold mb-4 text-center">Welkom bij ApexFlow.ai Taxaties</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Ontdek de waarde van uw woning met onze geavanceerde AI-gestuurde taxatietool.
      </p>
      <button
        onClick={onStart}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 px-8 rounded-lg text-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Start Taxatie
      </button>
    </div>
  );
};

export default LandingPage;