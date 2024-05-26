import './MentorIntro.css'

import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import MentoringComponent from '../MentoringComponent';
import { mentorIntroState, isEditState } from '../recoil';

export default function MentorIntro() {
    const [mentorIntro, setMentorIntro] = useRecoilState(mentorIntroState);
    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        const storedIntro = localStorage.getItem('mentorIntro');
        if (storedIntro) {
            setMentorIntro(JSON.parse(storedIntro));
        }
    }, [setMentorIntro]);

    const handleEditClick = () => {
        setIsEditable(true);
    };

    const handleSaveClick = (newContent, title) => {
        setMentorIntro((prevIntro) => {
            const updatedIntro = prevIntro.map((item) => {
                if (item.title === title) {
                    return { ...item, content: newContent };
                }
                return item;
            });
            localStorage.setItem('mentorIntro', JSON.stringify(updatedIntro)); // 수정된 값을 localStorage에 올바르게 저장
            return updatedIntro;
        });
        setIsEditable(false);
    };

    return (
        <div className='mentoring_intro_container'>
            {mentorIntro.map((e, i) => (
                <MentoringComponent 
                    key={i} 
                    title={e.title} 
                    content={e.content} 
                    isEditable={isEditable} 
                    onSaveClick={handleSaveClick} 
                />
            ))}
            <div className="mentorIntro_btn_wrap">
                {!isEditable ? <button className="modify_btn" onClick={handleEditClick}>수정하기</button> : <button className="save_btn" onClick={handleSaveClick}>저장하기</button>}
            </div>       
        </div>
    );
}
