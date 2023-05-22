import React, { useState } from "react";
import { Button } from "react-bootstrap";

const DeleteCoureseButton = ( id ) => {
    console.log('코스',id)

    const DeleteCourse = () => {
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        let options = {
            headers: {"Content-Type":"application/json",
            "Authorization":"Bearer "+accessToken
            },
            url:'http://letstrip.shop:8080/scrap/delete',
            method:"DELETE",
        }
        const favoritecourse=[]
        favoritecourse.push({id})
        options.body = JSON.stringify(favoritecourse[0].id);
        fetch(options.url,options)
        .then(response => response)
        .then(response => console.log('코스 취소 결과',options.body))
        .then(response => {alert("해당 코스가 삭제되었습니다!")});
        
    };

    return (
        <div  className="setcenter">
            <Button className="button" variant="primary" type="submit" onClick={DeleteCourse}>
                여행코스 삭제하기
            </Button>
        </div>
    );
};

export default DeleteCoureseButton;