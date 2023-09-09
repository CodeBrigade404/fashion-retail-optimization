import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ItemDetails from "../../pages/profit/ItemDetails";

const tableData = [
	{ id: 1, name: "Product 1", revenue: 100 },
	{ id: 2, name: "Product 2", revenue: 200 },
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
					<table className="min-w-full">
						<thead>
							<tr>
								<th className="text-left px-6 py-3 bg-gray-200">ID</th>
								<th className="text-left px-6 py-3 bg-gray-200">
									Product Name
								</th>
								<th className="text-left px-6 py-3 bg-gray-200">Revenue</th>
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
