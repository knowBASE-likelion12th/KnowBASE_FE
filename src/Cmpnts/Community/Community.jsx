import './Community.css'
import testImg from '../../assets/testImg.png'
import postImg from '../../assets/postImg.png'
import Header from '../Header/Header'
;
import Info from '../Info';
import Pagination from '../Pagination';
import CommunityInput from './CommunityDetail/CommunityInput';
import MentoringHomepageNavBar from '../MentorHomepage/Main/MentoringHomepageNavBar';

import { useRecoilValue, useRecoilState } from 'recoil';
import { postState, crntPostState, crntClickedCategoryState } from '../../recoil';
import Block from '../Model/Block';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Community() {
    const navigator = useNavigate()
    const [posts,setPosts] = useRecoilState(postState);
    const [crntPost,setCrntPost] = useRecoilState(crntPostState);
    const [crntClickedCategory, setCrntClickedCategory] = useRecoilState(crntClickedCategoryState)
    
    function blockClickHandler(e){
        setCrntPost(e)
        console.log(crntPost)
        navigator('/community_detail')
    }

    useEffect(()=>{
        setCrntClickedCategory('조회순')
        console.log(posts)
        setPosts([
            {
                "postId": 1,
                "postTitle": "제목",
                "postContent": "내용",
                "postImgPath": postImg,
                "nickname": "nickname",
                "userId" : 1,
                "postAuthorProfImg": "string",
                "updatedAt": "2024-05-25T16:44:10.199599"
            },
            {
                "postId": 2,
                "postTitle": "제목",
                "postContent": "내용",
                "postImgPath": postImg,
                "nickname": "nickname",
                "userId" : 2,
                "postAuthorProfImg": "string",
                "updatedAt": "2024-05-25T16:44:14.114309"
            }
            
        ])
        // setPosts(
            
        // )


        // fetch('api/post/all', {method: "GET"})
        // .then((res) => res.json())
        //   .then((data) => {
        //       setPosts(data.posts);
        //   })
        //   .catch((error) => {
        //       console.error("Error fetching data: ", error);
        //   });
    }, [])

    return (
        <>
            <Header />
            <Info
                title='COMMUNITY'
                content={<>혼자서만 해결하려고 했던 궁금증을 커뮤니티 안에서 해결해 볼까요?</>}
            />
            <div className='side-padding-20vw' >
                {<Pagination items={posts} itemsPerPage={24} onClick={blockClickHandler} />}
            </div>
        </>
    );
}

export default Community;
