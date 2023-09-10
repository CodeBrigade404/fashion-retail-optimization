import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "10",
    Men: 4000,
    Women: 2400,
    amt: 2400,
  },
  {
    name: "20",
    Men: 3000,
    Women: 1398,
    amt: 2210,
  },
  {
    name: "30",
    Men: 2000,
    Women: 9800,
    amt: 2290,
  },
  {
    name: "40",
    Men: 2780,
    Women: 3908,
    amt: 2000,
  },
  {
    name: "50",
    Men: 1890,
    Women: 4800,
    amt: 2181,
  },
  {
    name: "60",
    Men: 2390,
    Women: 3800,
    amt: 2500,
  },
  {
    name: "70",
    Men: 3490,
    Women: 4300,
    amt: 2100,
  },
];

function AgeBarChart() {
  return (
    <div className="ageBarChart font-tinos">
      {/* <h1 className="mb-5 text-3xl font-bold " style={{ color: "#000" }}>
        Age Demand
      </h1> */}
      <h2 className="font-tinos text-center mb-6 text-left text-lg">
        Age Demand
      </h2>
      <div className="ageChart">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Women" fill="#B38383" />
            <Bar dataKey="Men" fill="#9BDAE3" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AgeBarChart;
