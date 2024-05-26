import '../Styles/MentoringHomepage.css'
import { isIdentifiedUser } from '../../validator';

import Header from '../../Header/Header';
import Info from '../../Info';
import MentoringHomepageNavBar from './MentoringHomepageNavBar';
import ProfileSection from './ProfileSection';

import { useRecoilValue, useRecoilState } from 'recoil';
import { mentorListState, crntMentorState, selectedNavbarState, selectedMainNavbarState } from '../../../recoil';
import { isReviewClickedState, isContactClickedState } from '../../../recoil';
import { isEditState } from '../recoil';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import ReviewModal from '../../ReviewModal/ReviewModal';
import ContactModal from '../../ContactModal/ContactModal';
import MentorReview from '../Review/MentorReview';
import MentorIntro from '../Intro/MentorIntro';
import MentorRoadmap from '../Roadmap/Roadmap';
import MentorQA from '../Qna/MentorQA';
import ReviewCreate from '../../ReviewCreateModal/ReviewCreate';


function MentoringHomepage() {
    const [isIdentified, setIsIdentified] = useState(false);
    let navigator = useNavigate()
    const editProfileRef = useRef(null)
    const mentorList = useRecoilValue(mentorListState);
    const crntMentor = useRecoilValue(crntMentorState)
    const [selectedMainNavbar,setSelectedMainNavbar] = useRecoilState(selectedMainNavbarState);
    const [selectedNavbar,setSelectedNavbar] = useRecoilState(selectedNavbarState);
    const [isEdit, setIsEdit] = useRecoilState(isEditState)
    const [isReviewClicked, setIsReviewClicked] = useRecoilState(isReviewClickedState)
    const [isContactClicked, setIsContactClicked] = useRecoilState(isContactClickedState)
    
    useEffect(() => {
            setIsIdentified(isIdentifiedUser(crntMentor.id));
    }, [crntMentor]);
    
    

    useEffect(()=>{
        setSelectedMainNavbar('멘토링')
        renderContent();
    },[])


    function btnClickedHandler(btnRef) {
        if (btnRef.current && btnRef.current.textContent === '프로필 수정하기') {
            navigator('/edit_profile')
        }else if(btnRef.current && btnRef.current.textContent === '문의하기') {
            setIsContactClicked(true)
        }
    }


    function renderContent(){
        switch (selectedNavbar) {
            case '소개':
                return <MentorIntro />;
            case '포트폴리오':
                return <Portfolio isIdentified={isIdentified}/>;
            case '멘토링 로드맵':
                return <MentorRoadmap />
            case '질문':
                return <MentorQA />;
            case '후기':
                return <MentorReview />;
                
            default:
                return null;
        }
    }

    return (
    <div className='mh_wrap'>
        <Header />
        <div className='mh_title-wrap'>
            <div>
                <div className='mh_title'>멘토 홈페이지</div>
                <div className='mh_subtitle'>멘토에 대한 정보를 확인하고 멘토링 후기들을 경험해 보세요.</div>
            </div>
        </div>
        
        <div className='side-padding-20vw'>
            <ProfileSection isIdentified={isIdentified} btnClickedHandler={btnClickedHandler} />
            <div style={{height: '10rem'}} />
            <MentoringHomepageNavBar />
            {/* <div style={{height: '6.5rem'}} /> */}
            {renderContent()}
        </div>

        {/* conditional rendering */}
        <ReviewModal />
        <ContactModal />
        <ReviewCreate />
    </div>

    );
}

export default MentoringHomepage;
