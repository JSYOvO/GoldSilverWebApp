import React from 'react';
import './Top.css';

function Top() {
    return (
        <div className="top">
            <h2>Make a profit with metalli</h2>
            <p>Use various analysis materials for your investment.</p>
            
            <div className="top__buttons">
                <button className="top__button clicked">DISCOVER</button>
                <button className="top__button clicked">MYASSETS</button>
            </div>
        </div>
    )
}

export default Top;