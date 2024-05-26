import { useEffect, useRef } from 'react';
import '../../Styles/Button.css'

function Button ({title, color}){
    let btnRef = useRef(null)
    useEffect(()=>{
        btnRef.current.style.backgroundColor = color
    }, [])
    // 추후 API명세표에 따라 로직 달라짐 (기본적으로는 채팅창 팝업)
    // function buttonClickHandler(){

    // }
    return(
        <div ref={btnRef} className='button-wrap'
        // onClick={buttonClickHandler}
        >
            {title}
        </div>
    )
}

export default Button;