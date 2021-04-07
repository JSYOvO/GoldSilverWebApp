import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { fetchChartData, fetchData } from '../../../../features/data/dataSlice';
import './TimeLine.css';
interface TimeLine {}

const TimeLine: React.FC<TimeLine> = () => {
  const timeButton5D = useRef<HTMLDivElement>(null);
  const timeButton1M = useRef<HTMLDivElement>(null);
  const timeButton3M = useRef<HTMLDivElement>(null);
  const timeButton1Y = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const chartSymbol = useSelector(
    (state: RootStateOrAny) => state.data.chartSymbol,
  );

  useEffect(() => {
    dispatch(
      fetchChartData({
        chartTimeLine: '5D',
        chartSymbol: 'GOLD',
      }),
    );
  }, []);

  const onClickButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    timeButton5D.current?.classList.remove('active');
    timeButton1M.current?.classList.remove('active');
    timeButton3M.current?.classList.remove('active');
    timeButton1Y.current?.classList.remove('active');

    e.currentTarget.classList.add('active');

    dispatch(
      fetchChartData({
        chartTimeLine: e.currentTarget.innerText,
        chartSymbol: chartSymbol,
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
