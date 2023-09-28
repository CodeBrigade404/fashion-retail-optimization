import React, { useEffect, useState } from "react";
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
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import demandAxios from "../../pages/demand/BaseURL";
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
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

function DemandNoticeTable({ demandMethod, notice }) {
  const [demandNotices, setDemandNotices] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  useEffect(() => {
    fetchData();
  }, [notice]);
  const fetchData = async () => {
    try {
      const response = await demandAxios.get("demand/demandNotice");
      setDemandNotices(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
      field: "name",
      headerName: "Item",
      editable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "type",
      headerName: "Type",
      editable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      description: "This column has a value getter and is not sortable.",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "justification",
      headerName: "Justification",
      editable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "createdAt",
      headerName: "Date",
      editable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
      valueFormatter: (params) => formatDate(params.value), // Format the date here
    },

    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <IconButton onClick={() => handleEditDemandNotice(params.row)}>
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
        <IconButton onClick={() => handleDeleteDemandNotice(params.row._id)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
    {
      field: "pdf",
      headerName: "Pdf",
      sortable: false,
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <IconButton onClick={() => handleDeleteDemandNotice(params.row._id)}>
          <PictureAsPdfIcon />
        </IconButton>
      ),
    },
  ];
  const handleEditDemandNotice = (row) => {
    setSelectedRow(row);
    console.log(row);
    setIsEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setIsEditDialogOpen(false);
  };
  const handleSaveChanges = async (updatedRow) => {
    if (selectedRow) {
      try {
        // Make an HTTP PUT request to update the data
        const response = await demandAxios.put(
          `demand/demandnotice/${selectedRow._id}`,
          updatedRow
        );

        if (response.status === 200) {
          // Update the demandNotices state with the updated data
          const updatedDemandNotices = demandNotices.map((row) =>
            row._id === selectedRow._id ? { ...row, ...updatedRow } : row
          );
          setDemandNotices(updatedDemandNotices);

          setIsEditDialogOpen(false);
          setSelectedRow(null);
        } else {
          console.error("Failed to update data.");
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };

  const handleDeleteDemandNotice = async (id) => {
    try {
      // Make an HTTP DELETE request to delete the data
      const response = await demandAxios.delete(`demand/demandnotice/${id}`);

      if (response.status === 200) {
        // Update the demandNotices state with the updated data
        const updatedDemandNotices = demandNotices.filter(
          (row) => row._id !== id
        );
        setDemandNotices(updatedDemandNotices);
      } else {
        console.error("Failed to delete data.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  return (
    <div className="demandProductTable h-screen mx-[20px] rounded-md  overflow-hidden">
      <div className="mt-[90px] bg-white ">
        <h2 className="font-tinos p-3 text-left text-xl pl-4">
          Demand Notice Table
        </h2>
        <div className="DemandTable p-3">
          <div
            style={{
              height: "75vh",
              width: "100%",
            }}
          >
            <Box sx={{ height: "100%", width: "100%" }}>
              <DataGrid
                rows={demandNotices}
                columns={columns} // Define your columns here
                rowHeight={70}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                getRowId={(row) => row._id}
                slots={{
                  toolbar: GridToolbar,
                  pagination: CustomPagination,
                }}
                pageSizeOptions={[5]}
                showColumnVerticalBorder={true}
                showCellVerticalBorder={true}
                sx={{
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#000",
                    color: "#fff",
                    fontFamily: "Tinos",
                    fontSize: "16px",
                    fontWeight: "bold",
                  },
                  "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: "#fff",
                    color: "#2B2B2B",
                    fontFamily: "Tinos",
                    fontSize: "14px",
                    fontWeight: "400",
                  },
                  "& .MuiDataGrid-footerContainer": {
                    backgroundColor: "#fff",
                  },
                  "& .MuiDataGrid-toolbarContainer": {
                    "& .MuiButton-text": {
                      color: "#636363",
                      marginLeft: "30px",
                    },
                  },
                }}
              />
            </Box>
          </div>
        </div>
      </div>

      <Dialog open={isEditDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <form>
            {columns
              .filter(
                (column) =>
                  column.field !== "edit" &&
                  column.field !== "delete" &&
                  column.field !== "pdf"
              )
              .map((column) => (
                <TextField
                  key={column.field}
                  label={column.headerName}
                  value={selectedRow ? selectedRow[column.field] : ""}
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
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default DemandNoticeTable;
