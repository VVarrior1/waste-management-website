import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchResult {
  name: string;
  category: "hazardous" | "recyclable" | "compostable" | "garbage";
  disposal: string;
  symbol: string;
  bin: string;
  link?: string;
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [notFound, setNotFound] = useState(false);

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setNotFound(false);
    
    if (!searchQuery.trim()) {
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
    setSearchQuery(e.target.value);
    if (e.target.value === '') {
      setShowSearchResults(false);
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

  return (
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
          />
          <button 
            type="submit"
            className="absolute inset-y-0 right-0 px-4 flex items-center bg-green-500 hover:bg-green-600 text-white rounded-r-md transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {showSearchResults && (
        <div className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
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
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-600">
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
                            Find drop-off locations →
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
  );
};

export default SearchBar; 