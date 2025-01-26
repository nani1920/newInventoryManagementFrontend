/** @format */

import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";

// Default theme without light/dark mode
const theme = createTheme({
  palette: {
    primary: {
      main: "#21263c", // Set primary color to #21263c
    },
    background: {
      default: "#f5f5f5", // Light background for the app
      primary: "#ffffff", // White background for content areas
      secondary: "#f0f0f0", // Lighter background for secondary elements
    },
    text: {
      primary: "#21263c", // Dark text to match the primary color
      secondary: "#ffffff", // Light text for contrast if needed
    },
    borders: {
      main: "#cccccc", // Light gray border color
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

export const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export const useThemeContext = () => {
  // Since we no longer have theme toggling, this can return an empty object or be removed
  return {};
};
