import '../Styles/Input.css'

function Input({title, height= '7rem', input, inputChange}){

    return(
        <div className="ob_input-wrap">
            <div className="ob_title">{title}</div>
            <div className="ob_textarea" style={{minHeight: height}}>
                <textarea placeholder="내용을 입력해 주세요" value={input} onChange={(e)=>inputChange(e.target.value)}/>
            </div>
        </div>
    )
}

export default Input;