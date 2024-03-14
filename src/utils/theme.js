// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white", // Set text color to white for better contrast
      },
    },
  },
  colors: {
    brand: {
      500: "#008080",
    },
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  components: {
    Button: {
      // Changing the default props for all Button components
      baseStyle: {
        fontWeight: "bold",
      },
      // Adding another variant
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
      },
      hover: {
        _hover: {
          background: "linear-gradient(0deg, #FF008C -0.83%, #F7A724 100%)",
          // Change background color on hover
          color: "white", // Change text color on hover
        },
      },
    },
  },
});

export default theme;
