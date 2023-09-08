import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Barchart from "../../components/profit/BarchartGrossProfit";
import BarchartNetProfit from "../../components/profit/BarchartNetProfit";
import ProductTable from "../../components/profit/ProductTable";
import LineChartProfit from "../../components/profit/LineChartGrossProfit";
import LineChartNetProfit from "../../components/profit/LineChartNetProfit";

const Profit = () => {
	return (
		<div className="py-8 px-4 sm:px-8 bg-white">
			<div className="container mx-auto">
				{/* Title */}
				{/* <div className="bg-white py-8 px-4 sm:px-8 rounded-lg shadow-lg text-center">
					<h1 className="text-xl md:text-5xl font-semibold text-blue-900 leading-tight cursor-pointer">
						PROFIT PREDICTION
					</h1>
				</div> */}

				{/* Grid for Cards */}
				<div className="grid md:grid-cols-3 ">
					{/* Card 1: Profit Prediction */}
					<div className="bg-white rounded-lg p-6 text-center shadow-md">
						<h2 className="text-xl font-semibold text-blue-900">
							Profit Prediction (Monthly)
						</h2>
						<h1 className="text-3xl font-bold text-blue-700 mt-4">
							Rs. 100,000
						</h1>
						<FaRegCalendarMinus className="text-4xl mt-4 text-blue-600" />
					</div>

					{/* Card 2: No. of Products */}
					<div className="bg-white rounded-lg p-6 text-center shadow-md">
						<h2 className="text-xl font-semibold text-blue-900">
							No. of Products
						</h2>
						<h1 className="text-3xl font-bold text-blue-700 mt-4">100,000</h1>
					</div>

					{/* Card 3: No. of Products */}
					<div className="bg-white rounded-lg p-6 text-center shadow-md">
						<h2 className="text-xl font-semibold text-blue-900">
							No. of Products
						</h2>
						<h1 className="text-3xl font-bold text-blue-700 mt-4">100,000</h1>
					</div>
				</div>

				{/* Charts and Table */}
				<div className="flex mt-5">
					{/* Chart 1 */}
					<div className="w-1/4 bg-white rounded-lg p-6 text-center shadow-md">
						<Barchart />
					</div>

					{/* Chart 2 */}
					<div className="w-1/4 bg-white rounded-lg p-6 text-center shadow-md">
						<BarchartNetProfit />
					</div>

					{/* Table */}
					<div className="w-1/2 bg-white rounded-lg shadow-lg p-4">
						<h3
							className="mb-5 text-3xl font-bold text-center"
							style={{ color: "#494FBF" }}>
							Product Table
						</h3>

						<div className="container mx-auto mt-4 p-2 border border-gray-300 rounded-lg max-h-[250px] overflow-y-auto">
							<ProductTable />
						</div>
					</div>
				</div>
			</div>

			{/* Additional Content */}
			<div className="flex mt-5">
				<div className="w-2/4 bg-white rounded-lg p-6 text-center shadow-md">
					<LineChartProfit />
				</div>
				<div className="w-2/4 bg-white rounded-lg p-6 text-center shadow-md">
					<LineChartNetProfit />
				</div>
			</div>
		</div>
	);
};

export default Profit;
