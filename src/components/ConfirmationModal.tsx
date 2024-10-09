import React from 'react';

interface ConfirmationModalProps {
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ onConfirm }) => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="card p-8 max-w-md w-full">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-accent bg-opacity-20 mb-6">
            <svg className="h-10 w-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Aanvraag ontvangen!</h3>
          <p className="text-gray mb-6">
            Uw taxatieaanvraag is succesvol verwerkt. U ontvangt binnenkort een e-mail met het volledige rapport.
          </p>
          <button onClick={onConfirm} className="btn-primary w-full">
            Bekijk Voorbeeld Rapport
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;