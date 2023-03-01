import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement
const root = ReactDOMClient.createRoot(rootElement);

const theme = extendTheme({
  colors: {
    brand: {
      500: "#F8F8FC"
    }
  }
});

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
