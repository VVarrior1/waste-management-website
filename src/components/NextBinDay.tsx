const NextBinDay = () => {
  return (
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
    </div>
  );
};

export default NextBinDay; 