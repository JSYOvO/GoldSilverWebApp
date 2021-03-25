import React from 'react';
import './About.css';
import {XYPlot, LineSeries} from 'react-vis';
function About() {
    const data = [
        {x: 0, y: 0},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
      ];
    return (
        <div className="about">
            <div className="about__top">
                <p>You know the Metalli?</p>
                <h3>Fully integrated suite of precious metal investment information</h3>
            </div>
            <div className="about_middle">
                <p>Jewelry, especially gold and silver, is a service that provides investment information to investors more easily and quickly.
Get investment data from various sites at Metalli.
I support your successful investment.</p>
            </div>
            <div className="about__bottom">
            <XYPlot height={300} width={300}>
                <LineSeries data={data} />
            </XYPlot>
            </div>
        </div>
    )
}

export default About;