import { adminDashboardCardData } from "@/contants/dashboardCardData";
import React from "react";
import DashboardCard from "./DashboardCard";

const Stats = ({ stats }: { stats: any }) => {
  return (
    <div className="mt-4 w-full">
      <div className="w-full grid grid-cols-4 gap-2">
        {adminDashboardCardData.map((item: any, index: number) => (
          <DashboardCard
            key={index?.toString()}
            card={item}
            Icon={item?.icon}
            value={stats[item['variable']]}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;
