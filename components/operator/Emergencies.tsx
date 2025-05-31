import React, { useState } from "react";
import { FiMapPin, FiUser } from "react-icons/fi";
import MapView from "./MapView";

const Emergencies = ({ emergencies = [] }: { emergencies: any[] }) => {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  return (
    <div className="mt-6 overflow-x-auto rounded-xl">
      <table className="w-full min-w-[700px] border-collapse text-sm text-gray-700">
        <thead>
          <tr className="bg-gray-100 text-gray-900 font-semibold">
            {["User", "Location", "Emergency Type", "Service Type", "Date", "Time"].map((header) => (
              <th key={header} className="py-3 px-5 text-left select-none">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {emergencies.length === 0 && (
            <tr>
              <td colSpan={6} className="py-12 text-center text-gray-400 italic">
                No emergencies found.
              </td>
            </tr>
          )}
          {emergencies.map((item, index) => (
            <tr
              key={index}
              onClick={() => setSelectedLocation(item.location)}
              className="bg-white border-b border-gray-200 last:border-b-0 hover:bg-gray-50 cursor-pointer transition"
            >
              <td className="py-4 px-5 font-medium flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                  <FiUser size={18} />
                </div>
                <span>{item.user}</span>
              </td>
              <td className="py-4 px-5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLocation(item.location);
                  }}
                  className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-semibold"
                  aria-label={`View map location for ${item.user}`}
                >
                  <FiMapPin size={16} />
                  <span>View Map</span>
                </button>
              </td>
              <td className="py-4 px-5">{item.emergencyType}</td>
              <td className="py-4 px-5">{item.serviceType}</td>
              <td className="py-4 px-5">
                {new Date(item.date).toLocaleDateString(undefined, {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </td>
              <td className="py-4 px-5">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedLocation && (
        <MapView
          selectedLocation={selectedLocation}
          handleClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
};

export default Emergencies;
