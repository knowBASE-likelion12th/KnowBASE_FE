// import before from '../assets/before.png'
// import after from '../assets/after.png'
import './ReviewBlock.css'
import './MentorReview.css'
import '../MentoringComponent.css'
import testImg from '../../../assets/testImg.png'
import { useState } from 'react';
import { PiStarFill, PiStarLight } from "react-icons/pi";

import { useRecoilState } from 'recoil';



export default function ReviewBlock({ before, after, reviewTitle, rating, date, reviewContent }) {
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
                <div className="before_img">
                    <img src={before} alt="Before"/>
                    <div>
                    <div className='review_text'>before</div>
                    </div>
                    
                </div>
                <div className="after_img">
                    <img src={after} alt="After"/>
                    <div />
                    <div className='review_text'>after</div>
                </div>
            </div>
            <div className="review_content">
                <div>
                <div className="review_title">{reviewTitle}</div>
                <div className="review_rating">{renderRatingStars()}</div>
                </div>
                <div>
                <div className="review_date">{date}</div>
                <div className="review_comment">{reviewContent}</div>
                </div>
                <div className="review_detail_btn">
                    <button>더보기</button>
                </div>
                
            </div>
        </div>
    );
}