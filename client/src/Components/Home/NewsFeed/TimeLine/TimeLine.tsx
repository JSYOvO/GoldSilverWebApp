import React, { DetailedHTMLProps, HTMLAttributes, useRef } from 'react';
import './TimeLine.css';
interface TimeLine {
  callback: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const TimeLine: React.FC<TimeLine> = (prop) => {
  const timeButton5D = useRef<HTMLDivElement>(null);
  const timeButton1M = useRef<HTMLDivElement>(null);
  const timeButton3M = useRef<HTMLDivElement>(null);
  const timeButton1Y = useRef<HTMLDivElement>(null);
  const onClickButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    timeButton5D.current?.classList.remove('active');
    timeButton1M.current?.classList.remove('active');
    timeButton3M.current?.classList.remove('active');
    timeButton1Y.current?.classList.remove('active');

    e.currentTarget.classList.add('active');
    prop.callback(e.currentTarget.innerText);
  };

  return (
    <div className="timeline__container">
      <div className="timeline__buttons__container">
        <div
          className="timeline__button active"
          ref={timeButton5D}
          onClick={(e) => onClickButton(e)}
        >
          5D
        </div>
        <div
          className="timeline__button"
          ref={timeButton1M}
          onClick={(e) => onClickButton(e)}
        >
          1M
        </div>
        <div
          className="timeline__button"
          ref={timeButton3M}
          onClick={(e) => onClickButton(e)}
        >
          3M
        </div>
        <div
          className="timeline__button"
          ref={timeButton1Y}
          onClick={(e) => onClickButton(e)}
        >
          1Y
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
