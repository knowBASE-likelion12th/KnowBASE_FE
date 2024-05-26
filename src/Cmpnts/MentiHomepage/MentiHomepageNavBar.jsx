// import '../Styles/MentoringHomepageNavBar.css'

// import { useRef, useEffect, useState } from 'react'; 

// import { useRecoilState } from 'recoil';
// import { selectedNavbarState } from '../recoil';

// function MentoringHomepageNavBar() {
//     const [selectedNavbar, setSelectedNavbar] = useRecoilState(selectedNavbarState);

//     const titles = ['소개', '포트폴리오', '멘토링 로드맵', '질문', '후기']

//     function navBarClickHandler(e) {
//         setSelectedNavbar(e.target.textContent);
//     }

//     return (
//         <div className='mh_navbar-wrap'>
//             <div className='mh-navs'>
//                 {titles.map((e, i)=>(
//                     <div key={i} className={`mh_nav ${selectedNavbar === e ? 'mh_selected' : ''}`}  onClick={navBarClickHandler}>
//                     {e}
//                 </div>
//                 ))}  
//             </div>
//         </div>
//     );
// }

// export default MentoringHomepageNavBar;
import './Styles/MentiHomepageNavBar.css';

import { useRef, useEffect, useState } from 'react'; 

import { useRecoilState } from 'recoil';
import { selectedMentiNavbarState } from '../../recoil';

function MentiHomepageNavBar() {
    // const navsRef = useRef(null)
    const [left, setLeft] = useState('14vw');
    const lineRef = useRef(null);
    const [selectedMentiNavbar, setSelectedMentiNavbar] = useRecoilState(selectedMentiNavbarState);
    const titles = ['작성 글', '작성 댓글', '후기']
    function navBarClickHandler(e) {
    
        setSelectedMentiNavbar(e.target.textContent);
        switch (e.target.textContent) {
            case '작성 글':
                setLeft('14vw');
                break;
            case '작성 댓글':
                setLeft('25vw');
                break;
            case '후기':
                setLeft('37vw'); 
            default:
                break;
        }
    }

    useEffect(() => {
        if (lineRef.current) {
            lineRef.current.style.left = left;
        }
    }, [left]); 

    return (
        <div className='mth-navbar-wrap'>
            <div className='mth-navs'>
            {titles.map((title, index) => (
                    <div key={index} 
                         className={`mth-nav ${selectedMentiNavbar === title ? 'mh_selected' : ''}`} 
                         onClick={navBarClickHandler}>
                        {title}
                    </div>
                ))}
            </div>
            <div className='mth-line'>
                <div ref={lineRef} className='mth-line-highlighted'></div>
            </div>
        </div>
    );
}

export default MentiHomepageNavBar;
