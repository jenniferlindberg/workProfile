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
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: {
      small: "calc(10px + 0.8vmin)",
      main: "calc(10px + 5vmin)",
      large: "calc(10px + 10vmin)",
    },
    fontFamily: {
      georgia: `"georgia", "palatino", "book antiqua", "palatino linotype", serif`,
      lobster: `"lobster", "cursive"`,
    },
    fontStyle: {
      italic: "italic",
    },
  },
});

export default theme;
