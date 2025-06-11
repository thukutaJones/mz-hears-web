import Image from "next/image";
import React from "react";

const TopBar = ({ name }: { name: string }) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-row justify-end gap-4">
        <button className="bg-primary rounded-lg hover:scale-110">
          <p
            className="px-8 py-2 text-xs text-white"
            style={{ fontWeight: 500 }}
          >
            Emergencies
          </p>
        </button>
      </div>
      <div className="w-full h-[20vh] relative bg-primary rounded-2xl mt-20 flex flex-row">
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
            Welcome, <span style={{ fontWeight: 800 }}>Dr. {name}</span>
          </p>
          <p className="text-xs text-white">
            Have a nice day responding to emergencies!
          </p>
        </div>
        <div className="absolute h-full w-full top-0 left-0 bg-[url('/noise.png')] opacity-50 pointer-events-none [mask-image:linear-gradient(to_left,black,transparent)] [-webkit-mask-image:linear-gradient(to_left,black,transparent)]" />
      </div>
    </div>
  );
};

export default TopBar;
