import {
  LineChart,
  Line,
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

function MenWomenChart() {
  return (
    <div className="menWomenChart w-full h-full font-tinos">
      <h1 className="mb-5 text-3xl font-bold " style={{ color: "#000" }}>
        Men vs Women Demand
      </h1>
      <div className="menWomenChart w-full h-full mt-10">
        <ResponsiveContainer width="100%" height={360}>
          <LineChart
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
            <Line
              type="monotone"
              dataKey="Women"
              stroke="#B38383"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Men"
              stroke="#9BDAE3"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MenWomenChart;
