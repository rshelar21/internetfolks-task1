import Home from "./pages/Home";
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color : #0E2368;
    --secondary-color : #E23744;
    --font-gray-light : #444957;
    --bg-gray-color : #F8F8F8;
    --font-gray-light-2 : #646874;
    --font-gray-light-3 : #828B9C;
    --font-family-roboto: 'Roboto', sans-serif;
    --font-family-poppins: 'Poppins', sans-serif;
    --font-family-source-sans: 'Source Sans 3', sans-serif;
    --font-family-open-sans: 'Open Sans', sans-serif;
    --font-gray-color-4: #424961;
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
