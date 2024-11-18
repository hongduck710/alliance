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
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

  *{margin: 0; padding: 0; box-sizing:border-box;}
  a{text-decoration:none;}
  ul,li{list-style:none;}
  body{font-size:16px;}
  .w1500{max-width:1500px; width:100%; margin:auto;}


  nav{width: 100%; box-shadow: 0 0px 4px rgba(0,0,0,0.23);}
  nav ul.color-deco{width:100%; margin:auto; display:flex; box-shadow: 0 0px 4px rgba(0,0,0,0.23);}
  nav ul.color-deco li{height: 13px; width:33.333%; }
  nav ul.color-deco li.white{background-color:#fff;}
  nav ul.color-deco li.red{background-color:#FE4C4C;}
  nav ul.color-deco li.blue{background-color:#6F6AFF;}

  nav .w1500{display: flex; flex-wrap: wrap; align-items:center; justify-content:space-between;padding: 28px 0;}
  nav a{color: #1C1C1D; font-family: 'Pretendard-Regular';}
  nav .logo a{font-size: 39px;font-family: "Playfair Display", serif;}
  nav a span:first-child{color:#EF2C2C;}
  nav a span:last-child{color: #1e1ee2;}

  nav .menus a{color:#333; font-size:17px; font-weight: 400; margin-right:58px;}
  nav .menus a:last-child{margin-right:0;}

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
