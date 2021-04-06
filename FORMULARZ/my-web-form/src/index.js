import React from "react";
import ReactDOM from "react-dom";
import Header from "./Views/Header";
import Footer from "./Views/Footer";
import MultiStep from "./Views/MultiStep";
import { Box, Container } from "@material-ui/core";
import theme from "./constants/Theme";
import { ThemeProvider } from "@material-ui/styles";


function App() {
  return (
    //<div className="app">
    <ThemeProvider theme={theme} >
      <div style={{ flexGrow: 1 }} className="App">
        <Header />
        <Container className="Wrapper">
          <Box mt={7} mb={12}>
            <div className="Form">
              <MultiStep />
            </div>
          </Box>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
