import './MentoringComponent.css'

import React, { useState, useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { isEditState } from './recoil';

import {
    introState,
    probableTimeState,
    prosState,
    beforeRoadmapState,
    whileRoadmapState,
    afterRoadmapState,
} from './mc_recoil';


export default function MentoringComponent({ title, content, isEditable, onSaveClick }) {
    const [intro, setIntro] = useRecoilState(introState);
    const [availableTime, setAvailableTime] = useRecoilState(probableTimeState);
    const [strength, setStrength] = useRecoilState(prosState);
    const [beforeRoadmap, setBeforeRoadmap] = useRecoilState(beforeRoadmapState);
    const [whileRoadmap, setWhileRoadmap] = useRecoilState(whileRoadmapState);
    const [afterRoadmap, setAfterRoadmap] = useRecoilState(afterRoadmapState);

    const [inputContent, setInputContent] = useState(content);

    useEffect(() => {
        setInputContent(content);
    }, [content]);

    let get, set;
    const arrTitle = title.split(' ');

    switch (arrTitle[0]) {
        case '나는':
            get = intro;
            set = setIntro;
            break;
        case '시간은':
            get = availableTime;
            set = setAvailableTime;
            break;
        case '나의':
            get = strength;
            set = setStrength;
            break;
        case '나의':
        get = strength;
        set = setStrength;
        break;
        // 다른 경우 추가
        default:
            get = intro;
            set = setIntro;
            break;
    }

    const handleInputChange = (e) => {
        set(e.target.value);
        console.log(get)
    };

    const handleSaveClick = () => {
        onSaveClick(inputContent); // 수정된 값을 상위 컴포넌트로 전달
    };

    return (
        <div className="mentoring_component_wrap">
            <div className="mentoring_component_content">
                <div className="mentroing_title">{title}</div>
                <textarea className='mc_textarea' value={inputContent} onChange={handleInputChange} readOnly></textarea>
                {isEditable && <button onClick={handleSaveClick}>Save</button>}
            </div>
        </div>
    );
}
