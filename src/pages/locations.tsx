import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import LocationSearch from "../components/locations/LocationSearch";
import LocationList from "../components/locations/LocationList";
import LocationInfo from "../components/locations/LocationInfo";
import { locations } from "../data/locations";

export default function Locations() {
  const [showLocations, setShowLocations] = useState(false);
  const [searchZipCode, setSearchZipCode] = useState("");

  const handleSearch = (zipCode: string) => {
    setSearchZipCode(zipCode);
    setShowLocations(true);
  };

  return (
    <Layout>
      <Head>
        <title>Drop-off Locations | City of Calgary Waste & Recycling</title>
        <meta
          name="description"
          content="Find hazardous waste drop-off locations in Calgary"
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-white mb-6">
              Hazardous Waste Drop-off Locations
            </h1>

            <LocationInfo />
            <LocationSearch onSearch={handleSearch} />

            {showLocations && (
              <LocationList
                locations={locations}
                zipCode={searchZipCode}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
