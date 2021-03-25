import React from 'react';
import './Main.css';
import Header from '../Header/Header.js';
import Top from './Top/Top.js';
import About from './About/About.js';
import Service from './Service/Service.js';
import Resource from './Resource/Resource.js';

function Main() {
    return (
        <div className="main"> 
            <Header />
            <Top />
            <About />
            <Service />
            <Resource />
        </div>
    )
}

export default Main;