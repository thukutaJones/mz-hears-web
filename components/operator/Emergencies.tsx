import React, { useState } from "react";
import MapView from "./MapView";

const Emergencies = ({ emergencies = [] }: { emergencies: any }) => {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  return (
    <div className="space-y-4 mt-4">
      <table className="w-full text-left text-xs text-gray-700">
        <thead>
          <tr>
            <th className="p-3">User</th>
            <th className="p-3">Location</th>
            <th className="p-3">Emergency Type</th>
            <th className="p-3">Service Type</th>
            <th className="p-3">Date</th>
            <th className="p-3">Time</th>
          </tr>
        </thead>
        <tbody className="space-y-2">
          {emergencies.map((item: any, index: number) => (
            <tr
              key={index}
              className="bg-white shadow rounded-xl cursor-pointer border-b-10 border-slate-50"
              onClick={() => setSelectedLocation(item.location)}
            >
              <td className="p-3">{item.user}</td>
              <td
                className="p-3 text-primary px-2 py-1 hover:underline"
                style={{ fontWeight: 600 }}
              >
                View Map
              </td>
              <td className="p-3">{item.emergencyType}</td>
              <td className="p-3">{item.serviceType}</td>
              <td className="p-3">{new Date(item.date)?.toDateString()}</td>
              <td className="p-3">{item.time}</td>
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
