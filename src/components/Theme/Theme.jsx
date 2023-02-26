import { createTheme } from "@mui/material/styles";

import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: green[400],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});

export default theme;
