import CareerSlider from '../../Slider/CareerSlider';
import Block from '../../Model/Block';
import '../Styles/MentiPostsTab.css'
import { useRecoilState } from 'recoil'
import { mentorListState} from '../../../recoil'


function MentiPostsTab(){

    const [mentorList, setMentorList] = useRecoilState(mentorListState)

    function blockClickHandler(){}

    return (
    <div className='mpt_wrap'>
        <div className='mtt_title'>내가 작성한 글</div>
        <div className='block-grid'>
        {mentorList.map((e, i)=>(
            <div onClick={()=>{blockClickHandler(i)}}>
                <Block key={i} img={e.img} name={e.name} score={e.score} count={e.count} content={e.content} tag1={e.tag1} tag2={e.tag2} tag3={e.tag3}
                />
            </div>
        ))}
    </div>
    </div>
    )
}

export default MentiPostsTab;