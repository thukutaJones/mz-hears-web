"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Sector,
} from "recharts";

const COLORS = ['#8B5CF6', '#22C55E', '#007BFF', '#facc15']; // purple-500, green-500, blue, yellow

// Active sector pops out
const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;

  return (
    <>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke="#fff"
        strokeWidth={2}
      />
    </>
  );
};

// Legend with tiny labels
const renderTinyLegend = ({ payload }: any) => (
  <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-700 mt-2">
    {payload.map((entry: any, index: number) => (
      <li key={`item-${index}`} className="flex items-center gap-2">
        <span
          className="inline-block w-3 h-3 rounded-full shadow-sm"
          style={{ backgroundColor: entry.color }}
        ></span>
        <span className="font-medium">{entry.value}</span>
      </li>
    ))}
  </ul>
);

export default function CompletedEmergenciesPieChart({
  data,
}: {
  data: any[];
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full md:w-[30%] bg-white rounded-2xl p-4 text-black transition-all duration-300 ease-in-out">
      <p className="text-lg font-semibold text-gray-800 mb-4">
        Completed Emergencies
      </p>
      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              dataKey="value"
              nameKey="name"
              onMouseEnter={onPieEnter}
              labelLine={false}
              label={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
              labelStyle={{ fontWeight: "bold", color: "#000" }}
              itemStyle={{ color: "#000" }}
              formatter={(value: number, name: string) => [`${value}`, name]}
            />
            <Legend verticalAlign="bottom" height={40} content={renderTinyLegend} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
