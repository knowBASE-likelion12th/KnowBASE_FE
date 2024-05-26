import '../../Styles/DropdownSingleClickable.css'
import downArrow from '../../assets/downArrow.png'

import { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { crntClickedCategoryState, postState } from '../../recoil'
import { PiSmileyWinkThin } from 'react-icons/pi'

function DropdownSingleClickable({title, children, onClick}){
    let ddContentRef = useRef(null) 
    let contents = children
    const [crntClickedCategory,setCrntClickedCategory] = useRecoilState(crntClickedCategoryState)
    const [posts, setPosts] = useRecoilState(postState)

    function titleOverHandler(){
        ddContentRef.current.style.display = 'block'
    }

    function titleDownHandler(){
        ddContentRef.current.style.display = 'none'
    }

    useEffect(()=>{
        console.log(crntClickedCategory)
    },[crntClickedCategory])

    return (
    <div onMouseOver={titleOverHandler} onMouseLeave={titleDownHandler}>
        <div className='dd_title-wrap' >
            <div className='dd_title dd_selected'>{crntClickedCategory ? crntClickedCategory : '정렬'}</div>
            <div><img src={downArrow}/></div>
        </div>
        
        <div ref={ddContentRef} className='dd_content-wrap'>
            
        {contents.map((e) => {
                    const cn = crntClickedCategory === e ? 'dd-single_content dd_selected' : 'dd-single_content ';
                    return (
                        <div key={e} className={cn} onClick={() => {
                            setCrntClickedCategory(e);
                            onClick(e);
                        }
                        } >
                            {e}
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default DropdownSingleClickable;