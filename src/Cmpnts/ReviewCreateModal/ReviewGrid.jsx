import '../ReviewModal/ReviewModal.css'

import { PiStarFill, PiStarLight } from "react-icons/pi";

import { useRecoilState } from 'recoil';
import { reviewInputState } from './recoil';

function ReviewGrid() {

    const[reviewInput, setReviewInput] = useRecoilState(reviewInputState)

    return (
      <div className="grid-container">
        <div className="review-grid_title">만족도</div>
        <div className='review-grid_content'>
        <span className="star_rating">
            {[...Array(Math.max(0, Math.min(5, reviewInput.starRating || 0)))].map((a, i) => (
                <PiStarFill className="star-lg" key={i} onClick={() => setReviewInput((prev) => ({
                    ...prev,
                    starRating: i + 1
                }))} />
            ))}

            {[...Array(5 - Math.max(0, Math.min(5, reviewInput.starRating || 0)))].map((a, i) => (
                <PiStarLight className="star-lg" key={`light-${i}`} onClick={() => setReviewInput((prev) => ({
                    ...prev,
                    starRating: Math.min(5, Math.max(1, reviewInput.starRating || 0) + i + 1)
                }))} />
            ))}
        </span>
        </div>
        <div className="review-grid_title">멘토링 기간</div>
        <div className='review-grid_content'>
        <input type='text' placeholder='멘토링 기간을 알려주세요.' value={reviewInput.term} onChange={(e)=>setReviewInput({...reviewInput, term: e.target.value})}/>
        </div>
        <div className="review-grid_title">예산</div>
        <div className='review-grid_content'>
        <input type='text' value={reviewInput.budget} placeholder='사용 예산을 알려주세요.' onChange={(e)=>setReviewInput({...reviewInput, budget: e.target.value})}/>
        </div>
      </div>
    );
  }
  
  export default ReviewGrid;