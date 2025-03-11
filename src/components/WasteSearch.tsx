import SearchBar from './SearchBar';

const WasteSearch = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-8">
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white mb-4">
          Find Your Waste Item
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Search for any waste item to learn how to properly dispose of it
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default WasteSearch; 