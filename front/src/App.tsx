import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
