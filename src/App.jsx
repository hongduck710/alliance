import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import  "./App.css";
import  "./index.css";

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
  *{margin: 0; padding: 0; box-sizing:border-box;}; 
  a{text-decoration:none;}
  ul,li{list-style:none;}
  body{font-size:16px;}


  nav{width: 100%; }
  nav ul.color-deco{width:100%; margin:auto; display:flex; box-shadow: 0 0px 4px rgba(0,0,0,0.23);}
  nav ul.color-deco li{height: 13px; width:33.333%; }
  nav ul.color-deco li.white{background-color:#fff;}
  nav ul.color-deco li.red{background-color:#FE4C4C;}
  nav ul.color-deco li.blue{background-color:#6F6AFF;}
  nav a{color: #1C1C1D;margin: auto; font-size: 39px;font-family: "Playfair Display", serif;}
  nav a span:first-child{color:#EF2C2C;}
  nav a span:last-child{color: #1e1ee2;}

  nav .menus a{}

`;

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ < MainLayout /> } >
        <Route index element={<HomePage /> } />
      </Route>

    )
  );

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={ router } />
    </>
  );
}

export default App;
