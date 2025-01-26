/** @format */

import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box, Typography, Paper, TextField } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditIcon from "@mui/icons-material/Edit";

const paginationModel = { page: 0, pageSize: 10 };

export default function StockTransactionsList() {
  const [filter, setFilter] = React.useState("");
  const [filteredRows, setFilteredRows] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const columns = [
    { field: "productId", headerName: "Product ID", width: 150 },
    { field: "transactionType", headerName: "Transaction Type", width: 150 },
    { field: "quantity", headerName: "Quantity", width: 100, align: "left" },
    { field: "remarks", headerName: "Remarks", width: 300 },
    { field: "transactionDate", headerName: "Transaction Date", width: 150 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={() => handleEditClick(id)}
          />,
        ];
      },
    },
  ];

  React.useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://inventorymanagement-production-e917.up.railway.app/transactions"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Map the API response to the format expected by DataGrid
        const formattedRows = data.map((item) => ({
          ...item,
          id: item._id, // Use _id as id
        }));
        setRows(formattedRows);
        setFilteredRows(formattedRows);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    setFilteredRows(
      rows.filter(
        (row) =>
          row.productId.toLowerCase().includes(value.toLowerCase()) ||
          row.transactionType.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleEditClick = (id) => {
    console.log(`Edit clicked for row with ID: ${id}`);
    // Add your edit logic here
  };

  if (loading) {
    return <Typography>Loading transactions...</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" align="left" p={2} fontFamily="Roboto">
        Stock Transactions List
      </Typography>
      <Box sx={{ width: 1000, height: "85vh" }}>
        <Paper sx={{ height: "100%", width: "100%" }}>
          <Box sx={{ display: "flex", alignItems: "center", padding: "10px" }}>
            <TextField
              size="small"
              value={filter}
              onChange={handleFilterChange}
              placeholder={`Search Product ID or Transaction Type`}
              sx={{ mr: 2, width: 300 }}
            />
            <FilterListIcon />
          </Box>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[10, 25, 50]}
            sx={{ border: 0 }}
          />
        </Paper>
      </Box>
    </Box>
  );
}
