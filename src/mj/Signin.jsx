import { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../assets/Logo";
import "../Styles/Login.css";
import { useRecoilState } from "recoil";
import Header from "./Header";
import DesignLogo from "../assets/DesignLogo";
import { inputIdState, inputPasswordState } from "../recoil";
import SignUp from './Signup';

export default function Signin() {
    const [inputId, setInputId] = useRecoilState(inputIdState);
    const [inputPassword, setInputPassword] = useRecoilState(inputPasswordState);
    let navigate = useNavigate();

    function loginClicked() {
        const savedUserId = localStorage.getItem("inputId");
        const savedUserPw = localStorage.getItem("inputPassword");

        if (inputId === savedUserId && inputPassword === savedUserPw) {
            // 로그인 성공
            navigate('/Home');
        } else {
            // 로그인 실패
            alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
    }

    return (
        <>
            <Header />
            <DesignLogo className="img_wrap" />
            <div className="login-container">
                <input type="text" placeholder="아이디" className="input-field" value={inputId} onChange={(e) => setInputId(e.target.value)} />
                <input type="password" placeholder="비밀번호" className="input-field" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} />
                <button className="button" onClick={loginClicked}>로그인</button>
                <div><span> 로그인 상태 유지</span>
                <span> 아이디/비밀번호 찾기</span></div>
                <span>회원 가입하고 홈스타일링에 도움을 받아보세요</span>
                <hr/>
                <button onClick={navigate('/Signup')}> 회원가입</button>
            </div>
        </>
    );
}
