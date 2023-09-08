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

const LineChartGrossProfit = () => {
	const data = [
		{
			name: "2017",

			PresentYear: 2400,
			amt: 2400,
		},
		{
			name: "2018",

			PresentYear: 1398,
			amt: 2210,
		},
		{
			name: "2019",

			PresentYear: 9800,
			amt: 2290,
		},
		{
			name: "2020",

			PresentYear: 3908,
			amt: 2000,
		},
		{
			name: "2021",

			PresentYear: 4800,
			amt: 2181,
		},
		{
			name: "2022",

			PresentYear: 3800,
			amt: 2500,
		},
		{
			name: "2023",

			PresentYear: 4300,
			amt: 2100,
		},
	];

	return (
		<div className="menWomenChart w-full h-full">
			<h1 className="mb-5 text-3xl font-bold" style={{ color: "#494FBF" }}>
				Gross Profit
			</h1>
			<div className="menWomenChart w-full h-full mt-10">
				<ResponsiveContainer width="100%" height={360}>
					<LineChart
						width={500}
						height={300}
						data={data}
						margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type="monotone"
							dataKey="PresentYear"
							stroke="#EC5959"
							strokeWidth={3}
							activeDot={{ r: 8 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default LineChartGrossProfit;
