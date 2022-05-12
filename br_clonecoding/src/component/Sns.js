import React from 'react';
import store from "../assets/img/img_store.jpg";
import delivery from "../assets/img/img_happyorder_delivery.png";
import styled from "styled-components";

const SnsSt = styled.div`
    display: flex;
    justify-content: center;
    div{
        h3{
            text-align: center;
            margin: 0 auto;
            padding: 95px 0 50px;
        }
    }
    
`
const Sns = () => {
    return (
        <>
        <SnsSt>
            <div>
                <h3>br brand</h3>
                <img src={store} alt="store"/>
            </div>
            <div>
                <h3>happt order & delivery</h3>
                <img src={delivery} alt="delivery"/>    
            </div>
        </SnsSt>
        <div> <h3>SNS</h3></div>
        </>
    );
};

export default React.memo(Sns);