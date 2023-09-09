import React, { useRef } from "react";
import LineChartNetProfit from "../../components/profit/LineChartNetProfit";
import LineChartGrossProfit from "../../components/profit/LineChartGrossProfit";

const sampleImage =
	"https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5594.jpg";

function ItemDetails({ isVisible, onClose }) {
	if (!isVisible) return null;

	const handleClose = () => {
		onClose();
	};

	// Example product details
	const productDetails = {
		productName: "Ladies T-Shirt - Grey",
		description: "A comfortable and stylish grey t-shirt for women.",
		material: "Cotton",
		sizes: ["Small", "Medium", "Large"],
		colors: ["Grey", "Black", "White"],
		designAndStyle: "Plain with a V-neck",
		pricePerUnit: "$19.99",
		minimumOrderQuantity: 10,
		leadTime: "2-3 weeks",
		shippingAndDelivery: "Standard and Express options available",
		paymentTerms: "Credit Card, PayPal, Bank Transfer",
		returnAndExchangePolicy: "30-day return policy, no-hassle exchanges",
		customizationOptions: "Custom labels and logos available",
		qualityAssurance:
			"Stringent quality control and 100% satisfaction guarantee",
		certifications: "Eco-friendly and sustainable materials",
	};

	// Create references for scrolling to sections
	const detailsSectionRef = useRef(null);
	const netProfitSectionRef = useRef(null);
	const grossProfitSectionRef = useRef(null);

	// Function to scroll to the details section
	const scrollToDetails = () => {
		detailsSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	// Function to scroll to the Net Profit section
	const scrollToNetProfit = () => {
		netProfitSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	// Function to scroll to the Gross Profit section
	const scrollToGrossProfit = () => {
		grossProfitSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="fixed inset-0 flex justify-center items-center">
			<div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
			<div className="w-[1000px] flex flex-col relative">
				<div className="flex justify-end">
					<button className="text-white text-2xl" onClick={handleClose}>
						X
					</button>
				</div>

				<div
					className="bg-white rounded-lg p-6 text-center shadow-md relative"
					style={{ maxHeight: "600px", overflowY: "auto" }}>
					{/* Buttons on the left */}
					<div className="fixed left-12 top-1/4 transform -translate-y-1/4 flex flex-col space-y-3">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
							onClick={scrollToDetails}>
							Item Details
						</button>

						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
							onClick={scrollToNetProfit}>
							Net Profit
						</button>

						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
							onClick={scrollToGrossProfit}>
							Gross Profit
						</button>
					</div>

					{/* Product and Material Details */}
					<div className="grid grid-cols-2 gap-2 " ref={detailsSectionRef}>
						<div className="tile">
							<img
								src={sampleImage}
								alt="Sample Image"
								className="rounded-md shadow-lg"
							/>
						</div>
						<div className="tile">
							<h1 className="text-2xl font-semibold mb-4">
								{productDetails.productName}
							</h1>

							<div className="mb-2">
								<strong className="text-gray-600 text-sm">Description:</strong>{" "}
								<span className="text-sm">{productDetails.description}</span>
							</div>
							<div className="mb-2">
								<strong className="text-gray-600 text-sm">Material:</strong>{" "}
								<span className="text-sm">{productDetails.material}</span>
							</div>
							<div className="mb-2">
								<strong className="text-gray-600 text-sm">Sizes:</strong>{" "}
								<span className="text-sm">
									{productDetails.sizes.join(", ")}
								</span>
							</div>
							<div className="mb-2">
								<strong className="text-gray-600 text-sm">Colors:</strong>{" "}
								<span className="text-sm">
									{productDetails.colors.join(", ")}
								</span>
							</div>
							<div className="mb-2">
								<strong className="text-gray-600 text-sm">
									Design and Style:
								</strong>{" "}
								<span className="text-sm">{productDetails.designAndStyle}</span>
							</div>
							<div className="mb-2">
								<strong className="text-gray-600 text-sm">Price:</strong>{" "}
								<span className="text-sm">{productDetails.pricePerUnit}</span>
							</div>
							<div className="mb-2">
								<strong className="text-gray-600 text-sm">
									Minimum Order Quantity (MOQ):
								</strong>{" "}
								<span className="text-sm">
									{productDetails.minimumOrderQuantity}
								</span>
							</div>
							<div className="mb-2">
								<strong className="text-gray-600 text-sm">Lead Time:</strong>{" "}
								<span className="text-sm">{productDetails.leadTime}</span>
							</div>
							<div className="mb-2">
								<strong className="text-gray-600 text-sm">
									Shipping and Delivery:
								</strong>{" "}
								<span className="text-sm">
									{productDetails.shippingAndDelivery}
								</span>
							</div>
							<div className="mb-2">
								<strong className="text-gray-600 text-sm">
									Payment Terms:
								</strong>{" "}
								<span className="text-sm">{productDetails.paymentTerms}</span>
							</div>
							<div className="mb-2">
								<strong className="text-gray-600 text-sm">
									Return and Exchange Policy:
								</strong>{" "}
								<span className="text-sm">
									{productDetails.returnAndExchangePolicy}
								</span>
							</div>
							<div className="mb-2">
								<strong className="text-gray-600 text-sm">
									Customization Options:
								</strong>{" "}
								<span className="text-sm">
									{productDetails.customizationOptions}
								</span>
							</div>
							<div className="mb-2">
								<strong className="text-gray-600 text-sm">
									Quality Assurance:
								</strong>{" "}
								<span className="text-sm">
									{productDetails.qualityAssurance}
								</span>
							</div>
							<div className="mb-2">
								<strong className="text-gray-600 text-sm">
									Certifications:
								</strong>{" "}
								<span className="text-sm">{productDetails.certifications}</span>
							</div>
						</div>
					</div>

					{/* Charts */}
					<div
						className="grid grid-cols-1 gap-6 mt-6"
						ref={netProfitSectionRef}>
						<div className="tile">
							<LineChartNetProfit />
						</div>
					</div>

					{/* Gross Profit Chart */}
					<div
						className="grid grid-cols-1 gap-6 mt-6"
						ref={grossProfitSectionRef}>
						<div className="tile">
							<LineChartGrossProfit />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemDetails;
