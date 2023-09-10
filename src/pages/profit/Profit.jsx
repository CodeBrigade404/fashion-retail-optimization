import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Barchart from "../../components/profit/BarchartGrossProfit";
import BarchartNetProfit from "../../components/profit/BarchartNetProfit";
import ProductTable from "../../components/profit/ProfitProductTable";

const Profit = () => {
	const boxStyle = {
		padding: "20px",
		borderRadius: "10px",
		backgroundColor: "#fff",
		boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
	};

	return (
		<div>
			<div
				style={{ zIndex: 999 }}
				className=" backdrop-blur-sm fixed pr-28 text-2xl w-full h-20 flex font-tinos items-center justify-between">
				<h1 className=" h-fit ml-10 ">Profit Analysis</h1>
			</div>
			<div className="container pt-12">
				<div>
					<div className="container mx-auto">
						{/* Title */}
						{/* <div className="bg-white py-8 px-4 sm:px-8 rounded-lg shadow-lg text-center">
					<h1 className="text-xl md:text-5xl font-semibold text-blue-900 leading-tight cursor-pointer">
						PROFIT PREDICTION
					</h1>
				</div> */}

						{/* Grid for Cards */}
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(4, 1fr)",
								gridAutoRows: "minmax(180px, auto)",
								gap: "20px",
								padding: "20px",
							}}></div>
						<div className="grid md:grid-cols-3 gap-4">
							{/* Card 1: Profit Prediction */}
							<div
								className="bg-white rounded-lg p-6 text-center shadow-md"
								style={{ height: "150px" }}>
								<h2 className="font-tinos">Profit Prediction (Monthly)</h2>
								<h1 className="text-2xl font-bold">Rs. 636,350</h1>
								{/* <FaRegCalendarMinus className="title flex items-center gap-[10px]" /> */}
							</div>

							{/* Card 2: No. of Products */}
							<div className="bg-white rounded-lg p-6 text-center shadow-md">
								<h2 className="font-tinos">Total Sales(Monthly)</h2>
								<h1 className="text-2xl font-bold">Rs.1,030,000</h1>
							</div>

							{/* Card 3: No. of Products */}
							<div className="bg-white rounded-lg p-6 text-center shadow-md">
								<h2 className="font-tinos">No. of Products(sold)</h2>
								<h1 className="text-2xl font-bold">23,569</h1>
							</div>
						</div>

						<div className="flex mt-5 gap-4">
							{/* Chart 1 */}
							<div className="w-2/4 bg-white rounded-lg p-6 text-center shadow-md">
								<Barchart />
							</div>

							{/* Chart 2 */}
							<div className="w-2/4 bg-white rounded-lg p-6 text-center shadow-md">
								<BarchartNetProfit />
							</div>

							{/* Table */}
						</div>

						<div className="flex mt-5 gap-4">
							<div
								className="w-full bg-white rounded-lg shadow-lg p-4"
								style={{ zIndex: 1 }}>
								<h2 className="text-left  ml-4 font-tinos text-2xl">
									Profit-Product Table
								</h2>

								<div className="ProductTable">
									<ProductTable />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profit;
