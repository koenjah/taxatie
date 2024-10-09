import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import AddressInput from './components/AddressInput';
import ConfirmationModal from './components/ConfirmationModal';
import ReportPreview from './components/ReportPreview';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  const [step, setStep] = useState<'landing' | 'address' | 'confirmation' | 'preview'>('landing');
  const [address, setAddress] = useState('');

  useEffect(() => {
    console.log('App component rendered');
  }, []);

  const handleStart = () => setStep('address');
  const handleAddressSubmit = (inputAddress: string) => {
    setAddress(inputAddress);
    setStep('confirmation');
  };
  const handleConfirmation = () => setStep('preview');
  const handleReset = () => {
    setStep('landing');
    setAddress('');
  };

  console.log('Current step:', step);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        {step === 'landing' && <LandingPage onStart={handleStart} />}
        {step === 'address' && <AddressInput onSubmit={handleAddressSubmit} />}
        {step === 'confirmation' && <ConfirmationModal onConfirm={handleConfirmation} />}
        {step === 'preview' && <ReportPreview address={address} onReset={handleReset} />}
      </div>
    </ErrorBoundary>
  );
};

export default App;