import Image from 'next/image';
import { useState } from 'react';

interface WasteItem {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  disposal: string;
}

const wasteItems: WasteItem[] = [
  {
    id: 1,
    name: "Motor Oil",
    image: "/images/waste/motor-oil.jpg",
    category: "Hazardous",
    description: "Used motor oil should never be poured down the drain or disposed of in regular garbage.",
    disposal: "Take to a hazardous waste drop-off location or auto service center that accepts used oil."
  },
  {
    id: 2,
    name: "Clothing",
    image: "/images/waste/clothing.jpg",
    category: "Donation",
    description: "Reusable clothing can be donated to local charities or recycled.",
    disposal: "Donate clean, wearable items to charity. Damaged textiles can be taken to textile recycling drop-off points."
  },
  {
    id: 3,
    name: "Television",
    image: "/images/waste/television.jpg",
    category: "Electronics",
    description: "Electronics contain hazardous materials and valuable recyclable components.",
    disposal: "Take to electronics recycling center or designated drop-off location."
  },
  {
    id: 4,
    name: "Fluorescent Bulbs",
    image: "/images/waste/lightbulbs.jpg",
    category: "Hazardous",
    description: "Contain small amounts of mercury and should never go in regular garbage.",
    disposal: "Take to hazardous waste drop-off location or participating retailers that accept them."
  },
  {
    id: 5,
    name: "Coffee Pods",
    image: "/images/waste/coffee-pods.jpg",
    category: "Recycling",
    description: "Different components need to be separated for proper disposal.",
    disposal: "Empty grounds into compost, check with manufacturer for recycling programs for the pods."
  },
  {
    id: 6,
    name: "Paper Towel",
    image: "/images/waste/paper-towel.jpg",
    category: "Compost",
    description: "Used paper towels from food or cleaning are compostable.",
    disposal: "Place in green cart for composting. If contaminated with chemicals, place in black cart."
  },
  {
    id: 7,
    name: "Coffee Canister",
    image: "/images/waste/coffee-canister.jpg",
    category: "Mixed Materials",
    description: "Coffee canisters typically have multiple components.",
    disposal: "Plastic lid in blue cart, metal canister in blue cart, foil seal in garbage."
  },
  {
    id: 8,
    name: "Plastic Cutlery",
    image: "/images/waste/plastic-cutlery.jpg",
    category: "Garbage",
    description: "Most plastic cutlery is not recyclable in standard programs.",
    disposal: "Place in black garbage cart. Consider switching to reusable or compostable alternatives."
  },
];

const getCategoryColor = (category: string): string => {
  const colors = {
    Hazardous: 'bg-red-500',
    Donation: 'bg-blue-500',
    Electronics: 'bg-purple-500',
    Recycling: 'bg-green-500',
    Compost: 'bg-yellow-500',
    'Mixed Materials': 'bg-orange-500',
    Garbage: 'bg-gray-500',
  };
  return colors[category as keyof typeof colors] || 'bg-gray-500';
};

export default function WasteItemsGallery() {
  const [selectedItem, setSelectedItem] = useState<WasteItem | null>(null);
  
  const handleItemClick = (item: WasteItem) => {
    setSelectedItem(item);
  };
  
  const handleCloseModal = () => {
    setSelectedItem(null);
  };
  
  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Common Waste Items
          </h2>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Click items for disposal info
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {wasteItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-600 cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <div className="relative pb-[100%]">
                <div className="absolute inset-0 p-4">
                  <div className="flex items-center justify-center w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="max-w-full max-h-full object-contain transition-all duration-300 dark:brightness-90 dark:contrast-125"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <p className="text-white font-medium text-sm mb-2 drop-shadow-md">{item.name}</p>
                    <span className={`inline-block px-3 py-1 rounded-full ${getCategoryColor(item.category)} text-white text-xs font-medium shadow-lg`}>
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal for detailed information */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white dark:bg-gray-800 max-w-md w-full rounded-lg shadow-xl overflow-hidden">
            <div className="flex justify-between items-start p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {selectedItem.name}
              </h3>
              <button
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full ${getCategoryColor(selectedItem.category)} text-white text-xs font-medium`}>
                  {selectedItem.category}
                </span>
              </div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Description</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {selectedItem.description}
              </p>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">How to Dispose</h4>
              <p className="text-gray-600 dark:text-gray-400">
                {selectedItem.disposal}
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 flex justify-end border-t border-gray-200 dark:border-gray-700">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 