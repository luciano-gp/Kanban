import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { SidebarDrawerProvider } from "./components/contexts/SidebarDrawerContext";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default App;
