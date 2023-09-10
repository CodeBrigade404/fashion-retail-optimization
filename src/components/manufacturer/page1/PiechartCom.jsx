import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "MID007", value: 400 },
  { name: "MID089", value: 300 },
  { name: "MID087", value: 300 },
  { name: "MID072", value: 200 },
  { name: "MID089", value: 278 },
  { name: "MID078", value: 189 },
];

const PoeChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#9ca3af"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PoeChartComponent;
