/**
 * @filename: header.js
 * @description: 최상단 header 내용
 * @author: 유다현(ekgus1129@gmail.com)
 */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import Spinner from "./Spinner";
import Nav from "./Nav";
import Skeleton from "./Skeleton";

const HeaderSt = styled.header`
  width: 100%;
  border-top: 3px solid #ff7c98;
  border-bottom: 1px solid #3f291a;
  background: url(http://www.baskinrobbins.co.kr/assets/images/common/bg_header.gif);
  margin: 0 auto;
`;
const NavSt = styled.nav`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  ul {
    display: flex;
    gap: 10px;
    align-items: center;
    li {
      a {
        text-decoration: none;
        color: #010101;
        font-size: 13px;
        text-transform: uppercase;
      }
      .searchBtn {
        background: url(http://www.baskinrobbins.co.kr/assets/images/common/icon_search.png);
        width: 54px;
        height: 54px;
        text-indent: -999px;
        overflow: hidden;
      }
    }
  }
`;

const Header = () => {
  //화면에 표시할 상태값 > 초기값을 빈 배열로 정의
  const [newMenu, setMenu] = useState([]);
  // const [loading,setLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  //스켈레톤은 로딩때 같이 보인다
  const [skeleton, setSkeleton] = useState(false);

  useEffect(() => {
    setLoading(true);
    setSkeleton(true);

    setTimeout(() => {
      (async () => {
        
        try {
            const response = await axios.get("http://localhost:3001/menu");
            setMenu(newMenu=> response.data);

        } catch (e) {
          console.log(e);
          console.log("연동실패");
          setSkeleton(true);
        } finally {
          setLoading(false);
          setSkeleton(false);
        }  
      })();
    }, 0);
  }, []);

  return (
    <HeaderSt>
      <NavSt>
        <ul>
          {newMenu.map((v, i) => {
            return (
              <li key={i}>
                <a href={v.href}>
                  <img src={v.img} alt={v.alt} />
                </a>
              </li>
            );
          })}
          {<Skeleton skeleton={skeleton} />}
        </ul>
        <a href="#!" key="logo">
          <img
            src="http://www.baskinrobbins.co.kr/assets/images/common/logo_baskinrobbins.png"
            alt="베스킨 라빈스"
          />
        </a>
        <ul>
          <li className="">
            <Link to="/service">고객센터</Link>
          </li>
          <li>
            <Link to="/contac">contact us</Link>
          </li>
          <li>
            <button className="searchBtn">검색</button>
          </li>
        </ul>
        <Routes>
          <Route path="/service" />
          <Route path="/contact" />
        </Routes>
      </NavSt>
      <Nav />
      <Spinner loading={loading} />
    </HeaderSt>
  );
};

export default React.memo(Header);
