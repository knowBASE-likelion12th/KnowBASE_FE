import './MoreStyling.css'
import testImg from '../../../assets/testImg.png'
import prevButton from '../../../assets/prevButton.png'

import { useEffect } from 'react'

import { useRecoilState } from 'recoil'
import { isMoreStylingClickedState, isStylingEditClickedState, stylingsState } from './recoil'


function MoreStyling ({ stylingImgs, isIdentified }){
    const [stylings, setStylings] = useRecoilState(stylingsState)
    const [isMoreStylingClicked, setIsMoreStylingClcked] = useRecoilState(isMoreStylingClickedState)
    const [isStylingEditClicked, setIsStylingEditClicked] = useRecoilState(isStylingEditClickedState)

    function editBtnHandler(){
        setIsStylingEditClicked(true)
    }

    useEffect(()=>{
        console.log(stylings)
    }, [stylings])
    return (
        <div>
            <div style={{height: '4rem'}} />
            <div className='portfolio_more-upper' onClick={()=>setIsMoreStylingClcked(false)}>
            <div>
                <div><img src={prevButton} /></div>
                <div className="mtt_title" style={{margin: 0}}>홈 스타일링 예시</div>
            </div>

            {isIdentified ? (
                <div className='portfolio_edit-btn' onClick={editBtnHandler}><div>수정하기</div></div>
            ): (<></>)}
            
            </div>

            <div className='twoByFour-grid'>
            {stylings.map((e, index) => (
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
        </div>

    )
}

export default MoreStyling;