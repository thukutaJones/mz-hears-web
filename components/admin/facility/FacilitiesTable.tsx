"use client";

import React from "react";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";

const FacilitiesTable = ({
  isLoading,
  facilities = [],
}: {
  isLoading: boolean;
  facilities: any[];
}) => {
  if (isLoading)
    return (
      <div className="h-[50vh] w-full flex items-center justify-center">
        <span className="text-gray-500 animate-pulse">
          Loading facilities...
        </span>
      </div>
    );

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full text-sm text-gray-700">
        <thead className="bg-transparent text-left uppercase text-xs text-gray-500 tracking-wider">
          <tr>
            <th className="px-6 py-4">Operator</th>
            <th className="px-6 py-4">Location</th>
            <th className="px-6 py-4">Details</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {facilities.map((facility, index) => (
            <tr
              key={facility?._id}
              className={`${
                index !== facilities.length - 1 && "border-b border-gray-200"
              } hover:bg-gray-50 transition duration-200`}
            >
              <td className="px-6 py-4 font-medium whitespace-nowrap">
                {facility?.operator?.fullName || "Unknown"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {facility?.location?.name || "-"}
              </td>
              <td className="px-6 py-4">
                <details className="text-sm">
                  <summary className="cursor-pointer text-blue-600">
                    View Facility Info
                  </summary>
                  <div className="mt-2 space-y-2 text-gray-700">
                    <div>
                      <strong className="flex items-center gap-2 mb-1 text-gray-600">
                        <FaMapMarkerAlt /> Location:
                      </strong>
                      <p>{facility?.location?.name || "Not available"}</p>
                    </div>
                    <div>
                      <strong className="flex items-center gap-2 mb-1 text-gray-600">
                        <MdMedicalServices /> Services:
                      </strong>
                      {facility?.services?.length > 0 ? (
                        <ul className="list-disc list-inside pl-4">
                          {facility.services.map((s: string, i: number) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-400">No services listed</p>
                      )}
                    </div>
                    <div>
                      <strong className="flex items-center gap-2 mb-1 text-gray-600">
                        <BsFillLightningChargeFill /> Emergencies:
                      </strong>
                      {facility?.typeOfEmergencies?.length > 0 ? (
                        <ul className="list-disc list-inside pl-4">
                          {facility.typeOfEmergencies.map((e: string, i: number) => (
                            <li key={i}>{e}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-400">No emergencies listed</p>
                      )}
                    </div>
                  </div>
                </details>
              </td>
              <td className="px-6 py-4 text-right space-x-3">
                <button className="text-blue-600 hover:text-blue-800">
                  <FiEye size={18} />
                </button>
                <button className="text-yellow-500 hover:text-yellow-600">
                  <FiEdit2 size={18} />
                </button>
                <button className="text-red-500 hover:text-red-600">
                  <FiTrash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
          {facilities.length === 0 && (
            <tr>
              <td colSpan={4} className="p-6 text-center text-gray-500">
                No facilities available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FacilitiesTable;
