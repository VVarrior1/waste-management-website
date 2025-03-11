import { useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";
import { useTheme } from "@/context/ThemeContext";

const Home: NextPage = () => {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState<
    "green" | "blue" | "black" | "hazardous"
  >("green");
  const [scheduleView, setScheduleView] = useState<"original" | "a-z">(
    "original"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Mock search function
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock database of waste items
    const wasteItems = [
      {
        name: "Motor oil",
        category: "hazardous",
        disposal:
          "Cannot go in regular bins. Must be taken to a hazardous waste drop-off location.",
        link: "/locations",
      },
      {
        name: "Paint",
        category: "hazardous",
        disposal:
          "Cannot go in regular bins. Must be taken to a hazardous waste drop-off location.",
        link: "/locations",
      },
      {
        name: "Batteries",
        category: "hazardous",
        disposal:
          "Cannot go in regular bins. Must be taken to a hazardous waste drop-off location.",
        link: "/locations",
      },
      {
        name: "Paper",
        category: "recyclable",
        disposal: "Place in green recycling bin.",
        link: "",
      },
      {
        name: "Food waste",
        category: "compostable",
        disposal: "Place in blue compost bin.",
        link: "",
      },
    ];

    // Filter items based on search query
    const results = wasteItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
    setShowSearchResults(true);
  };

  const renderTabContent = () => {
    if (activeTab === "green") {
      return (
        <div className="p-4 bg-green-50 rounded-md">
          <h3 className="text-xl font-semibold mb-3 text-green-700">
            Recyclable Materials
          </h3>
          <p className="mb-2 text-gray-800">
            Items that can be recycled and reused:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
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
        <div className="p-4 bg-blue-50 rounded-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">
            Compostable Materials
          </h3>
          <p className="mb-2 text-gray-800">
            Organic waste that can be composted:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
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
        <div className="p-4 bg-red-50 rounded-md">
          <h3 className="text-xl font-semibold mb-3 text-red-700">
            Hazardous Materials
          </h3>
          <p className="mb-2 text-gray-800">
            Items that require special disposal:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
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
        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Non-Recyclable Waste
          </h3>
          <p className="mb-2 text-gray-800">Items that go to general waste:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
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

  const renderSchedule = () => {
    if (scheduleView === "original") {
      return (
        <div className="border rounded-md overflow-auto">
          <div className="min-w-full table-fixed">
            <div className="grid grid-cols-4 border-b">
              <div className="p-3 font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border-r">
                Material
              </div>
              <div className="p-3 font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border-r">
                Mon
              </div>
              <div className="p-3 font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border-r">
                Wed
              </div>
              <div className="p-3 font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white">
                Fri
              </div>
            </div>
            <div className="grid grid-cols-4 border-b">
              <div className="p-3 border-r bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                Recyclables
              </div>
              <div className="p-3 border-r bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                ✓
              </div>
              <div className="p-3 border-r bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"></div>
              <div className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                ✓
              </div>
            </div>
            <div className="grid grid-cols-4 border-b">
              <div className="p-3 border-r bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                Compost
              </div>
              <div className="p-3 border-r bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"></div>
              <div className="p-3 border-r bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                ✓
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"></div>
            </div>
            <div className="grid grid-cols-4">
              <div className="p-3 border-r bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                General Waste
              </div>
              <div className="p-3 border-r bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                ✓
              </div>
              <div className="p-3 border-r bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"></div>
              <div className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                ✓
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <span className="text-blue-500 dark:text-blue-400 mr-2">📅</span>
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Monday
              </span>
            </div>
            <div className="mt-2 pl-7 text-gray-700 dark:text-gray-300">
              <p>• Recyclables Collection</p>
              <p>• General Waste Collection</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <span className="text-blue-500 dark:text-blue-400 mr-2">📅</span>
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Wednesday
              </span>
            </div>
            <div className="mt-2 pl-7 text-gray-700 dark:text-gray-300">
              <p>• Compost Collection</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <span className="text-blue-500 dark:text-blue-400 mr-2">📅</span>
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Friday
              </span>
            </div>
            <div className="mt-2 pl-7 text-gray-700 dark:text-gray-300">
              <p>• Recyclables Collection</p>
              <p>• General Waste Collection</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}
    >
      <Head>
        <title>Waste Management Services</title>
        <meta
          name="description"
          content="Your local waste management services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl text-green-600 dark:text-green-500">
                  🗑️
                </span>
                <span className="ml-2 text-xl font-bold text-gray-700 dark:text-white">
                  EcoWaste
                </span>
              </div>
              <nav className="hidden md:ml-8 md:flex md:space-x-8">
                <a className="inline-flex items-center px-1 pt-1 border-b-2 border-green-500 text-sm font-medium text-gray-600 dark:text-white">
                  Home
                </a>
                <Link href="/locations">
                  <span className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 cursor-pointer">
                    Locations
                  </span>
                </Link>
                <a className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300">
                  Resources
                </a>
                <a className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300">
                  Contact
                </a>
              </nav>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <div className="relative">
                <form onSubmit={handleSearch}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-400 dark:text-gray-400">🔍</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500 sm:text-sm"
                    placeholder="Search waste items"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
              </div>
              <DarkModeToggle />
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu - Collapsed by default */}
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-2 mt-1 hidden">
            <div className="flex flex-col space-y-2">
              <a className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-white bg-gray-50 dark:bg-gray-700 rounded-md">
                Home
              </a>
              <Link href="/locations">
                <span className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                  Locations
                </span>
              </Link>
              <a className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
                Resources
              </a>
              <a className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
                Contact
              </a>
            </div>
            <div className="mt-4 px-3">
              <div className="relative">
                <form onSubmit={handleSearch}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-400 dark:text-gray-400">🔍</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500 sm:text-sm"
                    placeholder="Search waste items"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
              </div>
            </div>
            <div className="mt-4 px-3 flex justify-end">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showSearchResults && (
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-8">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white">
                  Search Results
                </h2>
                <button
                  onClick={() => setShowSearchResults(false)}
                  className="text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              </div>
              {searchResults.length > 0 ? (
                <div className="space-y-4">
                  {searchResults.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-md ${
                        item.category === "hazardous"
                          ? "bg-red-50 dark:bg-red-900/20"
                          : item.category === "recyclable"
                          ? "bg-green-50 dark:bg-green-900/20"
                          : item.category === "compostable"
                          ? "bg-blue-50 dark:bg-blue-900/20"
                          : "bg-gray-50 dark:bg-gray-700"
                      }`}
                    >
                      <h3 className="font-medium text-gray-700 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        {item.disposal}
                      </p>
                      {item.link && (
                        <a
                          href={item.link}
                          className="inline-block mt-2 text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
                        >
                          Find drop-off locations →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-300">
                  No results found for "{searchQuery}"
                </p>
              )}
            </div>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-8">
          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white mb-4">
              Next Bin Day
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-md flex items-center border border-gray-200 dark:border-gray-700">
              <span className="text-2xl text-green-600 dark:text-green-500 mr-3">
                📅
              </span>
              <div>
                <p className="font-medium text-gray-700 dark:text-white">
                  Wednesday, March 12
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Compost Collection
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-4 sm:px-6 sm:py-4 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Bin Types
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === "green"
                      ? "bg-green-600 text-white"
                      : "bg-green-100 text-green-700 hover:bg-green-200"
                  }`}
                  onClick={() => setActiveTab("green")}
                >
                  Green Bin
                </button>
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === "blue"
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
                  onClick={() => setActiveTab("blue")}
                >
                  Blue Bin
                </button>
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === "black"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab("black")}
                >
                  Black Bin
                </button>
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === "hazardous"
                      ? "bg-red-600 text-white"
                      : "bg-red-100 text-red-700 hover:bg-red-200"
                  }`}
                  onClick={() => setActiveTab("hazardous")}
                >
                  Hazardous Waste
                </button>
              </div>
              <div className="mt-4">{renderTabContent()}</div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-8">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white mb-2 sm:mb-0">
                Collection Schedule
              </h2>
              <div className="flex space-x-2">
                <button
                  className={`px-3 py-1 text-sm rounded ${
                    scheduleView === "original"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => setScheduleView("original")}
                >
                  Original
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded ${
                    scheduleView === "a-z"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => setScheduleView("a-z")}
                >
                  A-Z
                </button>
              </div>
            </div>
            {renderSchedule()}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white mb-4">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="border rounded-md p-4 flex flex-col items-center text-center hover:bg-gray-50">
                <span className="text-3xl text-green-600 mb-3">📅</span>
                <h3 className="font-medium mb-1 text-gray-700 dark:text-white">
                  Schedule
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  View upcoming collection dates
                </p>
              </div>
              <div className="border rounded-md p-4 flex flex-col items-center text-center hover:bg-gray-50">
                <span className="text-3xl text-blue-600 mb-3">ℹ️</span>
                <h3 className="font-medium mb-1 text-gray-700 dark:text-white">
                  For Businesses
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Commercial waste solutions
                </p>
              </div>
              <a
                href="/locations"
                className="border rounded-md p-4 flex flex-col items-center text-center hover:bg-gray-50"
              >
                <span className="text-3xl text-yellow-600 mb-3">🗺️</span>
                <h3 className="font-medium mb-1 text-gray-700 dark:text-white">
                  Drop-off Locations
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Find hazardous waste drop-off centers
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 dark:bg-gray-900 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">EcoWaste Management</h3>
              <p className="text-gray-300 mb-4">
                Helping our community reduce waste and protect the environment
                for future generations.
              </p>
              <p className="text-gray-300">© 2025 EcoWaste Management</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <p className="text-gray-300 mb-2">
                City Hall and Municipal Complex
              </p>
              <p className="text-gray-300 mb-2">
                800 Macleod Trail S.E., T2P 2M5
              </p>
              <p className="text-gray-300 mb-2">info@calgary.ca</p>
              <p className="text-gray-300">403-268-CITY (2489)</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
