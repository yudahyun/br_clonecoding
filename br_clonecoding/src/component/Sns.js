/**
 * @filename: Sns.js
 * @description: json-server와 axios로 불러온 데이터를 활용한 SNS 관련 내용의 컴포넌트
 * @author: Kim Hyuna
 */
import React, { useEffect } from "react";
import store from "../assets/img/img_store.jpg";
import delivery from "../assets/img/img_happyorder_delivery.png";
import styled from "styled-components";
import axios from "axios";

// 타이틀 이미지 첨부
import storeTitle from "../assets/img/h_store.png";
import orderTitle from "../assets/img/h_happyorder_delivery.png";
import snsTitle from "../assets/img/h_sns.png";
import instaTitle from "../assets/img/tit_sns.png";
const StoreSt = styled.div`
  display: flex;
  justify-content: center;
  height: 547px;
  div {
    h3 {
      text-align: center;
      margin: 0 auto;
      padding: 95px 0 50px;
    }
  }
`;

const SnsContainer = styled.div`
  .snsSt {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 130px;
    h3 {
      padding-bottom: 30px;
    }
    ul {
      width: 400px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding-bottom: 35px;
    }
  }
  .instaSt {
    width: 1200px;
    position: relative;
    h3 {
      width: 100%;
      padding: 30px 0 50px;
      a {
        width: 298px;
        height: 13px;
        display: block;
        margin: 0 auto;
        z-index: 1;
      }
      &::after {
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 1px;
        content: "";
        left: 0;
        top: 37px;
        background: #dcd7d1;
        z-index: -1;
      }
    }
    div {
      height: 785px;
      .instaItem {
        width: 236px;
        height: 236px;
        display: inline-block;
        margin: 1px 2px;
      }
    }
  }
`;

const Sns = () => {
  const [snsList, setSnsList] = React.useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3001/snsIcon");
        setSnsList((snsList) => response.data);
      } catch (e) {
        console.error(e);
        console.log("연동실패");
      }
    })();
  }, []);

  const [instaList, setInstaList] = React.useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3001/gridImg");
        setInstaList((instaList) => response.data);
      } catch (e) {
        console.error(e);
        console.log("연동실패");
      }
    })();
  }, []);

  return (
    <>
      <StoreSt>
        <div>
          <h3>
            <img src={storeTitle} alt="BR store" />
          </h3>
          <img src={store} alt="store" />
        </div>
        <div>
          <h3>
            <img src={orderTitle} alt="happy order & delivery" />
          </h3>
          <img src={delivery} alt="delivery" />
        </div>
      </StoreSt>
      <SnsContainer>
        <div className="snsSt">
          <h3>
            <img src={snsTitle} alt="SNS" />
          </h3>
          <ul>
            {snsList.map((v, i) => {
              return (
                <li key={i}>
                  <a href={v.href}>
                    <img src={v.src} alt={v.alt} />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="instaSt">
            <h3>
              <a href="https://www.instagram.com/baskinrobbinskorea/">
                <img src={instaTitle} alt="BR INSTAGRAM" />
              </a>
            </h3>

            {/* instagram grid */}
            <div>
              {instaList.map((v, i) => {
                return (
                  <div
                    className="instaItem"
                    key={i}
                    style={{
                      background: `url(${v.src}) no-repeat 50% 50%`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </SnsContainer>
    </>
  );
};

export default React.memo(Sns);
