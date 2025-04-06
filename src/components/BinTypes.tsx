import Link from 'next/link';
import { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

interface BinTypeInfo {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
  tip: string;
  color: string;
  link?: {
    text: string;
    url: string;
  };
}

const BinTypes = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [showCommonItems, setShowCommonItems] = useState(false);

  const binTypes: BinTypeInfo[] = [
    {
      id: "blue",
      title: "Blue Cart Recycling",
      icon: <span className="text-3xl">♻️</span>,
      description: "Clean and loose recyclable items accepted in Alberta:",
      items: [
        "Paper, newspapers, magazines, and cardboard",
        "Clean food cans and empty aerosol cans",
        "Clean plastic containers (types 1-7)",
        "Clean plastic bags and bubble wrap (bundled)",
        "Clean glass bottles and jars",
        "Clean aluminum foil and containers",
        "Empty paper cups and cartons"
      ],
      tip: "All items should be clean, dry, and loose (not bagged)",
      color: "blue"
    },
    {
      id: "green",
      title: "Green Cart Composting",
      icon: <span className="text-3xl">🍃</span>,
      description: "Food and yard waste accepted in Alberta:",
      items: [
        "All food waste (including meat, bones, and dairy)",
        "Food-soiled paper and cardboard",
        "Yard waste (grass, leaves, plants)",
        "Small branches and twigs",
        "Pet waste and cat litter (in compostable bags)",
        "Coffee filters and tea bags",
        "Approved compostable bags and containers"
      ],
      tip: "Look for the certified compostable logo on bags",
      color: "green"
    },
    {
      id: "black",
      title: "Black Cart Garbage",
      icon: <span className="text-3xl">🗑️</span>,
      description: "Items that go to landfill in Alberta:",
      items: [
        "Non-recyclable packaging and plastics",
        "Styrofoam and foam packaging",
        "Disposable diapers and hygiene products",
        "Non-recyclable glass (e.g., broken dishes)",
        "Chip bags and snack wrappers",
        "Straws and non-recyclable plastic",
        "Dryer sheets and disposable mop sheets"
      ],
      tip: "If unsure about an item, contact your local waste management facility for guidance",
      color: "gray"
    },
    {
      id: "hazardous",
      title: "Household Hazardous Waste",
      icon: <span className="text-3xl">⚠️</span>,
      description: "Items requiring special disposal in Alberta:",
      items: [
        "Motor oil, filters, and containers",
        "Paint, stains, and solvents",
        "Household chemicals and cleaners",
        "Batteries (all types)",
        "Electronics and computers",
        "Light bulbs and tubes",
        "Propane tanks and aerosol cans",
        "Automotive products"
      ],
      tip: "Never place hazardous materials in your regular bins",
      color: "red",
      link: {
        text: "Find Drop-off Locations",
        url: "/locations"
      }
    }
  ];

  const toggleBinType = (id: string) => {
    if (activeTab === id) {
      setActiveTab(null);
    } else {
      setActiveTab(id);
    }
  };

  const getButtonColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return "border-blue-500 text-blue-700 dark:text-blue-400";
      case "green":
        return "border-green-500 text-green-700 dark:text-green-400";
      case "gray":
        return "border-gray-500 text-gray-700 dark:text-gray-400";
      case "red":
        return "border-red-500 text-red-700 dark:text-red-400";
      default:
        return "border-gray-300 text-gray-600 dark:text-gray-400";
    }
  };

  const getContentColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800";
      case "green":
        return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800";
      case "gray":
        return "bg-gray-50 dark:bg-gray-800/40 border-gray-200 dark:border-gray-700";
      case "red":
        return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800";
      default:
        return "bg-gray-50 dark:bg-gray-800/40 border-gray-200 dark:border-gray-700";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-8">
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white">
            Waste Guide - Alberta
          </h2>
        </div>

        <div className="space-y-4">
          {binTypes.map((bin) => (
            <div key={bin.id} className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <button
                className={`w-full flex items-center justify-between p-4 text-left font-medium bg-white dark:bg-gray-800 border-l-4 ${getButtonColorClass(bin.color)}`}
                onClick={() => toggleBinType(bin.id)}
              >
                <div className="flex items-center">
                  {bin.icon}
                  <span className="ml-3 text-lg">{bin.title}</span>
                </div>
                {activeTab === bin.id ? (
                  <FiChevronUp className="w-5 h-5" />
                ) : (
                  <FiChevronDown className="w-5 h-5" />
                )}
              </button>
              
              {activeTab === bin.id && (
                <div className={`p-4 ${getContentColorClass(bin.color)}`}>
                  <p className="mb-2 text-gray-800 dark:text-gray-200">
                    {bin.description}
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
                    {bin.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <p>✨ Tip: {bin.tip}</p>
                  </div>
                  
                  {bin.link && (
                    <Link
                      href={bin.link.url}
                      className="inline-flex items-center px-4 py-2 rounded-md font-medium transition-all duration-200 ease-in-out
                        bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700
                        text-white shadow-md hover:shadow-lg active:shadow-inner
                        transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {bin.link.text}
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BinTypes; 