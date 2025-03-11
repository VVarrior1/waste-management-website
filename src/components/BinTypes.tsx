import Link from 'next/link';
import { useState } from 'react';

const BinTypes = () => {
  const [activeTab, setActiveTab] = useState<"green" | "blue" | "black" | "hazardous">("green");

  const renderTabContent = () => {
    if (activeTab === "green") {
      return (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">
            Blue Cart Recycling
          </h3>
          <p className="mb-2 text-gray-800 dark:text-gray-200">
            Clean and loose recyclable items accepted in Alberta:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Paper, newspapers, magazines, and cardboard</li>
            <li>Clean food cans and empty aerosol cans</li>
            <li>Clean plastic containers (types 1-7)</li>
            <li>Clean plastic bags and bubble wrap (bundled)</li>
            <li>Clean glass bottles and jars</li>
            <li>Clean aluminum foil and containers</li>
            <li>Empty paper cups and cartons</li>
          </ul>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>✨ Tip: All items should be clean, dry, and loose (not bagged)</p>
          </div>
        </div>
      );
    } else if (activeTab === "blue") {
      return (
        <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-md">
          <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-300">
            Green Cart Composting
          </h3>
          <p className="mb-2 text-gray-800 dark:text-gray-200">
            Food and yard waste accepted in Alberta:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>All food waste (including meat, bones, and dairy)</li>
            <li>Food-soiled paper and cardboard</li>
            <li>Yard waste (grass, leaves, plants)</li>
            <li>Small branches and twigs</li>
            <li>Pet waste and cat litter (in compostable bags)</li>
            <li>Coffee filters and tea bags</li>
            <li>Approved compostable bags and containers</li>
          </ul>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>✨ Tip: Look for the certified compostable logo on bags</p>
          </div>
        </div>
      );
    } else if (activeTab === "hazardous") {
      return (
        <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-md">
          <h3 className="text-xl font-semibold mb-3 text-red-700 dark:text-red-300">
            Household Hazardous Waste
          </h3>
          <p className="mb-2 text-gray-800 dark:text-gray-200">
            Items requiring special disposal in Alberta:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Motor oil, filters, and containers</li>
            <li>Paint, stains, and solvents</li>
            <li>Household chemicals and cleaners</li>
            <li>Batteries (all types)</li>
            <li>Electronics and computers</li>
            <li>Light bulbs and tubes</li>
            <li>Propane tanks and aerosol cans</li>
            <li>Automotive products</li>
          </ul>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>✨ Tip: Never place hazardous materials in your regular bins</p>
          </div>
          <Link
            href="/locations"
            className="mt-4 inline-flex items-center px-4 py-2 rounded-md font-medium transition-all duration-200 ease-in-out
              bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700
              text-white shadow-md hover:shadow-lg active:shadow-inner
              transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Find Drop-off Locations
          </Link>
        </div>
      );
    } else {
      return (
        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Black Cart Garbage
          </h3>
          <p className="mb-2 text-gray-800 dark:text-gray-200">
            Items that go to landfill in Alberta:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Non-recyclable packaging and plastics</li>
            <li>Styrofoam and foam packaging</li>
            <li>Disposable diapers and hygiene products</li>
            <li>Non-recyclable glass (e.g., broken dishes)</li>
            <li>Chip bags and snack wrappers</li>
            <li>Straws and non-recyclable plastic</li>
            <li>Dryer sheets and disposable mop sheets</li>
          </ul>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>✨ Tip: If unsure about an item, contact your local waste management facility for guidance</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-8">
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white mb-4">
          Waste Guide - Alberta
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ease-in-out shadow-sm ${
              activeTab === "green"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                : "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 hover:from-blue-100 hover:to-blue-200 dark:from-blue-900/30 dark:to-blue-900/30 dark:text-blue-400 dark:hover:from-blue-900/40 dark:hover:to-blue-900/40"
            } transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow active:shadow-inner`}
            onClick={() => setActiveTab("green")}
          >
            Blue Cart
          </button>
          <button
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ease-in-out shadow-sm ${
              activeTab === "blue"
                ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                : "bg-gradient-to-r from-green-50 to-green-100 text-green-700 hover:from-green-100 hover:to-green-200 dark:from-green-900/30 dark:to-green-900/30 dark:text-green-400 dark:hover:from-green-900/40 dark:hover:to-green-900/40"
            } transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow active:shadow-inner`}
            onClick={() => setActiveTab("blue")}
          >
            Green Cart
          </button>
          <button
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ease-in-out shadow-sm ${
              activeTab === "black"
                ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md"
                : "bg-gradient-to-r from-gray-600 to-gray-700 text-gray-100 hover:from-gray-700 hover:to-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-gray-200 dark:hover:from-gray-900 dark:hover:to-black"
            } transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow active:shadow-inner`}
            onClick={() => setActiveTab("black")}
          >
            Black Cart
          </button>
          <button
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ease-in-out shadow-sm ${
              activeTab === "hazardous"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md"
                : "bg-gradient-to-r from-red-50 to-red-100 text-red-700 hover:from-red-100 hover:to-red-200 dark:from-red-900/30 dark:to-red-900/30 dark:text-red-400 dark:hover:from-red-900/40 dark:hover:to-red-900/40"
            } transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow active:shadow-inner`}
            onClick={() => setActiveTab("hazardous")}
          >
            Hazardous Waste
          </button>
        </div>
        <div>{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default BinTypes; 