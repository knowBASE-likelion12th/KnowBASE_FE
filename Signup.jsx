import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import MentorSignup from './MentorSignup';
import MenteeSignup from './MenteeSignup';
import Header from './Header';
import '../Styles/Signup.css'

export default function SignUp() {
    let navigate = useNavigate();

    const handleSignUp = (type) => {
        if (type === 'mentor') {
            navigate("/Signup_mentor");
        } else if (type === 'mentee') {
            navigate("/Signup_mentee");
        }
    };

    return (
        <>
            <Header />
            {/* <DesignLogo className="img_wrap" /> */}
            <div className="button_wrap">
                <button className="toMentor" onClick={() => handleSignUp('mentor')}>멘토로 가입하기</button>
                <div className="mentor_help"> 멘토로 가입하면 멘토링을 할 수 있어요 (단, 현직자만 가능)</div>
                <button className="toMentee" onClick={() => handleSignUp('mentee')}>멘티로 가입하기</button>
                <div className="mentee_help">멘티로 가입해도 멘토로 승급이 가능해요!</div>
            </div>
        </>
    );
}
