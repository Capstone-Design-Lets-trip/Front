import React from "react";
import { Button } from "react-bootstrap";

const DeleteCityButton = ( name ) => {

    const DeleteCity = () => {
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        let options = {
            headers: {"Content-Type":"application/json",
            "Authorization":"Bearer "+accessToken
            },
            url:'http://letstrip.shop:8080/scrap/spot/delete',
            method:"DELETE",
        }
        const favoritename=[]
        favoritename.push({name})
        options.body = JSON.stringify(favoritename[0].name);
        fetch(options.url,options)
        .then(response => response.json())
        .then(response => console.log('좋아요 취소 결과',favoritename))
        .then(response => {alert("해당 여행지가 삭제되었습니다!")})
        .then(response => {window.location.href="/"});
    };

    return (
        <div  className="setcenter">
            <Button className="button" variant="primary" type="submit" onClick={DeleteCity}>
                여행지 삭제하기
            </Button>
        </div>
    );
};

export default DeleteCityButton;