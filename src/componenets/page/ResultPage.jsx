import React from "react";
import Header from './Header';
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import { resultdummy } from "../../resultdummy";
import Result from "../Result";

import ShowMap from "./ShowMap";

SwiperCore.use([Navigation, Pagination])

const otherLocations = [];
  for (let i = 0; i < resultdummy.length; i++) {
    const locations = [];
    for (let j = 0; j < resultdummy[i].length; j++) {
      locations.push({
        latitude: resultdummy[i][j].latitude,
        longitude: resultdummy[i][j].longitude
      });
    }
  otherLocations.push(locations);
}

const myFavorite = [];
  for (let i = 0; i < resultdummy.length; i++) {
    const favorites = [];
    for (let j = 0; j < resultdummy[i].length; j++) {
      favorites.push({
        id: resultdummy[i][j].id,
        arrive_time: resultdummy[i][j].arrive_time,
        depart_time: resultdummy[i][j].depart_time,
        move_time: resultdummy[i][j].move_time
      });
    }
    myFavorite.push(favorites);
}

export default function ResultPage() {

  const navigate = useNavigate();

  const gomainpage = () => {
    navigate("/");
  };

  return (
    <div className="App">
      <Header/>
      <div className="main-title">여행 일정을 확인해주세요!</div>
      
      <div style={{width:750, margin: "Auto", backgroundColor:"rgb(227, 200, 139)", position:"relative"}}>
        <Slider>
          {
            resultdummy.map((items,index) => {
              return(
                <div>
                  <br/>
                  <div style={{padding:"0px 20px", paddingBottom:"20px"}}>
                    <ShowMap SO={otherLocations[index]}/>
                  </div>
                  {
                    items.map((item) => {
                      let location = {latitude: item.latitude, longitude : item.longitude}
                      otherLocations.push(location)
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
                        />
                      )
                    })
                  }
                  <div  className="setcenter">
                    <Button className="button" variant="primary" type="submit">
                      코스 저장하기
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