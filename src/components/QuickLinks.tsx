import Link from 'next/link';

const QuickLinks = () => {
  const links = [
    {
      title: 'Hazardous Waste',
      description: 'Find drop-off locations for hazardous materials',
      icon: '⚠️',
      href: '/locations#hazardous'
    },
    {
      title: 'Recycling Guide',
      description: 'Learn what can and cannot be recycled',
      icon: '♻️',
      href: '/resources#recycling'
    },
    {
      title: 'Report Issue',
      description: 'Report missed collections or other issues',
      icon: '📝',
      href: '/contact'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group block p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:shadow-md"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                  {link.icon}
                </span>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {link.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks; 