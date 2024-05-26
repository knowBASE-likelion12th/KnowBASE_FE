import {useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import MentorSignup from './MentorSignup';
import MenteeSignup from './MenteeSignup';
import Header from './Header';
import DesignLogo from '../assets/DesignLogo';
export default function SignUp(){

    let navigate = useNavigate()
    return(
        //컴포넌트 분리 ? 조건부 ?
        <>
        <Header />
            <DesignLogo className="img_wrap" />
        <div className="button_wrap">
            <button className="toMentor" onClick={navigate('/MentorSignup')}>멘토로 가입하기</button>
            <div className="mentor_help"> 멘토로 가입하면 멘토링을 할 수 있어요 (단, 현직자만 가능)</div>
            <button className="toMentee" onClick={navigate('/MenteeSignup')}>멘티로 가입하기</button>
            <div className="mentee_help">멘티로 가입해도 멘토로 승급이 가능해요!</div>
        </div>
        </>
    )
}