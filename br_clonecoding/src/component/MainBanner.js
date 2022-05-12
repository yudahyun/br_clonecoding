/**
 * @filename: MainBanner.js
 * @description: 메뉴 아래 메인 슬라이더  
 * @author: 유다현(ekgus1129@gmail.com)
 */

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react';
import styled from "styled-components";
import "../assets/scss/nav.scss";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",
                           zIndex:"999" ,
                           position:"absolute",
                           right: "104px",
                           textIndent: "22px"
                           }}
        onClick={onClick}>
          <img src="http://www.baskinrobbins.co.kr/assets/images/main/btn_banner_next.png" alt="prev"/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block",
                           zIndex:"999" ,
                           position:"absolute",
                           left: "15px",
                           textIndent: "-32px"
                           }}
        onClick={onClick}>
          <img src="http://www.baskinrobbins.co.kr/assets/images/main/btn_banner_prev.png" alt="prev"/>
      </div>
    );
  }

const SlideDiv = styled.div`
    width: 100%;
    
    img{
        width: 100%;
    }
    
`
  
const MainBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        // autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      
    return (
       <div>
           <img width="100%" src="http://www.baskinrobbins.co.kr/upload/main/1714824579.jpg" alt="피카피카" />
        <Slider {...settings} style={{width:"100%"}}>
          <SlideDiv>
            <img src="http://www.baskinrobbins.co.kr/upload/main/1714824551.jpg" alt="1"/>  
          </SlideDiv>
          <SlideDiv>
            <img src="http://www.baskinrobbins.co.kr/upload/main/1649133684.png" alt="2"/>  
          </SlideDiv>
          <SlideDiv>
            <img src="http://www.baskinrobbins.co.kr/upload/main/1649140992.png" alt="10"/>  
          </SlideDiv>

          
        </Slider>
      </div>
    );
};

export default React.memo(MainBanner);