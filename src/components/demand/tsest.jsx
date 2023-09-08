import { gridOrderStatus } from "../../pages/demand/data/tableData";
const GridOrderStatus = () => (
  <button
    type="button"
    style={{ background: "red" }}
    className="text-black py-1 px-2 capitalize rounded-2xl text-md h-20"
  >
    dsdfg
  </button>
);
import {
  DataGrid,
  GridToolbar,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Box } from "@mui/material";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === "light"
      ? "rgba(0,0,0,.85)"
      : "rgba(255,255,255,0.85)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: theme.palette.mode === "light" ? "red" : "#1d1d1d",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: `1px solid ${
      theme.palette.mode === "light" ? "red" : "#303030"
    }`,
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${
      theme.palette.mode === "light" ? "red" : "#303030"
    }`,
  },
  "& .MuiDataGrid-cell": {
    color: theme.palette.mode === "light" ? "blue" : "rgba(255,255,255,0.65)",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 20,
  },
}));
function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="secondary"
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
      className="demandProductTable h-screen mx-[20px] bg-white overflow-hidden"
      id="#DemandTable"
    >
      <h1
        className="mt-2 ml-4 text-[35px] font-bold "
        style={{ color: "#494FBF" }}
      >
        Product Table
      </h1>
      <div className="DemandTable p-3">
        <div style={{ height: "80%", width: "100%" }}>
          <StyledDataGrid
            sx={{
              border: 3,
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#a6a6a6",
                borderBottom: "6px red solid",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: "green",
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "3px purple solid",
                backgroundColor: "#a6a6a6",
                marginRight: "100px",
              },
              "& .MuiDataGrid-toolbarContainer": {
                "& .MuiButton-text": {
                  fontSize: "18px !important",
                  color: "green",
                },
                "& .MuiBadge-badge": {
                  backgroundColor: "pink",
                },
              },
            }}
            rows={rows}
            columns={columns}
            slots={{
              pagination: CustomPagination,
              toolbar: GridToolbar,
            }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10]}
          />
        </div>
      </div>
    </div>
  );
}

export default DemandProductTable;
