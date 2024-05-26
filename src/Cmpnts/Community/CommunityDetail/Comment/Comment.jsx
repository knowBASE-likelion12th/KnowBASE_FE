import './Comment.css'
import testImg from '../../../../assets/testImg.png'

import heart from '../../../../assets/heart.png'
import { useRecoilState } from 'recoil';
import { postState, crntPostState } from '../../../../recoil';

//글 작성자면 cmt_select 조건부 렌더링
function Comment({name, img, grade, content, likes, isIdentified, isadopt}){
    const [posts, setPosts] = useRecoilState(postState)
    const [crntPost, setCrntPost] = useRecoilState(crntPostState)


    
    return(
        <div className="cmt_wrap">
            <div className="cmd_profile-img">
                <img src={testImg}/>
            </div>
            <div className="cmt_content-wrap">
                <div className="cmt_profile-wrap">
                    <div>
                        <div className="cmt_name">{name}</div>
                        <div className="cmt_grade">{grade}</div>
                    </div>
                    <div>
                    {isadopt ? <div className='cmt_select'>채택</div> : <></>}
                    {isIdentified ? (<div className='cmt_select'>채택하기</div>): <div style={{display:'none'}}/>}
                    </div>
                    
                </div>
                <div className="cmt_content">{content}</div>
                <div className="cmt_likes-wrap">
                    <div><img src={heart} /></div>
                    <div>{likes}</div>
                </div>
            </div>
        </div>
    )

}

export default Comment;