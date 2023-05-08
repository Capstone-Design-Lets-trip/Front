import React, { useState } from "react";

function ReadMoreLess({address,localAddress,phoneNumber,latitude,longitude,sun,mon,tue,wed,thu,fri,sat,keywordImgUrl}) {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div>
      {isShowMore && (
        <p>
          <div style={{display:"flex", padding:"0px 20px"}}>
            <div>
              <img src={keywordImgUrl} style={{height:"200px"}} alt="도쿄"/>
            </div>
            <div>
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
        </p>
        
      )}

      <button onClick={toggleReadMoreLess}>
        {isShowMore ? "접기" : "더보기"}
      </button>
    </div>
  );
}

export default ReadMoreLess;