/** @format */

import React from "react";
import Sidebar from "../sidebar";
import { Box } from "@mui/material";
import LowStockAlertsList from "../lowStockAlert";

function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <LowStockAlertsList />
    </Box>
  );
}

export default Dashboard;
