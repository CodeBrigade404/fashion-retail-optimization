import React, { useState } from "react";
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
	const initialData = [
		{
			name: "2017",
			Profit: 2400,
			amt: 2400,
		},
		{
			name: "2018",
			Profit: 1398,
			amt: 2210,
		},
		{
			name: "2019",
			Profit: 9800,
			amt: 2290,
		},
		{
			name: "2020",
			Profit: 3908,
			amt: 2000,
		},
		{
			name: "2021",
			Profit: 4800,
			amt: 2181,
		},
		{
			name: "2022",
			Profit: 3800,
			amt: 2500,
		},
		{
			name: "2023",
			Profit: 4300,
			amt: 2100,
		},
	];

	const [data, setData] = useState(initialData);
	const [selectedStartYear, setSelectedStartYear] = useState("2017");
	const [selectedEndYear, setSelectedEndYear] = useState("2023");

	const handleStartYearChange = (e) => {
		setSelectedStartYear(e.target.value);
		filterData(e.target.value, selectedEndYear);
	};

	const handleEndYearChange = (e) => {
		setSelectedEndYear(e.target.value);
		filterData(selectedStartYear, e.target.value);
	};

	const filterData = (startYear, endYear) => {
		const filteredData = initialData.filter(
			(item) => item.name >= startYear && item.name <= endYear
		);
		setData(filteredData);
	};

	return (
		<div className="menWomenChart w-full h-full">
			<h1 className="mb-5 text-3xl font-bold">Net Profit</h1>
			<div className="menWomenChart w-full h-full mt-10">
				<div className="flex space-x-4">
					<div className="flex items-center">
						<label className="mr-2">Start Year:</label>
						<select
							value={selectedStartYear}
							onChange={handleStartYearChange}
							className="border border-black rounded px-2 py-1">
							{initialData.map((item) => (
								<option key={item.name} value={item.name}>
									{item.name}
								</option>
							))}
						</select>
					</div>
					<div className="flex items-center">
						<label className="mr-2">End Year:</label>
						<select
							value={selectedEndYear}
							onChange={handleEndYearChange}
							className="border border-black rounded px-2 py-1">
							{initialData.map((item) => (
								<option key={item.name} value={item.name}>
									{item.name}
								</option>
							))}
						</select>
					</div>
				</div>

				<ResponsiveContainer width="100%" height={500}>
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
							dataKey="Profit"
							stroke="#EC5959"
							strokeWidth={1}
							activeDot={{ r: 8 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default LineChartGrossProfit;
