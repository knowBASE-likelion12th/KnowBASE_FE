// import before from '../assets/before.png'
// import after from '../assets/after.png'
import './ReviewBlock.css'
import './MentorReview.css'
import '../MentoringComponent.css'
import testImg from '../../../assets/testImg.png'
import { useState } from 'react';
import { PiStarFill, PiStarLight } from "react-icons/pi";

import { useRecoilState } from 'recoil';



export default function ReviewBlock({ before, after, title, rating, date, comment }) {
    // 평점을 표시하는 함수
    const renderRatingStars = () => {
        const starIcons = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                starIcons.push(<PiStarFill key={i} />);
            } else {
                starIcons.push(<PiStarLight key={i} />);
            }
        }
        return starIcons;
    };

    

    return (
        <div className="mentroing_review_wrap">
            <div className="review_img_wrap">
                <img src={before} className="before_img" alt="Before"/>
                <img src={after} className="after_img" alt="After"/>
            </div>
            <div className="review_content">
                <div className="review_title">{title}</div>
                <div className="review_rating">{renderRatingStars()}</div>
                <div className="review_date">{date}</div>
                <div className="review_comment">{comment}</div>
                <button className="review_detail_btn">더보기</button>
            </div>
        </div>
    );
}