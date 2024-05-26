import '../Styles/NavBar.css'

import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <div className='navbar-wrap'>
            <Link to="/">홈</Link> 
            <Link to="/mentoring">멘토링</Link> 
            <Link to="/">커뮤니티</Link> 
            <Link to="/">마이페이지</Link> 
            <Link to ="/Signin">로그인   |   <Link>회원가입</Link></Link>
            
        </div>
    )
}

export default NavBar;