import './Styles/NavBar.css';
import testImg from '../../assets/testImg.png'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { mentorListState, crntMentorState, selectedMainNavbarState } from '../../recoil';
import { crntMentorIdxState } from '../../recoil';

import { isMentor } from '../validator';

function MainNav() {
    const navigator = useNavigate();
    const [selectedNavbar, setSelectedNavbar] = useRecoilState(selectedMainNavbarState);
    
    const titles = ['홈', '멘토링', '커뮤니티', '마이페이지'];
    const [mentorList, setMentorList] = useRecoilState(mentorListState);
    const [crntMentor, setCrntMentor] = useRecoilState(crntMentorState)

    function findMentor(userid) {
        let mentor = mentorList.find((e) => {
            return parseInt(e.id, 10) === parseInt(userid, 10);
        });
        return mentor;
    }
    
    

    function navBarClickHandler(title) {
        setSelectedNavbar(title);
        switch (title) {
            case '홈':
                navigator('/');
                break;
            case '멘토링':
                navigator('/mentoring');
                break;
            case '커뮤니티':
                navigator('/community');
                break;
            case '마이페이지':
                if (isMentor()) {
                    setCrntMentor(findMentor(parseInt(window.sessionStorage.getItem('userid'), 10)))
                    console.log(crntMentor)
                    navigator('/mentor_homepage');
                } else {
                    navigator('/menti_homepage');
                }
                break;
                
            default:
                break;
        }
    }

    return (
    <div className='hd_navbar-wrap'>
    {titles.map((title, i) => {
        const classNames = `hd_nav ${selectedNavbar === title ? 'selected' : ''}`;
        return (
            <div key={i} className={classNames} onClick={() => navBarClickHandler(title)}>{title}</div>
        )
    })}
    </div>
    )
}
export default MainNav;
