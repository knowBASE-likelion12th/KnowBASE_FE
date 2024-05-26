// import profilePic from '../assets/testImg.png'
import '../Styles/Profile.css'
import Button from './Model/Button'


function Profile({profilePic, name, tag1, tag2, tag3}){
    return(
        <div className='profile-wrap'>
            <div className='mentor-profile-pic'>
                    <img src={profilePic} alt='프로필 사진' />
            </div>
            <div className='profile-name'>{name}</div>
            <div className='mentor-tags'>
                <div className='mentor-tag'>{tag1}</div>
                <div className='mentor-tag'>{tag2}</div>
                <div className='mentor-tag'>{tag3}</div>
            </div>
            <Button title='문의하기' />
            <Button title='멘토링 신청하기'/>
        </div>
    )
}

export default Profile;