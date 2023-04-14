import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Travel({destination,travel_pic,overview,site}) {
    return (
        <div className="travel-container">
            <Link to={site} style={{textDecoration:"none", color:"black"}}>
            <div><img src={travel_pic} alt="여행지 사진"/></div>
            <div className="travel-info">
                <h4>{destination}</h4>
                <h6 className="blank">{" "}</h6>{/*빈 공간 만드는 법*/}
                <span>{overview}</span>
            </div>
            </Link>
        </div>
    )
}