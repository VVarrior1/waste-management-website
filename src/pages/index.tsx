import Layout from '../components/Layout';
import NextBinDay from '../components/NextBinDay';
import QuickLinks from '../components/QuickLinks';
import ReminderForm from '../components/ReminderForm';
import WasteGuideSearch from '../components/WasteGuideSearch';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 transition-colors duration-200 dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              City of Calgary Waste & Recycling
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find the right bin for your waste and learn how to dispose of items responsibly.
            </p>
          </div>

          {/* Schedule Section */}
          <div className="mb-12">
            <NextBinDay />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-8">
              <WasteGuideSearch />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="hidden lg:block sticky top-8 space-y-6">
                <ReminderForm />
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="mt-12">
            <QuickLinks />
          </div>
        </div>
      </div>
    </Layout>
  );
}
