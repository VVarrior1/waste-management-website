interface LocationHours {
  [key: string]: string;
}

export interface Location {
  id: number;
  name: string;
  address: string;
  distance: string;
  hours: LocationHours;
  acceptedItems: string[];
  phone: string;
}

interface LocationCardProps {
  location: Location;
  isSelected: boolean;
  onToggle: () => void;
}

export default function LocationCard({ location, isSelected, onToggle }: LocationCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden bg-white dark:bg-gray-800">
      <div
        className="p-4 bg-gray-50 dark:bg-gray-700/50 flex justify-between items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={onToggle}
      >
        <div>
          <h3 className="font-medium text-gray-800 dark:text-white">
            {location.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {location.address}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {location.distance} away
          </p>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-medium text-red-600 dark:text-red-400 mr-2">
            {isSelected ? "Hide Details" : "View Details"}
          </span>
          <svg
            className={`h-5 w-5 text-red-600 dark:text-red-400 transform ${
              isSelected ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {isSelected && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hours of Operation
              </h4>
              <dl className="space-y-1">
                {Object.entries(location.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <dt className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                      {day}:
                    </dt>
                    <dd className="text-sm text-gray-800 dark:text-gray-200">
                      {hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                Accepted Items
              </h4>
              <ul className="list-disc list-inside space-y-1">
                {location.acceptedItems.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-600 dark:text-gray-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {location.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 