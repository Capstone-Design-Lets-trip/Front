import React from "react";
import Header from './Header';
import { useState } from "react";
import FavoriteModal from './FavoriteModal';

export const saveCourse = []

function MyPage(){
  
  const saveCourses = () => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    let options = {
        headers: {"Content-Type":"application/json",
          "Authorization":"Bearer "+accessToken
        },
        url:'http://letstrip.shop:8080/scrap/find/all',
        method:"GET",
    }
    fetch(options.url,options)
    .then(response => response.json())
    .then(response => saveCourse.push(response))
    .then(response => console.log('반환: ',response))
    .then(response => console.log('불러: ',saveCourse));
  };
  
  const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
     <div>
      <Header/>
      <div className="main-title">마이페이지</div>
        <div className="setcenter">
          <saveCourses/>
          {
            saveCourse.map((itemss,index)=>{
              return(
                <div>
                  <button className="button" onClick={showModal}>{index+1}</button>
                  {modalOpen && <FavoriteModal setModalOpen={setModalOpen} items={itemss} />}
                </div>
              )
            })
          }
      </div>
    </div>
  );
}

export default MyPage;