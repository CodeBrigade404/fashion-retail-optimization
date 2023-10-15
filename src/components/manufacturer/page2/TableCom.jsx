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
import { useEffect, useState } from "react";

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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchPredictedPoint(point) {
    // Define the request body
    const requestBody = [[point]];

    // Send a POST request to the specified URL
    const response = await fetch(
      "https://fashionml.onrender.com/stockPredict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (response.ok) {
      // Parse the response and extract the predicted point
      const responseData = await response.json();
      const predictedPoint = responseData.predictions[0]; // Assuming there is only one prediction

      return predictedPoint;
    } else {
      // Handle the case where the request was not successful
      console.error("Failed to fetch predicted point");
      return null; // You can return a default value or handle the error as needed
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3001/manufacturers/");
        if (response.ok) {
          const jsonData = await response.json();

          // Modify and format the data
          const modifiedData = await Promise.all(
            jsonData.map(async (item) => {
              const { id, firstName, lastName, type, point } = item;

              // Make a POST request to get predictedPoint
              const predictedPoint = await fetchPredictedPoint(point); // Await the fetchPredictedPoint function

              const performanceIncrease =
                ((predictedPoint - point) / predictedPoint) * 100;

              return {
                id: id,
                name: firstName + " " + lastName,
                type: type,
                performancePoint: point,
                predictedPoint: predictedPoint,
                performanceIncrease: performanceIncrease.toFixed(2),
              };
            })
          );

          setData(modifiedData);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
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
              rows={data}
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
                    color: "black",
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
