import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1A2B3C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About City of Calgary</h3>
            <p className="text-gray-300 mb-4">
              Waste & Recycling Services provides collection, disposal and processing of waste for residents.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-red-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-red-300 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-red-300 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-red-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>Waste & Recycling Services</p>
              <p>P.O. Box 2100, Station M</p>
              <p>Calgary, AB T2P 2M5</p>
              <p>Phone: 311 (within Calgary)</p>
              <p>Email: waste.info@calgary.ca</p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>For hazardous waste emergencies:</p>
              <p className="text-red-300">Call 911</p>
              <p className="mt-4">Business Hours:</p>
              <p>Monday - Friday</p>
              <p>8:00 AM - 4:30 PM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} The City of Calgary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 