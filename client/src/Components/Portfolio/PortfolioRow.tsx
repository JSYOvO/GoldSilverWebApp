import React from 'react';

interface PortfolioRow {
  ticker: string;
  price: number;
  volume: number;
}

const PortfolioRow: React.FC<PortfolioRow> = (props) => {
  return (
    <div className="row">
      <div className="row__intro">
        <h1>{props?.ticker}</h1>
        <p>{props.volume && props.volume + ' oz'}</p>
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
      </div>
    </div>
  );
};

export default PortfolioRow;
