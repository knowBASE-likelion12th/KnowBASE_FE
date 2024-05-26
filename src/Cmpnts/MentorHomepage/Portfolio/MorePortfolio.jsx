import './MorePortfolio.css'

//dummy
import testImg from '../../../assets/testImg.png'
import prevButton from '../../../assets/prevButton.png'

import Block from '../../Model/Block';

import { useRecoilState, useRecoilValue } from "recoil";
import { isMorePortfolioClickedState, isPortfolioEditClickedState } from "./recoil";
import { isEditState } from '../recoil';
import { portfolioState } from './recoil';
import { useEffect } from 'react';
import { crntMentorState, mentorListState } from '../../../recoil';

function MorePortfolio({isIdentified}){
    const mentorInfo = useRecoilValue(mentorListState)
    const crntMentorIdx = useRecoilValue(crntMentorState)

    const [isPortfolioEditClicked, setIsPortfolioEditClicked] = useRecoilState(isPortfolioEditClickedState)
    const [isMorePortfolioClicked, setIsMorePortfolioClcked] = useRecoilState(isMorePortfolioClickedState)
    const [_, setIsEdit] = useRecoilState(isEditState)
    const [portfolios, setPortfolios] = useRecoilState(portfolioState)

    function editBtnHandler(){
        setIsPortfolioEditClicked(true)
    }

    return (
        <>
        <div style={{height: '4rem'}} />
        <div className='portfolio_more-upper' onClick={()=>setIsMorePortfolioClcked(false)}>
            <div>
                <div><img src={prevButton} /></div>
                <div className="mtt_title" style={{margin: 0}}>개인 포트폴리오</div>
            </div>
            {isIdentified ? (
                <div className='portfolio_edit-btn' onClick={editBtnHandler}><div>수정하기</div></div>
            ):<div/>}
            
        </div>
        <div className="twoByFour-grid">
        {portfolios.map((e, index) => (
                    <div key={index} className='pf_styling-contents-wrap' >
                        <div className='pf_styling-img'>
                            <img src={e.portfolioImagePath} alt="Styling" />
                        </div>
                        <div className='pf_styling-title'>
                            {e.portfolioTitle}
                        </div>
                    </div>
                ))}
        </div>
        </>
    )
}

export default MorePortfolio;