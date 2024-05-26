import './App.css';
import Home from './Cmpnts/Home'
import Mentoring from './Cmpnts/Mentoring'
import MentorHomepage from './Cmpnts/MentorHomepage/Main/MentorHomepage.jsx';
import Community from './Cmpnts/Community/Community';
import CommunityDetail from './Cmpnts/Community/CommunityDetail/CommunityDetail.jsx'
import MentiHomepage from './Cmpnts/MentiHomepage/MentiHomepage.jsx';
import EditProfile from './Cmpnts/EditProfile';
import Post from './Cmpnts/Community/Post/Post';
import OnBoarding from './Cmpnts/OnBoarding/OnBoarding.jsx';
import { Routes, Route } from 'react-router-dom';

import testImg from './assets/testImg.png'


import { useEffect } from 'react';
import { mentorListState, crntMentorState } from './recoil';
import { useRecoilState } from 'recoil';


// 로그인 시 고유 id, isMentor값 response
function App() {

  const [mentorList, setMentorList] = useRecoilState(mentorListState)
  const [crntMentor, setCrntMentor] = useRecoilState(crntMentorState)
  useEffect(() => {

    const mentors = [];
    for (let i = 0; i < 60; i++) {
      mentors.push({
        "id": `${i}`,
        "userName": `test`,
        "name": i === 1 ? 'dfvfeoifjioe' : 'test',
        "profileImgPath": testImg,
        "mentorContent": "컨텐츠1",
        "mentoringPath": testImg,
        "isMentor": 1
      });
    }
    setMentorList(mentors); // 올바른 상태 업데이트 함수 이름을 사용했는지 확인하세요.
  }, []);
  
  useEffect(() => {
    console.log(mentorList);
  }, [mentorList]);
  


  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentoring" element={<Mentoring />} />
        <Route path="/mentor_homepage" element={<MentorHomepage />} />
        <Route path="/menti_homepage" element={<MentiHomepage/>} />
        <Route path="/community" element={<Community/>} />
        <Route path="/community_detail" element={<CommunityDetail/>} />
        <Route path="/post" element={<Post />} />
        <Route path="/edit_profile" element={<EditProfile />} />
        <Route path="/onboarding" element={<OnBoarding />} />
    </Routes>
  );
}

export default App;
