import { useState } from 'react';

interface LocationSearchProps {
  onSearch: (zipCode: string) => void;
}

export default function LocationSearch({ onSearch }: LocationSearchProps) {
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(zipCode);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
        Find a Location Near You
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
      >
        <div className="flex-grow">
          <label htmlFor="zipCode" className="sr-only">
            Enter your ZIP code
          </label>
          <input
            type="text"
            id="zipCode"
            placeholder="Enter your ZIP code"
            className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Search
        </button>
      </form>
    </div>
  );
} 