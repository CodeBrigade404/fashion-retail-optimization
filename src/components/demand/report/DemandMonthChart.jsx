import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    sales: 4000,
    sale1: 4100,
  },
  {
    name: "Feb",
    sales: 3000,
    sale1: 3400,
  },
  {
    name: "Mar",
    sales: 200,
    sale1: 2000,
  },
  {
    name: "Apr",
    sales: 1200,
    sale1: 2100,
  },
  {
    name: "May",
    sales: 1890,
    sale1: 2300,
  },
  {
    name: "Jun",
    sales: 2390,
    sale1: 2500,
  },
  {
    name: "Jul",
    sales: 3490,
    sale1: 2789,
  },
  {
    name: "Aug",
    sales: 2490,
    sale1: 2570,
  },
  {
    name: "Sep",
    sales: 3090,
    sale1: 2360,
  },
  {
    name: "oct",
    sales: 0,
    sale1: 4687,
  },
  {
    name: "Nov",
    sale1: 4300,
    sales: 0,
  },
  {
    name: "Dec",
    sales: 0,
    sale1: 3132,
  },
];

function getColor(sales) {
  var color = "";
  if (sales >= 3000) {
    color = "#EC5959"; // Use your custom color here
  }
  if (sales > 1000 && sales < 3000) {
    color = "#1BDF83"; // Use your custom color here
  }
  if (sales < 1000) {
    color = "#FFEA2B"; // Use your custom color here
  }
  return color;
}
function DemandMonthChart() {
  return (
    <div className="h-[100%] mt-5 flex flex-col items-center">
      <ResponsiveContainer width="100%" height="75%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            bottom: 20,
            left: 20,
          }}
        >
          <Tooltip
            contentStyle={{ background: "white", borderRadius: "5px" }}
            labelStyle={{ display: "none" }}
            cursor={{ fill: "white" }}
          ></Tooltip>
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, "dataMax + 1000"]} />
          <CartesianGrid strokeDasharray="3 3" />

          {
            <Bar dataKey="sales">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#9BDAE3" />
              ))}
            </Bar>
          }
          {
            <Bar dataKey="sale1">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#B38383" />
              ))}
            </Bar>
          }
        </BarChart>
      </ResponsiveContainer>
      <div
        className="flex  gap-6"
        style={{ fontFamily: "inter", fontSize: "14px", fontWeight: "600" }}
      >
        <div
          className="high flex flex-col  items-center"
          style={{ color: "#6e2323" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 -700 rounded-full"
              style={{ backgroundColor: "#B38383" }}
            />
            <div>High</div>
          </div>
          <div> {">3000"}</div>
        </div>
        <div
          className="high flex flex-col  items-center"
          style={{ color: "#84B6BD" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 -700 rounded-full"
              style={{ backgroundColor: "#9BDAE3" }}
            />
            <div>Medium</div>
          </div>
          <div> {">1000"}</div>
        </div>
      </div>
    </div>
  );
}

export default DemandMonthChart;
