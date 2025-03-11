import { useState } from 'react';
import LocationCard, { Location } from './LocationCard';

interface LocationListProps {
  locations: Location[];
  zipCode?: string;
}

export default function LocationList({ locations, zipCode }: LocationListProps) {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
        Locations Near {zipCode || "You"}
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            isSelected={selectedLocation === location.id}
            onToggle={() =>
              setSelectedLocation(
                selectedLocation === location.id ? null : location.id
              )
            }
          />
        ))}
      </div>
    </div>
  );
} 