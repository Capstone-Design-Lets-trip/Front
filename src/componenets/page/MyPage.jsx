import React from "react";
import Header from './Header';
import { useState } from "react";
import FavoriteModal from './FavoriteModal';
import FavoriteModalCity from './FavoriteModalCity';
import { resultdummy } from "../../resultdummy";
import { favoritecities } from "../../favoritecities";
import { saveCity } from "./Header";
import { saveCourse } from "./Header";

function MyPage(){
  console.log('마이페이지 여행지 불러: ',saveCity)
  
  const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  const [modalOpens, setModalOpens] = useState(false);

    // 모달창 노출
  const showModals = () => {
    setModalOpens(true);
  };

  return (
    <div>
      <Header/>
      <div className="main-title">마이페이지</div>
        <div style={{display: 'flex'}} className="setcenter">
          <div style={{marginRight:"100px"}}>
            <div className="main-title">찜한 여행지</div>
            {
              saveCity[0].map((itemss,index)=>{
                return(
                  <div>
                    <button className="button" onClick={showModals}>{itemss.name}</button>
                    {modalOpens && <FavoriteModalCity setModalOpens={setModalOpens} itemss={itemss} index={index}/>}
                  </div>
                )
              })
            }
          </div>
          <div style={{marginLeft:"100px"}}>
            <div className="main-title">찜한 여행코스</div>
            {
              saveCourse[0].map((items,index)=>{
                return(
                  <div>
                    <button className="button" onClick={showModal}>{index+1}</button>
                    {modalOpen && <FavoriteModal setModalOpen={setModalOpen} id={items.id} items={items.tourSpotDtoList}/>}
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>
  );
}

export default MyPage;