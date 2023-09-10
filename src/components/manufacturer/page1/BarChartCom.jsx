import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "MID001",
    Aug: 4000,
    Sep: 2400,
    amt: 2400,
  },
  {
    name: "MID008",
    Aug: 3000,
    Sep: 1398,
    amt: 2210,
  },
  {
    name: "MID009",
    Aug: 2000,
    Sep: 8,
    amt: 2290,
  },
  {
    name: "MID023",
    Aug: 2780,
    Sep: 3908,
    amt: 2000,
  },
  {
    name: "MID009",
    Aug: 18,
    Sep: 4800,
    amt: 2181,
  },
  {
    name: "MID037",
    Aug: 2390,
    Sep: 3800,
    amt: 2500,
  },
  {
    name: "MID099",
    Aug: 3490,
    Sep: 4300,
    amt: 2100,
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(" ")[1]}
      </text>
    </g>
  );
};

const BarChartCom = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Aug" fill="#cbd5e1" minPointSize={5}>
          <LabelList dataKey="name" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="Sep" fill="#64748b" minPointSize={10} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartCom;
