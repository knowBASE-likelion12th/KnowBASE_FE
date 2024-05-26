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
import '../Styles/MentoringHomepageNavBar.css';

import { useRef, useEffect, useState } from 'react'; 

import { useRecoilState } from 'recoil';
import { selectedNavbarState } from '../../../recoil';

function MentoringHomepageNavBar() {
    const [left, setLeft] = useState('0');
    const lineRef = useRef(null);
    const [selectedNavbar, setSelectedNavbar] = useRecoilState(selectedNavbarState);

    const titles = ['소개', '포트폴리오', '멘토링 로드맵', '질문', '후기']
    function navBarClickHandler(e) {
        setSelectedNavbar(e.target.textContent);
        switch (e.target.textContent) {
            case '소개':
                setLeft('0');
                break;
            case '포트폴리오':
                setLeft('12vw');
                break;
            case '멘토링 로드맵':
                setLeft('25vw'); 
                break;
            case '질문':
                setLeft('38vw');
                break;
            case '후기':
                setLeft('50vw');
                break;
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
        <div className='mh-navbar-wrap'>
            <div className='mh-navs'>
                {titles.map((title, index) => (
                    <div key={index} className={`mh-nav ${selectedNavbar === title ? 'mh_selected' : ''}`}  onClick={navBarClickHandler}>
                        {title}
                    </div>
                ))}
            </div>
            <div className='mh-line'>
                <div ref={lineRef} className='mh-line-highlighted'></div>
            </div>
        </div>
    );
}

export default MentoringHomepageNavBar;
