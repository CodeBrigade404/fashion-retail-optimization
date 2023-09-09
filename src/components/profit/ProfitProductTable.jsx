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
import ProgressBar from "/Users/lachitha/Desktop/fashion-retail-optimization/src/components/demand/table/ProgressBar.jsx";
import ImageCard from "/Users/lachitha/Desktop/fashion-retail-optimization/src/components/demand/table/ImageCard.jsx";
import DemandTypeCard from "/Users/lachitha/Desktop/fashion-retail-optimization/src/components/demand/table/DemandTypeCard.jsx";
import React, { Fragment, useState } from "react";
import ItemDetails from "../../pages/profit/ItemDetails";
const columns = [
	{
		field: "id",
		headerName: "ID",
		width: 90,
		flex: 0.5,
		align: "center",
		headerAlign: "center",
		type: "string",
	},
	{
		field: "productImage",
		headerName: "Image",
		editable: true,
		flex: 1,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => {
			return <ImageCard url={params.value} />;
		},
	},
	{
		field: "item",
		headerName: "Item Name",
		editable: true,
		flex: 1,
		align: "center",
		headerAlign: "center",
	},

	{
		field: "manufacture",
		headerName: "Manufacture",
		description: "This column has a value getter and is not sortable.",
		flex: 1,
		align: "center",
		headerAlign: "center",
	},

	{
		field: "Qty",
		headerName: "Qty",
		description: "This column has a value getter and is not sortable.",
		flex: 1,
		align: "center",
		headerAlign: "center",
	},
	{
		field: "Profit",
		headerName: "Profit(Rs.)",
		description: "This column has a value getter and is not sortable.",
		flex: 1,
		align: "center",
		headerAlign: "center",
	},
];

const rows = [
	{
		id: "CW123",
		productImage:
			"https://cdn.greencloudpos.com/nolimit.lk/product/DEEDAT%20Polo%20Men's%20T-Shirt%20Beige%20%E2%80%A2%20Small-1687671827228.jpeg",
		item: "Men's Casual Shirt",
		manufacture: "Levi's",
		Qty: 50,
		Profit: 800.0,
	},
	{
		id: "CW456",
		productImage:
			"https://cdn.greencloudpos.com/nolimit.lk/product/HUF%20&%20DEE%20Women's%20Skinny-1687752832678.webp",
		item: "Women's Summer Dress",
		manufacture: "H&M",
		Qty: 60,
		Profit: 950.0,
	},
	{
		id: "CW789",
		productImage:
			"https://cdn.greencloudpos.com/nolimit.lk/product/DEEDAT%20Men's%20Jeans%20Mid%20Blue%20%E2%80%A2%2028-1679551266602.jpeg?width=360",
		item: "Men's Jeans",
		manufacture: "Wrangler",
		Qty: 40,
		Profit: 750.0,
	},
	{
		id: "CW101",
		productImage:
			"https://cdn.greencloudpos.com/nolimit.lk/product/HUF%20&%20DEE%20Women's%20Casual%20Blouse%20Pistachio%20%E2%80%A2%20Small-1687521263528.jpeg",
		item: "Women's Blouse",
		manufacture: "Zara",
		Qty: 70,
		Profit: 850.0,
	},
	{
		id: "CW202",
		productImage:
			"https://cdn.greencloudpos.com/nolimit.lk/product/BLACK%20JACK%20Crew%20Neck%20T-Shirt%20Navy%20Blue%20%E2%80%A2%20Small-1687599630968.jpeg?width=360",
		item: "Men's T-Shirt",
		manufacture: "Nike",
		Qty: 80,
		Profit: 700.0,
	},
	{
		id: "CW303",
		productImage:
			"https://cdn.greencloudpos.com/nolimit.lk/product/HOT%20LOOK%20Women's%20Jeans%20Mid%20Blue%20%E2%80%A2%2028-1687755341129.jpeg?width=360",
		item: "Women's Jeans",
		manufacture: "Calvin Klein",
		Qty: 55,
		Profit: 900.0,
	},
	{
		id: "CW404",
		productImage:
			"https://cdn.greencloudpos.com/nolimit.lk/product/HOT%20LOOK%20Women's%20Jeans%20Mid%20Blue%20%E2%80%A2%2028-1687755341129.jpeg?width=360",
		item: "Men's Suit",
		manufacture: "Tommy Hilfiger",
		Qty: 30,
		Profit: 1200.0,
	},
	{
		id: "CW505",
		productImage:
			"https://cdn.greencloudpos.com/nolimit.lk/product/HOT%20LOOK%20Women's%20Jeans%20Mid%20Blue%20%E2%80%A2%2028-1687755341129.jpeg?width=360",
		item: "Women's Sweater",
		manufacture: "Gap",
		Qty: 45,
		Profit: 800.0,
	},
	{
		id: "CW606",
		productImage:
			"https://cdn.greencloudpos.com/nolimit.lk/product/HOT%20LOOK%20Women's%20Jeans%20Mid%20Blue%20%E2%80%A2%2028-1687755341129.jpeg?width=360",
		item: "Men's Hoodie",
		manufacture: "Adidas",
		Qty: 65,
		Profit: 850.0,
	},
	{
		id: "CW707",
		productImage:
			"https://cdn.greencloudpos.com/nolimit.lk/product/HOT%20LOOK%20Women's%20Jeans%20Mid%20Blue%20%E2%80%A2%2028-1687755341129.jpeg?width=360",
		item: "Women's Jacket",
		manufacture: "Columbia",
		Qty: 55,
		Profit: 1000.0,
	},
];

// This dataset now contains 10 different clothing items.

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
			// @ts-expect-error
			renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
			onChange={(event, value) => apiRef.current.setPage(value - 1)}
		/>
	);
}
function DemandProductTable() {
	const [selectedProfitId, setSelectedProfitId] = useState(null);

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
			<div className="bg-white ">
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
									// border: 3,
									"& .MuiDataGrid-columnHeaders": {
										backgroundColor: "#0E606C",
										color: "#fff",
										fontFamily: "Inter",
										fontSize: "16px",
										fontWeight: "bold",
									},
									"& .MuiDataGrid-virtualScroller": {
										backgroundColor: "#fff",
										color: "#2B2B2B",
										fontFamily: "Inter",
										fontSize: "16px",
										fontWeight: "600",
									},
									"& .MuiDataGrid-footerContainer": {
										backgroundColor: "#0E606C",
									},
									"& .MuiDataGrid-toolbarContainer": {
										"& .MuiButton-text": {
											fontSize: "18px !important",
											color: "green",
										},
									},
								}}
								onRowClick={(params) => openPopup(params.row.id)} // Open popup when a row is clicked
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
