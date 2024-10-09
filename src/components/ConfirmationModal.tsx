import React from 'react';

interface ConfirmationModalProps {
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ onConfirm }) => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="bg-white text-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Aanvraag ontvangen!</h3>
          <p className="text-gray-600 mb-6">
            Uw taxatieaanvraag is succesvol verwerkt. U ontvangt binnenkort een e-mail met het volledige rapport.
          </p>
          <p className="text-gray-600 mb-6">
            Dit is wat u vervolgens per mail binnen krijgt:
          </p>
          <button
            onClick={onConfirm}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg text-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Bekijk Voorbeeld Rapport
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;