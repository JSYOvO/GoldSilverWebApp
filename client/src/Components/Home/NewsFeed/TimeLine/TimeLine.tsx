import React from 'react';
import './TimeLine.css';
interface TimeLine {
  callback: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const TimeLine: React.FC<TimeLine> = (callback) => {
  return (
    <div className="timeline__container">
      <div className="timeline__buttons__container">
        <div className="timeline__button">5D</div>
        <div className="timeline__button">W</div>
        <div className="timeline__button">3M</div>
        <div className="timeline__button active">1Y</div>
      </div>
    </div>
  );
};

export default TimeLine;
