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
    field: "name",
    headerName: "Name",
    editable: true,
    flex: 1,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "type",
    headerName: "Type",
    description: "This column has a value getter and is not sortable.",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "performancePoint",
    headerName: "Performance Point",
    description: "This column has a value getter and is not sortable.",
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "predictedPoint",
    headerName: "Predicted Point",
    description: "This column has a value getter and is not sortable.",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "performanceIncrease",
    headerName: "Performance Increase",
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
    id: "MID001",
    name: "Nimal Peries",
    type: "T-shirt manufacturer",
    performancePoint: 2300,
    predictedPoint: 2400,
    performanceIncrease: 4.3,
  },
  {
    id: "MID002",
    name: "Elegant Creations",
    type: "Dress manufacturer",
    performancePoint: 2700,
    predictedPoint: 2650,
    performanceIncrease: -1.85,
  },
  {
    id: "MID003",
    name: "Fashion Trends Inc.",
    type: "Jeans manufacturer",
    performancePoint: 1950,
    predictedPoint: 2000,
    performanceIncrease: 2.56,
  },
  {
    id: "MID004",
    name: "Chic Couture",
    type: "Blouse manufacturer",
    performancePoint: 2200,
    predictedPoint: 2250,
    performanceIncrease: 2.27,
  },
  {
    id: "MID005",
    name: "Glamour Garments",
    type: "Sweater manufacturer",
    performancePoint: 2450,
    predictedPoint: 2400,
    performanceIncrease: -2.04,
  },
  {
    id: "MID006",
    name: "StyleCrafters",
    type: "Shorts manufacturer",
    performancePoint: 1980,
    predictedPoint: 2050,
    performanceIncrease: 3.53,
  },
  {
    id: "MID007",
    name: "Elite Apparel",
    type: "Coat manufacturer",
    performancePoint: 2600,
    predictedPoint: 2550,
    performanceIncrease: -1.92,
  },
  {
    id: "MID008",
    name: "FancyFabrics",
    type: "Skirt manufacturer",
    performancePoint: 2100,
    predictedPoint: 2150,
    performanceIncrease: 2.38,
  },
  {
    id: "MID009",
    name: "CasualWear Co.",
    type: "Pants manufacturer",
    performancePoint: 1800,
    predictedPoint: 1850,
    performanceIncrease: 2.78,
  },
  {
    id: "MID010",
    name: "ClassicStyles",
    type: "Shirt manufacturer",
    performancePoint: 2400,
    predictedPoint: 2350,
    performanceIncrease: -2.08,
  },
  {
    id: "MID011",
    name: "VogueCloths",
    type: "Dress manufacturer",
    performancePoint: 2850,
    predictedPoint: 2800,
    performanceIncrease: -1.75,
  },
  {
    id: "MID012",
    name: "DenimDeluxe",
    type: "Jeans manufacturer",
    performancePoint: 2100,
    predictedPoint: 2150,
    performanceIncrease: 2.38,
  },
  {
    id: "MID013",
    name: "ElegantEve",
    type: "Blouse manufacturer",
    performancePoint: 2150,
    predictedPoint: 2100,
    performanceIncrease: -2.33,
  },
  {
    id: "MID014",
    name: "CozyKnits",
    type: "Sweater manufacturer",
    performancePoint: 2550,
    predictedPoint: 2600,
    performanceIncrease: 1.96,
  },
  {
    id: "MID015",
    name: "UrbanChic",
    type: "Shorts manufacturer",
    performancePoint: 2040,
    predictedPoint: 2000,
    performanceIncrease: -2.94,
  },
  {
    id: "MID016",
    name: "LuxuryCoats",
    type: "Coat manufacturer",
    performancePoint: 2650,
    predictedPoint: 2700,
    performanceIncrease: 1.89,
  },
  {
    id: "MID017",
    name: "SilkStyle",
    type: "Skirt manufacturer",
    performancePoint: 2250,
    predictedPoint: 2200,
    performanceIncrease: -2.22,
  },
  {
    id: "MID018",
    name: "PerfectPants",
    type: "Pants manufacturer",
    performancePoint: 1850,
    predictedPoint: 1900,
    performanceIncrease: 2.7,
  },
  {
    id: "MID019",
    name: "SharpShirts",
    type: "Shirt manufacturer",
    performancePoint: 2300,
    predictedPoint: 2350,
    performanceIncrease: 2.17,
  },
  {
    id: "MID020",
    name: "TrendyThreads",
    type: "Dress manufacturer",
    performancePoint: 2750,
    predictedPoint: 2800,
    performanceIncrease: 1.82,
  },
  {
    id: "MID021",
    name: "BlueDenim",
    type: "Jeans manufacturer",
    performancePoint: 2050,
    predictedPoint: 2100,
    performanceIncrease: 2.44,
  },
  {
    id: "MID022",
    name: "EleganceCharm",
    type: "Blouse manufacturer",
    performancePoint: 2200,
    predictedPoint: 2150,
    performanceIncrease: -2.27,
  },
  {
    id: "MID023",
    name: "CosySweaters",
    type: "Sweater manufacturer",
    performancePoint: 2600,
    predictedPoint: 2650,
    performanceIncrease: 1.92,
  },
  {
    id: "MID024",
    name: "SummerChic",
    type: "Shorts manufacturer",
    performancePoint: 2020,
    predictedPoint: 2000,
    performanceIncrease: -0.99,
  },
  {
    id: "MID025",
    name: "WarmWardrobe",
    type: "Coat manufacturer",
    performancePoint: 2700,
    predictedPoint: 2750,
    performanceIncrease: 1.85,
  },
  {
    id: "MID026",
    name: "StylishSilks",
    type: "Skirt manufacturer",
    performancePoint: 2200,
    predictedPoint: 2250,
    performanceIncrease: 2.27,
  },
  {
    id: "MID027",
    name: "ComfyPants",
    type: "Pants manufacturer",
    performancePoint: 1900,
    predictedPoint: 1950,
    performanceIncrease: 2.63,
  },
  {
    id: "MID028",
    name: "SmartStyles",
    type: "Shirt manufacturer",
    performancePoint: 2350,
    predictedPoint: 2300,
    performanceIncrease: -2.13,
  },
  {
    id: "MID029",
    name: "FancyFrocks",
    type: "Dress manufacturer",
    performancePoint: 2800,
    predictedPoint: 2850,
    performanceIncrease: 1.79,
  },
  {
    id: "MID030",
    name: "DenimDelights",
    type: "Jeans manufacturer",
    performancePoint: 2150,
    predictedPoint: 2200,
    performanceIncrease: 2.33,
  },
  {
    id: "MID031",
    name: "ChicCharms",
    type: "Blouse manufacturer",
    performancePoint: 2050,
    predictedPoint: 2000,
    performanceIncrease: -2.44,
  },
  {
    id: "MID032",
    name: "CozyKnitwear",
    type: "Sweater manufacturer",
    performancePoint: 2650,
    predictedPoint: 2600,
    performanceIncrease: -1.89,
  },
  {
    id: "MID033",
    name: "SummerStyle",
    type: "Shorts manufacturer",
    performancePoint: 2010,
    predictedPoint: 2050,
    performanceIncrease: 1.99,
  },
  {
    id: "MID034",
    name: "LuxuryLooms",
    type: "Coat manufacturer",
    performancePoint: 2750,
    predictedPoint: 2700,
    performanceIncrease: -1.82,
  },
  {
    id: "MID035",
    name: "SilkSensations",
    type: "Skirt manufacturer",
    performancePoint: 2300,
    predictedPoint: 2350,
    performanceIncrease: 2.17,
  },
  {
    id: "MID036",
    name: "PerfectFit",
    type: "Pants manufacturer",
    performancePoint: 1950,
    predictedPoint: 2000,
    performanceIncrease: 2.56,
  },
  {
    id: "MID037",
    name: "SharpStyles",
    type: "Shirt manufacturer",
    performancePoint: 2200,
    predictedPoint: 2150,
    performanceIncrease: -2.27,
  },
  {
    id: "MID038",
    name: "TrendyThreads",
    type: "Dress manufacturer",
    performancePoint: 2700,
    predictedPoint: 2750,
    performanceIncrease: 1.85,
  },
  {
    id: "MID039",
    name: "BlueDenim",
    type: "Jeans manufacturer",
    performancePoint: 2100,
    predictedPoint: 2050,
    performanceIncrease: -2.38,
  },
  {
    id: "MID040",
    name: "EleganceCharm",
    type: "Blouse manufacturer",
    performancePoint: 2250,
    predictedPoint: 2200,
    performanceIncrease: -2.22,
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
function TableCom() {
  return (
    <div className="demandProductTable  rounded-md  overflow-hidden">
      <div className="DemandTable p-3">
        <div
          style={{
            height: "65vh",
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
                  backgroundColor: "#000000",
                  color: "#fff",
                  fontFamily: "Tinos",
                  fontSize: "16px",
                  //   fontWeight: "bold",
                  //   // borderBottom: "6px red solid",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: "#fff",
                  color: "#2B2B2B",
                  fontFamily: "Tinos",
                  fontSize: "16px",
                  //   fontWeight: "600",
                },
                "& .MuiDataGrid-footerContainer": {
                  backgroundColor: "#fff",
                  color: "#fff",
                },
                "& .MuiDataGrid-toolbarContainer": {
                  color: "#fff",
                  "& .MuiButton-text": {
                    //     fontSize: "18px !important",
                    color: "#fff",
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

export default TableCom;
