import './MentorRoadmap.css'

import { mentorRoadmapState } from "../recoil";
import React, { useState, useEffect } from 'react';
import MentoringComponent from '../MentoringComponent';

import { useRecoilState } from "recoil";
import { isEditState } from "../recoil";

export default function MentorRoadmap(){
    const [mentorRoadmap, setMentorRoadmap] = useRecoilState(mentorRoadmapState);
    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        const storedIntro = localStorage.getItem('mentorRoadmap');
        if (storedIntro) {
            setMentorRoadmap(JSON.parse(storedIntro));
        }
    }, [setMentorRoadmap]);

    const handleEditClick = () => {
        setIsEditable(true);
    };

    const handleSaveClick = (newContent, title) => {
        setMentorRoadmap((prevIntro) => {
            const updatedRoadmap = prevIntro.map((item) => {
                if (item.title === title) {
                    return { ...item, content: newContent };
                }
                return item;
            });
            localStorage.setItem('mentorRoadmap', JSON.stringify(updatedRoadmap)); // 수정된 값을 localStorage에 올바르게 저장
            return updatedRoadmap;
        });
        setIsEditable(false);
    };
    return(
    <div className='mentoring_roadmap_container'>
    {mentorRoadmap.map((e, i) => (
        <MentoringComponent 
            key={i} 
            title={e.title} 
            content={e.content} 
            isEditable={isEditable} 
            onSaveClick={handleSaveClick} 
        />
    ))}
    <div className="mentorRoadmap_btn_wrap">
        {!isEditable ? <button className="modify_btn" onClick={handleEditClick}>수정하기</button> : <button className="save_btn" onClick={handleSaveClick}>저장하기</button>}
    </div>  
        </div>);
}