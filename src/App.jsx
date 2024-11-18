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
  img{display:block;}
  body{font-size:16px;font-family: 'Pretendard-Regular';}
  .w1500{max-width:1500px; width:100%; margin:auto;}

  nav{width: 100%; box-shadow: 0 0px 4px rgba(0,0,0,0.23); position:sticky; top:0; background-color:#fff;}
  nav ul.color-deco{width:100%; margin:auto; display:flex; box-shadow: 0 0px 4px rgba(0,0,0,0.23);}
  nav ul.color-deco li{height: 11px; width:33.333%; }
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

  // 메인배너
  .slider,
  .slider .slides,
  .slider .slides .slide,
  .slider .slides .slide img{width:100%; margin:auto;}

  // 메인 인트로
  .main-intro {width:100%; margin: 172px auto 0 auto; padding:58px 0;
    background:linear-gradient(to right, #131550 -30%,#5E7FFF);}
  .main-intro .w1500 {display:flex; justify-content:space-between;}
  .main-intro .w1500 > div{width:50%;}
  .main-intro .w1500 .intro-contents{ color:#fff;}
  .main-intro .w1500 .intro-contents h1{font-weight:800; font-size:46px;}
  .main-intro .w1500 .intro-contents h1:after{content:""; display:block; width:100%; height:1px; background-color:#fff;
  margin:16px 0 34px 0;}
  .main-intro .w1500 .intro-contents p{font-size:23px;line-height: 34px;}

  .main-intro .w1500 > div.youtube-video{text-align:right;}
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
