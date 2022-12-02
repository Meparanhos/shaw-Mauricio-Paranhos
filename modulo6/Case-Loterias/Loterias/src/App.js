import "./App.css"
import { ChakraProvider } from "@chakra-ui/react"
import { Router } from "./Routes/Router"
import GlobalState from "./Global/GlobalState"

function App() {
  return (
    <div>
      <GlobalState>
        <ChakraProvider>
          <Router />
        </ChakraProvider>
      </GlobalState>
    </div>
  )
}

export default App;