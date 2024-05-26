import testImg from '../../assets/testImg.png';
import kakao from '../..//assets/kakao_logo.png'


import close from '../../assets/close.png';
import './ContactModal.css';
import { useEffect, useRef } from 'react';

import { useRecoilState } from 'recoil';
import { isContactClickedState } from '../../recoil';

function ContactModal({id}) {
  const mountRef = useRef(null);
  const [isContactClicked, setIsContactClicked] = useRecoilState(isContactClickedState);

  useEffect(() => {
    if (mountRef.current) {
      mountRef.current.style.display = isContactClicked ? 'block' : 'none';
    }
  }, [isContactClicked]);

  return (
    <div ref={mountRef} className="modal-contact_wrap">
      <div className="modal-contact_content-wrap">
        <div className="modal_cancel" onClick={() => setIsContactClicked(false)}>
          <img className="modal_cancel" src={close} alt="close" />
        </div>
        <div className="modal-contact_title">
          Contact
        </div>

        <div className='kakao-logo'>
            <img src={kakao}/>
        </div>

        <div className='contact-modal_id-wrap'>
            <div>
            @songwriter2382id
            </div>
        </div>

    
      </div>
    </div>
  );
}

export default ContactModal;
