import '../Styles/MentiCmtsTab.css'
import Comment from '../../Community/CommunityDetail/Comment/Comment';
import { useRecoilState } from 'recoil'
import { postState, crntPostIdxState } from '../../../recoil';

function MentiCmtsTab(){
    // dummy
    const [posts, setPosts] = useRecoilState(postState)
    const crntPostIdx = 0
    return (
    <div className='mct_wrap'>
        <div className='mtt_title'>내가 작성한 댓글</div>
        {posts[crntPostIdx].cmts?.map((e,i)=>(
            <div className='mct_cmt-wrap'>
            <Comment 
                key={i}
                name= {e.name}
                img= {e.img}
                grade = {e.grade}
                content = {e.content}
                likes={e.likes}
            />
            </div>
        ))}
    </div>
    )
}

export default MentiCmtsTab;