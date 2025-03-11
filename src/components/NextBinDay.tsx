import { useState } from 'react';

const NextBinDay = () => {
  const [postalCode, setPostalCode] = useState('');
  const [isScheduleSet, setIsScheduleSet] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In the future, this would make an API call to fetch the schedule
    setIsScheduleSet(true);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-8">
      <div className="p-4 sm:p-6">
        {!isScheduleSet ? (
          <>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white mb-4">
              Find Your Collection Schedule
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enter your postal code to see your collection schedule
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
                  placeholder="e.g., T2P 2M5"
                  className="block w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  maxLength={7}
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-md font-medium text-white transition-all duration-200 ease-in-out
                  bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700
                  shadow-md hover:shadow-lg active:shadow-inner
                  transform hover:-translate-y-0.5 active:translate-y-0
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Check Schedule
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white">
                Next Bin Day
              </h2>
              <button
                onClick={() => setIsScheduleSet(false)}
                className="inline-flex items-center px-3 py-1.5 text-sm rounded-md transition-all duration-200 ease-in-out
                  bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600
                  text-gray-600 dark:text-gray-300 
                  border border-gray-200 dark:border-gray-600
                  hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-600 dark:hover:to-gray-500
                  shadow-sm hover:shadow active:shadow-inner
                  transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Change Location
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Schedule for {postalCode}
            </p>
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
          </>
        )}
      </div>
    </div>
  );
};

export default NextBinDay; 