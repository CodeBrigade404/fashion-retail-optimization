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
		name: "2017",
		PresentYear: 4000,
		PreviousYear: 2400,
		amt: 2400,
	},
	{
		name: "2018",
		PresentYear: 3000,
		PreviousYear: 1398,
		amt: 2210,
	},
	{
		name: "2019",
		PresentYear: 2000,
		PreviousYear: 9800,
		amt: 2290,
	},
	{
		name: "2020",
		PresentYear: 2780,
		PreviousYear: 3908,
		amt: 2000,
	},
	{
		name: "2021",
		PresentYear: 1890,
		PreviousYear: 4800,
		amt: 2181,
	},
	{
		name: "2022",
		PresentYear: 2390,
		PreviousYear: 3800,
		amt: 2500,
	},
	{
		name: "2023",
		PresentYear: 3490,
		PreviousYear: 4300,
		amt: 2100,
	},
];

function Barchart() {
	return (
		<div className="netProfit">
			<h2 className="text-left  ml-4 font-tinos text-2xl">Gross Profit</h2>
			<div className="netProfit">
				<ResponsiveContainer width={550} height={350}>
					<BarChart data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="PreviousYear" fill="#cbd5e1" />
						<Bar dataKey="PresentYear" fill="#64748b" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default Barchart;
