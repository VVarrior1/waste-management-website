import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">EcoWaste Management</h3>
            <p className="text-gray-300 mb-4">
              Helping our community reduce waste and protect the environment
              for future generations.
            </p>
            <p className="text-gray-300">© 2025 EcoWaste Management</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-300 hover:text-white">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">City Hall and Municipal Complex</p>
            <p className="text-gray-300 mb-2">800 Macleod Trail S.E., T2P 2M5</p>
            <p className="text-gray-300 mb-2">info@calgary.ca</p>
            <p className="text-gray-300">403-268-CITY (2489)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 