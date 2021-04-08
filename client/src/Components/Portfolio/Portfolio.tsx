import React from 'react';
import FormControl from '@material-ui/core/FormControl';

import './Portfolio.css';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import PortfolioRow from './PortfolioRow';
interface Portfolio {}

const Portfolio: React.FC<Portfolio> = ({}) => {
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__content">
          <div className="portfolio__rows">
            <PortfolioRow ticker="GOLD" price={10} volume={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
