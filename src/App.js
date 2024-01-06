import Home from "./pages/Home";
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color : #0E2368;
    --secondary-color : #E23744;
    --font-gray-light : #444957;
    --font-family-roboto: 'Roboto', sans-serif;
    --font-family-poppins: 'Poppins', sans-serif;
    --font-family-source-sans: 'Source Sans 3', sans-serif;
     --font-family-open-sans: 'Open Sans', sans-serif;
  }
  
  `


function App() {
  return (
   <>
   <GlobalStyle/>
    <Home/>
   </>
  );
}

export default App;
