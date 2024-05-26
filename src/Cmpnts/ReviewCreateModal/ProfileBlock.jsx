import testImg from '../../assets/testImg.png'
import '../ReviewModal/ReviewModal.css'


function ProfileBlock() {
    return (
      <div className="modal_info-wrap">
        <div className="modal_profile-block">
          <div className="modal_profile-img">
            <img src={testImg} alt="profile" />
          </div>
          <div className="modal_profile-name">name</div>
        </div>
      </div>
    );
  }
  
  export default ProfileBlock;