import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 16,
    button: {
      fontSize: "2rem",
    },
  },
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});
