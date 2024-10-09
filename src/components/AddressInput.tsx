import React, { useState, useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface AddressInputProps {
  onSubmit: (address: string) => void;
}

const AddressInput: React.FC<AddressInputProps> = ({ onSubmit }) => {
  const [address, setAddress] = useState('');
  const [error, setError] = useState<string | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const initAutocomplete = async () => {
      try {
        const loader = new Loader({
          apiKey: 'AIzaSyB32c6cDhxsAA5DCOr2FXWzX0Z-A5LEfUY',
          version: 'weekly',
          libraries: ['places']
        });

        await loader.load();

        if (inputRef.current) {
          autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
            types: ['address'],
            componentRestrictions: { country: 'nl' }
          });

          autocompleteRef.current.addListener('place_changed', () => {
            const place = autocompleteRef.current?.getPlace();
            if (place?.formatted_address) {
              setAddress(place.formatted_address);
            }
          });
        }
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
      onSubmit(address);
    } else {
      setError('Selecteer alstublieft een geldig adres uit de lijst.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <h2 className="text-4xl font-bold mb-8 text-center">Voer uw adres in</h2>
        {error && <p className="text-accent mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              ref={inputRef}
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Straat, huisnummer, postcode, plaats"
              className="input-primary"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Taxatie Aanvragen
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressInput;