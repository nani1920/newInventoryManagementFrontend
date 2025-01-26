/** @format */

import "./App.css";
import React from "react";
import { ThemeProvider as CustomThemeProvider } from "../src/context/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import ProductsList from "./components/products";
import StockTransactionsList from "./components/stockTransacation";
import LowStockAlertsList from "./components/lowStockAlert";
import { Box } from "@mui/material";
function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "73px" }}>
            <Routes>
              <Route path="/products" element={<ProductsList />} />
              <Route
                path="/stock-transaction"
                element={<StockTransactionsList />}
              />
              <Route path="/low-stock-alert" element={<LowStockAlertsList />} />
              {/* Default route to redirect to products page */}
              <Route path="/" element={<ProductsList />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
