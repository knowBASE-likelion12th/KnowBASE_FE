// StylingSection.js
import React from 'react';
import './Portfolio.css'

import { useRecoilState } from 'recoil'
import { isMoreStylingClickedState, stylingsState } from './recoil';
import { crntMentorState } from '../../../recoil';

function StylingSection({ stylingImgs }) {
    const [isMoreStylingClicked, setIsMoreStylingClicked] = useRecoilState(isMoreStylingClickedState)
    const [crntMentor, setCrntMentor] = useRecoilState(crntMentorState)
    const [stylings, setStylings] = useRecoilState(stylingsState)

    // useEffect(() => {
    //     if (crntMentor) {
    //       fetch(`api/homestyle/mentor?userId=${crntMentor.id}`, { method: 'GET' })
    //         .then(response => response.json())
    //         .then(data => {
    //              stylings = data.homestylings
    //       })
    //       .catch(error => {
    //         console.error('Error fetching mentor portfolio:', error);
    //       });
    //     }
    //   }, []);
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className='mtt_title'>홈 스타일링 예시</div>
                <div className='btn-more' onClick={()=>setIsMoreStylingClicked(true)}><div>더보기</div></div>
            </div>
            <div className='pf_contents-wrap'>
                {stylings.slice(0,2).map((e, index) => (
                    <div key={index} className='pf_styling-contents-wrap' >
                        <div className='pf_styling-img'>
                            <img src={e.homestylingImagePath} alt="Styling" />
                        </div>
                        <div className='pf_styling-title'>
                            {e.homestylingDescription}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default StylingSection;
