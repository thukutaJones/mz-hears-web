import { primary } from "@/contants/colors";
import React from "react";
import { IoPerson } from "react-icons/io5";
import RoundedProgressBar from "./RoundedProgressBar";

const Profile = () => {
  return (
    <div className="bg-white w-[30%] h-screen p-4 flex flex-col items-center overflow-auto scroll-container">
      <div className="w-full flex  flex-row justify-between items-center">
        <p className="text-black text-sm" style={{ fontWeight: 600 }}>
          My Profile
        </p>
      </div>
      <div className="border-2 mt-4 border-[#facc15] p-4 rounded-full">
        <IoPerson size={60} color={primary} />
      </div>
      <p className="mt-2 text-black text-sm" style={{ fontWeight: 600 }}>
        Dr. Midu
      </p>
      <div className="w-full mt-10">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-sm text-black" style={{ fontWeight: 600 }}>
            Details
          </p>
          <button className="bg-gray-100 px-4 py-1 rounded hover:scale-110 hover:bg-gray-200">
            <p className="text-xs text-gray-400">See all</p>
          </button>
        </div>
        <div className="w-full mt-2 shadow p-4 text-sm text-black flex flex-col gap-2 border border-gray-100 rounded-xl">
          <p className="font-bold">Email: <span className="font-medium">midu@test.com</span></p>
          <hr className="text-gray-400" />
          <p className="font-bold">Phone number: <span className="font-medium">0888765431</span></p>
          <hr className="text-gray-400" />
          <p className="font-bold">Facility: <span className="font-medium">MASM</span></p>
          <hr className="text-gray-400" />
          <p className="font-bold">Role: <span className="font-medium">Ambulance driver</span></p>
        </div>
        <div className="bg-primary w-full rounded-xl flex flex-row mt-10 px-4 py-8">
          <div className="w-[70%]">
            <p className="text-white font-bold text-sm">
              Completed emergencies
            </p>
            <p className="text-white text-xs">This month</p>
            <p className="text-white mt-8">7/10</p>
          </div>
          <div className="w-[30%] border-2s">
            <RoundedProgressBar value={75} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
