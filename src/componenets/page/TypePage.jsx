import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TypeChooseCard from "./TypeChooseCard";
import Header from './Header';

function TypePage(){
    return (
        <div>
          <Header/>
          <div><Link to="/"><img src="travel_img/logo.jpg" className="logo-container" alt="로고"/></Link></div>
          <div className="main-title">당신의 취향을 알려주세요!</div>
          <div className="choosecard"><TypeChooseCard></TypeChooseCard></div>
        </div>
      );
}

export default TypePage;