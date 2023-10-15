import { useState } from "react";
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
      field: "price",
      headerName: "Price",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "quantity",
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
        <IconButton onClick={() => handleDeleteProductItem(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
    {
      field: "predicatedStockCount",
      headerName: "Predicated Stock Count for next Month",
      sortable: false,
      flex: 0.5,
      align: "center",
      headerAlign: "center",
    },
  ];

  const handleDeleteProductItem = (row) => {
    console.log(row);
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

  return (
    <div className=" h-screen mx-[20px] bg-white rounded-md">
      <div className="p-8">
        <Box
          sx={{
            height: "calc(100vh - 100px)",
            width: "100%",
            overflow: "auto",
          }}
        >
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
              color="primary"
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}

export default StockTable;
