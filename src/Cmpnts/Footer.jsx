import Logo from "../assets/Logo";
import NameLogo from '../assets/KNOWBASE.svg'
import '../Styles/Footer.css'
export default function Footer(){
    return(<>
    <div className="footer_wrap">
        <div className="footer_logo_wrap">
        <Logo fill="black"/>
        <div className="footer_info">
            <img src={NameLogo} />
            <div> personal home styling mentoring service</div>
        </div>
        </div>
        
        <div className="footer_contact">
            <div className="footer_contact_mail">contact : knowbase@gmail.com</div>
            <div className="footer_contact_comment">
                <div>고객센터</div>
                <div>공지사항</div>
                <div>개인정보 처리 방침</div> 
            </div>
        </div>
        <hr className="footer_line"/>
        <div className="footer_copyright">ⓒ Know BASE . All rights reserved.</div>
    </div>
        </>
    )
}