import React from "react";
import { Link } from "react-router-dom";
//import { MenuButton } from "./ApiService";
import { signout } from "./ApiService";
import { ACCESS_TOKEN } from "./ApiService";

function Header() {
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
              <button className='upper-bar-item'>
                  <Link to="/mypage" style={{ textDecoration: "none", color: "black" }}>
                      My Page
                  </Link>
              </button>
          </nav>
        }
        </div><Link to="/"><img src="travel_img/logo.jpg" className="logo-container" alt="로고" /></Link></>
    )
}

export default Header;