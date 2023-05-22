import React from "react";
import { Link } from "react-router-dom";
//import { MenuButton } from "./ApiService";
import { signout } from "./ApiService";
import { ACCESS_TOKEN } from "./ApiService";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const saveCourse = [];
export const saveCity = [];

function Header() {
  const navigate = useNavigate();

  const SaveCourses = async (e) => {
    console.log('저장코스 함수 실행');
    e.preventDefault();
    saveCourse.length = 0;
    saveCity.length = 0;
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    let options = {
      headers: {"Content-Type":"application/json",
        "Authorization":"Bearer "+accessToken
      },
      method:"GET",
    }
    options.body = JSON.stringify();
    await fetch('http://letstrip.shop:8080/scrap/find/all',options)
    .then(response => response.json())
    .then(response => saveCourse.push(response))
    .then(response => console.log('저장 코스 불러: ',saveCourse));
    console.log('저장코스 함수2 실행');
    await fetch('http://letstrip.shop:8080/scrap/spot/find',options)
    .then(response => response.json())
    .then(response => saveCity.push(response))
    .then(response => console.log('저장 여행지 불러: ',saveCity));
    navigate("/mypage")
  };

  return(
    <><div className='upper-bar'>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <h2>Let's trip</h2>
      </Link>
      { localStorage.getItem(ACCESS_TOKEN)==='null' ?
        <nav className='upper-bar-box'>
          <button className='upper-bar-item'>
            <Link to="/loginpage" style={{ textDecoration: "none", color: "black" }}>
              Log In
            </Link>
          </button>
          <button className='upper-bar-item'>
            <Link to="/signuppage" style={{ textDecoration: "none", color: "black" }}>
              Sign Up
            </Link>
          </button>
        </nav>
      :
        <nav className='upper-bar-box'>
          <button className='upper-bar-item' onClick={signout}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Log Out
            </Link>
          </button>
          <Button className='upper-bar-item'  variant="primary" type="submit" style={{ textDecoration: "none", color: "black" }} onClick={SaveCourses}>
            My Page
          </Button>
        </nav>
      }
    </div><Link to="/"><img src="travel_img/logo.jpg" className="logo-container" alt="로고" /></Link></>
  )
}

export default Header;