import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import LineGraph from './LineGraph/LineGraph';
import './NewsFeed.css';
import TimeLine from './TimeLine/TimeLine';
interface NewsFeed {}
interface IData {
  x: Date;
  y: string;
}
const NewsFeed: React.FC<NewsFeed> = ({}) => {
  const [symbol, setSymbol] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [change, setChange] = useState<string>();
  const [timeLine, setTimeLine] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IData[]>([]);

  const chartSymbol = useSelector(
    (state: RootStateOrAny) => state.data.chartSymbol,
  );

  // useEffect(() => {
  //   const defaultChart = `gold`;
  //   setIsLoading(true);
  //   axios
  //     .get(`http://localhost:4000/${chartSymbol || defaultChart}`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then((res) => {
  //       setSymbol(res.data.symbol);
  //       setPrice(res.data.price.regularMarketPrice.raw);
  //       setChange(res.data.price.regularMarketChangePercent.fmt);
  //       setIsLoading(false);
  //     });
  //   axios
  //     .get(`http://localhost:4000/chart/${timeLine}/${chartSymbol}`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then((res) => {
  //       const timestamp: any = res.data.chart.result[0].timestamp;
  //       const openPrice: any =
  //         res.data.chart.result[0].indicators.quote[0].open;

  //       let tmpData = [];
  //       for (let i = 0; i < timestamp.length; i++) {
  //         tmpData.push({
  //           x: new Date(timestamp[i] * 1000),
  //           y: openPrice[i],
  //         });
  //       }
  //       setData(tmpData);
  //       setIsLoading(false);
  //     });
  // }, [chartSymbol, timeLine]);

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
            <LineGraph data={data} />
            <TimeLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
