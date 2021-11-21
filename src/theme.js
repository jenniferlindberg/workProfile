import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#FB76BF",
      main: "#FA1994",
      dark: "#DF007A",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#CFFD77",
      main: "#AEFD19",
      dark: "#9FF300",
      contrastText: "#000000",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
