import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	DataGrid,
	GridToolbar,
	gridPageCountSelector,
	gridPageSelector,
	useGridApiContext,
	useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Box from "@mui/material/Box";
import ItemDetails from "../../pages/profit/ItemDetails";

const columns = [
	{
		field: "clothID",
		headerName: "Cloth ID",
		width: 90,
		flex: 0.5,
		align: "center",
		headerAlign: "center",
		type: "string",
	},
	{
		field: "month",
		headerName: "Month",
		width: 100,
		flex: 0.5,
		align: "center",
		headerAlign: "center",
		type: "number",
	},
	{
		field: "year",
		headerName: "Year",
		width: 90,
		flex: 0.5,
		align: "center",
		headerAlign: "center",
		type: "string",
	},
	{
		field: "quantity",
		headerName: "Quantity",
		width: 110,
		flex: 0.5,
		align: "center",
		headerAlign: "center",
		type: "number",
	},
	{
		field: "costPrice",
		headerName: "Cost Price",
		width: 120,
		flex: 0.5,
		align: "center",
		headerAlign: "center",
		type: "number",
	},
	{
		field: "salePrice",
		headerName: "Sale Price",
		width: 120,
		flex: 0.5,
		align: "center",
		headerAlign: "center",
		type: "number",
	},
	{
		field: "profit",
		headerName: "Profit",
		width: 120,
		flex: 0.5,
		align: "center",
		headerAlign: "center",
		type: "number",
		valueGetter: (params) => {
			// Check if the row has valid data and then calculate profit
			const salePrice = params.row.salePrice || 0;
			const costPrice = params.row.costPrice || 0;
			const quantity = params.row.quantity || 0;
			return (salePrice - costPrice) * quantity;
		},
	},
];

function CustomPagination() {
	const apiRef = useGridApiContext();
	const page = useGridSelector(apiRef, gridPageSelector);
	const pageCount = useGridSelector(apiRef, gridPageCountSelector);

	return (
		<Pagination
			color="primary"
			variant="text"
			shape="circular"
			page={page + 1}
			count={pageCount}
			renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
			onChange={(event, value) => apiRef.current.setPage(value - 1)}
		/>
	);
}

function DemandProductTable() {
	const [selectedProfitId, setSelectedProfitId] = useState(null);
	const [rows, setRows] = useState([]);

	useEffect(() => {
		// Fetch data from the backend when the component mounts
		axios
			.get("http://localhost:3001/sales") // Assuming this is the correct API endpoint
			.then((response) => {
				setRows(response.data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	const openPopup = (profitId) => {
		setSelectedProfitId(profitId);
	};

	const closePopup = () => {
		setSelectedProfitId(null);
	};

	return (
		<div
			className="demandProductTable h-screen mx-[20px] rounded-md overflow-hidden"
			style={{ boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0)" }}>
			<div className="bg-white">
				<div className="DemandTable p-3">
					<div
						style={{
							height: "80vh",
							width: "100%",
							overflow: "scroll",
						}}>
						<Box sx={{ height: "100%", width: "100%" }}>
							<DataGrid
								rows={rows}
								columns={columns}
								rowHeight={80}
								getRowId={(row) => row._id} // Assuming _id is the unique identifier
								initialState={{
									pagination: {
										paginationModel: {
											pageSize: 10,
										},
									},
								}}
								slots={{
									toolbar: GridToolbar,
									pagination: CustomPagination,
								}}
								pageSizeOptions={[10]}
								sx={
									{
										// ... Your styling remains the same
									}
								}
								onRowClick={(params) => openPopup(params.row._id)} // Open popup when a row is clicked
							/>
						</Box>
					</div>
				</div>
			</div>

			{selectedProfitId !== null && (
				// Render your popup component here for the selected item
				<ItemDetails
					isVisible={true} // Pass true to make the popup visible
					onClose={closePopup}
				/>
			)}
		</div>
	);
}

export default DemandProductTable;
