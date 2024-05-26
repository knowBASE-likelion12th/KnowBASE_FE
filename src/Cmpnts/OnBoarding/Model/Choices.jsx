import { useEffect, useState } from 'react'
import '../Styles/Choices.css'

import { useRecoilState } from 'recoil'
import { clickedDwellingTypeState, clickedSpaceTypeState, clickedMentoringTypeState, clickedInterestTypeState } from '../recoil'

function Choices({ title, choices }) {
    const [clickedDwellingTypes, setClickedDwellingTypes] = useRecoilState(clickedDwellingTypeState)
    const [clickedSpaceTypes, setClickedSpaceTypes] = useRecoilState(clickedSpaceTypeState)
    const [clickedMentoringTypes, setClickedMentoringTypes] = useRecoilState(clickedMentoringTypeState)
    const [clickedInterestTypes, setClickedInterestTypes] = useRecoilState(clickedInterestTypeState)

    let crntType, setCrntType;
    if (title.includes('주거')) {
        [crntType, setCrntType] = [clickedDwellingTypes, setClickedDwellingTypes];
    } else if (title.includes('공간유형을')) {
        [crntType, setCrntType] = [clickedSpaceTypes, setClickedSpaceTypes];
    } else if (title.includes('스타일을')) {
        [crntType, setCrntType] = [clickedMentoringTypes, setClickedMentoringTypes];
    } else if (title.includes('관심사를')) {
        [crntType, setCrntType] = [clickedInterestTypes, setClickedInterestTypes];
    }
    
    function choiceClickedHandler(choice) {
        setCrntType(choice)
    }

    return (
        <div>
            <div className="ob_title-wrap">
                <div className="ob_choices-title">
                    {title}
                </div>
                <div className="ob_subtitle">
                    (중복 선택 가능)
                </div>
            </div>

            <div className='ob_choices-wrap'>
                {choices.map((choice, index) => {
                    const cn = crntType === choice? 'ob_choice-selected' : 'ob_choice';
                    return (
                        <div key={index} className={cn} onClick={(e) => choiceClickedHandler(e.target.textContent)}>
                            <div className='ob_choice-title'>
                                {choice}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Choices;
