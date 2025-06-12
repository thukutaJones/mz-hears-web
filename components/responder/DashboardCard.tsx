import React from "react";

const DashboardCard = ({
  card,
  Icon,
  value,
}: {
  card: any;
  Icon: any;
  value: string | number | undefined;
}) => {
  return (
    <div
      className={`w-full shadow-sm rounded-xl p-4 bg-white flex flex-col items-center hover:scale-105 hover:shadow-${card?.iconColor} cursor-pointer`}
    >
      <div className={`mt-2 ${card?.iconBg} p-2 rounded-xl`}>
        <Icon className={`${card?.iconColor}`} size={50} />
      </div>
      <p className="mt-6 text-xs text-gray-600" style={{ fontWeight: 600 }}>
        {card?.title}
      </p>
      <p className="text-black text-3xl font-sans" style={{ fontWeight: 600 }}>
        {value}
      </p>
    </div>
  );
};

export default DashboardCard;
