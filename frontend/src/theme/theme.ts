import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#09181A",
      light: "#FAFAFA",
      dark: "#000000",
      contrastText: "#fff",
    },

    secondary: {
      main: "#3E21F3",
      light: "#C2FBFF",
      dark: "#8ADFE5",
      contrastText: "#09181A",
    },

    error: {
      main: "#9B0000",
    },

    warning: {
      main: "#FFE7C3",
      contrastText: "#402D12",
    },

    info: {
      main: "#3E21F3",
      light: "#808080",
      dark: "#09181A",
      contrastText: "#2E7980",
    },
  },

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderColor: `#CCCCCC`,
          backgroundColor: `#FAFAFA`,
          borderRadius: `4px`,
          height: `48px`,
          width: `100%`,
        },
        input: {
          lineHeight: `100px`,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          "&.MuiInputLabel-outlined": {
            transform: "translate(14px, 14px) scale(1)",
          },
          "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
            transform: "translate(14px, -9px) scale(0.75)",
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#f8feff",
            border: "1.5px solid #2e7980",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#f8feff",
            border: "1.5px solid #09181a",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textTransform: "none",
          letterSpacing: "1.5px",
          color: "#25004D",
          "&:hover": {
            color: "#09181A",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: ``,
    },
  },

  typography: {
    // Define typography settings
    h1: {
      fontSize: "2rem",
      fontWeight: 800,
      fontFamily: "Inter",
    },
    h2: {
      fontSize: "1rem",
      fontWeight: 600,
      fontFamily: "Inter",
      lineHeight: 1,
      textTransform: "uppercase",
      letterSpacing: 1,
      color: "#00000099"
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 800,
      fontFamily: "Inter",
      lineHeight: 1.2,
    },
    h4: {
      fontSize: "0.875rem",
      fontWeight: 400,
      fontFamily: "Inter",
      lineHeight: 1.25,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 600,
      fontFamily: "Inter",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 600,
      fontFamily: "Inter",
      lineHeight: 1.43,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "#808080",
      fontFamily: "Inter",
      lineHeight: 1.42,
    },

  },
  spacing: [0, 4, 8, 16, 24, 36, 48],
});

export default theme;
