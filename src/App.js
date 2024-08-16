import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeroBanner from "./components/HeroBanner";
import Main from "./components/Main";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { deepOrange, teal, blue } from "@mui/material/colors";
import Container from "@mui/material/Container";

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: teal,
    background: {
      default: "#263238", // Slate gray
    },
    primary: {
      light: "#e6ee9c",
      main: "#2196F3",
      dark: "#004d40",
      contrastText: "#fbe9e7",
    },
  },
  typography: {
    fontFamily: "Raleway, Arial, sans-serif",
    color: "#fbe9e7",
    h1: {
      fontFamily: "Teko, Arial, sans-serif",
      color: "#2196F3",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },
    h2: {
      fontFamily: "Teko, Arial, sans-serif",
      color: "#1565C0",
    },
    h3: {
      fontFamily: "Teko, Arial, sans-serif",
    },
    h4: {
      fontFamily: "Teko, Arial, sans-serif",
      color: "#2196F3",
    },
    h5: {
      fontFamily: "Teko, Arial, sans-serif",
      color: "#E3F2FD",
      marginTop: "1.4rem",
      marginBottom: "1.6rem",
    },
    h6: {
      fontFamily: "Teko, Arial, sans-serif",
    },
    body1: {
      color: "#E3F2FD",
    },
    body3: {
      color: "#546e7a",
    },
    body3R: {
      textAlign: "right",
      color: "#546e7a",
    },
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          marginBottom: "2px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            backgroundColor: "#37474f", // Background color for the filled variant
            "&:hover": {
              backgroundColor: "#37474f", // Background color on hover
            },
            "&.Mui-focused": {
              backgroundColor: "#263238", // Background color when focused
            },
          },
          "& .MuiFormLabel-root": {
            color: "#ffffff", // Label color
            "&.Mui-focused": {
              color: "#4db6ac", // Label color when focused
            },
          },
          "& .MuiFilledInput-input": {
            color: "#fff", // Text color inside the input
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <HeroBanner />
        <Main />
        <Services />
        <ContactForm />
        <Testimonials />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
