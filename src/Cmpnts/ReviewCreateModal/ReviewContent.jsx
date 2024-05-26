import '../ReviewModal/ReviewModal.css'

function ReviewContent({ value, onChange }) {
    return (
      <div>
        <div className='review-create_review-content-title'>후기 내용</div>
        <div className="review-create_review-content">
          <textarea placeholder='후기 내용을 입력하세요.(최소 15자 이상)' value={value} onChange={onChange}/>
        </div>
      </div>
    );
  }
  
  export default ReviewContent;