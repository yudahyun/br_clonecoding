/**
* @filename: Spinner.js
* @description: 로딩바 추가 
* @author: 유다현(ekgus1129@gmail.com)
*/

import React from 'react';
import propTypes from "prop-types";
import {RotatingLines} from "react-loader-spinner";
import styled from "styled-components";

const LodingRapper =styled.div`
    background: rgba(0,0,0,0.2);
    width:100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
   svg{
        position: absolute;
        top:50%;
        left: 50%;
        margin-left: -50px;
        margin-top: -50px;
    }
`;
const Spinner = ({loading,width,height,color}) => {
    return (
      <>
        {loading && ( 
            <LodingRapper>
               
                 <RotatingLines
                    width={width}
                    height={height}
                    strokeColor={color}
                    strokeWidth="4"
                    animationDuration="1"
                 />
               
            </LodingRapper>
        )}  
    </>
    );
};

Spinner.propTypes={
    color:propTypes.string,
}
Spinner.defaultProps={
    width: "100px",
    color: "#6495ED",
}

export default React.memo(Spinner);