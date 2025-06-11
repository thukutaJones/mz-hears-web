import React from "react";
import TopBar from "./TopBar";
import DashboardCard from "./DashboardCard";
import { dashboardCardData } from "@/contants/dashboardCardData";
import Emergencies from "./Emergencies";
import { emergencyTableData } from "@/contants/testData";

const MainContent = ({ data }: { data: any }) => {
  return (
    <div className="w-[70%] h-screen overflow-auto scroll-container px-8 py-4">
      <TopBar name={data?.operator?.fullName?.split(" ")[0]} />
      <div className="w-full mt-4">
        <p className="text-sm text-black" style={{ fontWeight: 600 }}>
          Stats
        </p>
        <div className="w-full grid grid-cols-4 gap-2">
          {dashboardCardData.map((item: any, index: number) => (
            <DashboardCard
              key={index?.toString()}
              card={item}
              Icon={item?.icon}
              value={data[item["variable"]]}
            />
          ))}
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm text-black" style={{ fontWeight: 600 }}>
            Recent Emergencies
          </p>
          <button className="bg-blue-100 px-4 py-1 rounded hover:scale-110 cursor-pointer">
            <p className="text-primary text-xs" style={{ fontWeight: 500 }}>
              View more
            </p>
          </button>
        </div>
        <Emergencies emergencies={data?.recentEmergencies} />
      </div>
    </div>
  );
};

export default MainContent;
