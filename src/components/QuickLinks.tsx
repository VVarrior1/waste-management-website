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
      title: 'Collection Schedule',
      description: 'View your neighborhood pickup dates',
      icon: '🗓️',
      href: '/schedule'
    },
    {
      title: 'Report Issue',
      description: 'Report missed collections or other issues',
      icon: '📝',
      href: '/contact'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white mb-4">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="block p-4 bg-gray-50 dark:bg-gray-700/50 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">{link.icon}</span>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-white">
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