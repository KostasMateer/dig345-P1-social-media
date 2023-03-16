import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors"

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const theme = createTheme({
    palette: {
        primary: {
            main: "#CCC"
        },
        secondary: {
            main: orange[200]
        }
    },
    typography: {
        myVariant: {
            fontSize: "6rem",
            color: orange[500]
        }
    }
})

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>
);


