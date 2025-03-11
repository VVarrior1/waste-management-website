import { useState } from "react";

interface SearchResult {
  name: string;
  category: "hazardous" | "recyclable" | "compostable";
  disposal: string;
  link?: string;
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock database of waste items
    const wasteItems: SearchResult[] = [
      { 
        name: "Motor oil", 
        category: "hazardous", 
        disposal: "Cannot go in regular bins. Must be taken to a hazardous waste drop-off location.",
        link: "/locations"
      },
      { 
        name: "Paint", 
        category: "hazardous", 
        disposal: "Cannot go in regular bins. Must be taken to a hazardous waste drop-off location.",
        link: "/locations"
      },
      { 
        name: "Batteries", 
        category: "hazardous", 
        disposal: "Cannot go in regular bins. Must be taken to a hazardous waste drop-off location.",
        link: "/locations"
      },
      { 
        name: "Paper", 
        category: "recyclable", 
        disposal: "Place in green recycling bin."
      },
      { 
        name: "Food waste", 
        category: "compostable", 
        disposal: "Place in blue compost bin."
      }
    ];
    
    // Filter items based on search query
    const results = wasteItems.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(results);
    setShowSearchResults(true);
  };

  return (
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

      {showSearchResults && (
        <div className="absolute z-10 mt-2 w-96 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
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
                        : "bg-blue-50 dark:bg-blue-900/20"
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
                No results found for &quot;{searchQuery}&quot;
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 