import React, { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface AddressInputProps {
  onSubmit: (address: string) => void;
}

const AddressInput: React.FC<AddressInputProps> = ({ onSubmit }) => {
  console.log('Rendering AddressInput');
  const [address, setAddress] = useState('');
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initAutocomplete = async () => {
      try {
        const loader = new Loader({
          apiKey: 'AIzaSyB32c6cDhxsAA5DCOr2FXWzX0Z-A5LEfUY',
          version: 'weekly',
          libraries: ['places']
        });

        await loader.load();
        console.log('Google Maps API loaded successfully');

        const autocompleteInstance = new google.maps.places.Autocomplete(
          document.getElementById('address-input') as HTMLInputElement,
          { types: ['address'], componentRestrictions: { country: 'nl' } }
        );
        setAutocomplete(autocompleteInstance);

        autocompleteInstance.addListener('place_changed', () => {
          const place = autocompleteInstance.getPlace();
          if (place.formatted_address) {
            setAddress(place.formatted_address);
            console.log('Selected address:', place.formatted_address);
          }
        });
      } catch (err) {
        console.error('Error loading Google Maps API:', err);
        setError('Er is een fout opgetreden bij het laden van de adres-autocomplete. Probeer het later opnieuw.');
      }
    };

    initAutocomplete();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      console.log('Submitting address:', address);
      onSubmit(address);
    } else {
      setError('Voer alstublieft een geldig adres in.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Voer uw adres in</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-6">
          <input
            id="address-input"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Straat, huisnummer, postcode, plaats"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg text-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Taxatie Aanvragen
        </button>
      </form>
    </div>
  );
};

export default AddressInput;