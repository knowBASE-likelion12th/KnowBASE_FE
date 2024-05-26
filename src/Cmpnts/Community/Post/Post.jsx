import './Post.css'
import Header from '../../Header/Header';

import { useRecoilState } from 'recoil'
import { postTitleState, postContentState } from '../../../recoil'
import { useEffect, useRef } from 'react';
function Post(){
    let btnRef = useRef(null)
    const [postTitle ,setPostTitle] = useRecoilState(postTitleState)
    const [postContent ,setPostContent] = useRecoilState(postContentState)

    function postTitleChange(e){
        setPostTitle(e)
    }
    function postContentChange(e){
        setPostContent(e)
    }
    useEffect(()=>{
        if(postContent !== ''&& postTitle !==''){
            btnRef.current.style.backgroundColor = '#1CA764'
        }else{
            btnRef.current.style.backgroundColor = '#D9D9D9'
        }
    },[postContent, postTitle])

    function submitClickHandler(){

    }
    
return(
    <>
    <Header />
    <div className='side-margin-142vw-lined' style={{height:'100vh'}}>
    <div className='post_input-wrap'>
        <input
        placeholder='제목을 입력해주세요.'
        value={postTitle}
        onChange={(e)=>postTitleChange(e.target.value)}
        ></input>
        <div style={{display: "flex", gap:"1.2rem"}}>
        <div className='post_gallery'>
        <input type="file" id="fileInput" accept="image/*" style={{display: 'none'}} />
            <div><label for="fileInput" class="button">사진 첨부하기</label></div>
            </div>
            <div
            ref={btnRef}
            className='post_submit' onClick={submitClickHandler}><div>질문하기</div></div>
        </div>
    </div>
    <div className='post_line'></div>
    <div className='post_content-input' >
        <textarea type='text' placeholder='내용을 작성해주세요'
        value={postContent}
        onChange={(e)=>postContentChange(e.target.value)}
        />
    </div>
    </div>
    </>
)
}

export default Post;