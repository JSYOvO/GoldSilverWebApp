import React, { useState } from 'react';
import './Stat.css';
import StatRow from './StatRow';
// import { db } from "./firebase";

// const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
// const KEY_URL = `&token=${key}`;

const testData = [];
interface IDate {
  ticker: string;
  shares: number;
}
interface IInfo {
  o: number;
  c: number;
}
interface IStock {
  data: IDate;
  info: IInfo;
}
function Stat() {
  const [stocksData, setStocksData] = useState<any[]>([
    'Gold (GC=F)',
    'Silver',
  ]);
  const [myStocks, setMyStocks] = useState<IStock[]>([
    {
      data: {
        ticker: 'GOLD',
        shares: 232,
      },
      info: { o: 1232, c: 2312 },
    },
    {
      data: {
        ticker: 'SILVER',
        shares: 3423,
      },
      info: { o: 56, c: 352 },
    },
  ]);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__content">
          <div className="stats__rows">
            {myStocks.map((stock) => (
              <StatRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                volume={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </div>
        </div>
        <div className="stats__header stats-lists">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stocksData.map((stock) => (
              <StatRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
                volume={2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stat;
