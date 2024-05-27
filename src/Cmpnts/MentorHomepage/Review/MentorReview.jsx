import './MentorReview.css'

import { useState } from "react";
import { PiStarFill, PiStarLight } from "react-icons/pi";
import { ReviewListState } from "../recoil";
import ReviewBlock from "./ReviewBlock";

import { useRecoilState } from "recoil";
import { isReviewCreateClickedState } from "../../../recoil";

import { isReviewClickedState } from '../../../recoil';
import { crntClickedReviewState } from '../recoil';

export default function MentorReview(){
    const [starRating, setStarRating] = useState(1);
    const numberRating = starRating.toFixed(1);

    const [reviewList, setReivewList] = useRecoilState(ReviewListState)
    const [isReviewClicked, setIsReviewClicked] = useRecoilState(isReviewClickedState)
    const [crntClickedReview, setCrntClickedReview] = useRecoilState(crntClickedReviewState)
    const [isReviewCreateClicked, setIsReviewCreateClicked] = useRecoilState(isReviewCreateClickedState)

    function moreBtnHandler(e){
        setCrntClickedReview(e)
        setIsReviewClicked(true)
    }

    function newReviewHandler(){
        setIsReviewCreateClicked(true)
    }

    return(
        <>
        <div className="review_input">
            <span className='review-title'> 후기</span>
            <div style={{display: 'flex', gap: '17.8rem'}}>
            <div className='star-ranking-wrap'>
            <span className="star_rating"> 
            {[...Array(starRating)].map((a, i) => (
            <PiStarFill className="fill_star" key={i} onClick={() => setStarRating(i + 1)} />))}

            {[...Array(5 - starRating)].map((a, i) => (
            <PiStarLight className="vacant_star" key={i} onClick={() => setStarRating(starRating + i + 1)} />))} 
            </span>
            <span className="number_rating">{numberRating}</span>
            </div>
            <button className="review_btn" onClick={newReviewHandler}> 후기 작성하기</button>
            </div>
        </div>
        
        <div className="review_block_container">
            {reviewList.map((e,i)=>
            <div onClick={()=>moreBtnHandler(e)}><ReviewBlock key={i} before={e.before} after={e.after} reviewTitle={e.reviewTitle} rating={e.rating} date={e.date} reviewContent={e.reviewContent}/> </div>)}
            
        </div>
        </>
    );
}