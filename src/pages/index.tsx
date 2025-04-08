import Layout from '../components/Layout';
import NextBinDay from '../components/NextBinDay';
import ReminderForm from '../components/ReminderForm';
import WasteGuideSearch from '../components/WasteGuideSearch';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 transition-colors duration-200 dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-1 sm:px-2 py-6">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              City of Calgary Waste & Recycling
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find the right bin for your waste and learn how to dispose of items responsibly.
            </p>
          </div>

          {/* Waste Guide Section (Full Width) */}
          <div className="mb-8">
            <WasteGuideSearch defaultOpen={true} />
          </div>

          {/* Collection Schedule and Reminders Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Collection Schedule */}
            <div className="lg:col-span-8">
              <NextBinDay />
            </div>

            {/* Reminders */}
            <div className="lg:col-span-4">
              <ReminderForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
