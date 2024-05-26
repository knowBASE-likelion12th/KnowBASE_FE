import React, { useEffect } from 'react';
import stylingImg from '../../../assets/stylingImg.png'
import PortfolioSection from './PortfolioSection';
import StylingSection from './StylingSection';
import MorePortfolio from './MorePortfolio'
import MoreStyling from './MoreStyling'
import PortfolioEdit from './PortfolioEdit/PortfolioEdit'

import './Portfolio.css'

import { useRecoilState, useRecoilValue } from 'recoil';
import { isMorePortfolioClickedState, isMoreStylingClickedState, isPortfolioEditClickedState, isStylingEditClickedState } from './recoil';
import StylingEdit from './StylingEdit/StylingEdit';

function Portfolio({isIdentified}) {
    const [isMorePortfolioClicked, setIsMorePortfolioClicked] = useRecoilState(isMorePortfolioClickedState);
    const [isMoreStylingClicked, setIsMoreStylingClicked] = useRecoilState(isMoreStylingClickedState);
    const [isPortfolioEditClicked, setIsPortfolioEditClicked]= useRecoilState(isPortfolioEditClickedState)
    const [isStylingEditClicked, setIsStylingEditClicked]= useRecoilState(isStylingEditClickedState)

    

    let stylingImgs = [stylingImg, stylingImg]

    function renderContent(){
        
        if(isMorePortfolioClicked){
            return <MorePortfolio isIdentified={isIdentified}/>;
        }
        else if(isPortfolioEditClicked){
            return <PortfolioEdit />;
        }
                    
        if(isMoreStylingClicked){
            return <MoreStyling isIdentified={isIdentified}/>;
        }
        else if(isStylingEditClicked){
            return <StylingEdit />;
        }
        
        else{
            return (
                <>
                    <div style={{height: '4rem'}} />
                    <PortfolioSection/>
                    <div style={{height: '6rem'}} />
                    <StylingSection stylingImgs={stylingImgs} />
                </>
            );
        }
    }
    
    
    return (
        <div className='pf_wrap'>
            {renderContent()}
        </div>
    );
}

export default Portfolio;
