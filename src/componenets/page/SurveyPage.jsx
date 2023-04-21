import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TypeChooseCard from "./TypeChooseCard";
import Header from './Header';
import Survey from "./Survey";

function SurveyPage(){
    return (
        <div>
          <Header/>
          <div className="main-title">당신의 취향을 알려주세요!</div>
          <div className="setcenter"><Survey/></div>
        </div>
      );
}

export default SurveyPage;