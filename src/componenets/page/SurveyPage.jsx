import React from "react";
import Header from './Header';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import { useNavigate } from "react-router";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

SwiperCore.use([Navigation, Pagination])

export default function SurveyPage() {
  const [answers, setAnswers] = useState({
    inside_outside: '',
    mountain_ocean: '',
    activity_actrraction: '',
    aquarium: '',
    shopping: '',
    startDate: new Date(),
    endDate: new Date(),
    travel_start: new Date().toLocaleTimeString(),
    travel_end: new Date().toLocaleTimeString(),
    properties: []
  });

  const handleChange = (e) => {
      const { name, value, checked } = e.target;
      if (name === 'properties') {
          let newProperties = answers.properties.slice();
          if (checked) {
              newProperties.push(value);
          } else {
              newProperties = newProperties.filter(prop => prop !== value);
          }
          setAnswers(prev => ({ ...prev, properties: newProperties }));
      }
      else if (name === "startDate" || name === "endDate") { // 추가된 부분
          setAnswers((prev) => ({ ...prev, [name]: value }));
      }
      else if (name === "travel_start" || name === "travel_end") { // 추가된 부분
          setAnswers((prev) => ({ ...prev, [name]: value }));
      }
      else {
          setAnswers(prev => ({ ...prev, [name]: value }));
      }
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Answers:', answers);
      // fetch('http://letstrip.shop:5000/togo', {  // <-- Change the URL here
      // http://127.0.0.1:5000/test_togo
      fetch('http://letstrip.shop:5000/togo', {  // <-- Change the URL here
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(answers)
      })
          .then(response => response.json())
          .then(data => console.log('Server response:', data))
          .catch(error => console.error('Error:', error));
  };

  const navigate = useNavigate();

  const gomyhotelpage = () => {
    navigate("/myhotelpage");
  };

  return (
    <div className="App">
      <Header/>
      <div className="main-title">당신의 취향을 알려주세요!</div>
      <div style={{width:750, margin: "Auto"}}>
        <Form onSubmit={handleSubmit} style={{backgroundColor:"blanchedalmond"}}>
        <Slider style={{backgroundColor:"rgb(227, 200, 139)"}}>
          <div>
            <div style={{marginTop:"107.33px"}}>
              <Form.Group controlId="inside_outside">
                <Form.Label>실내 vs 실외</Form.Label>
                <Form.Control as="select" name="inside_outside" onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="'실내'">Inside</option>
                  <option value="'실외'">Outside</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="mountain_ocean">
                <Form.Label>산 vs 바다 vs 강</Form.Label>
                <Form.Control as="select" name="mountain_ocean" onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="'산'">산</option>
                  <option value="'바다'">바다</option>
                  <option value="'강'">강</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="activity_actrraction">
                <Form.Label>액티비티 / 체험 / 어트랙션 / 놀이기구 / 퍼레이드   vs 휴식 /산책 / 자전거 / 꽃</Form.Label>
                <Form.Control as="select" name="activity_actrraction" onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="'액티비티', '체험', '어트랙션', '놀이기구', '퍼레이드'">액티비티 / 체험 / 어트랙션 / 놀이기구 / 퍼레이드</option>
                  <option value="'휴식', '산책', '자전거', '꽃'">휴식 /산책 / 자전거 / 꽃</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="aquarium">
                <Form.Label>수족관 / 아쿠아리움 vs 동물원 vs 식물원 vs  과학관 / 박물관  vs 미술관</Form.Label>
                <Form.Control as="select" name="aquarium" onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="'수족관', '아쿠아리움'">수족관 / 아쿠아리움</option>
                  <option value="'동물원'">동물원</option>
                  <option value="'식물원'">식물원</option>
                  <option value="'과학관', '박물관'">과학관 / 박물관</option>
                  <option value="'그림'">미술관</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="shopping">
                <Form.Label>시장/ 골목  vs 백화점 / 쇼핑몰 / 아울렛 / 지하상가 </Form.Label>
                <Form.Control as="select" name="shopping" onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="'시장', '골목'">시장/ 골목</option>
                  <option value="'백화점', '쇼핑몰', '아울렛', '지하상가'">백화점 / 쇼핑몰 / 아울렛 / 지하상가</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="startDate">
                <Form.Label>출발날짜</Form.Label>
                <Form.Control type="datetime-local" name="startDate" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="endDate">
                <Form.Label>도착날짜</Form.Label>
                <Form.Control type="datetime-local" name="endDate" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="travel_start">
                <Form.Label>관광시작시간</Form.Label>
                <Form.Control type="time" name="travel_start" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="travel_end">
                <Form.Label>관광종료시간</Form.Label>
                <Form.Control type="time" name="travel_end" onChange={handleChange} />
              </Form.Group>
            </div>
          </div>
          <div>
            <Form.Group controlId="properties">
              <Form.Label>Properties</Form.Label>
              <div>
                <Form.Check type="checkbox" name="properties" value="'쇼핑', '옷'" label="쇼핑 / 옷" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'야경', '전망대'" label="야경 / 전망대" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'사원', '절, '신사', '불상'" label="사원 (절) / 신사 / 불상" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'공원', '광장'" label="공원 / 광장" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'어린이'" label="어린이" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'옛날'" label="옛날" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'성'" label="성" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'작품', '전시회', '박람회'" label="작품 / 전시회 / 박람회" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'관람차'" label="관람차" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'이색', '컵라면', '레고', '카트', '메이드'" label="이색" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'먹거리', '카페', '음식', '음식점', '술'" label="먹거리 / 카페 / 음식 / 음식점 / 술" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'항구', '배'" label="항구 / 배" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'온천', '사우나', '목욕탕', '노천', '스파', '수영장'" label="온천 / 사우나 / 목욕탕 / 노천 / 스파 / 수영장" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'콘서트', '오케스트라', '공연', '극장'" label="콘서트 / 오케스트라 / 공연 / 극장" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'기모노', '유카타'" label="전통옷체험(기모노/유카타)" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'만화', '애니메이션', '게임', '인형'" label="만화 / 애니메이션 /  게임 /  인형" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'드럭스토어', '기념품', '선물'" label="드럭스토어 / 기념품 / 선물" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'경기장', '야구', '축구'" label="경기장 / 야구 /축구" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'무료'" label="무료" onChange={handleChange} />
                <Form.Check type="checkbox" name="properties" value="'사진'" label="사진스팟(사진)" onChange={handleChange} />
              </div>
            </Form.Group>
          </div>
        </Slider>
        <div className="setcenter">
          <Button className="button" variant="primary" type="submit" onClick={gomyhotelpage}>
            Submit
          </Button>
        </div>
        </Form>
      </div>
    </div>
  );
}