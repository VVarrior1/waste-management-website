import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSun, FiMoon, FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { Theme, getInitialTheme, toggleTheme } from "../utils/theme";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
  }, []);

  const handleThemeToggle = () => {
    setTheme((currentTheme) => toggleTheme(currentTheme));
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
    setIsLanguageOpen(false);

    if (language === "French") {
      // Display a "Work in Progress" message
      alert(
        "French language support is under development. We're working on it!"
      );
    }

    // Here you would implement actual language change logic
    console.log(`Language changed to: ${language}`);
  };

  return (
    <header className="bg-[#1A2B3C] text-white shadow-lg">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/calgary-logo.svg"
            alt="City of Calgary Logo"
            width={200}
            height={80}
            className="h-16 w-auto"
            priority
          />
          <span className="ml-4 text-2xl font-semibold hidden md:inline">
            Waste & Recycling Services
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-red-500 transition-colors">
            Home
          </Link>
          <Link
            href="/locations"
            className="hover:text-red-500 transition-colors"
          >
            Landfill Locations
          </Link>
          <Link href="/faq" className="hover:text-red-500 transition-colors">
            FAQ
          </Link>
          <Link
            href="/contact"
            className="hover:text-red-500 transition-colors"
          >
            Contact Us
          </Link>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center space-x-1 hover:text-red-500 transition-colors"
              aria-label="Change language"
            >
              <FiGlobe size={18} />
              <span>Language</span>
            </button>

            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md shadow-lg overflow-hidden z-10 border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => changeLanguage("English")}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    currentLanguage === "English"
                      ? "bg-gray-100 dark:bg-gray-700"
                      : ""
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("French")}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    currentLanguage === "French"
                      ? "bg-gray-100 dark:bg-gray-700"
                      : ""
                  }`}
                >
                  French
                </button>
              </div>
            )}
          </div>

          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {/* Language Dropdown for Mobile */}
          <div className="relative mr-2">
            <button
              onClick={toggleLanguageDropdown}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Change language"
            >
              <FiGlobe size={20} />
            </button>

            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md shadow-lg overflow-hidden z-10 border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => changeLanguage("English")}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    currentLanguage === "English"
                      ? "bg-gray-100 dark:bg-gray-700"
                      : ""
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("French")}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    currentLanguage === "French"
                      ? "bg-gray-100 dark:bg-gray-700"
                      : ""
                  }`}
                >
                  French
                </button>
              </div>
            )}
          </div>

          <button
            onClick={handleThemeToggle}
            className="p-2 mr-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-24 left-0 right-0 bg-[#1A2B3C] border-t border-gray-700 shadow-lg">
            <nav className="flex flex-col p-4">
              <Link
                href="/"
                className="py-2 hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/locations"
                className="py-2 hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Landfill Locations
              </Link>
              <Link
                href="/faq"
                className="py-2 hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="py-2 hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
