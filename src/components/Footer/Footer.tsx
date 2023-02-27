import React from 'react'
import './Footer.css'
import '../../css/style.css'
import logo from '../../img/logo.png'

const Footer: React.FC = () => {
    return(
        <footer>
            <div className="flex-holder">
                    <div className="title-with-logo">
                        <div className="logo">
                            <img src={logo} alt="logo" height="70" width="85"/>
                        </div>
                        <div className="title">
                            <a href="#">EWebinar</a>
                        </div>
                    </div>
                    <div className="copyright">
                        <i>© EWebinar.com (2022 - {new Date().getFullYear()}), Inc. All rights reserved.</i>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;