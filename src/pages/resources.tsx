import Layout from '../components/Layout';
import Link from 'next/link';

const Resources = () => {
  const resources = [
    {
      title: 'Blue Cart Recycling',
      description: 'Learn what goes in your blue cart',
      icon: '♻️',
      content: [
        'Clean paper and cardboard',
        'Food cans and glass jars',
        'Plastic containers and bottles',
        'Empty aerosol cans',
        'Aluminum foil and containers'
      ]
    },
    {
      title: 'Green Cart Composting',
      description: 'What goes in your green cart',
      icon: '🌱',
      content: [
        'All food and food-soiled paper',
        'Yard waste and plants',
        'Pet waste and cat litter',
        'Tissues and paper towels',
        'Approved compostable bags'
      ]
    },
    {
      title: 'Black Cart Garbage',
      description: 'What belongs in your black cart',
      icon: '🗑️',
      content: [
        'Non-recyclable packaging',
        'Broken household items',
        'Non-recyclable plastics',
        'Disposable diapers',
        'Foam packaging and containers'
      ]
    },
    {
      title: 'Household Hazardous Waste',
      description: 'Safe disposal at Throw \'n\' Go facilities',
      icon: '⚠️',
      content: [
        'Paint and chemicals',
        'Automotive fluids',
        'Batteries and electronics',
        'Fluorescent lights',
        'Propane tanks'
      ]
    }
  ];

  const downloadableGuides = [
    {
      title: 'What Goes Where Guide',
      description: 'Complete guide to sorting waste in Calgary',
      icon: '📗',
      size: '2.5 MB'
    },
    {
      title: 'Collection Schedule',
      description: 'Annual collection calendar for all carts',
      icon: '📅',
      size: '1.2 MB'
    },
    {
      title: 'Throw \'n\' Go Guide',
      description: 'Locations and accepted materials at City facilities',
      icon: '📍',
      size: '1.8 MB'
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Waste & Recycling Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about waste management in Calgary
          </p>
        </div>

        {/* Main Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{resource.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {resource.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {resource.content.map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="h-5 w-5 text-red-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Downloadable Guides Section */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Downloadable Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloadableGuides.map((guide) => (
              <div
                key={guide.title}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{guide.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      PDF - {guide.size}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {guide.description}
                </p>
                <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-200 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Guide
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources; 