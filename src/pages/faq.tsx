import { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');

  const categories = [
    { id: 'general', name: 'General Questions' },
    { id: 'recycling', name: 'Recycling' },
    { id: 'collection', name: 'Collection Services' },
    { id: 'hazardous', name: 'Hazardous Waste' }
  ];

  const faqs = {
    general: [
      {
        question: 'What are your operating hours?',
        answer: 'The City of Calgary Waste & Recycling Services operates Monday through Friday, 8:00 AM to 4:30 PM. Collection services run from 7:00 AM to 7:30 PM according to your area\'s schedule.'
      },
      {
        question: 'How do I report a missed collection?',
        answer: 'You can report a missed collection through the City of Calgary website, mobile app, or by calling 311 within 24 hours of your scheduled collection day.'
      },
      {
        question: 'How do I request a new cart?',
        answer: 'New or replacement carts can be requested by calling 311 or through the City of Calgary\'s online service portal. For damaged carts, repairs are typically completed within 10 business days.'
      }
    ],
    recycling: [
      {
        question: 'What items can be recycled in the blue cart?',
        answer: 'The blue cart accepts paper, cardboard, plastic containers (types 1-7), glass bottles and jars, aluminum cans, and clean food containers. Visit calgary.ca/recycling for a complete list of acceptable items.'
      },
      {
        question: 'Do I need to sort my recyclables?',
        answer: 'No, Calgary uses a single-stream recycling system. All recyclable items can go in the blue cart together. However, please ensure all items are clean, dry, and loose (not bagged).'
      },
      {
        question: 'What should I do with plastic bags?',
        answer: 'Plastic bags are not accepted in blue carts. Please take clean plastic bags to participating grocery stores or retailers for recycling. Visit calgary.ca/plasticbags for drop-off locations.'
      }
    ],
    collection: [
      {
        question: 'What time should I put my carts out?',
        answer: 'Place your carts out by 7:00 AM on your collection day. Carts can be put out the evening before collection after 7:00 PM and must be removed from the street by 7:00 PM on collection day.'
      },
      {
        question: 'What if my collection day falls on a holiday?',
        answer: 'The City of Calgary provides collection services on most holidays. Check calgary.ca/collection or the Calgary Garbage Day app for schedule changes during statutory holidays.'
      },
      {
        question: 'How should I position my carts?',
        answer: 'Place carts on flat ground with wheels against the curb. Leave at least 1 metre (3 feet) of space between carts and ensure they\'re clear of vehicles, poles, and other obstacles.'
      }
    ],
    hazardous: [
      {
        question: 'What is considered household hazardous waste?',
        answer: 'Household hazardous waste includes batteries, paint, motor oil, chemicals, electronics, light bulbs, and aerosol cans. These items require special handling and must be taken to a City of Calgary Throw \'n\' Go facility.'
      },
      {
        question: 'Where can I dispose of hazardous waste?',
        answer: 'Hazardous waste must be taken to one of Calgary\'s three Throw \'n\' Go facilities. Visit calgary.ca/waste for locations, hours, and a complete list of accepted materials.'
      },
      {
        question: 'How should I store hazardous materials?',
        answer: 'Store hazardous materials in their original containers in a cool, dry place away from children and pets. Never mix different materials together. For disposal guidelines, visit calgary.ca/hhw.'
      }
    ]
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about City of Calgary waste and recycling services
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white shadow-md transform -translate-y-0.5'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Can't find what you're looking for?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Contact Us
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ; 