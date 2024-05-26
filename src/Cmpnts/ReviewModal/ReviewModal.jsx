import testImg from '../../assets/testImg.png';
import ReviewGrid from './ReviewGrid';

import close from '../../assets/close.png';
import './ReviewModal.css';
import { useEffect, useRef } from 'react';

import { useRecoilState } from 'recoil';
import { isReviewClickedState } from '../../recoil';
import { crntClickedReviewState } from '../MentorHomepage/recoil';

function ReviewModal({ name, title, content, imgs, date, starRating, term, budget }) {
  const [crntClickedReview, setCrntClickedReview] = useRecoilState(crntClickedReviewState)
  const mountRef = useRef(null);
  const [isReviewClicked, setIsReviewClicked] = useRecoilState(isReviewClickedState);

  useEffect(() => {
    if (mountRef.current) {
      mountRef.current.style.display = isReviewClicked ? 'block' : 'none';
    }
  }, [isReviewClicked]);

  return (
    <div ref={mountRef} className="review-modal_wrap">
      <div className="modal_content-wrap">
        <div className="modal_cancel" onClick={() => setIsReviewClicked(false)}>
          <img className="modal_cancel" src={close} alt="close" />
        </div>
        <div className="modal_title">
          title
        </div>

        <div className="modal_line"></div>

        <div className="modal_info-wrap">
          <div className="modal_profile-block">
            <div className="modal_profile-img">
              <img src={testImg} alt="profile" />
            </div>
            <div className="modal_profile-name">name</div>
          </div>
          <div className="modal_date">
            {crntClickedReview.date}
          </div>
        </div>

        <div className="modal_pics-wrap">
              <div>
                <div className="modal_pic">
                  <img src={crntClickedReview.before} alt="before" />
                </div>
                <div className="modal_caption">before</div>
              </div>
              <div>
                <div className="modal_pic">
                  <img src={crntClickedReview.after} alt="after" />
                </div>
                <div className="modal_caption">after</div>
              </div>
        </div>

        <div className="modal_review-title">후기 내용</div>
        <div className="modal_review-content">content</div>
        <ReviewGrid starRating={crntClickedReview.rating} term='term' budget='budget' />
      </div>
    </div>
  );
}

export default ReviewModal;
