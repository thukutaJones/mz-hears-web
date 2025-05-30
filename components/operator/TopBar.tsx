import Image from "next/image";
import React from "react";

const TopBar = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-row justify-end gap-4">
        <button className="border border-primary rounded-lg hover:scale-110 hover:bg-blue-100">
          <p
            className="px-8 py-2 text-xs text-primary"
            style={{ fontWeight: 500 }}
          >
            My Health Facility
          </p>
        </button>
        <button className="bg-primary rounded-lg hover:scale-110">
          <p
            className="px-8 py-2 text-xs text-white"
            style={{ fontWeight: 500 }}
          >
            My Profile
          </p>
        </button>
      </div>
      <div className="w-full h-[20vh] bg-primary rounded-2xl mt-20 flex flex-row">
        <div className="w-[30%] h-full relative">
          <Image
            src="/doctor.png"
            width={300}
            height={300}
            alt="doctor_img"
            className="absolute bottom-0 h-[170%] w-full"
          />
        </div>
        <div className="w-[70%] h-full px-4 py-8 font-sans">
          <p className="text-white text-xl" style={{ fontWeight: 500 }}>
            Welcome, <span style={{ fontWeight: 800 }}>Dr. Midu</span>
          </p>
          <p className="text-xs text-white">
            Have a nice day managing your health facility!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
