import Input from "../Model/Input";

import { useRecoilState } from "recoil";
import { beforeMentoringState, whileMentoringState, afterMentoringState } from "../recoil";

function RoadMap(){
    const [beforeMentoring, setBeforeMentoring] = useRecoilState(beforeMentoringState)
    const [whileMentoring, setWhileMentoring] = useRecoilState(whileMentoringState)
    const [afterMentoring, setAfterMentoring] = useRecoilState(afterMentoringState)
    return(
    <>
    <Input title={'멘토링 전'} style={'20rem'} input={beforeMentoring} inputChange={setBeforeMentoring}/>
    <Input title={'멘토링'} style={'20rem'} input={whileMentoring} inputChange={setWhileMentoring}/>
    <Input title={'멘토링 후'} style={'20rem'} input={afterMentoring} inputChange={setAfterMentoring}/>
    </>
    )
}

export default RoadMap;