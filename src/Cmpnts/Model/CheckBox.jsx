import '../../Styles/Checkbox.css'

function CheckBox({isChecked}){
    return(
        <input checked={isChecked} class="cb_check" type="checkbox" />
    )
}

export default CheckBox;