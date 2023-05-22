import React from "react";
import ReadMoreLess from "./page/ReadMoreLess";
import HeartButton from "./page/HeartButton";
import { useState } from "react";

export default function Result({index,name,imgUrl,overview,address,localAddress,phoneNumber,latitude,longitude,
    sun,mon,tue,wed,thu,fri,sat,keywordImgUrl,id,arrive_time,depart_time,move_time}) {

    const [like, setLike] = useState(false)

    const toggleLike = (name) => {
        setLike(!like)
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        if(like) {
            let options = {
            headers: {"Content-Type":"application/json",
            "Authorization":"Bearer "+accessToken
            },
            url:'http://letstrip.shop:8080/scrap/spot/delete',
            method:"DELETE",
            }
            const favoritename=[]
            favoritename.push({"name": name})
            options.body = JSON.stringify(favoritename[0]);
            fetch(options.url,options)
            .then(response => response.json())
            .then(response => console.log('좋아요 취소 결과',options.body))
            .then(response => {alert("해당 여행지가 취소되었습니다!")});
        }
        else {
            let options = {
            headers: {"Content-Type":"application/json",
            "Authorization":"Bearer "+accessToken
            },
            url:'http://letstrip.shop:8080/scrap/spot/save',
            method:"POST",
            }
            const favoritename=[]
            favoritename.push({"name": name})
            options.body = JSON.stringify(favoritename[0]);
            fetch(options.url,options)
            .then(response => response.json())
            .then(response => console.log('좋아요 결과 출력',options.body))
            .then(response => {alert("해당 여행지가 저장되었습니다!")});
        }
    }
    
    return (
        <div>
            <div style={{display: 'flex', paddingLeft:'20px', paddingRight:'20px'}}>
                <div style={{paddingRight:'20px',paddingTop:"85px"}}>
                    <HeartButton like={like} onClick={(e)=>{toggleLike(name)}}/>
                </div>
                <div style={{paddingRight:'20px'}}>
                    <img src={imgUrl} style={{height:"200px"}} alt="도쿄"/>
                </div>
                <div className="result-info">
                    <div>
                        {index===0?
                            <div>출발지 : {name}</div>
                        :
                            <div>여행지 : {name}</div>
                        }
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