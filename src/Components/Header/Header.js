import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <p>metalli</p>
            </div>
            <div className="header__middle">
                <p>Home</p>
                <p>About</p>
                <p>Service</p>
                <p>Resource</p>
            </div>
            <div className="header__right">
                <p>Sign in</p>
            </div>
        </div>
    )
}

export default Header;