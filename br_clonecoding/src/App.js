/**
 * @filename: App.js
 * @description: 컴포넌트 랜더링 파일 
 * @author: 유다현(ekgus1129@gmail.com)
 */


import React from "react";
import Header from "./component/Header";
import MainBanner from './component/MainBanner';
import EventSection from './component/EventSection';
import Menu from "./component/Menu";
import Sns from './component/Sns';
import Footer from "./component/Footer";

function App() {
  return (
    <div>
     <Header/>
     <MainBanner/>
     <EventSection/>
     <Menu/>
     <Sns/>
     <Footer/>
    </div>
  );
}

export default App;
