import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    return(
        <div className='upper-bar'>
            <Link to="/" style={{textDecoration:"none", color:"black"}}>
            <h2>Let's trip</h2>
            </Link>
            <nav className='upper-bar-box'>
              <button className='upper-bar-item'>
                <Link to="/loginpage" style={{textDecoration:"none", color:"black"}}>
                  Log In
                </Link>
              </button>
            </nav>
        </div>
    )
}

export default Header;