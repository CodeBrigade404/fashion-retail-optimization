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
import ProgressBar from "./table/ProgressBar";
import ImageCard from "./table/ImageCard";
import DemandTypeCard from "./table/DemandTypeCard";

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
    headerName: "Item",
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
    field: "demandType",
    headerName: "Demand Type",
    description: "This column has a value getter and is not sortable.",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return <DemandTypeCard type={params.value} />;
    },
  },
  {
    field: "lastMonthSales",
    headerName: "Last Month Sales",
    description: "This column has a value getter and is not sortable.",
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "thisMonthSales",
    headerName: "This Month Sales",
    description: "This column has a value getter and is not sortable.",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "demandIncrease",
    headerName: "Demand Increase",
    description: "This column has a value getter and is not sortable.",
    flex: 1.7,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return <ProgressBar value={params.value} />;
    },
  },
];

const rows = [
  {
    id: "PW232",
    productImage:
      "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5586.jpg",
    item: "Ladies Long Sleeve ",
    manufacture: "Dolce & Gabbana",
    demandType: "High",
    lastMonthSales: 2300,
    thisMonthSales: 5679,
    demandIncrease: 110,
  },
  {
    id: "MS45",
    productImage:
      "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5594.jpg",
    item: "Ladies T-Shirt-Grey",
    manufacture: "Burberry",
    demandType: "Medium",
    lastMonthSales: 3430,
    thisMonthSales: 2323,
    demandIncrease: 90,
  },
  {
    id: "WT45",
    productImage:
      "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5575.jpg",
    item: "Ladies Long Sleeve",
    manufacture: "Sakura company",
    demandType: "Low",
    lastMonthSales: 2300,
    thisMonthSales: 1977,
    demandIncrease: 45,
  },
  {
    id: "WS934",
    productImage:
      "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5534.jpg",
    item: "Gents Linen Shirt",
    manufacture: "Off-White",
    demandType: "Low",
    lastMonthSales: 2300,
    thisMonthSales: 1656,
    demandIncrease: 30,
  },
  {
    id: "WD35",
    productImage:
      "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5596.jpg",
    item: "Ladies Office Dress",
    manufacture: "Versace",
    demandType: "Medium",
    lastMonthSales: 2300,
    thisMonthSales: 5600,
    demandIncrease: 145,
  },
  {
    id: "WS34",
    productImage:
      "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5574.jpg",

    item: "Red Long Sleeve",
    manufacture: "Shakashi",
    demandType: "High",
    lastMonthSales: 9653,
    thisMonthSales: 13455,
    demandIncrease: 142,
  },
  {
    id: "WV34",
    productImage:
      "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5576.jpg",
    item: "Pajama",
    manufacture: "Valentino",
    demandType: "High",
    lastMonthSales: 8343,
    thisMonthSales: 11156,
    demandIncrease: 109,
  },
  {
    id: "MS34",
    productImage:
      "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/5/5539.jpg",
    item: "Gents Linen ",
    manufacture: "Kandy",
    demandType: "Medium",
    lastMonthSales: 2300,
    thisMonthSales: 3446,
    demandIncrease: 87,
  },
  {
    id: "MF45",
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    item: "Pajama",
    manufacture: "Boris company",
    demandType: "Low",
    lastMonthSales: 2233,
    thisMonthSales: 1236,
    demandIncrease: 40,
  },
  {
    id: "MS23",
    productImage:
      "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5537.jpg",
    item: "Gents Party",
    manufacture: "Boris company",
    demandType: "High",
    lastMonthSales: 23000,
    thisMonthSales: 56760,
    demandIncrease: 143,
  },
  {
    id: 11,
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    item: "Pajama",
    manufacture: "Boris company",
    demandType: "Medium",
    lastMonthSales: 23,
    thisMonthSales: 56,
    demandIncrease: 150,
  },
  {
    id: 12,
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    item: "Pajama",
    manufacture: "Boris company",
    demandType: "Low",
    lastMonthSales: 23,
    thisMonthSales: 56,
    demandIncrease: 40,
  },
  {
    id: 12,
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    item: "Pajama",
    manufacture: "Boris company",
    demandType: "High",
    lastMonthSales: 23,
    thisMonthSales: 56,
    demandIncrease: 90,
  },
  {
    id: 14,
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    item: "Pajama",
    manufacture: "Boris company",
    demandType: "Medium",
    lastMonthSales: 23,
    thisMonthSales: 56,
    demandIncrease: 150,
  },
  {
    id: 15,
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    item: "Pajama",
    manufacture: "Boris company",
    demandType: "Low",
    lastMonthSales: 23,
    thisMonthSales: 56,
    demandIncrease: 40,
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
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}
function DemandProductTable() {
  return (
    <div
      className="demandProductTable h-screen mx-[20px] rounded-md  overflow-hidden"
      style={{ boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)" }}
    >
      <div className="mt-[90px] bg-white ">
        <h1
          className="mt-2 ml-4 text-[35px] font-bold font-tinos"
          style={{ color: "#000" }}
        >
          Product Table
        </h1>
        <div className="DemandTable p-3">
          <div
            style={{
              height: "80vh",
              width: "100%",
              overflow: "scroll",
            }}
          >
            <Box sx={{ height: "100%", width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                rowHeight={70}
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
                    backgroundColor: "#fff",
                    color: "#000",
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontWeight: "bold",

                    // borderBottom: "6px red solid",
                  },
                  "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: "#fff",
                    color: "#2B2B2B",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: "600",
                  },
                  "& .MuiDataGrid-footerContainer": {
                    backgroundColor: "#fff",
                  },
                  "& .MuiDataGrid-toolbarContainer": {
                    "& .MuiButton-text": {
                      fontSize: "16px !important",
                      color: "#636363",
                    },
                  },
                }}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemandProductTable;
