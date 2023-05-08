import React from "react";
import ShowMap from "./page/ShowMap";
import ReadMoreLess from "./page/ReadMoreLess";

const otherLocations = [
];

export default function Result(
    {name,imgUrl,overview,address,localAddress,phoneNumber,latitude,longitude,sun,mon,tue,wed,thu,fri,sat,keywordImgUrl}) {
    return (
        <div>
            <div style={{display: 'flex', paddingLeft:'20px', paddingRight:'20px'}}>
                <div>
                    <img src={imgUrl} style={{height:"200px"}} alt="도쿄"/>
                </div>
                <div className="result-info">
                    <div>
                        <div>여행지 : {name}</div>
                        <br/>
                        <div>설명 : {overview}</div>
                        <br/>

                    </div>
                </div>
            </div>
            <ReadMoreLess 
                address={address} localAddress={localAddress} phoneNumber={phoneNumber}
                latitude={latitude} longitude={longitude} keywordImgUrl={keywordImgUrl}
                sun={sun} mon={mon} tue={tue} wed={wed} thu={thu} fri={fri} sat={sat}/>
            <br/>
        </div>
    )
}