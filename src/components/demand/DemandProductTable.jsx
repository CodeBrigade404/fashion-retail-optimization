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
    flex: 0.1,
    align: "center",
    headerAlign: "center",
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
      className="demandProductTable h-screen mx-[20px] bg-white"
      style={{ boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)" }}
    >
      <h1
        className="mt-2 ml-4 text-[35px] font-bold "
        style={{ color: "#494FBF" }}
      >
        Product Table
      </h1>
      <div className="DemandTable p-3">
        <div
          style={{
            height: "90vh",
            width: "100%",
            overflow: "scroll",
          }}
        >
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

                  // borderBottom: "6px red solid",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: "#fff",
                  color: "#2B2B2B",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "600",
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "3px purple solid",
                  backgroundColor: "#0E606C",
                },
                "& .MuiDataGrid-toolbarContainer": {
                  "& .MuiButton-text": {
                    fontSize: "18px !important",
                    color: "green",
                  },
                },
              }}
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default DemandProductTable;
