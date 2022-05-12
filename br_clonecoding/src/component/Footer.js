/**
* @filename: footer.js
* @description: 최하단 footer 
* @author: 유다현(ekgus1129@gmail.com)
*/


import React from 'react';
import {Link} from "react-router-dom";
import happy1 from "../assets/img/btn_happypoint.png";
import happy2 from "../assets/img/btn_happymarket.png";
import happy3 from "../assets/img/btn_spc_story.png";
import happy4 from "../assets/img/btn_norton.gif";
import happy5 from "../assets/img/btn_ksa.png";
import happy6 from "../assets/img/btn_ccm_2.png";

const Footer = () => {
    return (
        <div>
            <ul>
                <li><Link to="">점포개설문의</Link></li>
                <li><Link to="">채용문의</Link></li>
                <li><Link to="">윤리신고센터</Link></li>
                <li><Link to="">이용약관</Link></li>
                <li><Link to="">개인정보처리방침</Link></li>
                <li><Link to="">영상정보처리기기운영관리방침</Link></li>
                <li><Link to="">거래희망회사 사전등록</Link></li>
            </ul>
            <div>
                <img src={happy1} alt="해피포인트"/>
                <img src={happy2} alt="해피포인트"/>
                <img src={happy3} alt="해피포인트"/>
                <img src={happy4} alt="해피포인트"/>
                <img src={happy6} alt="해피포인트"/>
                <img src={happy5} alt="해피포인트"/>
                <button type="button">family site</button>
                <div>
                    <ul>
                         <li><Link to="">배스킨 스쿨</Link></li>
                         <li><Link to="">SPC그룹사이트</Link></li>
                         <li><Link to="">SPC magazine</Link></li>
                         <li><Link to="">br코리아</Link></li>
                         <li><Link to="">배스킨 스쿨</Link></li>
                         <li><Link to="">SPC그룹사이트</Link></li>
                         <li><Link to="">SPC magazine</Link></li>
                         <li><Link to="">br코리아</Link></li>
                    </ul>
                </div>  
            </div>
            <img src="http://www.baskinrobbins.co.kr/assets/images/common/footer_logo.png" alt="푸터로고"/>
            <ul className="footer-ul">
                <li>사업자 등록번호 :303-1234-1234</li>
                <li>비알코리아(주) 대표이사 도세호</li>
                <li>서울시 서초구 남남동</li>
            </ul>
            <ul className="footer-ul">
                <li>tel:123-1234-123</li>
                <li>개인정보관리책임자 : 유다현</li>
            </ul>
            <p>Copyright &copy; 2016 BRKOREA Company. All Rights Reserved.</p>
        </div> 
    );
};

export default React.memo(Footer);