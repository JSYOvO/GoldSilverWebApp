import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import LineGraph from './LineGraph/LineGraph';
import './NewsFeed.css';
import TimeLine from './TimeLine/TimeLine';
interface NewsFeed {}

const NewsFeed: React.FC<NewsFeed> = ({}) => {
  const [symbol, setSymbol] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [change, setChange] = useState<string>();
  const [timeLine, setTimeLine] = useState<string>();
  const chartSymbol = useSelector(
    (state: RootStateOrAny) => state.data.chartSymbol,
  );

  // useEffect(() => {
  //   console.log(chartData);
  //   const defaultChart = `gold`;
  //   axios
  //     .get(`http://localhost:4000/${chartData || defaultChart}`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then((res) => {
  //       setSymbol(res.data.symbol);
  //       setPrice(res.data.price.regularMarketPrice.raw);
  //       setChange(res.data.price.regularMarketChangePercent.fmt);
  //     });
  // }, [chartData]);

  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chart__section">
          <h1>{chartSymbol}</h1>
          <div className="newsfeed_price_asset">
            <p>
              ${price} {change} Today
            </p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph symbol={chartSymbol!} timeLine={timeLine!} />
            <TimeLine callback={setTimeLine} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
