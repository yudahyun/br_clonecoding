/**
 * @filename: Nav.js
 * @description: 메뉴가 길어져서 밖으로 빼기
 * @author: 유다현(ekgus1129@gmail.com)
 */


import React,{useRef,useCallback} from 'react';
import styled from "styled-components";
import "../assets/scss/color.scss";

const WrapDivSt = styled.div`
    background:#fff;
    border-top:1px solid #f1f1f1;
    width: 100%;
    border: 1px solid red;

    nav{
        width:1200px;
        margin: 0 auto;
    }
`;

const Ulst = styled.ul`
    display: flex;
    justify-content: space-between;
    li{
        align-self: flex-start;
        a{
            display: block;
            padding:9px 15px;
            font-size: 13px;
            text-transform: uppercase;
            &.top-menu{
            display: block;
            text-align: center;
            font-size: 13px;
            padding: 9px 15px;
            text-align: center;
            color:#693337;
            text-decoration: none;
            font-weight: bold;
            }
            &.link-menu{
            text-decoration: none;
            font-weight: bold;
            color:#ccc;    
                &.join{
                    color:#ff7c98;
                }
            }
        }
        .img-ul{
            display: flex;
            margin: 0 0 0px -216px;
        }
        .ul-menu-list{
            height: 0;
            overflow: hidden;
            transition: height ease-out 0.5s;
            li{
                a{
                    text-align: center;
                    font-size: 14px;
                    color: #7b7b7b;
                    text-decoration: none;
                    padding:10px 0;
                    display: block;
                    &:hover{
                        color:#ff7c98;
                    }
                }
            }
        }
    }
`

const Nav = () => {
    //마우스 위치
    const hoverMenu =useRef();

    const menuRef = useRef([]);

    const openMenu =useCallback(()=>{
        // console.log(menuRef.current);
        menuRef.current.map((v)=>{
            return v.style.height="auto";
        })
    },[]);

    const closeMenu = useCallback(()=>{
        console.log("마우스떠남")
        menuRef.current.map((v)=>{
            return v.style.height="0";
        })
    },[]);

    return (
        <WrapDivSt>
            <nav>
                <Ulst onMouseLeave={closeMenu}>
                    <li>
                       <a className="link-menu" href="#!">login</a>
                    </li>
                    <li>
                        <a className="link-menu join" href="#!">join</a>
                    </li>
                    <li  onMouseEnter={openMenu}  ref={hoverMenu} >
                        <a  className="top-menu" href="#!">flavor of the month</a>
                        <ul className="img-ul ul-menu-list" ref={el => (menuRef.current[0] = el)}>
                            <li>
                                <img src="http://www.baskinrobbins.co.kr/assets/images/common/img_happypoint_app.jpg" alt="아이스크림"/>
                            </li>
                            <li>
                            <a href="#!"><img src="http://www.baskinrobbins.co.kr/assets/images/common/flavor/img_monthly_fom_220429.png?v=220228" alt="아이스크림"/></a>
                            </li>
                        </ul>
                    </li>
                    <li  onMouseEnter={openMenu}  ref={hoverMenu} >
                        <a className="top-menu" href="#!">menu</a>
                        <ul className="ul-menu-list"  ref={el => (menuRef.current[1] = el)}>
                            <li><a href="#!">아이스크림</a></li>
                            <li><a href="#!">아이스크림케이크</a></li>
                            <li><a href="#!">음료</a></li>
                            <li><a href="#!">커피</a></li>
                            <li><a href="#!">디저트</a></li>
                        </ul>
                    </li>
                    <li  onMouseEnter={openMenu}  ref={hoverMenu} >
                        <a  className="top-menu"  href="#!">영양 성분 및 알레르기</a>
                        <ul className="ul-menu-list"  ref={el => (menuRef.current[2] = el)}>
                            <li><a href="#!">아이스크림</a></li>
                            <li><a href="#!">음료</a></li>
                            <li><a href="#!">커피</a></li>
                        </ul>
                    </li>
                    <li  onMouseEnter={openMenu}  ref={hoverMenu} >
                    <a  className="top-menu" href="#!">event</a> 
                        <ul className="ul-menu-list"  ref={el => (menuRef.current[3] = el)}>
                            <li><a href="#!">진행중이벤트</a></li>
                            <li><a href="#!">당첨자발표</a></li>
                            
                        </ul>
                    </li>
                    <li  onMouseEnter={openMenu}  ref={hoverMenu} >
                    <a  className="top-menu" href="#!">store</a>
                        <ul className="ul-menu-list"  ref={el => (menuRef.current[4] = el)}>
                            <li><a href="#!">매장찾기</a></li>
                            <li><a href="#!">고객센터</a></li>
                            <li><a href="#!">단체주문</a></li>
                        </ul>
                    </li>
                    <li onMouseEnter={openMenu} ref={hoverMenu}>
                        <a  className="top-menu"  href="#!">about</a>
                        <ul className="ul-menu-list"  ref={el => (menuRef.current[5] = el)}>
                            <li><a href="#!">공지사항</a></li>
                            <li><a href="#!">보도자료</a></li>
                            <li><a href="#!">채용정보</a></li>
                            <li><a href="#!">점포개설문의</a></li>
                            <li><a href="#!">contact us</a></li>
                        </ul>
                    </li>
                </Ulst>
            </nav>
        </WrapDivSt>
    );
};

export default React.memo(Nav);