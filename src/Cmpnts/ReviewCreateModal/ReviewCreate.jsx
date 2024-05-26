import ProfileBlock from './ProfileBlock';
import ImageUpload from './ImageUpload';
import ReviewContent from './ReviewContent';
import ReviewGrid from './ReviewGrid';
import '../ReviewModal/ReviewModal.css'

import close from '../../assets/close.png'
import testImg from '../../assets/testImg.png'
import gallery from '../../assets/gallery.png'



import { useRef, useEffect, useState } from 'react'

import { useRecoilState } from 'recoil'
import { isReviewCreateClickedState } from '../../recoil';
import { reviewInputState } from './recoil';


function ReviewCreate (){
    const [starRating, setStarRating] = useState(1);
    const numberRating = starRating.toFixed(1);

    const mountRef = useRef(null);
    const [reviewInput ,setReviewInput] = useRecoilState(reviewInputState)
    const [isReviewCreateClicked, setIsReviewCreateClicked] = useRecoilState(isReviewCreateClickedState);

    const [imageBeforeSrc, setImageBeforeSrc] = useState('');
    const [imageAfterSrc, setImageAfterSrc] = useState('');

    const handleImageBeforeChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setImageBeforeSrc(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    };

    const handleImageAfterChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setImageAfterSrc(reader.result);
        };  
    
        if (file) {
          reader.readAsDataURL(file);
        }
      };

    
    useEffect(() => {
      if (mountRef.current) {
        mountRef.current.style.display = isReviewCreateClicked ? 'block' : 'none';
      }
    }, [isReviewCreateClicked]);


  
    const titleChangeHandler = (e) => setReviewInput({ ...reviewInput, title: e.target.value });
    const contentChangeHandler = (e) => setReviewInput({ ...reviewInput, content: e.target.value });
    const termChangeHandler = (e) => setReviewInput({ ...reviewInput, term: e.target.value });
    const budgetChangeHandler = (e) => setReviewInput({ ...reviewInput, budget: e.target.value });
    const saveClickedHandler = (e) => console.log(reviewInput)


    return (
    <div ref={mountRef} className="review-create-modal_wrap">
      <div className="modal_content-wrap">
      <div className="modal_cancel" onClick={() => setIsReviewCreateClicked(false)}>
        <img className="modal_cancel" src={close} alt="close" />
      </div>
      <div className="review-create_title-wrap">
      <input type='text' value={reviewInput.title} placeholder='제목을 입력해 주세요.' onChange={titleChangeHandler}/>
      </div>

      <div className="modal_line"></div>

      <ProfileBlock />

      <div className="modal_pics-wrap">
        <ImageUpload label="before" id="review-create-pic1" imageSrc={imageBeforeSrc} gallery={gallery} onChange={handleImageBeforeChange} />
        <ImageUpload label="after" id="review-create-pic2" imageSrc={imageAfterSrc} gallery={gallery} onChange={handleImageAfterChange} />
      </div>

      <ReviewContent value={reviewInput.content} onChange={contentChangeHandler} />

      <ReviewGrid reviewInput={reviewInput} onTermChange={termChangeHandler} onBudgetChange={budgetChangeHandler} />

      <div className='review-create_save-btn' onClick={saveClickedHandler}><div>저장하기</div></div>
    </div>
  </div>
  );
  }
export default ReviewCreate;