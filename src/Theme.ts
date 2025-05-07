// theme.ts
import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    mode: "light", // or 'dark'
    primary: {
      main: "#8b5cf6", // Tailwind violet-500
    },
    secondary: {
      main: "#2b0e30", // Tailwind fuchsia-500
    },
    background: {
      default: "#1a1a1acc",
      paper: "#ffffff",
    },
    text: {
      primary: "#e9eae3",
      secondary: "#6b7280",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
          padding: "0.5rem 1.5rem",
        },
      },
    },
  },
});

export default theme;
