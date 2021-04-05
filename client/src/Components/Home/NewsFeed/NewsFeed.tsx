import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../features/data/dataSlice';

import LineGraph from './LineGraph/LineGraph';
import './NewsFeed.css';
import TimeLine from './TimeLine/TimeLine';

interface NewsFeed {}
interface IData {
  x: Date;
  y: string;
}
const NewsFeed: React.FC<NewsFeed> = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchData({
        chartTimeLine: '5D',
        chartSymbol: 'GOLD',
      }),
    );
  }, []);

  const chartSymbol = useSelector(
    (state: RootStateOrAny) => state.data.chartSymbol,
  );
  const nowPrice = useSelector((state: RootStateOrAny) => state.data.nowPrice);
  const nowChange = useSelector(
    (state: RootStateOrAny) => state.data.nowChange,
  );

  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chart__section">
          <h1>{chartSymbol}</h1>
          <div className="newsfeed_price_asset">
            <p>
              ${nowPrice} {nowChange} Today
            </p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
            <TimeLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
