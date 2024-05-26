import './ReviewModal.css'

function ReviewGrid({starRating, term, budget}){
    return(
    <div className="grid-container">
        <div className="review-grid_title">만족도</div>
        <div className="review-grid_content">starRating</div>
        <div className="review-grid_title">멘토링 기간</div>
        <div className="review-grid_content">term</div>
        <div className="review-grid_title">예산</div>
        <div className="review-grid_content">budget</div>
    </div>
    )
}

export default ReviewGrid