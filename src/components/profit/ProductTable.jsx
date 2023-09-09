import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ItemDetails from "../../pages/profit/ItemDetails";

const tableData = [
	{ id: 1, name: "Product 1", revenue: 100 },
	{ id: 2, name: "Product 2", revenue: 200 },
	{ id: 3, name: "Product 3", revenue: 150 },
	{ id: 3, name: "Product 3", revenue: 150 },
	{ id: 3, name: "Product 3", revenue: 150 },
	// Add more data as needed
];

function ProductTable() {
	const [selectedProfitId, setSelectedProfitId] = useState(null);

	const openPopup = (profitId) => {
		setSelectedProfitId(profitId);
	};

	const closePopup = () => {
		setSelectedProfitId(null);
	};

	return (
		<Fragment>
			<div>
				<div className="table-wrapper">
					<table className="min-w-full hover:table-fixed">
						<thead>
							<tr>
								<th className="bg-gray-200 font-bold">ID</th>
								<th className="bg-gray-200 font-bold">Product Name</th>
								<th className="bg-gray-200 font-bold">Profit(Rs.)</th>
							</tr>
						</thead>
					</table>
				</div>
				<div className="table-scroll">
					<table className="min-w-full">
						<tbody>
							{tableData.map((item) => (
								<tr key={item.id}>
									<td className="text-left px-6 py-3">
										<button onClick={() => openPopup(item.id)}>
											{item.id}
										</button>
									</td>
									<td className="text-left px-6 py-3">
										<button onClick={() => openPopup(item.id)}>
											{item.id}
										</button>
									</td>
									<td className="text-left px-6 py-3">
										<button onClick={() => openPopup(item.id)}>
											{item.id}
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			{selectedProfitId !== null && (
				<ItemDetails
					isVisible={true} // Pass true to make the popup visible
					onClose={closePopup}
				/>
			)}
		</Fragment>
	);
}

export default ProductTable;
