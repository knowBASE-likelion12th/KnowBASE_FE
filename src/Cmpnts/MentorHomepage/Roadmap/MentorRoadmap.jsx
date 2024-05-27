import '../../OnBoarding/Model/MentorInput.css'

import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import MentoringComponent from '../MentoringComponent';
import { mentorIntroState, isEditState } from '../recoil';
import MentorInput from '../../OnBoarding/Model/MentorInput';
import before from '../../../assets/before.png'

import {
    introState,
    probableTimeState,
    prosState,
    beforeRoadmapState,
    whileRoadmapState,
    afterRoadmapState,
    isIntroEditClickedState,
    isStrengthEditClickedState,
    isRoadmapEditClickedState
} from '../mc_recoil';
import { crntMentorState } from '../../../recoil';


export default function MentorRoadmap() {
    const [crntMentor, setCrntMentor] = useRecoilState(crntMentorState)
    const [intro, setIntro] = useRecoilState(introState);
    const [availableTime, setAvailableTime] = useRecoilState(probableTimeState);
    const [strength, setStrength] = useRecoilState(prosState);
    const [beforeRoadmap, setBeforeRoadmap] = useRecoilState(beforeRoadmapState);
    const [whileRoadmap, setWhileRoadmap] = useRecoilState(whileRoadmapState);
    const [afterRoadmap, setAfterRoadmap] = useRecoilState(afterRoadmapState);
    const [isIntroEditClicked, setIsIntroEditClicked] = useRecoilState(isIntroEditClickedState)
    const [isRoadmapEditClicked, setIsRoadmapEditClicked] = useRecoilState(isRoadmapEditClickedState)
    const [isStrengthEditClicked, setIsStrengthEditClicked] = useRecoilState(isStrengthEditClickedState)

    function editBtnHandler(){
        setIsRoadmapEditClicked(true)
    }

    function saveBtnHandler(){
        // fetch(`api/roadmap?roadmapId=${roadmapId}`, { /// roadmap ID ?????????
        //     method: 'PUT',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
            // "userId":crntMentor.id,
            // "roadmapBefore": beforeRoadmap,
            // "roadmapStart": whileRoadmap,
            // "roadmapAfter": afterRoadmap
        //     })
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));

        setIsRoadmapEditClicked(false)
    }
    return (
        <div className='mentoring_intro_container'>
            <div style={{height: '4rem'}} />

            <div style={{position: "relative"}}>
            <MentorInput title='멘토링 전' height='15.5rem' value={beforeRoadmap} inputChange={setBeforeRoadmap} isEdit={isRoadmapEditClicked}/>
            <img src={before} style={{position: 'absolute', top: '9rem', right: '1vw'}}/>
            </div>

            <div style={{position: "relative"}}>
            <MentorInput title='멘토링 시작' height='15.5rem' value={whileRoadmap} inputChange={setWhileRoadmap} isEdit={isRoadmapEditClicked}/>
            <img src={before} style={{position: 'absolute', top: '9rem', right: '1vw'}}/>
            </div>

            <div style={{position: "relative"}}>
            <MentorInput title='멘토링 후' height='15.5rem' value={afterRoadmap} inputChange={setAfterRoadmap} isEdit={isRoadmapEditClicked}/>
            <img src={before} style={{position: 'absolute', top: '9rem', right: '1vw'}}/>
            </div>
            <div className='mentorIntro_btn_container'>
            <div className="mentorIntro_btn_wrap">
              {isRoadmapEditClicked ?<button className="save_btn" onClick={saveBtnHandler}>저장하기</button>:
              <button className="modify_btn" onClick={editBtnHandler}>수정하기</button>}
            </div>       
            </div>
        </div>
    );
}
