import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';
import { loginUser } from './user_action';
import Header from './Header';
import TypePage from './TypePage';

function LogInPage() {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
  
    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };
    
    const navigate = useNavigate();
    
    const login = () => {
        console.log("click login");
        console.log("ID : ", inputId);
        console.log("PW : ", inputPw);
        Axios.post("http://letstrip.shop:8080/auth/login", {
            email: inputId,
            passwd: inputPw,
          })
          .then((res) => {
            console.log(res);
            console.log("res.data.userId :: ", res.data.userId);
            console.log("res.data.msg :: ", res.data.msg);
            if (res.data.email === undefined) {
              // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
              console.log("======================", res.data.msg);
              alert("입력하신 id 가 일치하지 않습니다.");
            } else if (res.data.email === null) {
              // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
              console.log(
                "======================",
                "입력하신 비밀번호 가 일치하지 않습니다."
              );
              alert("입력하신 비밀번호가 일치하지 않습니다.");
            } else if (res.data.email === inputId) {
              // id, pw 모두 일치 userId = userId1, msg = undefined
              console.log("======================", "로그인 성공");
              sessionStorage.setItem("user_id", inputId); // sessionStorage에 id를 user_id라는 key 값으로 저장
              sessionStorage.setItem("name", res.data.name); // sessionStorage에 id를 user_id라는 key 값으로 저장
            }
            // 작업 완료 되면 페이지 이동(새로고침)
            navigate("/");
          })
          .catch();
      };
        
    return(
        <div>
            <Header/>
            <div><Link to="/"><img src="travel_img/logo.jpg" className="logo-container" alt="로고"/></Link></div>
            <form style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div>
                    <div className="main-title">Log In</div>
                    <input
                        type="email"
                        className='id-box'
                        placeholder="Email"
                        name="input_id"
                        value={inputId}
                        onChange={handleInputId}
                    />
                    <h2> </h2>
                    <input
                        type="password"
                        className="id-box"
                        placeholder="Enter password"
                        name="input_pw"
                        value={inputPw}
                        onChange={handleInputPw}
                    />
                    <h2> </h2>
                    <button onClick={login} className='button'>Log In</button>
                </div>
            </form>
        </div>
    )
}

export default LogInPage;