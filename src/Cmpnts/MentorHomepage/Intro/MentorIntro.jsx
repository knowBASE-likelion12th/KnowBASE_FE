import './MentorIntro.css'

import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { mentorIntroState, isEditState } from '../recoil';
import MentorInput from '../../OnBoarding/Model/MentorInput';

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


export default function MentorIntro() {
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
        setIsIntroEditClicked(true)
    }

    function saveBtnHandler(){
        // fetch(`api/introduce?introId=${introId}`, { /// intro ID ?????????
        //     method: 'PUT',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         "userId": crntMentor.id,
        //         "introContent": intro,
        //         "availableTime": availableTime,
        //         "strength": strength
        //     })
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));

        setIsIntroEditClicked(false)
    }
    return (
        <div className='mentoring_intro_container'>
            <div style={{height: '4rem'}} />
            <MentorInput title='나는 누구인가요?' value={intro} inputChange={setIntro} isEdit={isIntroEditClicked}/>
            
            <MentorInput title='시간은 언제가 가능한가요?' value={availableTime} inputChange={setAvailableTime} isEdit={isIntroEditClicked}/>

            <MentorInput title='나의 강점은 무엇이라고 생각하나요?' value={strength} inputChange={setStrength} isEdit={isIntroEditClicked}/>

            <div className='mentorIntro_btn_container'>
            <div className="mentorIntro_btn_wrap">
              {isIntroEditClicked ?<button className="save_btn" onClick={saveBtnHandler}>저장하기</button>:
              <button className="modify_btn" onClick={editBtnHandler}>수정하기</button> 
              }  
                </div>
            </div>       
        </div>
    );
}
