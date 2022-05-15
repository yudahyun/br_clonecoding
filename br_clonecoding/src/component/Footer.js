/**
* @filename: Footer.js
* @description: 최하단에 위치하는 컴포넌트 
* @author: Kim Hyuna, 유다현(ekgus1129@gmail.com)
*/

import React, {useState, useCallback} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import happy1 from "../assets/img/btn_happypoint.png";
import happy2 from "../assets/img/btn_happymarket.png";
import happy3 from "../assets/img/btn_spc_story.png";
import happy4 from "../assets/img/btn_norton.gif";
import happy5 from "../assets/img/btn_ccm_2.png";
import happy6 from "../assets/img/btn_ksa.png";
import ArrowOff from "../assets/img/family_size_off.png";
import ArrowOn from "../assets/img/family_size_on.png";

const Footerstyles = styled.footer`
    border-top: 1px solid #feaf2b;
    padding-bottom: 60px;
    a{text-decoration: none;}
    .policy {
        max-width: 1040px;
        height: 77px;
        line-height: 77px;
        margin: 0 auto;
        display: flex;
        justify-content:space-around;
        letter-spacing: -1px;
        li {
            text-align: center;
            &:nth-child(5) a {
                color: #ff7c98;
                font-weight: bold;
            }
            a {
                color: #726454;
                font-size: 14px;
            }
        }
    }
    .brandfamily {
        background: #f9f8f7;
        height: 75px;
        .inner {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            .brand {
                padding: 20px 0 0 222px;
                display: flex;
                img {
                    &:first-child {padding-right:49px;}
                    &:nth-child(2) {padding-right:53px;}
                    &:nth-child(3) {padding-right:51px;}
                    &:nth-child(4) {padding-right:9px;}
                    &:nth-child(5) {
                        width: 31px;
                        padding-right: 9px;
                    }
                }
            }
            .familysite {
                position: absolute;
                width: 150px;
                background: white;
                top: 21px;
                right: 196px;
                button {
                    width: 100%;
                    height: 32px;
                    border: 1px solid #d1cecc;
                    border-radius: 5px;
                    color: #b1ab9f;
                    font-size: 11px;
                    padding-left: 11px;
                    text-align: left;
                    text-transform: uppercase;
                    background: url(${ArrowOff}) no-repeat 100% 0;
                    &.On{
                        background: url(${ArrowOn}) no-repeat 100% 0;
                    }
                }
                ul {
                    display: none;
                    width: 100%;
                    padding: 5px 0;
                    background: white;
                    border: 1px solid #d1cecc;
                    border-radius: 5px 5px 0 0;
                    box-sizing: border-box;
                    position: absolute;
                    left: 0;
                    bottom: 28px;
                    li:hover {
                        cursor: pointer;
                        background: #f4f4f4;
                    }
                    a {
                        color: #726454;
                        height: 25px;
                        padding-left: 15px;
                        line-height: 25px;
                        font-size: 12px;
                    }

                }
            }
        }
    }
    .copyright {
        max-width: 1200px;
        margin: 0 auto;
        color: #635b56;
        font-size: 11px;
        text-align: center;
        letter-spacing: -1px;
        img {
            padding: 48px 0 35px;
            display: block;
            margin: 0 auto;
        }
        .footer-ul li {
            display: inline-block;
            padding: 0 15px 3px 0;
            line-height: 1.4;
        }
        p {
            color: #b1adab;
            padding-top: 12px;
        }
    }
`;

const Footer = () => {
    // boolean값으로 토글 효과 + 버튼 이벤트
    const [isOpen, setButton] = useState(false);
    const toggleBtn = useCallback(()=>{
        setButton(isOpen => !isOpen);
    },[]);
 
    return (
        <Footerstyles>
            <ul className='policy'>
                <li><Link to="">점포개설문의</Link></li>
                <li><Link to="">채용문의</Link></li>
                <li><Link to="">윤리신고센터</Link></li>
                <li><Link to="">이용약관</Link></li>
                <li><Link to="">개인정보처리방침</Link></li>
                <li><Link to="">영상정보처리기기운영관리방침</Link></li>
                <li><Link to="">거래희망회사 사전등록</Link></li>
            </ul>
            <div className='brandfamily'>
                <div className='inner'>
                    <div className='brand'>
                        <img src={happy1} alt="해피포인트"/>
                        <img src={happy2} alt="해피포인트"/>
                        <img src={happy3} alt="해피포인트"/>
                        <img src={happy4} alt="해피포인트"/>
                        <img src={happy5} alt="해피포인트"/>
                        <img src={happy6} alt="해피포인트"/>
                    </div>
                    <div className='familysite'>
                        <ul style={isOpen? {display:'block'}:{display:'none'}}>
                            <li><Link to="#!" target={'_blank'}>배스킨 스쿨</Link></li>
                            <li><Link to="#!" target={'_blank'}>SPC그룹사이트</Link></li>
                            <li><Link to="#!" target={'_blank'}>SPC MAGAZINE</Link></li>
                            <li><Link to="#!" target={'_blank'}>BR코리아</Link></li>
                            <li><Link to="#!" target={'_blank'}>해피포인트카드</Link></li>
                            <li><Link to="#!" target={'_blank'}>파스쿠찌</Link></li>
                            <li><Link to="#!" target={'_blank'}>삼립</Link></li>
                            <li><Link to="#!" target={'_blank'}>파리바게트</Link></li>
                            <li><Link to="#!" target={'_blank'}>던킨도너츠</Link></li>
                        </ul>
                        <button type="button" onClick={toggleBtn} className={isOpen? 'On':''}>family site</button>
                    </div>
                </div>
            </div>  
            <div className='copyright'>
                <img src="http://www.baskinrobbins.co.kr/assets/images/common/footer_logo.png" alt="푸터로고"/>
                <ul className="footer-ul">
                    <li>사업자 등록번호 :303-1234-1234</li>
                    <li>비알코리아(주) 대표이사 도세호</li>
                    <li>서울시 서초구 남남동</li>
                </ul>
                <ul className="footer-ul">
                    <li>TEL:123-1234-123</li>
                    <li>개인정보관리책임자 : 유다현</li>
                </ul>
                <p>Copyright &copy; 2016 BRKOREA Company. All Rights Reserved.</p>
            </div>
        </Footerstyles> 
    );
};

export default React.memo(Footer);