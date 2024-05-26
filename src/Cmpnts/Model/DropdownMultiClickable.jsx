import '../../Styles/DropdownMultiClickable.css'
import downArrow from '../../assets/downArrow.png'

import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { crntClickedCategoriesState } from '../../recoil'

import CheckBox from './CheckBox'

function DropdownMultiClickable({title, children}){
let ddContentRef = useRef(null) 
    let contents = children
    const [crntClickedCategories, setCrntClickedCategories] = useRecoilState(crntClickedCategoriesState)

    function titleOverHandler(){
        ddContentRef.current.style.display = 'block'
    }

    function titleDownHandler(){
        ddContentRef.current.style.display = 'none'
    }

    function contentClickHandler(content){
        if(crntClickedCategories.includes(content)){
            setCrntClickedCategories(crntClickedCategories.filter(item => item !== content));
        }else{
            setCrntClickedCategories(prev => [...prev, content])
        }
    }

    useEffect(()=>{
        console.log(crntClickedCategories)
    },[crntClickedCategories])

    return (
        <div onMouseOver={titleOverHandler} onMouseLeave={titleDownHandler}>
            <div className='dd_title-wrap'>
                <div className='dd_title'>{title}</div>
                <div><img src={downArrow} alt=""/></div>
            </div>

            <div ref={ddContentRef} className='dd_content-wrap'>
                {contents.map((content, index) => {
                    const isChecked = crntClickedCategories.includes(content);
                    return (
                        <div key={content} className={isChecked ? 'dd_content dd_selected' : 'dd_content'} onClick={() => contentClickHandler(content)}>
                            <CheckBox isChecked={isChecked} />
                            {content}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default DropdownMultiClickable;
