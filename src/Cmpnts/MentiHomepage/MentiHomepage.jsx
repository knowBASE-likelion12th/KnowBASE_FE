import '../../Styles/Mentoring.css'
import testImg from '../../assets/testImg.png'

import Header from '../Header/Header';
import Info from '../Info';
import MentiHomepageNavBar from './MentiHomepageNavBar';
import MentiCmtsTab from './Tabs/MentiCmtsTab';
import MentiPostsTab from './Tabs/MentiPostsTab';
import { useRecoilValue, useRecoilState } from 
'recoil';
import MentiReviewsTab from './Tabs/MentiReviewsTab';


import { mentorInfoState, crntMentorIdxState, crntMentiIdxState, selectedMentiNavbarState, selectedMainNavbarState } from '../../recoil';
import { useEffect, useState } from 'react';
import Portfolio from '../MentorHomepage/Portfolio/Portfolio';
import Button from '../Model/Button';
import { useNavigate } from 'react-router-dom';


function MentiHomepage() {
    const [isIdentified, setIsIdentified] = useState(false)
    const navigator = useNavigate()
    // const [crntMentiIdx, setCrntMentiIdx] = useRecoilState(crntMentiIdxState);
    const [selectedMainNavbar,setSelectedMainNavbar] = useRecoilState(selectedMainNavbarState);
    const [selectedMentiNavbar,setSelectedMentiNavbar] = useRecoilState(selectedMentiNavbarState);

    // const crntMentor = mentorInfos[crntMentorIdx]

    function editClickedHandler(){
        navigator('/edit_profile')
    }

    useEffect(()=>{
        setSelectedMainNavbar('멘토링')
        renderContent();
        },[])

    function renderContent(){
        switch (selectedMentiNavbar) {
            case '작성 글':
                return <MentiPostsTab />;
            case '작성 댓글':
                return <MentiCmtsTab />;
            case '후기':
                return <MentiReviewsTab />;
            default:
                return null;
        }}

    return (
        <>
            <Header />
            <div className='mh_title-wrap'>
                <div>
                    <div className='mh_title'>멘티 홈페이지</div>
                    <div className='mh_subtitle'>나에 대한 정보와 활동을 관리해 보세요.</div>
                </div>
            </div>
            
            <div className='side-padding-20vw'>

                <div className='mh_profile-wrap'>
                    <div className='mh_proflie-img-wrap'>
                        <img src='mentiInfos.img' />
                    </div>
                    <div className='mh_proflie-info-wrap'>
                        <div className='mh_name'>mentiInfos.name</div>
                        <div className='mh_id'>@mentiInfos.id</div>
                        <div className='mh_btn-wrap' style={{gap: '1.4rem'}}>
                            <div className='mh_ask-btn' style={{fontSize: '2rem'}} onClick={editClickedHandler}>프로필 수정하기</div>
                            <div className='mh_req-btn' style={{visibility: 'hidden'}}>채팅 확인하기</div>
                            <div className='mh_ask-btn' style={{visibility: 'hidden'}} >멘토 승급 신청하기</div>
                        </div>
                    </div>
                </div>
                <div style={{height: '10rem'}} />
                <MentiHomepageNavBar />
                <div style={{height: '6.5rem'}} />
                {renderContent()}
            </div>
            
        </>
    );
}

export default MentiHomepage;
