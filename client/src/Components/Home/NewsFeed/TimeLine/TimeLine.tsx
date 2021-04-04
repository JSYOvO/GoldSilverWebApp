import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../../../../features/data/dataSlice';
import './TimeLine.css';
interface TimeLine {}

const TimeLine: React.FC<TimeLine> = () => {
  const timeButton5D = useRef<HTMLDivElement>(null);
  const timeButton1M = useRef<HTMLDivElement>(null);
  const timeButton3M = useRef<HTMLDivElement>(null);
  const timeButton1Y = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const onClickButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    timeButton5D.current?.classList.remove('active');
    timeButton1M.current?.classList.remove('active');
    timeButton3M.current?.classList.remove('active');
    timeButton1Y.current?.classList.remove('active');

    e.currentTarget.classList.add('active');
    console.log('chartTimeLine', e.currentTarget.innerText);
    dispatch(
      setData({
        chartSymbol: null,
        chartTimeLine: e.currentTarget.innerText,
      }),
    );
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
