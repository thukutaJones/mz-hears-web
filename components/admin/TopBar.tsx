import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="w-full bg-white h-[70px] px-8 flex flex-row justify-between items-center">
      <div className="flex flex-row h-[60%] bg-gray-100 w-[30%] items-center px-4 rounded-full gap-2">
        <FaSearch className="text-gray-400" size={15} />
        <input
          className="w-full h-full bg-transparent focus:outline-0 text-black italic text-sm"
          placeholder="Search here..."
        />
      </div>
      <div className="flex flex-row gap-2">
        <div className="p-1 rounded-full border-2 border-secondary">
          <IoMdPerson className="text-gray-400" size={30} />
        </div>
        <p className="text-sm text-black font-bold">
          John Doe <br />
          <span className="text-xs text-gray-500 font-medium">
            johndoe@test.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default TopBar;
