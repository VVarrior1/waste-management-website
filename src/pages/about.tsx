import Layout from '../components/Layout';
import Link from 'next/link';

const About = () => {
  const stats = [
    { label: 'Population Served', value: '1.3M+' },
    { label: 'Households Served', value: '500K+' },
    { label: 'Waste Diverted', value: '65%' },
    { label: 'Team Members', value: '400+' }
  ];

  const values = [
    {
      title: 'Environmental Leadership',
      description: 'Committed to protecting Calgary\'s environment through sustainable waste management practices.',
      icon: '🌍'
    },
    {
      title: 'Community Service',
      description: 'Working together with Calgarians to create a cleaner, more sustainable city.',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'Implementing modern solutions to improve waste collection and recycling services.',
      icon: '💡'
    },
    {
      title: 'Public Education',
      description: 'Empowering Calgarians with knowledge about waste reduction and proper disposal.',
      icon: '📚'
    }
  ];

  const timeline = [
    {
      year: '1908',
      title: 'Department Established',
      description: 'City of Calgary Waste Management services begin operations.'
    },
    {
      year: '1991',
      title: 'Blue Cart Program',
      description: 'Launched residential recycling program to reduce landfill waste.'
    },
    {
      year: '2017',
      title: 'Green Cart Program',
      description: 'Introduced city-wide composting program for food and yard waste.'
    },
    {
      year: '2019',
      title: 'Digital Services',
      description: 'Implemented online services and real-time collection updates.'
    },
    {
      year: '2021',
      title: 'Waste Strategy',
      description: 'Launched comprehensive waste reduction and diversion strategy.'
    },
    {
      year: '2023',
      title: 'Sustainability Goals',
      description: 'Working towards 70% waste diversion by 2025.'
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            City of Calgary Waste & Recycling Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Serving Calgarians since 1908. We're committed to creating a cleaner, more sustainable future for our city through efficient waste management and environmental stewardship.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <div className="text-3xl font-bold text-red-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div
                  key={event.year}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="w-24 flex-shrink-0 text-center">
                    <div className="text-xl font-bold text-red-600">
                      {event.year}
                    </div>
                  </div>
                  <div className="flex-grow bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Get Involved in Calgary's Waste Reduction
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Together, we can make Calgary a leader in sustainable waste management. Learn how you can contribute to our city's environmental goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-200"
          >
            Contact Us
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default About; 