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
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

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
			const salePrice = params.row.salePrice || 0;
			const costPrice = params.row.costPrice || 0;
			const quantity = params.row.quantity || 0;
			return (salePrice - costPrice) * quantity;
		},
	},
	{
		field: "predictedQuantity",
		headerName: "Predicted Quantity",
		width: 140,
		flex: 0.5,
		align: "center",
		headerAlign: "center",
		type: "number",
	},
	{
		field: "predictedProfit",
		headerName: "Predicted Profit",
		width: 140,
		flex: 0.5,
		align: "center",
		headerAlign: "center",
		type: "number",
		valueGetter: (params) => {
			const predictedQuantity = params.row.predictedQuantity || 0;
			const salePrice = params.row.salePrice || 0;
			const costPrice = params.row.costPrice || 0;
			return predictedQuantity * (salePrice - costPrice);
		},
	},
	{
		field: "delete",
		headerName: "Delete",
		sortable: false,
		flex: 0.5,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => (
			<IconButton onClick={() => handleDeleteProductItem(params.row._id)}>
				<DeleteIcon />
			</IconButton>
		),
	},
];

const handleDeleteProductItem = (rowId) => {
	axios
		.delete(`http://localhost:3001/sales/${rowId}`)
		.then((response) => {
			// Handle the successful delete, e.g., remove the deleted row from the UI.
			console.log(`Deleted item with _id: ${rowId}`);
			// Instead of reloading the entire page, you can remove the deleted row from the state (rows).
			setRows((prevRows) => prevRows.filter((row) => row._id !== rowId));
		})
		.catch((error) => {
			console.error(`Error deleting item with _id ${rowId}: ${error}`);
		});
};

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

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3001/sales");
				const quantityArray = response.data.map((item) => [item.quantity]);
				console.log("Quantity Array:", quantityArray);

				const predictionResponse = await axios.post(
					"https://fashionml.onrender.com/stockPredict",
					quantityArray
				);
				console.log(
					"Prediction Response Data:",
					predictionResponse.data.predictions[0]
				);

				const updatedRows = response.data.map((row, index) => ({
					...row,
					predictedQuantity: predictionResponse.data.predictions[index],
				}));
				setRows(updatedRows);
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

	const openPopup = (clothID) => {
		setSelectedProfitId(clothID);
		console.log("clothID", clothID);
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
								getRowId={(row) => row._id}
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
								onRowClick={(params) => openPopup(params.row.clothID)}
							/>
						</Box>
					</div>
				</div>
			</div>

			{selectedProfitId !== null && (
				<ItemDetails isVisible={true} onClose={closePopup} />
			)}
		</div>
	);
}

export default DemandProductTable;
