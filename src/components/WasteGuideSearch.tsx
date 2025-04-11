import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiSearch, FiChevronUp, FiChevronDown, FiList, FiInfo, FiGrid, FiX } from 'react-icons/fi';

interface SearchResult {
  name: string;
  category: "hazardous" | "recyclable" | "compostable" | "garbage";
  disposal: string;
  symbol: string;
  bin: string;
  link?: string;
}

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

interface CommonWasteItem {
  name: string;
  category: "hazardous" | "recyclable" | "compostable" | "garbage";
  instructions: string;
  bin: string;
  symbol: string;
}

interface WasteItem {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  disposal: string;
}

const WasteGuideSearch = ({ defaultOpen }: { defaultOpen: boolean }) => {
  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [notFound, setNotFound] = useState(false);
  
  // Bin types state
  const [activeTab, setActiveTab] = useState<string | null>(null);
  
  // Gallery state - initialize based on defaultOpen prop
  const [showGallery, setShowGallery] = useState(defaultOpen);
  const [selectedItem, setSelectedItem] = useState<WasteItem | null>(null);

  // Mock database of waste items
  const wasteItems: SearchResult[] = [
    { 
      name: "Motor oil", 
      category: "hazardous", 
      disposal: "Cannot go in regular bins. Must be taken to a hazardous waste drop-off location.",
      symbol: "⚠️",
      bin: "Hazardous Waste",
      link: "/locations"
    },
    { 
      name: "Paint", 
      category: "hazardous", 
      disposal: "Cannot go in regular bins. Must be taken to a hazardous waste drop-off location.",
      symbol: "⚠️",
      bin: "Hazardous Waste",
      link: "/locations"
    },
    { 
      name: "Batteries", 
      category: "hazardous", 
      disposal: "Cannot go in regular bins. Must be taken to a hazardous waste drop-off location.",
      symbol: "⚠️",
      bin: "Hazardous Waste",
      link: "/locations"
    },
    { 
      name: "Paper", 
      category: "recyclable", 
      disposal: "Place in blue recycling cart.",
      symbol: "♻️",
      bin: "Blue Cart",
    },
    { 
      name: "Food waste", 
      category: "compostable", 
      disposal: "Place in green compost bin.",
      symbol: "🍃",
      bin: "Green Cart",
    },
    { 
      name: "Plastic bags", 
      category: "recyclable", 
      disposal: "Bundle clean bags inside another plastic bag and place in blue cart.",
      symbol: "♻️",
      bin: "Blue Cart",
    },
    { 
      name: "Styrofoam", 
      category: "garbage", 
      disposal: "Cannot be recycled in Calgary. Place in black garbage cart.",
      symbol: "🗑️",
      bin: "Black Cart",
    },
    { 
      name: "Electronics", 
      category: "hazardous", 
      disposal: "Electronics contain hazardous materials and must be taken to proper recycling facilities.",
      symbol: "⚠️",
      bin: "Hazardous Waste",
      link: "/locations"
    },
    { 
      name: "Glass bottles", 
      category: "recyclable", 
      disposal: "Clean and empty glass bottles can be recycled in your blue cart.",
      symbol: "♻️",
      bin: "Blue Cart",
    },
    { 
      name: "Yard waste", 
      category: "compostable", 
      disposal: "Grass clippings, leaves, and small branches go in your green cart.",
      symbol: "🍃",
      bin: "Green Cart",
    }
  ];

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
        text: "Find Landfill Locations",
        url: "/locations"
      }
    }
  ];
  
  // Common waste items list
  const commonWasteItems: CommonWasteItem[] = [
    {
      name: "Plastic Bags",
      category: "recyclable",
      instructions: "Bundle clean bags inside another plastic bag and place in blue cart.",
      bin: "Blue Cart",
      symbol: "♻️"
    },
    {
      name: "Coffee Cups",
      category: "recyclable",
      instructions: "Empty and rinse. Place plastic lid in blue cart, cup in blue cart.",
      bin: "Blue Cart",
      symbol: "♻️"
    },
    {
      name: "Pizza Boxes",
      category: "compostable",
      instructions: "Remove any leftover food. If greasy, place in green cart.",
      bin: "Green Cart",
      symbol: "🍃"
    },
    {
      name: "Aluminum Foil",
      category: "recyclable",
      instructions: "Clean and bundle. Place in blue cart.",
      bin: "Blue Cart",
      symbol: "♻️"
    },
    {
      name: "Light Bulbs",
      category: "hazardous",
      instructions: "Bring to hazardous waste drop-off location.",
      bin: "Hazardous Waste",
      symbol: "⚠️"
    },
    {
      name: "Tissues",
      category: "compostable",
      instructions: "Place in green cart.",
      bin: "Green Cart",
      symbol: "🍃"
    },
    {
      name: "Styrofoam",
      category: "garbage",
      instructions: "Cannot be recycled in Calgary. Place in black garbage cart.",
      bin: "Black Cart",
      symbol: "🗑️"
    },
    {
      name: "Clothing",
      category: "recyclable",
      instructions: "Donate if in good condition. Otherwise, consider textile recycling programs.",
      bin: "Donation / Special Collection",
      symbol: "♻️"
    }
  ];

  // Gallery items
  const wasteGalleryItems: WasteItem[] = [
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
  
  const handleItemClick = (item: WasteItem) => {
    setSelectedItem(item);
  };
  
  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  // Search handlers
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission is now just a fallback
    performSearch();
  };

  const performSearch = () => {
    setNotFound(false);
    
    if (!searchQuery.trim()) {
      setShowSearchResults(false);
      return;
    }
    
    // Filter items based on search query
    const results = wasteItems.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (results.length === 0) {
      setNotFound(true);
    }
    
    setSearchResults(results);
    setShowSearchResults(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    
    // If the query is empty, hide results
    if (newQuery === '') {
      setShowSearchResults(false);
      return;
    }
    
    // Debounce for better performance - only search after typing has paused briefly
    const trimmedQuery = newQuery.trim();
    if (trimmedQuery.length >= 2) {
      // For slightly better UX, we could add a debounce here
      // But for simplicity, we'll just search immediately
      setTimeout(() => {
        // Filter items based on search query
        const results = wasteItems.filter(item => 
          item.name.toLowerCase().includes(trimmedQuery.toLowerCase())
        );
        
        if (results.length === 0) {
          setNotFound(true);
        } else {
          setNotFound(false);
        }
        
        setSearchResults(results);
        setShowSearchResults(true);
      }, 100); // Small delay to avoid excessive updates
    }
  };

  const getBgColorClass = (category: string): string => {
    switch (category) {
      case "hazardous":
        return "bg-red-50 dark:bg-red-900/20";
      case "recyclable":
        return "bg-blue-50 dark:bg-blue-900/20";
      case "compostable":
        return "bg-green-50 dark:bg-green-900/20";
      case "garbage":
        return "bg-gray-100 dark:bg-gray-700/40";
      default:
        return "bg-gray-50 dark:bg-gray-800/50";
    }
  };

  // Bin type handlers
  const toggleBinType = (id: string) => {
    setActiveTab(id);
  };

  // Set a default active tab on component mount if none is set
  useEffect(() => {
    if (!activeTab) {
      setActiveTab('blue'); // Default to blue cart
    }
  }, [activeTab]);

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

  const getBinColorClass = (bin: string): string => {
    switch (bin) {
      case "Green Cart":
        return "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 border-green-200 dark:border-green-800";
      case "Blue Cart":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 border-blue-200 dark:border-blue-800";
      case "Black Cart":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/40 dark:text-gray-200 border-gray-200 dark:border-gray-700";
      case "Hazardous Waste":
        return "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 border-red-200 dark:border-red-800";
      default:
        return "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white mb-6">
          Waste Guide & Search
        </h2>
        
        {/* Search Section */}
        <div className="mb-8 border-2 border-green-500 dark:border-green-600 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-3">
            Find Your Waste Item
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Start typing to search for any waste item
          </p>
          
          <div className="relative">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-green-500" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-3 border-2 border-green-500 dark:border-green-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-600 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500 sm:text-sm shadow-sm"
                  placeholder="Search for items like 'batteries', 'paper', 'food waste'..."
                  type="search"
                  value={searchQuery}
                  onChange={handleInputChange}
                  autoComplete="off"
                />
                <button 
                  type="submit"
                  className="absolute inset-y-0 right-0 px-4 flex items-center bg-green-500 hover:bg-green-600 text-white rounded-r-md transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          
          {/* Search Results - now directly below the search instead of absolute */}
          {showSearchResults && (
            <div className="mt-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold text-gray-700 dark:text-white">
                    Search Results
                  </h2>
                  <button 
                    onClick={() => setShowSearchResults(false)}
                    className="text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    ✕
                  </button>
                </div>
                
                {notFound ? (
                  <div className="p-4 rounded-md bg-yellow-50 dark:bg-yellow-900/20 text-center">
                    <p className="text-gray-700 dark:text-gray-300 mb-1">
                      No results found for <span className="font-semibold">"{searchQuery}"</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Try another search term or contact waste services at 311 for assistance.
                    </p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="space-y-4">
                    {searchResults.map((item, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-md ${getBgColorClass(item.category)}`}
                      >
                        <div className="flex items-start">
                          <span className="text-2xl mr-3">{item.symbol}</span>
                          <div>
                            <h3 className="font-medium text-gray-700 dark:text-white">
                              {item.name}
                            </h3>
                            <div className="my-1">
                              <span className={`inline-block px-2 py-1 text-xs font-medium rounded border ${getBinColorClass(item.bin)}`}>
                                {item.bin}
                              </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mt-1">
                              {item.disposal}
                            </p>
                            {item.link && (
                              <a
                                href={item.link}
                                className="inline-block mt-2 text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
                              >
                                Find landfill locations →
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>

        {/* Waste Guide Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
            Waste Guide
          </h3>
          
          <div className="space-y-4">
            {/* Common Waste Items (Gallery) Section */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <button
                onClick={() => setShowGallery(!showGallery)}
                className="w-full flex items-center justify-between p-4 text-left font-medium bg-white dark:bg-gray-800 border-l-4 border-purple-500 dark:border-purple-400 text-purple-700 dark:text-purple-400"
              >
                <div className="flex items-center">
                  <FiGrid className="w-5 h-5 ml-2 mr-4" />
                  <span className="text-lg">Common Waste Items</span>
                </div>
                {showGallery ? (
                  <FiChevronUp className="w-5 h-5" />
                ) : (
                  <FiChevronDown className="w-5 h-5" />
                )}
              </button>
              
              {showGallery && (
                <div className="bg-purple-50 dark:bg-purple-900/20 border-t border-gray-200 dark:border-gray-700 p-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Visual guide to common waste items - click on any item to see detailed disposal instructions.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {wasteGalleryItems.map((item) => (
                      <div
                        key={item.id}
                        className="group flex flex-col bg-white dark:bg-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-600 cursor-pointer"
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
                        </div>
                        <div className="p-2 text-center bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600">
                          <p className="font-medium text-gray-800 dark:text-white text-sm">{item.name}</p>
                          <span className={`inline-block mt-1 px-2 py-0.5 rounded-full ${getCategoryColor(item.category)} text-white text-xs font-medium`}>
                            {item.category}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Bin Types with shared info section */}
            <div className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {binTypes.map((bin) => (
                  <div key={bin.id} className={`rounded-lg border overflow-hidden h-full transition-all duration-200 cursor-pointer ${
                    activeTab === bin.id 
                      ? 'ring-2 ring-offset-1 shadow-lg scale-[1.02] ' + 
                        (bin.color === 'blue' 
                          ? 'ring-blue-500 border-blue-300 dark:border-blue-700' 
                          : bin.color === 'green' 
                            ? 'ring-green-500 border-green-300 dark:border-green-700' 
                            : bin.color === 'gray' 
                              ? 'ring-gray-500 border-gray-300 dark:border-gray-700' 
                              : 'ring-red-500 border-red-300 dark:border-red-700')
                      : 'border-gray-200 dark:border-gray-700 hover:shadow-md hover:scale-[1.01]'
                  }`}>
                    <button
                      className={`w-full flex flex-col items-center text-center p-6 text-left font-medium bg-white dark:bg-gray-800 
                        ${activeTab === bin.id 
                          ? bin.color === 'blue' 
                            ? 'bg-blue-50 dark:bg-blue-900/30' 
                            : bin.color === 'green' 
                              ? 'bg-green-50 dark:bg-green-900/30' 
                              : bin.color === 'gray' 
                                ? 'bg-gray-50 dark:bg-gray-700/50' 
                                : 'bg-red-50 dark:bg-red-900/30'
                          : ''
                        }`}
                      onClick={() => toggleBinType(bin.id)}
                    >
                      <div className="mb-3">
                        {bin.icon}
                      </div>
                      <span className={`text-lg ${
                        bin.color === 'blue' 
                          ? 'text-blue-700 dark:text-blue-400' 
                          : bin.color === 'green' 
                            ? 'text-green-700 dark:text-green-400' 
                            : bin.color === 'gray' 
                              ? 'text-gray-700 dark:text-gray-400' 
                              : 'text-red-700 dark:text-red-400'
                      }`}>{bin.title}</span>
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Shared information panel - always visible */}
              <div className={`mt-6 p-6 rounded-lg border shadow-md ${
                activeTab === 'blue' 
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' 
                  : activeTab === 'green' 
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                    : activeTab === 'black' 
                      ? 'bg-gray-50 dark:bg-gray-800/40 border-gray-200 dark:border-gray-700' 
                      : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
              }`}>
                <div className="flex items-center mb-6">
                  <div className="mr-3">
                    {binTypes.find(bin => bin.id === activeTab)?.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {binTypes.find(bin => bin.id === activeTab)?.title}
                  </h3>
                </div>
                
                {binTypes.find(bin => bin.id === activeTab) && (
                  <>
                    <p className="mb-6 text-gray-800 dark:text-gray-200 text-lg">
                      {binTypes.find(bin => bin.id === activeTab)?.description}
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-5 rounded-lg mb-6 shadow-sm">
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3 text-lg">What goes in this bin:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                        {binTypes.find(bin => bin.id === activeTab)?.items.map((item, index) => (
                          <li key={index} className="pb-1">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-sm border-l-4 border-yellow-400 pl-4 py-3 bg-yellow-50 dark:bg-yellow-900/20 text-gray-700 dark:text-gray-300 mb-6 rounded-r-md">
                      <p className="font-medium">✨ Tip: {binTypes.find(bin => bin.id === activeTab)?.tip}</p>
                    </div>
                    
                    {binTypes.find(bin => bin.id === activeTab)?.link && (
                      <div className="text-center mt-6">
                        <Link
                          href={binTypes.find(bin => bin.id === activeTab)?.link?.url || ''}
                          className="inline-flex items-center px-6 py-3 rounded-md font-medium text-base transition-all duration-200 ease-in-out
                            bg-red-600 hover:bg-red-700
                            text-white shadow-md hover:shadow-lg active:shadow-inner"
                        >
                          {binTypes.find(bin => bin.id === activeTab)?.link?.text}
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
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
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
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
};

export default WasteGuideSearch; 