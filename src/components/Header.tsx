import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
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
                <span className="inline-flex items-center px-1 pt-1 border-b-2 border-green-500 text-sm font-medium text-gray-600 dark:text-white">
                  Home
                </span>
              </Link>
              <Link href="/locations">
                <span className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 cursor-pointer">
                  Locations
                </span>
              </Link>
              <Link href="/resources">
                <span className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300">
                  Resources
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300">
                  Contact
                </span>
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <SearchBar />
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
      </div>
    </header>
  );
};

export default Header; 