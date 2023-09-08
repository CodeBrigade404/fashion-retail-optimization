import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
const data = [
  { name: "Women", value: 4000, color: "#16BFD6" },
  { name: "Men", value: 2000, color: "#1BDF83" },
  { name: "Shoe", value: 1900, color: "#FFEA2B" },
  { name: "Other", value: 500, color: "#EC5959" },
];
function PieChartBox() {
  return (
    <div className="pieChartBox h-full flex flex-col justify-center">
      <h1 className="mb-5 text-3xl font-bold " style={{ color: "#494FBF" }}>
        Category Comparison
      </h1>
      <div className="chart flex items-center justify-center h-full w-full">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"60%"}
              outerRadius={"100%"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options flex justify-center gap-[10px]">
        {data.map((item) => (
          <div
            className="option flex flex-col gap-[10px] items-center"
            key={item.name}
          >
            <div className="title flex gap-[10px] items-center">
              <div
                className="dot w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
            <span>{Math.floor((item.value / 8400) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;
