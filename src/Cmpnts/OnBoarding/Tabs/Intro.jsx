import Input from "../Model/Input";

import { useRecoilState } from "recoil";
import { infoState, availableTimeState, idState, strengthState } from "../recoil";
import { useEffect } from "react";

function Intro(){
    const [info, setInfo] = useRecoilState(infoState)
    const [availableTime, setAvailableTime] = useRecoilState(availableTimeState)
    const [id, setId] = useRecoilState(idState)
    const [strength, setStrength] = useRecoilState(strengthState)

    useEffect(()=>{
        console.log(info)
        console.log(availableTime)
        console.log(id)
        console.log(strength)
    }, [info, availableTime, id, strength])
    

    return(
        <>
    <Input title={'멘토님은 어떤 사람인가요?'} style={'13rem'} input={info} inputChange={setInfo}/>
    <Input title={'멘토링 가능한 시간을 입력해 주세요.'} style={'13rem'} input={availableTime} inputChange={setAvailableTime}/>
    <Input title={'연락 가능한 카카오톡 아이디를 입력해 주세요.'} style={'13rem'} input={id} inputChange={setId}/>
    <Input title={'멘토링에 있어 멘토님의 강점이라고 생각되는 것을 적어주세요'} style={'13rem'} input={strength} inputChange={setStrength}/>
    </>
    )
}

export default Intro;