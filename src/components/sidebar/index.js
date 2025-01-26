/** @format */

import React from "react";
import Drawer from "@mui/material/Drawer";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const DrawerList = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ width: 250, overflow: "hidden" }} role="presentation">
      <Box sx={{ display: "flex", alignItems: "center", m: 2 }}>
        <InventoryIcon p={1} />
        <Typography variant="h5" p={1}>
          Inventory
        </Typography>
      </Box>
      <Divider color="white" />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleNavigation("/products")}
            sx={{ fontSize: "0.875rem" }}
          >
            <ListItemIcon sx={{ color: "white" }}>
              <ShoppingCartCheckoutIcon />
            </ListItemIcon>
            <ListItemText primary="Products" sx={{ fontSize: "0.875rem" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleNavigation("/stock-transaction")}
          >
            <ListItemIcon sx={{ color: "white" }}>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Stock Transactions" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation("/low-stock-alert")}>
            <ListItemIcon sx={{ color: "white" }}>
              <ProductionQuantityLimitsIcon />
            </ListItemIcon>
            <ListItemText primary="Low-Stock-Alert" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
};
const drawerWidth = 240;
function Sidebar() {
  const theme = useTheme();
  return (
    <>
      <Drawer
        open
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          marginTop: "73px",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: theme.palette.primary.main,
            color: "white",
            overflow: "hidden",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {DrawerList()}
      </Drawer>
    </>
  );
}

export default Sidebar;
