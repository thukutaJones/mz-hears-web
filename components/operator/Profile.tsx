import { primary } from "@/contants/colors";
import React from "react";
import { FaHospital } from "react-icons/fa6";
import { MdOutlineMedicalServices } from "react-icons/md";
import RoundedProgressBar from "./RoundedProgressBar";

const Profile = ({ data }: { data: any }) => {
  return (
    <div className="bg-white w-[30%] h-screen p-4 flex flex-col items-center overflow-auto scroll-container">
      <div className="w-full flex  flex-row justify-between items-center">
        <p className="text-black text-sm" style={{ fontWeight: 600 }}>
          My Facility
        </p>
      </div>
      <div className="border-2 mt-4 border-[#facc15] p-4 rounded-full">
        <FaHospital size={60} color={primary} />
      </div>
      <p className="mt-2 text-black text-sm" style={{ fontWeight: 600 }}>
        {data?.facility?.location?.name}
      </p>
      <div className="w-full mt-10">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-sm text-black" style={{ fontWeight: 600 }}>
            Services
          </p>
          <button className="bg-gray-100 px-4 py-1 rounded hover:scale-110 hover:bg-gray-200">
            <p className="text-xs text-gray-400">View all</p>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {data?.facility?.services?.map((service: any, index: number) => (
            <div className="w-full flex flex-row gap-4" key={index?.toString()}>
              <div className="flex items-center justify-center p-4 bg-gray-100 rounded-full">
                <MdOutlineMedicalServices color={primary} />
              </div>
              <p className="text-sm text-gray-600 font-bold">
                {service}
                <br />
                <span className="text-xs text-gray-400 font-medium">
                  available
                </span>
              </p>
            </div>
          ))}
        </div>
        <div className="bg-primary w-full rounded-xl flex flex-row mt-10 px-4 py-8">
          <div className="w-[70%]">
            <p className="text-white font-bold text-sm">
              Completed emergencies
            </p>
            <p className="text-white text-xs">This month</p>
            <p className="text-white mt-8">
              {data?.completedEmergencies}/{data?.emergencies}
            </p>
          </div>
          <div className="w-[30%] border-2s">
            <RoundedProgressBar
              value={
                data?.emergencies
                  ? (data?.completedEmergencies / data?.emergencies) * 100
                  : 0
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
