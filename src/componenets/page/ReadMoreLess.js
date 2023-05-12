import React, { useState } from "react";
import { UserEmail } from "./ApiService";

function ReadMoreLess({name,address,localAddress,phoneNumber,latitude,longitude,
  sun,mon,tue,wed,thu,fri,sat,keywordImgUrl,id,arrive_time,depart_time,move_time}) {
  const [isShowMore, setIsShowMore] = useState(false);

  const [emailName, setEmailName] = useState({
    email: localStorage.getItem(UserEmail),
    name: name
  });

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
    fetch('http://letstrip.shop:5000/to_update', {  // <-- Change the URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(emailName)
      })
      .then(response => response.json())
  };

  return (
    <div>
      {isShowMore && (
        <div>
          <div style={{display:"flex", padding:"0px 20px"}}>
            <div className="result-info">
              <img src={keywordImgUrl} style={{height:"200px"}} alt="도쿄"/>
            </div>
            <div style={{textAlign:"center"}}>
              <div>출발 시간 : {arrive_time}</div>
              {depart_time!==null?
                <div>
                  <br/>
                  도착 시간 : {depart_time}
                </div>
                :
                <div>
                  <br/>
                  도착 시간 : (출발지입니다.)
                </div>
              }
              <br/>
              <div>주소 : {address}</div>
              <br/>
              <div>현지주소 : {localAddress}</div>
              <br/>
              <div>전화번호 : {phoneNumber}</div>
              <br/>
              <div>운영시간</div>
              <br/>
              <div>일요일 : {sun}</div>
              <br/>
              <div>월요일 : {mon}</div>
              <br/>
              <div>화요일 : {tue}</div>
              <br/>
              <div>수요일 : {wed}</div>
              <br/>
              <div>목요일 : {thu}</div>
              <br/>
              <div>토요일 : {fri}</div>
              <br/>
              <div>금요일 : {sat}</div>
            </div>
          </div>
          <br/>
        </div>
      )}
      <button onClick={toggleReadMoreLess}>
        {isShowMore ? "접기" : "더보기"}
      </button>
    </div>
  );
}

export default ReadMoreLess;