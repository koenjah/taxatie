import React from 'react';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">ApexFlow.ai Taxaties</h1>
        <p className="text-xl mb-12 text-gray">
          Ontdek de waarde van uw woning met onze geavanceerde AI-gestuurde taxatietool.
        </p>
        <button onClick={onStart} className="btn-primary">
          Start Taxatie
        </button>
      </div>
    </div>
  );
};

export default LandingPage;