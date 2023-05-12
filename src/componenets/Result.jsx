import React from "react";
import ReadMoreLess from "./page/ReadMoreLess";

export default function Result({name,imgUrl,overview,address,localAddress,phoneNumber,latitude,longitude,
    sun,mon,tue,wed,thu,fri,sat,keywordImgUrl,id,arrive_time,depart_time,move_time}) {
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
            <br/>
            <ReadMoreLess
                name={name} address={address} localAddress={localAddress} phoneNumber={phoneNumber}
                latitude={latitude} longitude={longitude} keywordImgUrl={keywordImgUrl}
                sun={sun} mon={mon} tue={tue} wed={wed} thu={thu} fri={fri} sat={sat}
                id={id} arrive_time={arrive_time} depart_time={depart_time} move_time={move_time}/>
            <br/>
        </div>
    )
}