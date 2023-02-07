import React, { useContext, useRef } from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { DetailContext } from './Context';
const Login = () => {
    const {member,setMember} = useContext(DetailContext);
    // const navigate = useNavigate()

    let [id, setId] = useState('');
    let [pw, setPw] = useState('');
    // const bool1 = useRef(false);
    const [dummy, setdummy] = useState(false);
    


    const [button, setButton] = useState(true);
    function changeButton() {
        id.includes('@') && pw.length >= 5 ? setButton(false) :setButton(true);
      }

    //   const goToMain = () => {
    //     navigate('/main-yejee');
    //   };

      const realId = "kiki@naver.com";
      const realPw = "12345678";

  return (
    <>
    <input
          placeholder="이메일"
          id="id"
          className="login"
          onChange={e => {
              setId(e.target.value);
          } }
          onKeyUp={changeButton} />
    <input
        type="password"
        placeholder="비밀번호"
        id="password"
        className="login2"
        onChange={e => {
            setPw(e.target.value);
        } }
        onKeyUp={changeButton} />

    <button
        type="button"
        className="loginButton"
        disabled={button}
        onClick={e => {
            e.preventDefault()
            // bool1.current = !bool1.current;
                if (realId == id) {
                    if (realPw == pw) {
                    e.stopPropagation();
                    // setMember(true)
                    localStorage.setItem('isLogined', true)
                    setMember(localStorage.getItem('isLogined'));
                    }
                } else {
                    alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
                }
                }}
    >로그인</button>
    </>

    
  )
}

export default Login