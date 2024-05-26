import './MentorInput.css'

function MentorInput({title, height= '7rem', value, inputChange, isEdit}){

    return(
        <div className="mi_input-wrap">
            <div className="mtt_title">{title}</div>
            <div className="mi_textarea" style={{minHeight: height}}>
                <textarea placeholder={value} value={value} onChange={(e)=>inputChange(e.target.value)} readOnly={isEdit ? false : true}/>
            </div>
        </div>
    )
}

export default MentorInput;