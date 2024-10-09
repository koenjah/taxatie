import React from 'react';

interface ReportPreviewProps {
  address: string;
  onReset: () => void;
}

const ReportPreview: React.FC<ReportPreviewProps> = ({ address, onReset }) => {
  const getComparableProperties = (baseAddress: string) => {
    const streetName = baseAddress.split(' ')[0];
    return [
      {
        address: `${streetName} 10`,
        price: 365000,
        saleDate: 'maart 2023',
        livingArea: 120,
        plotArea: 150,
        buildYear: 1985,
        image: 'https://example.com/house1.jpg',
        chosen: true,
        reason: 'Vergelijkbare woonoppervlakte en recent verkocht'
      },
      {
        address: `${streetName} 25`,
        price: 372000,
        saleDate: 'januari 2023',
        livingArea: 125,
        plotArea: 160,
        buildYear: 1987,
        image: 'https://example.com/house2.jpg',
        chosen: true,
        reason: 'Vergelijkbaar bouwjaar en perceel grootte'
      },
      {
        address: `${streetName} 5`,
        price: 379000,
        saleDate: 'april 2023',
        livingArea: 130,
        plotArea: 170,
        buildYear: 1986,
        image: 'https://example.com/house3.jpg',
        chosen: true,
        reason: 'Recente verkoop en vergelijkbare kenmerken'
      },
      {
        address: `${streetName} 15`,
        price: 390000,
        saleDate: 'februari 2023',
        livingArea: 140,
        plotArea: 180,
        buildYear: 1990,
        image: 'https://example.com/house4.jpg',
        chosen: false,
        reason: 'Grotere woonoppervlakte en nieuwer bouwjaar'
      },
      {
        address: `${streetName} 30`,
        price: 355000,
        saleDate: 'december 2022',
        livingArea: 110,
        plotArea: 140,
        buildYear: 1980,
        image: 'https://example.com/house5.jpg',
        chosen: false,
        reason: 'Kleiner perceel en ouder bouwjaar'
      },
      {
        address: `${streetName} 20`,
        price: 385000,
        saleDate: 'mei 2023',
        livingArea: 135,
        plotArea: 175,
        buildYear: 1988,
        image: 'https://example.com/house6.jpg',
        chosen: false,
        reason: 'Hogere vraagprijs en grotere woonoppervlakte'
      }
    ];
  };

  const comparableProperties = getComparableProperties(address);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
          <h2 className="text-2xl font-bold text-white">ApexFlow.ai Taxatierapport</h2>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Voorbeeldrapport voor: {address}</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Geschatte Waarde</h4>
            <p className="text-3xl font-bold text-blue-600">€ 350.000 - € 380.000</p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Objectgegevens</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Woningtype: Tussenwoning</li>
              <li>Bouwjaar: 1985</li>
              <li>Woonoppervlakte: 120 m²</li>
              <li>Perceeloppervlakte: 150 m²</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Marktomstandigheden</h4>
            <p className="text-gray-600">
              De huidige markt in uw regio laat een stabiele groei zien met een gemiddelde prijsstijging van 3% per jaar.
              De vraag naar soortgelijke woningen is hoog, wat een positieve invloed heeft op de waarde van uw woning.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Vergelijkbare Woningen</h4>
            <p className="text-gray-600 mb-4">
              Voor deze taxatie hebben we gebruik gemaakt van recente verkoopdata en actuele marktinformatie. 
              We hebben specifiek gekeken naar woningen in dezelfde buurt met vergelijkbare kenmerken zoals 
              woonoppervlakte, perceelgrootte en bouwjaar. Hieronder vindt u een overzicht van de gekozen 
              referentiepanden en de redenen voor hun selectie.
            </p>
            {comparableProperties.map((property, index) => (
              <div key={index} className={`mb-4 p-4 rounded-lg ${property.chosen ? 'bg-green-50' : 'bg-gray-50'}`}>
                <div className="flex items-start">
                  <img src={property.image} alt={property.address} className="w-24 h-24 object-cover rounded-lg mr-4" />
                  <div>
                    <h5 className="font-semibold text-gray-800">{property.address}</h5>
                    <p className="text-gray-600">Verkocht voor € {property.price.toLocaleString()} in {property.saleDate}</p>
                    <p className="text-gray-600">Woonoppervlakte: {property.livingArea} m², Perceel: {property.plotArea} m², Bouwjaar: {property.buildYear}</p>
                    <p className={`mt-2 ${property.chosen ? 'text-green-600' : 'text-red-600'}`}>
                      {property.chosen ? 'Gekozen als referentie: ' : 'Niet gekozen als referentie: '}{property.reason}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Dit is een voorbeeldrapport. Het werkelijke rapport zal gedetailleerdere informatie bevatten en wordt naar uw e-mailadres gestuurd.
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={onReset}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg text-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Nieuwe Taxatie Starten
        </button>
      </div>
    </div>
  );
};

export default ReportPreview;