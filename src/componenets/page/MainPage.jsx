import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Travel from "../Travel";
import { dummy } from "../../traveldummy";
import Header from './Header';

function MainPage(){
    return (
        <div>
          <Header/>
          <div><Link to="/"><img src="travel_img/logo.jpg" className="logo-container" alt="로고"/></Link></div>
          <div className="main-title">당신의 여행지를 골라주세요!</div>
          <div className="app-container">
            {
              dummy.results.map((item)=>{
                return(
                  <Travel
                    destination={item.destination}
                    site={item.site}
                    travel_pic={item.travel_pic}
                    overview={item.overview}
                  />
                )
              })
            }
          </div>
        </div>
      );
}

export default MainPage;