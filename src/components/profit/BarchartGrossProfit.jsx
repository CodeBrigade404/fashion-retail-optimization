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
import React, { useState, useEffect } from "react";
import axios from "axios";

function Barchart() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("http://localhost:3001/sales/calculateSalesAndProfitByYear")
			.then((response) => {
				setData(response.data.salesByYear);
				setLoading(false);
				console.log("Response Data:", response.data);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (data.length === 0) {
		return <div>No data available.</div>;
	}

	return (
		<div className="netProfit">
			<h2 className="text-left ml-4 font-tinos text-2xl">
				Gross Profit - Yearly
			</h2>
			<div className="netProfit">
				<ResponsiveContainer width={550} height={200}>
					<BarChart data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="totalSales" fill="#cbd5e1" />
						<Bar dataKey="totalProfit" fill="#64748b" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default Barchart;
