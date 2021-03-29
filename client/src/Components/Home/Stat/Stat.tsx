import React, { useState, useEffect } from 'react';
import './Stat.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StatRow from './StatRow';
// import { key } from "./api";
import axios from 'axios';
// import { db } from "./firebase";

// const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
// const KEY_URL = `&token=${key}`;

const testData = [];

function Stat() {
  const [stocksData, setStocksData] = useState<any[]>([]);
  const [myStocks, setMyStocks] = useState<any[]>([]);

  const getMyStocks = () => {
    // db
    // .collection('myStocks')
    // .onSnapshot(snapshot => {
    //     let promises = [];
    //     let tempData = []
    //     snapshot.docs.map((doc) => {
    //       promises.push(getStocksData(doc.data().ticker)
    //       .then(res => {
    //         tempData.push({
    //           id: doc.id,
    //           data: doc.data(),
    //           info: res.data
    //         })
    //       })
    //     )})
    //     Promise.all(promises).then(()=>{
    //       setMyStocks(tempData);
    //     })
    // })
  };

  const getStocksData = (stock: any) => {
    // return axios
    //   .get(`${BASE_URL}${stock}${KEY_URL}`)
    //   .catch((error) => {
    //     console.error("Error", error.message);
    //   });
  };

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p> Stocks</p>
          <MoreHorizIcon />
        </div>
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
                volume={1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stat;
