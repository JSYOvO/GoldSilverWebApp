import React from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../../../features/data/dataSlice';
import StockChart from './stock.svg';

interface StatRow {
  price: number;
  openPrice: number;
  name: string;
  volume: number;
}

const StatRow: React.FC<StatRow> = (props) => {
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('chartSymbol', e.currentTarget.querySelector('h1')?.innerText);

    dispatch(
      setData({
        chartSymbol: e.currentTarget.querySelector('h1')?.innerText,
        chartTimeLine: null,
      }),
    );
  };

  return (
    <div className="row" onClick={(e) => handleClick(e)}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{props.volume && props.volume + ' shares'}</p>
      </div>
      <div className="row__chart">
        <img src={StockChart} height={16} />
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default StatRow;
