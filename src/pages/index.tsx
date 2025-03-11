import Layout from '../components/Layout';
import NextBinDay from '../components/NextBinDay';
import WasteSearch from '../components/WasteSearch';
import QuickLinks from '../components/QuickLinks';
import BinTypes from '../components/BinTypes';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Welcome to EcoWaste Management
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BinTypes />
            <QuickLinks />
          </div>
          <div className="lg:col-span-1">
            <NextBinDay />
          </div>
        </div>
      </div>
    </Layout>
  );
}
