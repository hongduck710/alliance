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
import CenterClass from "./pages/CenterClass";
import Login from "./components/Login";
import Join from "./components/Join";

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
  body{font-size:16px;font-family: "pretendard";}
  .w1500{max-width:1500px; width:100%; margin:auto;}
  .w1400{max-width:1400px; width:100%; margin:auto;}
  .w1350{max-width:1350px; width:100%; margin:auto;}


  header{width: 100%; box-shadow: 0 0px 4px rgba(0,0,0,0.23); position:sticky; top:0; background-color:#fff;z-index: 2;}
  header ul.color-deco{width:100%; margin:auto; display:flex; box-shadow: 0 0px 4px rgba(0,0,0,0.23);}header ul.color-deco li{height: 11px; width:33.333%; }
  header ul.color-deco li.white{background-color:#fff;}
  header ul.color-deco li.red{background-color:#FE4C4C;}
  header ul.color-deco li.blue{background-color:#6F6AFF;}

  header  nav .w1500{display: flex; flex-wrap: wrap; align-items:center; justify-content:space-between;}
  header  nav a{color: #1C1C1D; font-family: 'Pretendard-Regular';}
  header  nav .logo a{font-size: 39px;font-family: "Playfair Display", serif;}
  header  nav a span:first-child{color:#EF2C2C;}
  header  nav a span:last-child{color: #1e1ee2;}

  header  nav .menus a{color:#333; font-size:17px; font-weight: 400; margin-right:58px;}
  header  nav .menus a:last-child{margin-right:0;}
  header  nav .menus .main-menu{position:relative; padding:33px 0; display:inline-block;}
  header  nav .menus .main-menu.login{margin-right:0;}
  header  nav .menus .main-menu.login:after{content:"/";}
  header  nav .menus .main-menu .sub-menu{opacity:0; z-index:-1;
  position:absolute; top:64px; left:50%; transform:translateX(-50%); background-color:#fff;
  width:167%;padding: 15px 10px;box-shadow: 0 0px 4px rgba(0,0,0,0.23); transition: 0.3s ease-in-out;}
  header  nav .menus .main-menu:hover .sub-menu{opacity:1;}
  header  nav .menus .main-menu .sub-menu a{margin-right:0; width:100%;
  display:block; text-align:center; line-height:1.5;}
  .m-hamburger-btn{display:none;font-size: 23px;}
  .open-menus{display:block !important;}


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
  .main-intro {width:100%; margin: 172px auto 0 auto; padding:58px 0; position: relative;
    background:linear-gradient(to right, #131550 -30%,#5E7FFF);}
  .main-intro:after{content: "";
  display: block;
  width: 34%;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  height: 101%;}
  .main-intro .w1500 {display:flex; justify-content:space-between; flex-wrap:wrap;}
  .main-intro .w1500 > div{width:50%;}
  .main-intro .w1500 .intro-contents{ color:#fff;}
  .main-intro .w1500 .intro-contents h1{font-weight:800; font-size:46px;word-spacing: -2px; }
  .main-intro .w1500 .intro-contents h1 p{width:100%; height:1px; background-color:#fff; position:relative;
  margin:16px 0 34px 0;}
  .main-intro .w1500 .intro-contents h1 p img{position: absolute;
  right: -2px;
  transform: translateY(50%);
  bottom: 1px;}
  .main-intro .w1500 .intro-contents p{font-size:23px;line-height: 42px;
    word-break: keep-all;}

  .main-intro .w1500 > div.youtube-video{text-align:right; max-width:580px; width:50%;}
  .main-intro .w1500 > div.youtube-video h2{position:relative;  padding-bottom: 50%; width:100%;z-index:1;}
  .main-intro .w1500 > div.youtube-video h2 iframe{box-shadow: 20px 20px 0 rgba(0,0,0,0.41);
  display: inline-block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}


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
    
    border: 2px solid #CBCBCB; padding:32px 0 32px 0;
    }
    .class-schedules ul li:nth-child(odd) a{background:linear-gradient(135deg, #2E3FA5, #D6DCFF);}
    .class-schedules ul li:nth-child(even) a{background:linear-gradient(135deg, #DE3535, #FFC8B4);}
    .class-schedules ul li a h3{color:#fff; font-size:48px;    font-family: 'HANAMDAUM';margin-left: 44px;}
    .class-schedules ul li a h3 svg{float:right; font-size:65px; padding-right:40px;}
    .class-schedules ul li a h4{margin-top:30px; font-size:29px; color:#fff; font-weight:bold;
        left:-4px; position:relative; max-width: 258px; width:100%; text-align:center;}
     .class-schedules ul li a h4 strong{ display:inline-block; text-align:center;padding: 13px 0px;}
    .class-schedules ul li a h4 span{font-size:25px;float:right;
      padding:15px 17px;  }
      .class-schedules ul li a h4:after{content:""; display:block; clear: both;}
    .class-schedules ul li:nth-child(odd) a h4 {background-color:#3F439B;}
    .class-schedules ul li:nth-child(odd) a h4 span{ background-color:#2B2F81;}
    .class-schedules ul li:nth-child(even) a h4 {background-color:#DB2E34;}
    .class-schedules ul li:nth-child(even) a h4 span{ background-color:#BF2328;}
    
    
    // 파트너
    .partners {margin:160px auto 200px auto;}
    .partners ul{display:flex; justify-content:space-between; gap:53px;}
    .partners ul li{width: 25%; border:1px solid #DBDBDB; padding: 20px;
    display: flex; justify-content: center; align-items: center; }
    .partners ul li img{width: 100%;}

    // 푸터
    footer{background-color:#444444; width:100%;margin:0 auto 0 auto; padding:44px 0;}
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
    footer section .hours-location dl.location iframe{height:250px; border-radius:8px;}
    footer section .hours-location dl.location dt,
    footer section .hours-location dl.hours dt{margin-bottom:10px;}
    footer section .hours-location dl.hours{display:flex; flex-wrap:wrap;
    justify-content:space-between;}
    footer section .hours-location dl.hours dd:last-child{width:100%; margin-top:6px;}
    footer.footer-bottom{background-color:#333333; width:100%; margin:0 auto; color:#fff; padding:15px 0; }
    footer.footer-bottom section ul{display:flex; justify-content: space-between; gap:36px; align-items:center;}
    footer.footer-bottom section{color:#999999;align-items:center;}
    footer.footer-bottom section address{padding-left:0;line-height:1; 
      width:fit-content; }

    //about페이지
    .about h1{font-size: 58px; text-align:center; color:#222222;  margin:130px auto 60px auto; font-family: "Tangerine",cursive;}
    .about .intro-wrap, 
    .about .intro-wrap img{width:100%; margin:auto;}
    .about .intro-wrap p{margin-top:65px; font-size:23px; color:#333333; line-height:37px;}
    .about .location{margin:150px auto 200px auto; width:100%; display: flex;
      justify-content: space-between; gap:70px; }
    .about .location .map,
    .about .location .route-guide {width:50%;}
    .about .location .route-guide h2{font-size:33px; color:#222; border-bottom:1px solid #E9E9E9; padding-bottom:12px;}
    .about .location .route-guide dl dt{font-size:24px; font-weight:600; color:#333333;}
    .about .location .route-guide dl dt svg{color:#FFA5BE;}
    .about .location .route-guide dl dd{font-size:20px; color:#333; margin-top:16px; line-height:28px;}
    .about .location .route-guide dl dt{margin-top:45px;}
    .about .location .map iframe{width:100%;height: 400px;}

    //센터강의 페이지
    .page-headline{text-align:center; margin: auto; padding-top:110px;}
    .page-headline h1{font-size:39px;color:#1C1C1D;
    font-family:"Playfair Display",serif; }
    .page-headline h1 span:first-child{color:#EF2C2C;}
    .page-headline h1 span:last-child{color:#1e1ee2;}

    .page-headline h2 {font-family: 'Happiness-Sans-Bold'; font-size:41px; color: #222222; margin-top:4px;}

  table.calendar, 
  table.calendar tr, 
  table.calendar tr td, 
  table.calendar tr th{border: 1px solid #000;;}

  .class-schedule-wrap{margin:80px auto 146px auto;}
  .class-schedule-wrap::after{content:""; display:block; clear: both; font-size:22px;}
  .class-info{  width:48%; float:left;}
  .calendar{width:49%;float:right;}

  .calendar table, .calendar table tr{width:100%;}
  .calendar table tr th{background-color:#F5617A; color:#ffffff; padding:5px 0;
  border-right:1px solid #fff; font-size:22px; }
  .calendar table tr th:last-child{border-right:none;}
  .calendar table tr td{border:1px solid #BCBCBC; height:105px; vertical-align:top;
  text-align:left; padding: 10px;}

  .class-info dl dt{  font-family: 'Happiness-Sans-Title'; font-size:28px; color:#333; padding:11px 0;
  border-top:1px solid #BCBCBC;
  border-bottom:1px solid #BCBCBC; }
  .class-info dl:nth-child(2){border-bottom:1px solid #BCBCBC; padding-bottom:30px;}
  .class-info dl dd span,   .class-info dl dd a{display:inline-block; vertical-align:middle;}
  .class-info dl dd span{ color:#fff; background-color:#FF8181;
  font-size:23px; padding:6px 0 6px 13px; width:35%;max-width: 170px; }
  .class-info dl dd:nth-child(2){margin-top:30px;}
  .class-info dl dd:nth-child(3) {margin:10px 0;}
  .class-info dl dd:nth-child(4){margin-bottom:30px;}
  .class-info dl dd a{margin-left:35px; }
  .class-info dl dd:nth-child(2) a,
  .class-info dl dd:nth-child(3) a{font-family: "Playfair Display",serif; font-size:32px; color:#333;}
  .class-info dl dd:nth-child(4) a{font-size:25px; color:#222222; border:1px solid #585858;
  max-width:280px; width:100%; border-radius:50px; text-align:center; padding:5px 0;}
  .class-info dl dd p{color: #333333; font-size:17px; line-height:29px;}

  


  ul.level-curriculums{width:100%; margin:auto;display: flex;
  justify-content: space-between; gap: 30px;}
  ul.level-curriculums li{box-shadow: 0 3px 6px rgba(0,0,0,0.16)}
  ul.level-curriculums li h1{background-color:#FB5B5B; color:#fff; 
    font-size:35px;letter-spacing: 13px; text-align:center; 
    text-align:center; padding:10px 0; }
  ul.level-curriculums li h2{position:relative;top: 23px;
      font-family: "Roboto", sans-serif;
      color:#111;
  font-weight: 900;
  font-style: normal;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  font-size:90px; background-color:#F2F2F2;
text-align:center; border-radius:50%;
  width:170px; height:170px; line-height:170px;
  margin:auto;}
  ul.level-curriculums li p{background-color:#6F8FE5;
  color:#fff; font-size:18px; line-height:24px;
  padding:48px 30px 30px 30px;}
  ul.level-curriculums li h1:first-letter{padding-left:10px;}

  .center-classes{display:flex; justify-content: center;gap:6px; 
  flex-wrap:wrap; }
  .center-classes,
  .center-classes .class-tab {width:100%; margin:auto;}
  .center-classes .class-tab input[type="radio"]{display:none;}
  .center-classes .class-tab{display:flex;gap:6px; justify-content:center;
    align-items: center; }
  .center-classes .class-tab label{background-color:#6F6AFF;cursor:pointer;
  color:#fff; max-width:255px; width:100%; text-align:center; border-radius:5px; height:46px;
  align-content: center;
}
.center-classes .class-tab:first-child{margin-top:241px;}
  .center-classes .class-tab:first-child label:nth-child(even){background-color:#FE4C4C;}
  .center-classes .class-tab:nth-child(2) label:nth-child(odd){background-color:#FE4C4C;}

.currculums{display:flex;gap:55px 30px; margin:120px auto 200px auto; flex-wrap:wrap;}

.currculums h1{background-color:#DF2040; color:#fff; text-align:center;
  width:100%; font-size:30px; padding: 8px 0;letter-spacing: 10px;}

.currculums ul.curriculum{width:48%; margin:auto;border:1px solid #BCBCBC;
  display: flex; flex-wrap: wrap;  padding:6px;}  
.currculums ul.curriculum li span{background-color:#FF5768;
color:#fff; padding:5px 0; text-align:center; max-width:116px; width:100%;
min-height:50px; align-content:center;}

.currculums ul.curriculum li span,
.currculums ul.curriculum li strong,
.currculums ul.curriculum li a{display:inline-block; vertical-align:middle; text-align:center; font-size:19px;line-height: 1.05;}
.currculums ul.curriculum li.register-class a{width:100%;}

.currculums ul.curriculum li strong,
.currculums ul.curriculum li a,
.currculums ul.curriculum li.curriculum-detail button{width:calc(100% - 116px);}

.currculums ul.curriculum li{width:50%;border-bottom:1px solid #F1F1F1; 
  padding: 3px 0;}
.currculums ul.curriculum li.class-name,
.currculums ul.curriculum li.register-class{width:100%;}
.currculums ul.curriculum li.register-class{padding:23px 0;text-align: center; border-bottom:none;}
.currculums ul.curriculum li.register-class a{color:#fff; background:#A2001B; 
  background:linear-gradient(to bottom, #FE3153,#A2001B); padding : 10px 0;
max-width:273px; margin:auto; font-size:25px; border-radius:4px; position:relative;}
.currculums ul.curriculum li.register-class a svg{font-size:18px;
position:absolute; top:50%; transform:translateY(-50%); right:13px;}

.currculums ul.curriculum li.curriculum-detail a{background-color:#DF2040; color:#fff;
max-width:98px; width:100%; margin:auto; font-size:17px; padding:5px 7px; display: flex;
  justify-content: space-between;
  align-items: center; border-radius:3px;}
.currculums ul.curriculum li.curriculum-detail a svg {font-size:12px; vertical-align:middle; display:inline-block;}

//로그인, 회원가입 페이지
.login-page,
.join-page{background-color:#F3F3F3; padding-bottom:200px;}
.login-page .form-wrap,
.join-page .form-wrap{max-width:440px; width:100%; height:100%; margin:80px auto 0 auto;
background-color:#fff; padding:70px 45px 86px 45px; position: relative;
border: 1px solid #BBBBBB; box-shadow:0 3px 6px rgba(0, 0, 0, 0.16)}
.login-page .form-wrap form,
.join-page .form-wrap form{width:100%; position:relative; z-index:1;}
.login-page .form-wrap:before,
.login-page .form-wrap:after,
.join-page .form-wrap:before,
.join-page .form-wrap:after{ position:absolute; display:block; content:"";
width:166px; height:166px;}
.login-page .form-wrap:before,
.join-page .form-wrap:before{ border-left: 5px solid #F54A4A;
  border-top: 5px solid #F54A4A;
  top: -6px;
  left: -6px;}
.login-page .form-wrap:after,
.join-page .form-wrap:after{
  border-right: 5px solid #2C289C;
  border-bottom: 5px solid #2C289C;
  right: -6px;
  bottom: -6px;
}  



.login-page .form-wrap form input:first-child,
.join-page .form-wrap form input:first-child,
.join-page .form-wrap .address-wrap input:first-child{margin-top:0;}

.login-page .form-wrap form input,
.join-page .form-wrap form input,
.join-page .form-wrap .address-wrap input{border: 1px solid #cccccc; width:100%;
font-size:16px; color:#999999; outline:none; padding: 15px 10px;
margin-top:8px;}
.login-page .form-wrap form input,
.join-page .form-wrap form input[type="password"]{margin-top:8px;}
.login-page .form-wrap form button.login-btn,
.join-page .form-wrap form button.join-btn{background-color:#FF4B69;
text-align:center; width:100%; font-size:26px; color:#fff; padding:13px 0; letter-spacing:11px;
text-indent: 11px;}

.join-page .form-wrap .address-wrap{margin:30px auto 30px auto;width:100%;}
.join-page .form-wrap .address-wrap .btn-wrap{display:flex; justify-content:space-between; gap:7px;}
.join-page .form-wrap .address-wrap .btn-wrap button.search-address{font-size:16px;
color:#999; background-color:#F2F2F2; border:1px solid #CCCCCC; padding:15px 0px;
height:51px; width:30%;}
.join-page .form-wrap .address-wrap .btn-wrap input.postcode{width:70%;}
.maintain-login-wrap{width:100%; margin:12px auto 18px auto;}
.login-page .form-wrap form input[type="checkbox"]{display:none;}
.login-page .form-wrap form label[for="maintain-login"] svg{opacity:0; color:#fff;}
.login-page .form-wrap form label[for="maintain-login"]{border:1px solid #CCCCCC;
width:16px; height:16px; display:inline-block;vertical-align:middle; cursor: pointer;}
.login-page .form-wrap form input[type="checkbox"]:checked + label{
  background-color: #FF4B69; border:1px solid #FF4B69;
}
.login-page .form-wrap form input[type="checkbox"]:checked + label svg{
  display: block; opacity: 1;
}
.maintain-login-wrap span{content:"로그인상태 유지"; font-size:14px;
color:#999999; font-size:14px; vertical-align:middle; margin-left:10px;}

.login-page .form-wrap form .to-join{border:1px solid #AFAFAF; width:100%; letter-spacing: 3px;
text-align:center; display:block; padding:15px 20px; color:#333; font-size:22px; position:relative;}
.login-page .form-wrap form .to-join svg{width:14px; position:absolute; top:50%; transform:translateY(-50%);
right:20px;}

.login-page .form-wrap form .find-wrap{width:100%; margin:13px auto 43px auto;}
.login-page .form-wrap form .find-wrap:after{content:""; display:block; clear: both;}
.find-account{border-right:1px solid #999999;}
.find-account ,.find-password{
  color: #999999; font-size: 16px;
  width: 50%;
  float: left;
  text-align: center;
}

    @media (max-width:1510px) {
      .main-cards ul{gap:20px;}
    }
    @media (max-width:1500px){
      header nav{padding: 0 2%;}
      header nav .menus a{margin-right:40px;}
      .main-cards ul{justify-content:center;}
      .main-cards ul li{width:23%;}

      .main-intro .w1500 .intro-contents h1{font-size:38px;}
      .main-intro .w1500 .intro-contents p{font-size:19px;}
      .main-intro {padding:58px 2%;}
      .main-intro .w1500 .intro-contents{}
      .main-intro .w1500 > div.youtube-video iframe{width:100%;}
    }

    @media (max-width:1400px) {
      header nav .menus a{margin-right:30px; font-size:16px;}
      header nav .logo a { font-size:28px;}


      .main-intro .w1500 .intro-contents{padding-right:1.5%;}


      .video-class ul {gap:1%;}
      .video-class ul li .thumbnail-wrap{height:200px;}
      .class-schedules ul{gap:1%;}
      .class-schedules ul li a{padding: 32px 0 32px 0px; }
      .class-schedules ul li a h4{ margin-top: 20px; }
      .class-schedules ul li a h4:after{content:""; display:block; clear: both;}

      .partners ul{gap:25px;}

      footer{padding: 44px 2%;}
      footer.footer-bottom{padding:15px 2%;}
      footer.footer-bottom section ul{gap:20px; }
      footer.footer-bottom section address{text-align:center;}

      .about{padding:0 1%;}

      ul.level-curriculums{gap:15px; padding:0 1%;}
      
      .class-schedule-wrap,
      .center-classes{padding:0 1%;}
      .class-info dl dd:nth-child(2) a, .class-info dl dd:nth-child(3) a{font-size: 26px;}
      .class-info dl dd:nth-child(4) a{max-width:230px;}
      .class-info dl dd span{font-size:18px;}
      .class-info dl dd a{margin-left: 21px;}
      .currculums{padding:0 1%; gap:30px 0px;}
      .currculums ul.curriculum li span, 
      .currculums ul.curriculum li strong, 
      .currculums ul.curriculum li a{font-size:16px;}

    }
    @media (max-width:1200px) {
      .main-cards ul{gap:10px;}

      ul.level-curriculums li h2{width: 150px;
        height: 150px;line-height: 150px;}

      .class-schedules ul{gap: 7px 1%;}
      .class-schedules ul li{height: 270px;}
      
      .class-schedules ul li a h3{font-size:41px;margin-left:16px;} 
      .class-schedules ul li a h3 svg{font-size:58px;}


    }
    @media (max-width:1000px){
      header nav .logo a{font-size:25px;}
      header nav .menus a{margin-right:20px; font-size:14px;}
      .main-cards ul{flex-wrap:wrap;}
      .main-cards ul li{width:47%;}
      .main-cards h1{font-size:50px;}
      
      .video-class ul li .thumbnail-wrap{height:150px;}


      
      .class-schedules{padding: 6%;}
      .class-schedules ul{flex-wrap:wrap; justify-content:center;}
      .class-schedules h1,.class-schedules h2,
      .video-class > h1, .video-class h2,
      .partners  h1, .partners h2{text-align:center;}
      .video-class h1 .view-all{float:none; display:block; width:fit-content; margin:15px auto 0 auto;}
      .class-schedules ul li{width:49%;}

      footer section address{padding-left: 3%;}
      footer.footer-bottom section address,
      footer.footer-bottom section ul li a{font-size:14px;}
      footer.footer-bottom section address{width:100%;}
      footer.footer-bottom section ul{ margin:5px auto 0 auto;}

      ul.level-curriculums{gap:10px;}
      ul.level-curriculums li h2{width: 130px;
    height: 130px;
    line-height: 128px;
    font-size: 70px;}

    .class-info dl dd:nth-child(2) a, .class-info dl dd:nth-child(3) a{font-size:20px;}
    .class-info dl dd:nth-child(4) a{max-width:180px;}
    .class-info dl dd a{margin-left:14px;}
    ul.level-curriculums li p{font-size:14px;padding: 38px 10px 20px 10px;}

      .currculums ul.curriculum li span{max-width:90px;}
      .currculums ul.curriculum li strong, 
      .currculums ul.curriculum li.curriculum-detail button{
        width: calc(100% - 90px); 
      }
      .currculums ul.curriculum li span, 
      .currculums ul.curriculum li strong, 
      .currculums ul.curriculum li a{font-size:14px;}

      .currculums ul.curriculum li.curriculum-detail button a{max-width:85px;}
    }

    @media (max-width:768px){
      header nav .logo a{font-size:22px;}
      header nav .menus a{margin-right:17px;}
      .menus{display:none;}
      .m-hamburger-btn{display:block; cursor: pointer;padding: 22px 0;}
      header nav .menus,
      header nav .menus a{width:100%; font-size:16px;}
      header nav .menus .main-menu{text-align:center; padding: 20px 0;}
      header  nav .menus .main-menu.login:after{display:none;}
      header nav .menus .main-menu .sub-menu{position:static;transform:unset;
      width:100%; opacity:1; display:none; ; transition:none;
    box-shadow:unset;}
      header nav .menus .main-menu .sub-menu a{padding:5px 0;}

      header nav .menus .main-menu .sub-menu.open-menus{display:block;  margin: 20px 0 0 0;
        border-top: 1px solid #dddcdc; border-bottom:1px solid #dddcdc;}

      .video-class ul{flex-wrap:wrap;}
      .video-class ul li{width:100%; margin-top:50px;}
      .video-class ul li .thumbnail-wrap{height:254px;}

      .main-intro .w1500 .intro-contents{width:100%;}
      .main-intro .w1500 > div.youtube-video{margin: 30px auto 0 auto; width:100%;}
      .class-schedules,  .video-class,  .partners{padding: 0 4%;}
      .main-intro::after{display:none;}

      .partners ul{flex-wrap:wrap;gap: 24px 2%;}
      .partners ul li{width:48%; }

      footer section{flex-wrap:wrap;}
      footer section h1.logo{margin:auto;}
      footer section .hours-location{padding: 0 7.4%;}
      footer section .hours-location dl.hours{display:block;}
      footer section address{padding-left:7.4%;}
      footer section address{margin: 40px auto;}
      footer section address,
      footer section .hours-location{width:100%; }

      footer.footer-bottom section address{margin:0 auto; }
  
      ul.level-curriculums li h1{font-size: 25px;}
      ul.level-curriculums li h2{width: 110px;
        height: 110px; line-height:110px; font-size:60px;}


      .class-info{width:100%;}
  
      .class-info dl dd span{ font-size:23px; }
      .class-info dl dd a{margin-left:35px; }
  .class-info dl dd:nth-child(2) a,
  .class-info dl dd:nth-child(3) a{ font-size:32px; }
  .class-info dl dd:nth-child(4) a{font-size:25px; max-width:280px;}
  .calendar{width:100%; margin-top:50px;}

      

        .center-classes .class-tab{flex-wrap:wrap;}  
      .center-classes .class-tab label{ width:49%;}

      .currculums{flex-wrap:wrap;}
      .currculums ul.curriculum{width:100%;}
      .currculums ul.curriculum li span, 
      .currculums ul.curriculum li strong, 
      .currculums ul.curriculum li a{font-size:19px;}

      .currculums ul.curriculum li span{max-width:116px;}
      .currculums ul.curriculum li strong,
      .currculums ul.curriculum li.curriculum-detail button{width:calc(100% - 116px);}
      .currculums ul.curriculum li.curriculum-detail button a{max-width:98px;}  
    }
    @media (max-width:600px){
      footer.footer-bottom section address,
      footer.footer-bottom section ul li a{font-size: 14px;}    

      .class-info dl dd:nth-child(2) a, .class-info dl dd:nth-child(3) a{font-size:25px;}
      .class-info dl dd:nth-child(4) a{max-width:220px;}
      .class-info dl dd a{margin-left:20px; }

      .calendar table tr td{height:95px;}
      .currculums ul.curriculum li span, 
      .currculums ul.curriculum li strong, 
      .currculums ul.curriculum li a{font-size:16px;}

      .currculums ul.curriculum li span{max-width:90px;}
      .currculums ul.curriculum li strong,
      .currculums ul.curriculum li.curriculum-detail button{width:calc(100% - 90px);}
     
      ul.level-curriculums li h1{font-size:20px;}

      ul.level-curriculums{justify-content:center; flex-wrap:wrap;}
      ul.level-curriculums li{width:30%;}


    }
    @media (max-width:550px){
      .class-schedules ul li a h3{font-size: 36px;}
      .class-schedules ul li a h3 svg{padding-right:30px;}
    }
 
    @media (max-width:480px){
      .main-cards ul{gap:13px 10px;}
      .main-cards h1{font-size:35px;margin-bottom: 60px;}
      .main-cards li h2{font-size:24px;}
      .main-cards li {padding: 20px 15px;}
      .main-cards li img{height:32px;}
      .main-cards li p{
        font-size: 14px;
  line-height: 22px;
        margin-top :20px;
        padding-top :20px;
      }

      .class-schedules h1,    .video-class > h1, .partners  h1{font-size: 30px;} 

      .class-schedules h2, .video-class h2, .partners h2{font-size: 23px; margin-bottom:10px;}
      .class-schedules ul li{width:100%; height:auto;}
      .class-schedules ul li a h3 svg{padding-right:30px; font-size:65px;}
   
      .class-info dl dd a{margin-left:10px; font-size: 22px;}
      .class-info dl dd span{font-size:19px;}
      .calendar table tr th{font-size:17px;}
      .calendar table tr td{height:70px; font-size:12px; padding:6px;}
      .currculums ul.curriculum li span, 
      .currculums ul.curriculum li strong, 
      .currculums ul.curriculum li a{font-size:14px;}

      .currculums ul.curriculum li span{max-width:80px;}
      .currculums ul.curriculum li strong,
      .currculums ul.curriculum li.curriculum-detail button{width:calc(100% - 80px);}
      .currculums ul.curriculum li.curriculum-detail button a{max-width:85px;}

      ul.level-curriculums li h2{width: 100px;
      height: 100px;
      line-height: 100px;
      font-size: 55px;}
      ul.level-curriculums li p{font-size: 12px;
      padding: 30px 10px 10px 10px;
      line-height: 1.5;}

      .login-page, .join-page{padding:0 1% 200px 1%; }
      .login-page .form-wrap,
      .join-page .form-wrap{padding:70px 20px 86px 20px;}
    }
    @media (max-width:320px){

    }

`;

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      
        <Route path="/" element={ < MainLayout /> } >
          <Route index element={<HomePage /> } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/center-class" element={<CenterClass />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
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
