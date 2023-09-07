import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
const data = [
  { name: "Mobile", value: 400, color: "#16BFD6" },
  { name: "Desktop", value: 300, color: "#1BDF83" },
  { name: "Laptop", value: 300, color: " #FFEA2B" },
  { name: "Tablet", value: 200, color: "#EC5959" },
];
function PieChartBox() {
  return (
    <div className="pieChartBox h-full flex flex-col justify-center">
      <h1 className="mb-5 text-3xl font-bold " style={{ color: "#494FBF" }}>
        Leads by Source
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
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;
