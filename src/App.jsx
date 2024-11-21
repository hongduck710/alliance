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
import AboutPage from "./pages/AboutPage";

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
 
  @font-face {
    font-family: 'TTSahmyookUniversityR';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2410-1@1.0/TTSahmyookUniversityR.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'HANAMDAUM';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/HANAMDAUM.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

  .tangerine-regular {
  font-family: "Tangerine", cursive;
  font-weight: 400;
  font-style: normal;
}

.tangerine-bold {
  font-family: "Tangerine", cursive;
  font-weight: 700;
  font-style: normal;
}

.gowun-batang-regular {
  font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;
}

  *{margin: 0; padding: 0; box-sizing:border-box;}
  a{text-decoration:none;}
  ul,li{list-style:none;}
  img{display:block;}
  body{font-size:16px;font-family: "pretendard"; letter-spacing: -0.5px;}
  .w1500{max-width:1500px; width:100%; margin:auto;}
  .w1400{max-width:1400px; width:100%; margin:auto;}
  .w1350{max-width:1350px; width:100%; margin:auto;}
  .min-h{min-height:1000px;}

  nav{width: 100%; box-shadow: 0 0px 4px rgba(0,0,0,0.23); position:sticky; top:0; background-color:#fff;z-index: 1;}
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

  // 메인 카드
  .main-cards {margin-top:118px;}
  .main-cards h1 {color: #222222; font-size:81px; text-align:center; margin-bottom:93px;  }
  .main-cards ul{display:flex; gap:55px; }
  .main-cards li{width:25%; text-align:center; border:1px solid #CBCBCB; padding:35px 30px; position:relative;background-color:#fff;}
  .main-cards li:before,
  .main-cards li:after{position:absolute; content:""; width:131px; height:131px; display:block;background-color:transparent; }
  .main-cards li:before{border-left:5px solid #F54A4A;border-top: 5px solid #F54A4A; top:-6px; left:-6px;}
  .main-cards li:after{border-right: 5px solid #2C289C; border-bottom: 5px solid #2C289C; right:-6px; bottom:-6px;}
  .main-cards li img{margin:auto; height:38px;}
  .main-cards li h2{font-size:32px; color:#000;    font-family: 'TTSahmyookUniversityR'; margin-bottom:30px;}
  .main-cards li p{text-align:left;margin-top:30px; border-top:1px solid #CBCBCB; padding-top:30px; color:#222222;
  font-size:17px; line-height:37px;}
  // 메인 인트로
  .main-intro {width:100%; margin: 172px auto 0 auto; padding:58px 0;
    background:linear-gradient(to right, #131550 -30%,#5E7FFF);}
  .main-intro .w1500 {display:flex; justify-content:space-between;}
  .main-intro .w1500 > div{width:50%;}
  .main-intro .w1500 .intro-contents{ color:#fff;}
  .main-intro .w1500 .intro-contents h1{font-weight:800; font-size:46px;word-spacing: -2px; position:relative;}
  .main-intro .w1500 .intro-contents h1:after{content:""; display:block; width:100%; height:1px; background-color:#fff;
  margin:16px 0 34px 0;}
  .main-intro .w1500 .intro-contents h1 img{position: absolute;
  right: 0px;
  transform: translateY(50%);
  bottom: 3%;}
  .main-intro .w1500 .intro-contents p{font-size:23px;line-height: 42px;
    word-break: keep-all;}

  .main-intro .w1500 > div.youtube-video{text-align:right; }
  .main-intro .w1500 > div.youtube-video iframe{box-shadow: 20px 20px 0 rgba(0,0,0,0.41); display:inline-block;}


    // 메인페이지 공통 헤드라인
    .video-class > h1, .class-schedules h1, .partners h1{color:#222; font-size:39px; margin-bottom:50px;font-weight: 700;word-spacing: -2px;}
    .video-class h2, .class-schedules h2, .partners h2 {color:#A1A4F5; font-size:32px; margin-bottom: 6px;}

    // 온라인강의 리스트
    .video-class{margin-top: 150px;}
    .video-class h1 .view-all{font-size:22px; float:right; border: 2px solid #C4C4C4; padding:5px 14px;}

    .video-class h1 .view-all img{display:inline-block;}

    .video-class ul{display:flex;  gap:2%; justify-content:space-between;}
    .video-class ul li {cursor: pointer;}
    .video-class ul li .thumbnail-wrap{height:254px; overflow:hidden; border-radius:15px; position:relative;}
    .video-class ul li .thumbnail-wrap:after{border-radius: 50%;content:"▶"; display:block;position:absolute; top:50%; left:50%; 
      transform:translate(-50%, -50%); width: 80px; height: 80px; padding-left: 3px;
  border: 3px solid #fff; text-align: center; line-height: 80px; color: #fff; font-size: 41px;}
    .video-class ul li .thumbnail-wrap img{width:100%;padding-left: 3px;}
    .video-class ul li h1{font-size:22px; color:#434343;word-break: keep-all; font-weight: 800; margin-top:12px;}

    //  수강 스케줄
    .class-schedules{margin-top:160px;}
    .class-schedules ul{display:flex; justify-content:space-between; gap:3.3%;}
    .class-schedules ul li {width:25%; border: 1px solid #CBCBCB; padding: 7px;
    height:315px; }
    .class-schedules ul li a{width:100%; height:100%;display:block;
    
    border: 2px solid #CBCBCB; padding:32px 0 32px 40px;
    }
    .class-schedules ul li:nth-child(odd) a{background:linear-gradient(135deg, #2E3FA5, #D6DCFF);}
    .class-schedules ul li:nth-child(even) a{background:linear-gradient(135deg, #DE3535, #FFC8B4);}
    .class-schedules ul li a h3{color:#fff; font-size:48px;    font-family: 'HANAMDAUM';}
    .class-schedules ul li a h3 svg{float:right; font-size:65px; padding-right:40px;}
    .class-schedules ul li a h4{margin-top:30px; font-size:29px; color:#fff; font-weight:bold;
     width:fit-content;  padding-left:44px; left:-44px; position:relative; }
    .class-schedules ul li a h4 span{font-size:25px;display:inline-block;
      padding:15px 17px; margin-left: 32px;}
    .class-schedules ul li:nth-child(odd) a h4{background-color:#3F439B;}
    .class-schedules ul li:nth-child(odd) a h4 span{ background-color:#2B2F81;}
    .class-schedules ul li:nth-child(even) a h4{background-color:#DB2E34;}
    .class-schedules ul li:nth-child(even) a h4 span{ background-color:#BF2328;}
    
    
    // 파트너
    .partners {margin-top:160px;}
    .partners ul{display:flex; justify-content:space-between; gap:53px;}
    .partners ul li{width: 25%; border:1px solid #DBDBDB; padding: 20px;
    display: flex; justify-content: center; align-items: center; }
    .partners ul li img{width: 100%;}

    // 푸터
    footer{background-color:#444444; width:100%;margin:200px auto 0 auto; padding:44px 0;}
    footer section{ margin:auto; color:#fff; display:flex; justify-content:space-between; flex-wrap: wrap;
    }
    footer section address{line-height:29px; width: calc(100% - 27% - 282px); padding-left: 7.4%;}
    footer section h1.logo{max-width:282px; width:100%;}
    footer section h1.logo img{height:100%;}
    footer section dl dt svg{margin-right: 3px;}
    footer section .hours-location{width:27%;}
    footer section .hours-location dl.location,
    footer section .hours-location dl.location dt,
    footer section .hours-location dl.location dd,
    footer section .hours-location dl.location dd iframe,
    footer section .hours-location dl.hours,
    footer section .hours-location dl.hours dt{width:100%;}
    footer section .hours-location dl.location{margin-top:20px;}
    footer section .hours-location dl.location iframe{height:250px;}
    footer section .hours-location dl.location dt,
    footer section .hours-location dl.hours dt{margin-bottom:10px;}
    footer section .hours-location dl.hours{display:flex; flex-wrap:wrap;
    justify-content:space-between;}
    footer section .hours-location dl.hours dd:last-child{width:100%; margin-top:6px;}
    footer.footer-bottom{background-color:#333333; width:100%; margin:0 auto; color:#fff; padding:15px 0; }
    footer.footer-bottom section ul{display:flex; justify-content: space-between; gap:36px; align-items:center;}
    footer.footer-bottom section{color:#999999;}
    footer.footer-bottom section address{padding-left:0;}

    //about페이지
    .about h1{font-size:44px; text-align:center; color:#222222;  margin:130px auto 60px auto; font-family: "Tangerine",cursive;}
    .about .intro-wrap, 
    .about .intro-wrap img{width:100%; margin:auto;}
    .about .intro-wrap p{margin-top:65px; font-size:23px; color:#333333; line-height:37px;}

`;

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      
        <Route path="/" element={ < MainLayout /> } >
          <Route index element={<HomePage /> } />
          <Route path="/about" element={<AboutPage/>} />
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
