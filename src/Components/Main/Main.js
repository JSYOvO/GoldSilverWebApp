import React from 'react';
import './Main.css';
import Header from '../Header/Header.js';
import Top from './Top/Top.js';
import About from './About/About.js';

function Main() {
    return (
        <div className="main"> 
            <Header />
            <Top />
            <About />
        </div>
    )
}

export default Main;