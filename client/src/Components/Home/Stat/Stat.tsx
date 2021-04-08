import React, { useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import './Stat.css';
import StatRow from './StatRow';

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
  const userGoldInfo = useSelector(
    (state: RootStateOrAny) => state.user.goldInfo,
  );
  const userSilverInfo = useSelector(
    (state: RootStateOrAny) => state.user.silverInfo,
  );

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__content">
          <div className="stats__rows">
            <StatRow
              key={userGoldInfo.ticker}
              name={userGoldInfo.ticker}
              price={userGoldInfo.price}
              volume={userGoldInfo.volumn}
              change={userGoldInfo.change}
            />
            <StatRow
              key={userSilverInfo.ticker}
              name={userSilverInfo.ticker}
              price={userSilverInfo.price}
              volume={userSilverInfo.volumn}
              change={userSilverInfo.change}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stat;
