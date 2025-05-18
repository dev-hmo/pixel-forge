import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

const theme = createTheme({
  palette: {
    primary: {
      main: "#454CCC",
      light: "#E0E1FF",
      dark: "#3A3DB6",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#4F46E5",
    },
    background: {
      default: "#F7FAFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1E293B",
      secondary: "#475569",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Titillium Web', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: "8px",
          padding: "8px 24px",
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
