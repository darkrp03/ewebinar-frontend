import React, { useEffect, useState } from 'react'
import './Header.css'
import '../../css/style.css'
import logo from '../../img/logo.png'

const Header: React.FC = () => {
    const [isVisible, setVisible] = useState(true);
    
    const handleClick = () => {
        setVisible(!isVisible);
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 845 && !isVisible) {
                setVisible(!isVisible);
            }
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [isVisible]);

    return(
        <header>
            <div className="flex-holder">
                <div className="title-with-logo">
                    <div className="logo">
                        <img src={logo} alt="logo" height="70" width="85"/>
                    </div>
                    <div className="title">
                        <a href="/">EWebinar</a>
                    </div>
                </div>
                <div className="burger-menu" onClick={handleClick}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className={isVisible ? "menu visible" : "menu hidden"}>
                    <div className="point">
                        <a href="/">Home</a>
                    </div>
                    <div className="point">
                        <a href="/webinars">Webinars</a>
                    </div>
                    <div className="point">
                        <a href="/contacts">Contacts</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;