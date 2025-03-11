import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import DarkModeToggle from "@/components/DarkModeToggle";
import { useTheme } from "@/context/ThemeContext";

const Locations: NextPage = () => {
  const { darkMode } = useTheme();
  const [zipCode, setZipCode] = useState("");
  const [showLocations, setShowLocations] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  // Mock locations data
  const locations = [
    {
      id: 1,
      name: "City Hazardous Waste Facility",
      address: "123 Environmental Way, Green City, EC 12345",
      distance: "2.3 miles",
      hours: {
        monday: "8:00 AM - 5:00 PM",
        tuesday: "8:00 AM - 5:00 PM",
        wednesday: "8:00 AM - 5:00 PM",
        thursday: "8:00 AM - 5:00 PM",
        friday: "8:00 AM - 5:00 PM",
        saturday: "9:00 AM - 3:00 PM",
        sunday: "Closed"
      },
      acceptedItems: [
        "Motor oil and filters",
        "Paint and solvents",
        "Batteries",
        "Electronics",
        "Fluorescent bulbs",
        "Household chemicals"
      ],
      phone: "(555) 123-4567"
    },
    {
      id: 2,
      name: "County Recycling Center",
      address: "456 Recycle Blvd, Green City, EC 12345",
      distance: "4.7 miles",
      hours: {
        monday: "7:00 AM - 7:00 PM",
        tuesday: "7:00 AM - 7:00 PM",
        wednesday: "7:00 AM - 7:00 PM",
        thursday: "7:00 AM - 7:00 PM",
        friday: "7:00 AM - 7:00 PM",
        saturday: "8:00 AM - 5:00 PM",
        sunday: "10:00 AM - 3:00 PM"
      },
      acceptedItems: [
        "Motor oil and filters",
        "Batteries",
        "Electronics",
        "Fluorescent bulbs"
      ],
      phone: "(555) 987-6543"
    },
    {
      id: 3,
      name: "EcoWaste Drop-off Center",
      address: "789 Green Street, Green City, EC 12345",
      distance: "6.1 miles",
      hours: {
        monday: "9:00 AM - 6:00 PM",
        tuesday: "9:00 AM - 6:00 PM",
        wednesday: "9:00 AM - 6:00 PM",
        thursday: "9:00 AM - 6:00 PM",
        friday: "9:00 AM - 6:00 PM",
        saturday: "10:00 AM - 4:00 PM",
        sunday: "Closed"
      },
      acceptedItems: [
        "Motor oil and filters",
        "Paint and solvents",
        "Batteries",
        "Electronics",
        "Fluorescent bulbs",
        "Household chemicals",
        "Tires",
        "Appliances"
      ],
      phone: "(555) 456-7890"
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLocations(true);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Head>
        <title>Drop-off Locations | EcoWaste Management</title>
        <meta
          name="description"
          content="Find hazardous waste drop-off locations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <span className="flex items-center cursor-pointer">
                    <span className="text-2xl text-green-600 dark:text-green-500">🗑️</span>
                    <span className="ml-2 text-xl font-bold text-gray-700 dark:text-white">
                      EcoWaste
                    </span>
                  </span>
                </Link>
              </div>
              <nav className="hidden md:ml-8 md:flex md:space-x-8">
                <Link href="/">
                  <span className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 cursor-pointer">
                    Home
                  </span>
                </Link>
                <Link href="/locations">
                  <span className="inline-flex items-center px-1 pt-1 border-b-2 border-green-500 text-sm font-medium text-gray-600 dark:text-white cursor-pointer">
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
            <div className="flex items-center">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-8">
          <div className="p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-white mb-6">
              Hazardous Waste Drop-off Locations
            </h1>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md mb-6">
              <h2 className="text-lg font-medium text-green-700 dark:text-green-300 mb-2">
                Why use a drop-off location?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Hazardous materials like <strong>used motor oil</strong>, paint, batteries, and electronics cannot go in regular city bins. 
                These items require special handling to protect the environment and must be taken to designated drop-off locations.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
                Find a Location Near You
              </h2>
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <label htmlFor="zipCode" className="sr-only">
                    Enter your ZIP code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    placeholder="Enter your ZIP code"
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-500 bg-white dark:bg-gray-700 text-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Search
                </button>
              </form>
            </div>

            {showLocations && (
              <div>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
                  Locations Near {zipCode || "You"}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden bg-white dark:bg-gray-800"
                    >
                      <div
                        className="p-4 bg-gray-50 dark:bg-gray-700/50 flex justify-between items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() =>
                          setSelectedLocation(
                            selectedLocation === location.id ? null : location.id
                          )
                        }
                      >
                        <div>
                          <h3 className="font-medium text-gray-800 dark:text-white">
                            {location.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {location.address}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {location.distance} away
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-green-600 dark:text-green-400 mr-2">
                            {selectedLocation === location.id ? "Hide Details" : "View Details"}
                          </span>
                          <svg
                            className={`h-5 w-5 text-green-600 dark:text-green-400 transform ${
                              selectedLocation === location.id ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                      {selectedLocation === location.id && (
                        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                          <div className="mb-4">
                            <h4 className="font-medium text-gray-800 dark:text-white mb-2">
                              Operating Hours
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-300">Monday:</span>
                                <span className="text-gray-700 dark:text-gray-200">{location.hours.monday}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-300">Tuesday:</span>
                                <span className="text-gray-700 dark:text-gray-200">{location.hours.tuesday}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-300">Wednesday:</span>
                                <span className="text-gray-700 dark:text-gray-200">{location.hours.wednesday}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-300">Thursday:</span>
                                <span className="text-gray-700 dark:text-gray-200">{location.hours.thursday}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-300">Friday:</span>
                                <span className="text-gray-700 dark:text-gray-200">{location.hours.friday}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-300">Saturday:</span>
                                <span className="text-gray-700 dark:text-gray-200">{location.hours.saturday}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-300">Sunday:</span>
                                <span className="text-gray-700 dark:text-gray-200">{location.hours.sunday}</span>
                              </div>
                            </div>
                          </div>
                          <div className="mb-4">
                            <h4 className="font-medium text-gray-800 dark:text-white mb-2">
                              Accepted Items
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                              {location.acceptedItems.map((item, index) => (
                                <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                                  <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 dark:text-white mb-2">
                              Contact
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">{location.phone}</p>
                          </div>
                          <div className="mt-4">
                            <button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-4 py-2 rounded-md">
                              Get Directions
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-medium text-gray-700 dark:text-white mb-2">
                  What items are considered hazardous waste?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hazardous waste includes items like used motor oil, paint, solvents, batteries, electronics, fluorescent bulbs, and household chemicals. These items contain materials that can be harmful to the environment if not disposed of properly.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-medium text-gray-700 dark:text-white mb-2">
                  Why can't I put motor oil in my regular trash?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Used motor oil is considered hazardous waste and cannot go in regular city bins. It can contaminate soil, groundwater, and waterways if not disposed of properly. One gallon of used oil can contaminate one million gallons of fresh water.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-medium text-gray-700 dark:text-white mb-2">
                  How should I transport hazardous materials?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Keep materials in their original containers when possible. Make sure containers are sealed and labeled. Transport them in the trunk of your car or truck bed, not in the passenger compartment. Keep materials separated and secure to prevent spills.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 dark:text-white mb-2">
                  Is there a fee for dropping off hazardous waste?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Most household hazardous waste drop-off locations accept materials from residents at no charge. Some items like tires or large appliances may have a small fee. Commercial waste may be subject to fees. Contact the facility directly for specific information.
                </p>
              </div>
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
                  <Link href="/">
                    <span className="text-gray-300 hover:text-white cursor-pointer">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations">
                    <span className="text-gray-300 hover:text-white cursor-pointer">
                      Locations
                    </span>
                  </Link>
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
              <p className="text-gray-300 mb-2">123 Recycling Way</p>
              <p className="text-gray-300 mb-2">Green City, EC 12345</p>
              <p className="text-gray-300 mb-2">info@ecowaste.example</p>
              <p className="text-gray-300">(555) 123-4567</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Locations; 