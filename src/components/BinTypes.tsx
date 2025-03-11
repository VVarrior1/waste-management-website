import { useState } from 'react';

const BinTypes = () => {
  const [activeTab, setActiveTab] = useState<"green" | "blue" | "black" | "hazardous">("green");

  const renderTabContent = () => {
    if (activeTab === "green") {
      return (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
          <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
            Recyclable Materials
          </h3>
          <p className="mb-2 text-gray-800 dark:text-gray-200">
            Items that can be recycled and reused:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
            <li>Paper and cardboard</li>
            <li>Glass bottles and jars</li>
            <li>Plastic containers (types 1-7)</li>
            <li>Aluminum cans and foil</li>
            <li>Steel and tin cans</li>
          </ul>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Collection Schedule
          </button>
        </div>
      );
    } else if (activeTab === "blue") {
      return (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">
            Compostable Materials
          </h3>
          <p className="mb-2 text-gray-800 dark:text-gray-200">
            Organic waste that can be composted:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
            <li>Food scraps and leftovers</li>
            <li>Yard waste and garden trimmings</li>
            <li>Coffee grounds and filters</li>
            <li>Eggshells</li>
            <li>Paper towels and napkins</li>
          </ul>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Composting Tips
          </button>
        </div>
      );
    } else if (activeTab === "hazardous") {
      return (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-md">
          <h3 className="text-xl font-semibold mb-3 text-red-700 dark:text-red-400">
            Hazardous Materials
          </h3>
          <p className="mb-2 text-gray-800 dark:text-gray-200">
            Items that require special disposal:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
            <li>Used motor oil and filters</li>
            <li>Paint and solvents</li>
            <li>Batteries</li>
            <li>Electronics</li>
            <li>Fluorescent bulbs</li>
            <li>Household chemicals</li>
          </ul>
          <div className="mt-4 flex space-x-3">
            <a
              href="/locations"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Find Drop-off Locations
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-200">
            Non-Recyclable Waste
          </h3>
          <p className="mb-2 text-gray-800 dark:text-gray-200">Items that go to general waste:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
            <li>Plastic bags and film</li>
            <li>Styrofoam containers</li>
            <li>Certain plastics (check local guidelines)</li>
            <li>Contaminated food packaging</li>
            <li>Diapers and personal hygiene products</li>
          </ul>
          <button className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
            Waste Reduction Tips
          </button>
        </div>
      );
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-8">
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white mb-4">
          Bin Types
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "green"
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50"
            }`}
            onClick={() => setActiveTab("green")}
          >
            Green Bin
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "blue"
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
            }`}
            onClick={() => setActiveTab("blue")}
          >
            Blue Bin
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "black"
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab("black")}
          >
            Black Bin
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "hazardous"
                ? "bg-red-600 text-white"
                : "bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50"
            }`}
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