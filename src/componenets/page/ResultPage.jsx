import React from "react";
import Header from './Header';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { myResult } from "./SurveyPage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import Result from "../Result";
import ShowMap from "./ShowMap";

SwiperCore.use([Navigation, Pagination])

const otherLocations = [];
const myFavorite = [];

export default function ResultPage() {
  if(myResult[0]) {
    for (let i = 0; i < myResult[0].length; i++) {
      const locations = [];
      for (let j = 0; j < myResult[0][i].length; j++) {
        locations.push({
          latitude: myResult[0][i][j].latitude,
          longitude: myResult[0][i][j].longitude
        });
      }
      otherLocations.push(locations);
    }
  
    for (let i = 0; i < myResult[0].length; i++) {
      const favorites = [];
      for (let j = 0; j < myResult[0][i].length; j++) {
        favorites.push({
          id: myResult[0][i][j].id,
          arrive_time: myResult[0][i][j].arrive_time,
          depart_time: myResult[0][i][j].depart_time,
          move_time: myResult[0][i][j].move_time
        });
      }
      myFavorite.push(favorites);
    }
  }

  console.log('제발',myResult[0]);
  console.log('위경',otherLocations);

  const navigate = useNavigate();

  const gomainpage = () => {
    navigate("/");
  };

  const sendFavorite = (index) => {
    console.log('MyFavorite:', myFavorite);
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    let options = {
        headers: {"Content-Type":"application/json",
          "Authorization":"Bearer "+accessToken
        },
        url:'http://letstrip.shop:8080/scrap/save',
        method:"POST",
    }
    options.body = JSON.stringify(myFavorite[index]);
    console.log('헤더:', options);
    fetch(options.url,options)
    .then(response => response.text());
  };

  return (
    <div className="App">
      <Header/>
      <div className="main-title">여행 일정을 확인해주세요!</div>
      
      <div style={{width:750, margin: "Auto", backgroundColor:"rgb(227, 200, 139)", position:"relative"}}>
        <Slider>
          {
            myResult[0].map((items,index) => {
              return(
                <div>
                  <br/>
                  <div style={{fontSize:"20px", fontStyle:"oblique", fontWeight:"bold"}}>
                    {index+1}일차 여행코스
                  </div>
                  <br/>
                  <div style={{padding:"0px 20px", paddingBottom:"20px"}}>
                    <ShowMap SO={otherLocations[index]}/>
                  </div>
                  {
                    items.map((item) => {
                      return(
                        <Result
                          name={item.name}
                          imgUrl={item.imgUrl}
                          overview={item.overview}
                          address={item.address}
                          localAddress={item.localAddress}
                          phoneNumber={item.phoneNumber}
                          latitude={item.latitude}
                          longitude={item.longitude}
                          sun={item.sun}
                          mon={item.mon}
                          tue={item.tue}
                          wed={item.wed}
                          thu={item.thu}
                          fri={item.fri}
                          sat={item.sat}
                          keywordImgUrl={item.keywordImgUrl}
                          id={item.id}
                          arrive_time={item.arrive_time}
                          depart_time={item.depart_time}
                          move_time={item.move_time}
                        />
                      )
                    })
                  }
                  <div  className="setcenter">
                    <Button className="button" variant="primary" type="submit" onClick={(e)=>{sendFavorite(index)}}>
                      마이페이지에 코스 저장하기
                    </Button>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
      <div className="setcenter">
        <Button className="button" variant="primary" type="submit" onClick={gomainpage}>
          메인 페이지
        </Button>
      </div>
    </div>
  );
  
}