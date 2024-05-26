import './Styles/Header.css';
import logo from '../../assets/logo.png'
import MainNav from './MainNav';
import AuthNav from './AuthNav';

import { useEffect, useRef } from 'react';

export default function Header({ color="#FFFFFF" }) {
    let mountRef = useRef(null);

    useEffect(() => {
        mountRef.current.style.backgroundColor = color;
    }, []);

    return (
        <div ref={mountRef} className="header-wrap">
            <div style={{width: '130px', objectFit:'cover'}}><img src={logo} style={{width: '141px'}} /></div>
            <MainNav />
            <AuthNav />
        </div>
    );
}

// default color: #0342C9