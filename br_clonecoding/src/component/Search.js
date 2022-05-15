/**
 * @filename: Search.js
 * @description: Header.js에서 사용될 검색창 컴포넌트
 * @author: Kim Hyuna
 */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchSt = styled.div`
  height: ${(props) => (props.visible ? "auto" : 0)};
  overflow: hidden;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  letter-spacing: -2px;
  transition: all 0.4s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  z-index: 1000;
  .hidden {
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    position: absolute;
  }
  .clearfix {
    clear: both;
  }
  .searchWrap {
    margin-top: 186px;
    background: white;
    .searchInner {
      width: 1200px;
      margin: 0 auto;
      padding: 25px 0;
      position: relative;
      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        td,
        th {
          vertical-align: top;
          font-size: 13px;
          line-height: 1.5;
        }
        th {
          color: #2f231c;
          text-align: left;
          padding-top: 8px;
        }
        /* 제품명 옵션 */
        select {
          width: 128px;
          height: 32px;
          color: #636363;
          background: white;
          border: 1px solid #d1cecc;
          border-radius: 4px;
          margin-right: 14px;
          padding: 0 1px 0 10px;
        }
        /* input[text] */
        input {
          height: 32px;
          padding: 8px 1px 8px 10px;
          border: 0;
          background: #efefef;
          font-size: 13px;
          line-height: 16px;
          box-sizing: border-box;
          outline: none;
          &.product {
            width: 260px;
          }
          &.hashtag {
            width: 540px;
            color: #ff7c98;
          }
        }
        /* 자주 찾는 해시태그 */
        .popular {
          margin: 10px 0 0 14px;
          span {
            color: #9c9c9c;
          }
          div {
            float: left;
            a {
              color: #ff7c98;
              margin-left: 6px;
              display: inline-block;
            }
          }
        }
        /* 알레르기 성분 */
        .allergy {
          label {
            float: left;
            width: 70px;
            margin-top: 8px;
            cursor: pointer;
          }
          span {
            background: url(http://www.baskinrobbins.co.kr/assets/images/search/bg_check_off.gif)
              no-repeat;
            padding-left: 22px;
            color: #39261f;
            line-height: 17px;
          }
        }
      }
      /* 검색 버튼 */
      .submit {
        display: block;
        padding-top: 25px;
        text-align: center;
        button {
          width: 147px;
          height: 37px;
          line-height: 37px;
          background: #ff7c98;
          color: white;
          font-size: 15px;
          border-radius: 18px;
          border: 0;
          cursor: pointer;
        }
      }
    }
  }
  /* .searchBg {
    width: 100%;
    height: 4500px;
    position: absolute;
    opacity: 0.5;
    background: black;
    transition: all 0.8s ease;
    z-index: 999;
  } */
`;

const Search = ({ visible }) => {
  return (
    <>
      <SearchSt visible={visible}>
        <div className="searchWrap">
          <div className="searchInner">
            <form>
              <table>
                <colgroup>
                  <col width="90" />
                  <col width="486" />
                  <col width="90" />
                </colgroup>
                <tbody>
                  <tr>
                    <th> 제품명 </th>
                    <td>
                      <select>
                        <option>전체</option>
                        <option value={"A"}>아이스크림</option>
                        <option value={"B"}>아이스크림케이크</option>
                        <option value={"C"}>음료</option>
                        <option value={"D"}>커피</option>
                        <option value={"E"}>디저트</option>
                        <option value={"F"}>block pack</option>
                        <option value={"G"}>ready pack</option>
                      </select>
                      <label className="hidden">제품명 입력</label>
                      <input
                        className="product"
                        type="text"
                        title="제품명 입력"
                      />
                    </td>
                    <th> 해시태그 </th>
                    <td>
                      <label className="hidden">검색</label>
                      <input className="hashtag" type="text" title="검색" />
                      <div className="popular">
                        <span> · &nbsp; 자주 찾는 해시태그</span>
                        <div>
                          <Link to="#!">#피카피카피카츄</Link>
                          <Link to="#!">#피카츄초코바나나블라스트</Link>
                          <Link to="#!">#쿨쿨잠만보밀키소다블라스트</Link>
                          <Link to="#!">#고라파덕아이스크림콘</Link>
                          <Link to="#!">#푸린아이스크림콘</Link>
                          <Link to="#!">#포켓몬스터</Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th> 알레르기 성분 </th>
                    <td colSpan={3}>
                      <div className="allergy">
                        <label>
                          <input
                            className="hidden"
                            type="checkbox"
                            value="계란"
                          />
                          <span>계란</span>
                        </label>
                        <label>
                          <input
                            className="hidden"
                            type="checkbox"
                            value="대두"
                          />
                          <span>대두</span>
                        </label>
                        <label>
                          <input
                            className="hidden"
                            type="checkbox"
                            value="돼지고기"
                          />
                          <span>돼지고기</span>
                        </label>
                        <label>
                          <input
                            className="hidden"
                            type="checkbox"
                            value="땅콩"
                          />
                          <span>땅콩</span>
                        </label>
                        <label className="clearfix">
                          <input
                            className="hidden"
                            type="checkbox"
                            value="밀"
                          />
                          <span>밀</span>
                        </label>
                        <label>
                          <input
                            className="hidden"
                            type="checkbox"
                            value="복숭아"
                          />
                          <span>복숭아</span>
                        </label>
                        <label>
                          <input
                            className="hidden"
                            type="checkbox"
                            value="우유"
                          />
                          <span>우유</span>
                        </label>
                        <label>
                          <input
                            className="hidden"
                            type="checkbox"
                            value="없음"
                          />
                          <span>없음</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="submit">
                <button type="submit">검색</button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="searchBg" /> */}
      </SearchSt>
    </>
  );
};

export default Search;
