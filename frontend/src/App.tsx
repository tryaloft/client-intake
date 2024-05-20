import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { Provider } from "react-redux";
import store from "./state/state";
import Layout from "./components/base/Layout";

const App: React.FC = () => {
  return (
    <Box className="App" sx={{ display: "flex", backgroundColor: "#FAFAFB" }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </Provider>
    </Box>
  );
};

export default App;
