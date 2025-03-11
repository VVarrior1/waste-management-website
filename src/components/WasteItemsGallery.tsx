import Image from 'next/image';

interface WasteItem {
  id: number;
  name: string;
  image: string;
  category: string;
}

const wasteItems: WasteItem[] = [
  {
    id: 1,
    name: "Motor Oil",
    image: "/images/waste/motor-oil.jpg",
    category: "Hazardous",
  },
  {
    id: 2,
    name: "Clothing",
    image: "/images/waste/clothing.jpg",
    category: "Donation",
  },
  {
    id: 3,
    name: "Television",
    image: "/images/waste/television.jpg",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Fluorescent Bulbs",
    image: "/images/waste/lightbulbs.jpg",
    category: "Hazardous",
  },
  {
    id: 5,
    name: "Coffee Pods",
    image: "/images/waste/coffee-pods.jpg",
    category: "Recycling",
  },
  {
    id: 6,
    name: "Paper Towel",
    image: "/images/waste/paper-towel.jpg",
    category: "Compost",
  },
  {
    id: 7,
    name: "Coffee Canister",
    image: "/images/waste/coffee-canister.jpg",
    category: "Mixed Materials",
  },
  {
    id: 8,
    name: "Plastic Cutlery",
    image: "/images/waste/plastic-cutlery.jpg",
    category: "Garbage",
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
              className="group relative bg-white dark:bg-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-600"
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
    </div>
  );
} 