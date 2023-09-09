import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
const data = [
  { name: "Women", value: 4000, color: "#80D9E6" },
  { name: "Men", value: 2000, color: "#83DBB1" },
  { name: "Shoe", value: 1900, color: "#DECE3B" },
  { name: "Other", value: 500, color: "#E77E7E" },
];
function PieChartBox() {
  return (
    <div className="pieChartBox h-full flex flex-col justify-center font-tinos">
      <h1 className="mb-5 text-3xl font-bold " style={{ color: "#000" }}>
        Demand Comparison
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
