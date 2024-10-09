import React, { useState, useEffect } from 'react';

interface Property {
  address: string;
  price: number;
  saleDate: string;
  livingArea: number;
  plotArea: number;
  buildYear: number;
  image: string;
  chosen: boolean;
  reason: string;
  houseType: string;
}

interface ReportPreviewProps {
  address: string;
  onReset: () => void;
}

const ReportPreview: React.FC<ReportPreviewProps> = ({ address, onReset }) => {
  const [comparableProperties, setComparableProperties] = useState<Property[]>([]);
  const [estimatedValue, setEstimatedValue] = useState({ min: 0, max: 0 });

  const getComparableProperties = (baseAddress: string): Property[] => {
    const streetName = baseAddress.split(' ')[0];
    const houseTypes = ['Tussenwoning', 'Hoekwoning', 'Vrijstaande woning', 'Twee-onder-een-kapwoning'];
    const baseHouseType = houseTypes[Math.floor(Math.random() * houseTypes.length)];

    return [
      {
        address: `${streetName} 10`,
        price: 365000,
        saleDate: 'maart 2023',
        livingArea: 120,
        plotArea: 150,
        buildYear: 1985,
        image: 'https://raw.githubusercontent.com/koenjah/taxatie/refs/heads/main/src/201_720x480.jpg',
        chosen: true,
        reason: 'Vergelijkbare woonoppervlakte en recent verkocht',
        houseType: baseHouseType
      },
      {
        address: `${streetName} 25`,
        price: 372000,
        saleDate: 'januari 2023',
        livingArea: 125,
        plotArea: 160,
        buildYear: 1987,
        image: 'https://raw.githubusercontent.com/koenjah/taxatie/refs/heads/main/src/447_720x480.jpg',
        chosen: true,
        reason: 'Vergelijkbaar bouwjaar en perceel grootte',
        houseType: baseHouseType
      },
      {
        address: `${streetName} 5`,
        price: 379000,
        saleDate: 'april 2023',
        livingArea: 130,
        plotArea: 170,
        buildYear: 1986,
        image: 'https://raw.githubusercontent.com/koenjah/taxatie/refs/heads/main/src/547_720x480.jpg',
        chosen: true,
        reason: 'Recente verkoop en vergelijkbare kenmerken',
        houseType: baseHouseType
      },
      {
        address: `${streetName} 15`,
        price: 358000,
        saleDate: 'februari 2023',
        livingArea: 115,
        plotArea: 140,
        buildYear: 1984,
        image: 'https://raw.githubusercontent.com/koenjah/taxatie/refs/heads/main/src/560_720x480.jpg',
        chosen: false,
        reason: 'Iets kleinere woonoppervlakte, maar vergelijkbaar bouwjaar',
        houseType: baseHouseType
      },
      {
        address: `${streetName} 30`,
        price: 385000,
        saleDate: 'mei 2023',
        livingArea: 135,
        plotArea: 180,
        buildYear: 1988,
        image: 'https://raw.githubusercontent.com/koenjah/taxatie/refs/heads/main/src/710_720x480.jpg',
        chosen: false,
        reason: 'Grotere woonoppervlakte en recente verkoop',
        houseType: baseHouseType
      },
      {
        address: `${streetName} 20`,
        price: 369000,
        saleDate: 'december 2022',
        livingArea: 122,
        plotArea: 155,
        buildYear: 1985,
        image: 'https://raw.githubusercontent.com/koenjah/taxatie/refs/heads/main/src/729_720x480.jpg',
        chosen: false,
        reason: 'Zeer vergelijkbare kenmerken, iets oudere verkoopdatum',
        houseType: baseHouseType
      },
      {
        address: `${streetName} 35`,
        price: 376000,
        saleDate: 'maart 2023',
        livingArea: 128,
        plotArea: 165,
        buildYear: 1987,
        image: 'https://raw.githubusercontent.com/koenjah/taxatie/refs/heads/main/src/760_720x480.jpg',
        chosen: false,
        reason: 'Vergelijkbare grootte en recent verkocht',
        houseType: baseHouseType
      },
      {
        address: `${streetName} 40`,
        price: 382000,
        saleDate: 'april 2023',
        livingArea: 132,
        plotArea: 175,
        buildYear: 1986,
        image: 'https://raw.githubusercontent.com/koenjah/taxatie/refs/heads/main/src/769_720x480.jpg',
        chosen: false,
        reason: 'Iets grotere woonoppervlakte en recent verkocht',
        houseType: baseHouseType
      },
    ];
  };

  useEffect(() => {
    const properties = getComparableProperties(address);
    setComparableProperties(properties);
    calculateEstimatedValue(properties.filter(p => p.chosen));
  }, [address]);

  const calculateEstimatedValue = (chosenProperties: Property[]) => {
    const avgPrice = chosenProperties.reduce((sum, prop) => sum + prop.price, 0) / chosenProperties.length;
    setEstimatedValue({
      min: Math.round(avgPrice * 0.95 / 1000) * 1000,
      max: Math.round(avgPrice * 1.05 / 1000) * 1000
    });
  };

  const togglePropertySelection = (index: number) => {
    const updatedProperties = [...comparableProperties];
    updatedProperties[index].chosen = !updatedProperties[index].chosen;
    setComparableProperties(updatedProperties);
    calculateEstimatedValue(updatedProperties.filter(p => p.chosen));
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto card">
        <div className="bg-accent bg-opacity-10 px-6 py-4">
          <h2 className="text-2xl font-bold">ApexFlow.ai Taxatierapport</h2>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Voorbeeldrapport voor: {address}</h3>
          
          <div className="mb-6">
            <h4 className="section-title">Geschatte Waarde</h4>
            <p className="text-3xl font-bold text-accent">
              € {estimatedValue.min.toLocaleString()} - € {estimatedValue.max.toLocaleString()}
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="section-title">Objectgegevens</h4>
            <ul className="list-disc list-inside text-gray">
              <li>Woningtype: {comparableProperties[0]?.houseType}</li>
              <li>Bouwjaar: 1985</li>
              <li>Woonoppervlakte: 120 m²</li>
              <li>Perceeloppervlakte: 150 m²</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="section-title">Marktomstandigheden</h4>
            <p className="text-gray">
              De huidige markt in uw regio laat een stabiele groei zien met een gemiddelde prijsstijging van 3% per jaar.
              De vraag naar soortgelijke woningen is hoog, wat een positieve invloed heeft op de waarde van uw woning.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="section-title">Vergelijkbare Woningen</h4>
            <p className="text-sm text-gray mb-4">
              Selecteer de woningen die u wilt gebruiken voor de taxatie. De geschatte waarde wordt automatisch bijgewerkt.
            </p>
            {comparableProperties.map((property, index) => (
              <div key={index} className="mb-4 p-4 rounded-lg bg-white bg-opacity-5">
                <div className="flex items-start">
                  <img src={property.image} alt={property.address} className="w-24 h-24 object-cover rounded-lg mr-4" />
                  <div className="flex-grow">
                    <h5 className="font-semibold">{property.address}</h5>
                    <p className="text-gray">Verkocht voor € {property.price.toLocaleString()} in {property.saleDate}</p>
                    <p className="text-gray">Woonoppervlakte: {property.livingArea} m², Perceel: {property.plotArea} m², Bouwjaar: {property.buildYear}</p>
                    <p className="mt-2 text-accent">
                      {property.reason}
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePropertySelection(index)}
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        property.chosen
                          ? 'bg-accent text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {property.chosen ? 'Geselecteerd' : 'Selecteer'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-gray mt-4">
            Dit is een voorbeeldrapport. Het werkelijke rapport zal gedetailleerdere informatie bevatten en wordt naar uw e-mailadres gestuurd.
          </p>
        </div>
      </div>
      <div className="mt-8 text-center space-x-4">
        <button className="btn-primary">
          Taxatierapport opstellen
        </button>
        <button onClick={onReset} className="btn-primary">
          Nieuwe taxatie starten
        </button>
      </div>
    </div>
  );
};

export default ReportPreview;