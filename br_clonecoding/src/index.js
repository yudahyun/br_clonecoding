/**
* @filename: index.js
* @description: 스타일 리셋 추가
* @author: 유다현(ekgus1129@gmail.com)
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import { Reset } from 'styled-reset'
import {BrowserRouter} from "react-router-dom";
import "./assets/scss/reset.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <Reset />
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
