import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { rows } from "../tables/data/TableData";
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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

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

function StockTable() {
	const [selectedRow, setSelectedRow] = useState(null);
	const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
	const [rowsWithQuantities, setRowsWithQuantities] = useState(
		rows.map((row) => ({ ...row, quantity: 0 }))
	);

	const columns = [
		{
			field: "productId",
			headerName: "ID",
			width: 90,
			flex: 0.5,
			align: "center",
			headerAlign: "center",
			type: "string",
		},
		{
			field: "imagePath",
			headerName: "Image",
			editable: true,
			flex: 1,
			align: "center",
			headerAlign: "center",
		},

		{
			field: "manufactureId",
			headerName: "Manufacture",
			description: "This column has a value getter and is not sortable.",
			flex: 1,
			align: "center",
			headerAlign: "center",
		},
		{
			field: "price",
			headerName: "Price",
			flex: 1,
			align: "center",
			headerAlign: "center",
		},
		{
			field: "productQuantity",
			headerName: "Quantity",
			editable: true,
			flex: 1,
			align: "center",
			headerAlign: "center",
			type: "number",
		},
		{
			field: "edit",
			headerName: "Edit",
			sortable: false,
			flex: 0.5,
			align: "center",
			headerAlign: "center",
			renderCell: (params) => (
				<IconButton onClick={() => handleEditProductItem(params.row)}>
					<EditIcon />
				</IconButton>
			),
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
		{
			field: "predictedQuantity",
			headerName: "Predicated Stock Count for next Month",
			sortable: false,
			flex: 0.5,
			align: "center",
			headerAlign: "center",
		},
	];

	const handleDeleteProductItem = (rowId) => {
		axios
			.delete(`http://localhost:3001/cloths/${rowId}`)
			.then((response) => {
				// Handle the successful delete, e.g., remove the deleted row from the UI.
				console.log(`Deleted item with _id: ${rowId}`);
				window.location.reload();
			})
			.catch((error) => {
				console.error(`Error deleting item with _id ${rowId}: ${error}`);
			});
	};

	const handleEditProductItem = (row) => {
		setSelectedRow(row);
		setIsEditDialogOpen(true);
	};

	const handleEditDialogClose = () => {
		setIsEditDialogOpen(false);
	};

	const handleSaveChanges = (updatedRow) => {
		console.log(updatedRow);
		setIsEditDialogOpen(false);
		setSelectedRow(null);
	};

	// const updateRowInArray = (updatedRow) => {
	//   const updatedRows = rowsWithQuantities.map((row) =>
	//     row.id === updatedRow.id ? updatedRow : row
	//   );
	//   setRowsWithQuantities(updatedRows);
	// };
	const [modifydata, setModifydata] = useState([]);
	console.log("modifydata", modifydata);
	const [data, setData] = useState([]);
	console.log("data", data);
	useEffect(() => {
		// Fetch data from the backend when the component mounts
		axios
			.get("http://localhost:3001/cloths/") // Assuming this is the correct API endpoint
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3001/cloths/");
				const quantityArray = response.data.map((item) => [
					item.productQuantity,
				]);
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
				setModifydata(updatedRows);
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className=" h-screen mx-[20px] bg-white rounded-md">
			<div className="p-8">
				<Box
					sx={{
						height: "calc(100vh - 100px)",
						width: "100%",
						overflow: "auto",
					}}>
					<DataGrid
						rows={modifydata}
						columns={columns}
						rowHeight={80}
						getRowId={(modifydata) => modifydata._id}
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
						sx={{
							"& .MuiDataGrid-toolbarContainer": {
								"& .MuiButton-text": {
									color: "black",
									padding: "20px",
									marginLeft: "50px",
									marginBottom: "10Px",
								},
							},
						}}
					/>
				</Box>
			</div>
			{selectedRow && (
				<Dialog open={isEditDialogOpen} onClose={handleEditDialogClose}>
					<DialogTitle>Edit Product</DialogTitle>
					<DialogContent>
						<form>
							{columns
								.filter(
									(column) =>
										column.field !== "edit" && column.field !== "delete"
								)
								.map((column) => (
									<TextField
										key={column.field}
										label={column.headerName}
										value={selectedRow[column.field]}
										onChange={(e) =>
											setSelectedRow({
												...selectedRow,
												[column.field]: e.target.value,
											})
										}
										fullWidth
										margin="normal"
									/>
								))}
						</form>
					</DialogContent>

					<DialogActions>
						<Button onClick={handleEditDialogClose} color="primary">
							Cancel
						</Button>
						<Button
							onClick={() => handleSaveChanges(selectedRow)}
							color="primary">
							Save
						</Button>
					</DialogActions>
				</Dialog>
			)}
		</div>
	);
}

export default StockTable;
