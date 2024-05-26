import './CommunityDetail.css'
import Comment from './Comment/Comment'
import Header from '../../Header/Header'
import testImg from '../../../assets/testImg.png'

import { useRecoilState, useRecoilValue } from 'recoil'
import { crntPostState, crntMentorState, mentorListState, postState } from '../../../recoil'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { isIdentifiedUser } from '../../validator'

function CommunityDetail() {
    const [isIdentified, setIsIdentified] = useState(false)
    const navigator = useNavigate()
    const [crntPost,setCrntPost] = useRecoilState(crntPostState)
    const [mentorList, setMentorList] = useRecoilState(mentorListState)
    const [crntMentor, setCrntMentor] = useRecoilState(crntMentorState)
    const [posts, setPosts] = useRecoilState(postState)

    function findMentor(userid) {
        let mentor = mentorList.find((e) => {
            return parseInt(e.id, 10) === parseInt(userid, 10);
        });
        return mentor;
    }

    function cmtClickedHandler(comment) {
        console.log(comment.isMentor)
        if (comment.isMentor) {
            setCrntMentor(findMentor(comment.userId), 10)
            navigator('/mentor_homepage');
        } else {
            navigator('/menti_homepage')
        }
    }

    useEffect(() => {
        // cmts 가져오기
        setCrntPost({
            ...crntPost, cmts:[
                {
                    "commentId": 1,
                    "userId": 1,
                    "nickname": "nickname",
                    "profImgPath": "string",
                    "isMentor": false,
                    "commentContent": "userId 1이 쓴 댓글1",
                    "countLike": 1,
                    "isLike": false,
                    "isadopt" : false
                },
                {
                    "commentId": 2,
                    "userId": 2,
                    "nickname": "mentorNickname",
                    "profImgPath": "string",
                    "isMentor": true,
                    "commentContent": "userId 2가 쓴 댓글2",
                    "countLike": 5,
                    "isLike": false,
                    "isadopt" : false
                },
                {
                    "commentId": 3,
                    "userId": 3,
                    "nickname": "mentorNickname",
                    "profImgPath": "string",
                    "isMentor": true,
                    "commentContent": "userId 2가 쓴 댓글2",
                    "countLike": 6,
                    "isLike": false,
                    "isadopt" : true
                },
                {
                    "commentId": 4,
                    "userId": 4,
                    "nickname": "mentorNickname",
                    "profImgPath": "string",
                    "isMentor": true,
                    "commentContent": "userId 2가 쓴 댓글2",
                    "countLike": 1,
                    "isLike": false,
                    "isadopt" : false
                }
            ]
        })

        // setPosts(posts.map((post, idx) => {
        //     if (post === crntPost) {
        //         return {
        //             ...post, cmts:
        //                 [
                            
        //                 ]
        //         };
        //     }
        //     return post;
        // }));
        setIsIdentified(isIdentifiedUser(crntPost.postId))


        // fetch(`api/post?postId=${posts[crntPostIdx].postId}`, {method: "GET"})
        // .then((res) => res.json())
        //   .then((data) => {
        //       setPosts({...posts, cmts: data.comments});
        //   })
        //   .catch((error) => {
        //       console.error("Error fetching data: ", error);
        //   });
    }, [])

    return (
        <>
            <Header />
            <div className='side-margin-142vw-lined'>
                <div className='cmd_title'>{crntPost.postTitle}</div>
                <div className='cmd_line'></div>
                <div className='cmd_profile-wrap'>
                    <div>
                        <div className='cmd_profile-img'>
                            <img src={crntPost.postImgPath} />
                        </div>
                        <div className='cmd_name'>{crntPost.nickname}</div>
                    </div>
                    <div className='cmd_date'>
                        {crntPost.updatedAt}
                    </div>
                </div>
                <div className='cmd_postImg'>
                <img src={crntPost.postImgPath} />
                </ div>
                <div className='cmd_content'>
                    {crntPost.postContent}
                </div>

                <div className='cmd_cmts-wrap'>
                    <div className='cmd_cmts-info-wrap'>
                        <div className='cmd_cmts-cnt'>
                            공감 <span style={{ color: '#FF719C' }}>{crntPost.cmts?.length}</span></div>
                        <div className='cmd_cmts-cnt'>
                            댓글 <span style={{ color: '#1CA764' }}>{crntPost.cmts?.length}</span></div>
                    </div>

                    <div style={{ paddingLeft: '1.9rem' }}>

                        <div className='cmd_input-wrap'>
                            <div className='cmd_profile'>
                                <img src={crntPost.img} />
                            </div>
                            <div>
                                <input placeholder='댓글 작성이 가능합니다.' />
                                <div className='cmd_submit'>등록</div>
                            </div>
                        </div>
                        {crntPost.cmts?.map((comment, i) => (
                            <div key={i} style={{ marginBottom: '3.8rem' }} onClick={() => cmtClickedHandler(comment)}>
                                <Comment
                                    name={comment.nickname}
                                    img={comment.profImgPath}
                                    grade={comment.isMentor ? '멘토' : '멘티'}
                                    content={comment.commentContent}
                                    likes={comment.countLike}
                                    isadopt = {comment.isadopt}
                                    isIdentified={isIdentified}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className='side-line-right' /> */}
            </div>
        </>
    )
}

export default CommunityDetail;
