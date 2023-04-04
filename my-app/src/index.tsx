import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./Theme/theme";

/* const [mode, setMode] = React.useState<any>("light");
const colorMode = React.useMemo(
  () => ({
    // The dark mode switch would invoke this method
    toggleColorMode: () => {
      setMode((prevMode: any) => (prevMode === "light" ? "dark" : "light"));
    },
  }),
  []
);

// Update the theme only if the mode changes
const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]); */

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#a7cdf0",
    },
    secondary: {
      main: "#f8bb05",
    },
    info: {
      main: "#9c27b0",
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <ColorModeContext.Provider value={colorMode}> */}
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
    {/* </ColorModeContext.Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
