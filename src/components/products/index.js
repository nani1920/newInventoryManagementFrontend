/** @format */

import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";

const paginationModel = { page: 0, pageSize: 10 };

const suppliers = [
  {
    _id: "6795c5a5fc442f56302a3c93",
    name: "TechWorld",
    contactPerson: "John Doe",
    contactEmail: "john.doe@techworld.com",
    contactPhone: "+1 234 567 890",
    address: "123 Tech Street, Silicon Valley, CA",
    __v: 0,
    createdAt: "2025-01-26T05:18:29.764Z",
    updatedAt: "2025-01-26T05:18:29.764Z",
  },
  {
    _id: "6795c5a5fc442f56302a3c94",
    name: "Gizmo Electronics",
    contactPerson: "Sarah Lee",
    contactEmail: "sarah.lee@gizmo.com",
    contactPhone: "+1 987 654 321",
    address: "456 Gizmo Lane, New York, NY",
    __v: 0,
    createdAt: "2025-01-26T05:18:29.765Z",
    updatedAt: "2025-01-26T05:18:29.765Z",
  },
  {
    _id: "6795c5a5fc442f56302a3c95",
    name: "Digital Gadgets",
    contactPerson: "Mike Johnson",
    contactEmail: "mike.johnson@digitalgadgets.com",
    contactPhone: "+1 555 123 456",
    address: "789 Digital Blvd, Austin, TX",
    __v: 0,
    createdAt: "2025-01-26T05:18:29.765Z",
    updatedAt: "2025-01-26T05:18:29.765Z",
  },
  {
    _id: "6795c5a5fc442f56302a3c96",
    name: "SmartTech Suppliers",
    contactPerson: "Emily Davis",
    contactEmail: "emily.davis@smarttech.com",
    contactPhone: "+1 333 444 555",
    address: "101 SmartTech Rd, San Francisco, CA",
    __v: 0,
    createdAt: "2025-01-26T05:18:29.765Z",
    updatedAt: "2025-01-26T05:18:29.765Z",
  },
  {
    _id: "6795c5a5fc442f56302a3c97",
    name: "ElectroHub",
    contactPerson: "Daniel King",
    contactEmail: "daniel.king@electrohub.com",
    contactPhone: "+1 212 555 6789",
    address: "202 ElectroHub Ave, Chicago, IL",
    __v: 0,
    createdAt: "2025-01-26T05:18:29.766Z",
    updatedAt: "2025-01-26T05:18:29.766Z",
  },
  {
    _id: "6795c5a5fc442f56302a3c98",
    name: "GadgetMasters",
    contactPerson: "Laura White",
    contactEmail: "laura.white@gadgetmasters.com",
    contactPhone: "+1 800 555 1234",
    address: "303 GadgetMasters St, Los Angeles, CA",
    __v: 0,
    createdAt: "2025-01-26T05:18:29.766Z",
    updatedAt: "2025-01-26T05:18:29.766Z",
  },
  {
    _id: "6795c5a5fc442f56302a3c99",
    name: "NextGen Electronics",
    contactPerson: "Chris Brown",
    contactEmail: "chris.brown@nextgen.com",
    contactPhone: "+1 415 789 0123",
    address: "404 NextGen Way, Seattle, WA",
    __v: 0,
    createdAt: "2025-01-26T05:18:29.766Z",
    updatedAt: "2025-01-26T05:18:29.766Z",
  },
  {
    _id: "6795c5a5fc442f56302a3c9a",
    name: "Innovative Solutions",
    contactPerson: "Nancy Green",
    contactEmail: "nancy.green@innovativesolutions.com",
    contactPhone: "+1 202 555 9876",
    address: "505 Innovation Blvd, Boston, MA",
    __v: 0,
    createdAt: "2025-01-26T05:18:29.766Z",
    updatedAt: "2025-01-26T05:18:29.766Z",
  },
  {
    _id: "6795c5a5fc442f56302a3c9b",
    name: "FutureTech Supplies",
    contactPerson: "Robert Smith",
    contactEmail: "robert.smith@futuretech.com",
    contactPhone: "+1 303 555 1111",
    address: "606 FutureTech Park, Denver, CO",
    __v: 0,
    createdAt: "2025-01-26T05:18:29.766Z",
    updatedAt: "2025-01-26T05:18:29.766Z",
  },
  {
    _id: "6795c5a5fc442f56302a3c9c",
    name: "Prime Electronics",
    contactPerson: "Olivia Harris",
    contactEmail: "olivia.harris@primeelectronics.com",
    contactPhone: "+1 424 555 2222",
    address: "707 Prime Ave, Miami, FL",
    __v: 0,
    createdAt: "2025-01-26T05:18:29.766Z",
    updatedAt: "2025-01-26T05:18:29.766Z",
  },
];

const categories = [
  {
    _id: "6795c4e1a5db310474f7784d",
    name: "Laptops",
    description:
      "Portable computers designed for mobile use with powerful hardware.",
    __v: 0,
    createdAt: "2025-01-26T05:15:13.219Z",
    updatedAt: "2025-01-26T05:15:13.219Z",
  },
  {
    _id: "6795c4e1a5db310474f7784e",
    name: "Smartphones",
    description:
      "Handheld devices offering mobile computing, communication, and multimedia functions.",
    __v: 0,
    createdAt: "2025-01-26T05:15:13.220Z",
    updatedAt: "2025-01-26T05:15:13.220Z",
  },
  {
    _id: "6795c4e1a5db310474f7784f",
    name: "Tablets",
    description:
      "Touchscreen devices that combine features of a smartphone and a laptop.",
    __v: 0,
    createdAt: "2025-01-26T05:15:13.220Z",
    updatedAt: "2025-01-26T05:15:13.220Z",
  },
  {
    _id: "6795c4e1a5db310474f77850",
    name: "Headphones",
    description:
      "Audio devices worn on or over the ears for listening to music or taking calls.",
    __v: 0,
    createdAt: "2025-01-26T05:15:13.220Z",
    updatedAt: "2025-01-26T05:15:13.220Z",
  },
  {
    _id: "6795c4e1a5db310474f77851",
    name: "Smart Watches",
    description:
      "Wrist-worn devices that offer smartphone-like functionality along with fitness tracking.",
    __v: 0,
    createdAt: "2025-01-26T05:15:13.221Z",
    updatedAt: "2025-01-26T05:15:13.221Z",
  },
  {
    _id: "6795c4e1a5db310474f77852",
    name: "TVs",
    description:
      "Large electronic displays for watching television shows and movies.",
    __v: 0,
    createdAt: "2025-01-26T05:15:13.221Z",
    updatedAt: "2025-01-26T05:15:13.221Z",
  },
  {
    _id: "6795c4e1a5db310474f77853",
    name: "Cameras",
    description: "Devices used to capture images or videos.",
    __v: 0,
    createdAt: "2025-01-26T05:15:13.221Z",
    updatedAt: "2025-01-26T05:15:13.221Z",
  },
  {
    _id: "6795c4e1a5db310474f77854",
    name: "Home Appliances",
    description:
      "Electric machines that assist with household tasks like cooking, cleaning, and food preservation.",
    __v: 0,
    createdAt: "2025-01-26T05:15:13.221Z",
    updatedAt: "2025-01-26T05:15:13.221Z",
  },
  {
    _id: "6795c4e1a5db310474f77855",
    name: "Gaming Consoles",
    description:
      "Electronic devices designed for playing video games, often connected to a TV or monitor.",
    __v: 0,
    createdAt: "2025-01-26T05:15:13.221Z",
    updatedAt: "2025-01-26T05:15:13.221Z",
  },
  {
    _id: "6795c4e1a5db310474f77856",
    name: "Accessories",
    description:
      "Complementary products such as phone cases, chargers, and laptop bags.",
    __v: 0,
    createdAt: "2025-01-26T05:15:13.221Z",
    updatedAt: "2025-01-26T05:15:13.221Z",
  },
];
export default function ProductsList() {
  const [filter, setFilter] = React.useState("");
  const [filteredRows, setFilteredRows] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [editRows, setEditRows] = React.useState({});
  const [openDialog, setOpenDialog] = React.useState(false);
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    price: "",
    stockQuantity: "",
    reorderLevel: "",
    categoryName: "",
    supplierName: "",
  });

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 250,
      renderCell: renderEditableCell("name"),
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      renderCell: renderEditableCell("price"),
    },
    {
      field: "stockQuantity",
      headerName: "Stock Quantity",
      width: 150,
      align: "left",
      renderCell: renderEditableCell("stockQuantity"),
    },
    {
      field: "reorderLevel",
      headerName: "Reorder Level",
      width: 150,
      align: "left",
      renderCell: renderEditableCell("reorderLevel"),
    },
    {
      field: "category",
      headerName: "Category",
      width: 200,
      align: "left",
      renderCell: renderEditableCell("category"),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      getActions: ({ id }) => {
        const isInEditMode = !!editRows[id];
        return [
          isInEditMode ? (
            <>
              <GridActionsCellItem
                icon={<SaveIcon />}
                label="Save"
                onClick={() => handleSaveClick(id)}
              />
              <GridActionsCellItem
                icon={<CancelIcon />}
                label="Cancel"
                onClick={() => handleCancelClick(id)}
              />
            </>
          ) : (
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Edit"
              onClick={() => handleEditClick(id)}
            />
          ),
        ];
      },
    },
  ];

  React.useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://inventorymanagement-production-e917.up.railway.app/products"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Map the API response to the format expected by DataGrid
        const formattedRows = data.map((item) => ({
          ...item,
          id: item._id, // Use _id as id
          category: item.category ? item.category.name : "",
          supplier: item.supplier ? item.supplier : null,
        }));
        setRows(formattedRows);
        setFilteredRows(formattedRows);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    setFilteredRows(
      rows.filter((row) => {
        const nameMatch = row.name.toLowerCase().includes(value.toLowerCase());
        const categoryMatch = row.category
          ? row.category.toLowerCase().includes(value.toLowerCase())
          : false;
        return nameMatch || categoryMatch;
      })
    );
  };

  const handleEditClick = (id) => {
    setEditRows({ ...editRows, [id]: true });
  };

  const handleCancelClick = (id) => {
    setEditRows({ ...editRows, [id]: false });
  };

  const handleSaveClick = async (id) => {
    setLoading(true);
    const rowToUpdate = rows.find((row) => row.id === id);
    try {
      const response = await fetch(
        `https://inventorymanagement-production-e917.up.railway.app/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: rowToUpdate.name,
            price: rowToUpdate.price,
            stockQuantity: rowToUpdate.stockQuantity,
            reorderLevel: rowToUpdate.reorderLevel,
            categoryName: rowToUpdate.category,
            supplierName: rowToUpdate.supplier?.name,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedData = await response.json();
      const updatedRows = rows.map((row) => {
        if (row.id === id) {
          return {
            ...row,
            name: updatedData.updatedProduct.name,
            price: updatedData.updatedProduct.price,
            stockQuantity: updatedData.updatedProduct.stockQuantity,
            reorderLevel: updatedData.updatedProduct.reorderLevel,
            category: updatedData.updatedProduct.category.name,
          };
        }
        return row;
      });
      setRows(updatedRows);
      setFilteredRows(updatedRows);
      setEditRows({ ...editRows, [id]: false });
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewProduct({
      name: "",
      price: "",
      stockQuantity: "",
      reorderLevel: "",
      categoryName: "",
      supplierName: "",
    });
  };
  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const handleAddProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://inventorymanagement-production-e917.up.railway.app/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newProductData = await response.json();
      const formattedNewProduct = {
        ...newProductData.createdProduct,
        id: newProductData.createdProduct._id,
        category: newProductData.createdProduct.category.name,
        supplier: newProductData.createdProduct.supplier,
      };
      setRows([...rows, formattedNewProduct]);
      setFilteredRows([...rows, formattedNewProduct]);
      handleCloseDialog();
    } catch (error) {
      console.error("Error adding new product:", error);
    } finally {
      setLoading(false);
    }
  };

  function renderEditableCell(field) {
    return ({ id, value, ...params }) => {
      const isInEditMode = !!editRows[id];
      if (isInEditMode) {
        return (
          <TextField
            size="small"
            sx={{ input: { color: "black" }, label: { color: "black" } }}
            value={rows.find((row) => row.id === id)?.[field] || ""}
            onChange={(e) => {
              const updatedRows = rows.map((row) => {
                if (row.id === id) {
                  return { ...row, [field]: e.target.value };
                }
                return row;
              });
              setRows(updatedRows);
              setFilteredRows(updatedRows);
            }}
          />
        );
      }
      return value;
    };
  }

  if (loading) {
    return <Typography>Loading products...</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" align="left" p={2} fontFamily="Roboto">
        Products List
      </Typography>
      <Box sx={{ width: 1000, height: "85vh" }}>
        <Paper sx={{ height: "100%", width: "100%" }}>
          <Box sx={{ display: "flex", alignItems: "center", padding: "10px" }}>
            <Button
              onClick={handleOpenDialog}
              startIcon={<AddIcon />}
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
            >
              New Product
            </Button>
            <TextField
              size="small"
              value={filter}
              onChange={handleFilterChange}
              placeholder={`Search Name or Category`}
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
            disableRowSelectionOnClick
          />
        </Paper>
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            InputLabelProps={{
              style: { color: "black" },
            }}
            variant="standard"
            value={newProduct.name}
            onChange={handleInputChange}
            sx={{ input: { color: "black" } }}
          />
          <TextField
            margin="dense"
            name="price"
            label="Price"
            type="number"
            fullWidth
            InputLabelProps={{
              style: { color: "black" },
            }}
            variant="standard"
            value={newProduct.price}
            onChange={handleInputChange}
            sx={{ input: { color: "black" } }}
          />
          <TextField
            margin="dense"
            name="stockQuantity"
            label="Stock Quantity"
            type="number"
            fullWidth
            InputLabelProps={{
              style: { color: "black" },
            }}
            variant="standard"
            value={newProduct.stockQuantity}
            onChange={handleInputChange}
            sx={{ input: { color: "black" } }}
          />
          <TextField
            margin="dense"
            name="reorderLevel"
            label="Reorder Level"
            type="number"
            fullWidth
            InputLabelProps={{
              style: { color: "black" },
            }}
            variant="standard"
            value={newProduct.reorderLevel}
            onChange={handleInputChange}
            sx={{ input: { color: "black" } }}
          />
          <Select
            margin="dense"
            name="categoryName"
            label="Category"
            fullWidth
            InputLabelProps={{
              style: { color: "black" },
            }}
            variant="standard"
            value={newProduct.categoryName}
            onChange={handleInputChange}
            sx={{ color: "black" }}
          >
            {categories.map((category) => (
              <MenuItem key={category._id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
          <Select
            margin="dense"
            name="supplierName"
            label="Supplier"
            fullWidth
            InputLabelProps={{
              style: { color: "black" },
            }}
            variant="standard"
            value={newProduct.supplierName}
            onChange={handleInputChange}
            sx={{ color: "black" }}
          >
            {suppliers.map((supplier) => (
              <MenuItem key={supplier._id} value={supplier.name}>
                {supplier.name}
              </MenuItem>
            ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleAddProduct}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
