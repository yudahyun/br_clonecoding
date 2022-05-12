/**
 * @filename: Menu.js
 * @description: 메뉴들 
 * @author: 유다현(ekgus1129@gmail.com)
 */

import React from 'react';
import menuImg from "../assets/img/img_menu_list.png";
import styled from "styled-components";

const LinkMenuSt = styled.div`
    background: url(http://www.baskinrobbins.co.kr/assets/images/main/bg_menu.jpg) 50% 0 no-repeat;
    h3{
        padding: 73px 0 40px;
        text-align: center;
        text-transform: uppercase
    }
    img{
        display: block;
        margin: 0 auto;
    }
`
const Menu = () => {
    return (
        <LinkMenuSt>
            <h3>br menu</h3>
           <img src={menuImg} useMap="#image-map" alt="이벤트 페이지로 이동"/>

            <map name="image-map">
                <area target="_blank" alt="icecream" title="icecream" href="icecream" coords="221,33,605,321" shape="rect" />
                <area target="_blank" alt="icecreamcake" title="icecreamcake" href="icecreamcake" coords="923,496,659,44" shape="rect"/>
                <area target="_blank" alt="beverage" title="beverage" href="beverage" coords="21,384,227,720" shape="rect" />
                <area target="_blank" alt="coffee" title="coffee" href="coffee" coords="285,376,599,645" shape="rect" />
                <area target="_blank" alt="dessert" title="dessert" href="dessert" coords="294,720,602,866" shape="rect" />
                <area target="_blank" alt="gift" title="gift" href="gift" coords="652,548,916,822" shape="rect" />
            </map> 
        </LinkMenuSt>
    );
};

export default React.memo(Menu);