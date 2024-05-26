import '../Styles/EditProfile.css'
import testImg from '../assets/testImg.png'
import gallery from '../assets/gallery.png'
function EditProfile(){
    return(
    <div className='edit-prof_wrap'>
        <div style={{height: '4rem'}} />
        <div className='edit-prof_card'>
            <div className='edit-prof_profile-img-wrap'>
                <div className='edit-prof_profile-img'>
                <img src={testImg}/>
                    <div className='edit-prof_img-overlay'></div>
                    <div className='edit-prof_gallery'><img src={gallery}/></div>
                    </div>
            </div>
            <div className='edit-prof_title'>닉네임</div>
            <div className='edit-prof_input-wrap'>
            <input type='text' placeholder={'8자 이내로만 가능'} />
            </div>
            <div className='edit-prof_title'>아이디</div>
            <div className='edit-prof_input-wrap'>
                <input type='text' placeholder={'아이디 (6~12자 이내, 영문, 숫자 사용가능)'} />
            </div>
            <div style={{height: '10.5rem'}} />
            <div className='edit-prof_submit'>
                <div>저장하기</div>
            </div>
        </div>
    </div>
    )
}

export default EditProfile;