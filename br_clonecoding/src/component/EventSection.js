/**
 * @filename: EventSection.js
 * @description: 이벤트 섹션
 * @author: 유다현(ekgus1129@gmail.com)
 */


 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 import Slider from "react-slick";
 import React from 'react';
 import styled from "styled-components";
 import "../assets/scss/event.scss";


const TopTitle = styled.div`
    text-align: center;
    text-transform: uppercase;
    margin: 100px auto 50px;
`

const EventSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 4,
        className:"eventSlide",
        dotsClass:"eventDots"
      };
    
    return (
        <div>
            <TopTitle>br event</TopTitle>
            <Slider {...settings} >
                <div>
                    <img src="http://www.baskinrobbins.co.kr/upload/event/image/banner_delivery.png" alt="해피오더"/>
                    <img className="type" src="http://www.baskinrobbins.co.kr/assets/images/event/stit_store.gif" alt="해피오더"/>
                    <p className="title">해피오더 딜리버리로 간편하게 주문하세요!</p>
                    <p className="period">상시진행</p>
                </div>
                <div>
                    <img src="http://www.baskinrobbins.co.kr/upload/event/image/banner_delivery_bm.png" alt="해피오더"/>
                    <img className="type" src="http://www.baskinrobbins.co.kr/assets/images/event/stit_store.gif" alt="해피오더"/>
                    <p className="title">배달의 민족 으로 간편하게 주문하세요!</p>
                    <p className="period">상시진행</p>
                </div>
                <div>
                    <img src="http://www.baskinrobbins.co.kr/upload/event/image/banner_delivery_ygy.png" alt="해피오더"/>
                    <img className="type" src="http://www.baskinrobbins.co.kr/assets/images/event/stit_store.gif" alt="해피오더"/>
                    <p className="title">해피오더 요기요로 간편하게 주문하세요!</p>
                    <p className="period">상시진행</p>
                </div>
                <div>
                    <img src="http://www.baskinrobbins.co.kr/upload/event/image/banner_delivery_kakao.png" alt="해피오더"/>
                    <img className="type" src="http://www.baskinrobbins.co.kr/assets/images/event/stit_store.gif" alt="해피오더"/>
                    <p className="title">카톡으로 간편하게 주문하세요!</p>
                    <p className="period">상시진행</p>
                </div>
                <div>
                    <img src="http://www.baskinrobbins.co.kr/upload/event/image/1670146074.png" alt="해피오더"/>
                    <img className="type" src="http://www.baskinrobbins.co.kr/assets/images/event/stit_store.gif" alt="해피오더"/>
                    <p className="title">해피오더 딜리버리로 간편하게 주문하세요!</p>
                    <p className="period">상시진행</p>
                </div>
                <div>
                    <img src="http://www.baskinrobbins.co.kr/upload/event/image/1667538956.png" alt="해피오더"/>
                    <img className="type" src="http://www.baskinrobbins.co.kr/assets/images/event/stit_store.gif" alt="해피오더"/>
                    <p className="title">해피오더 딜리버리로 간편하게 주문하세요!</p>
                    <p className="period">상시진행</p>
                </div>
                <div>
                    <img src="http://www.baskinrobbins.co.kr/upload/event/image/1659436130.png" alt="해피오더"/>
                    <img className="type" src="http://www.baskinrobbins.co.kr/assets/images/event/stit_store.gif" alt="해피오더"/>
                    <p className="title">해피오더 딜리버리로 간편하게 주문하세요!</p>
                    <p className="period">상시진행</p>
                </div>
                <div>
                    <img src="http://www.baskinrobbins.co.kr/upload/event/image/1643869329.png" alt="해피오더"/>
                    <img className="type" src="http://www.baskinrobbins.co.kr/assets/images/event/stit_store.gif" alt="해피오더"/>
                    <p className="title">해피오더 딜리버리로 간편하게 주문하세요!</p>
                    <p className="period">상시진행</p>
                </div>
            </Slider>
        </div>
    );
};

export default React.memo(EventSection);