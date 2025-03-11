import { useState } from 'react';

const CollectionSchedule = () => {
  const [scheduleView, setScheduleView] = useState<"original" | "a-z">("original");

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
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-8">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white mb-2 sm:mb-0">
            Collection Schedule
          </h2>
          <div className="inline-flex p-1 rounded-lg bg-gray-100 dark:bg-gray-700/50 shadow-inner">
            <button
              className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ease-in-out
                ${
                  scheduleView === "original"
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md transform -translate-y-0.5"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              onClick={() => setScheduleView("original")}
            >
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Table
            </button>
            <button
              className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ease-in-out
                ${
                  scheduleView === "a-z"
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md transform -translate-y-0.5"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              onClick={() => setScheduleView("a-z")}
            >
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              List
            </button>
          </div>
        </div>
        {renderSchedule()}
      </div>
    </div>
  );
};

export default CollectionSchedule; 