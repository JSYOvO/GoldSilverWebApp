import React, { useEffect, useState } from 'react';
import { Avatar, Chip } from '@material-ui/core';
import './NewsFeed.css';
import LineGraph from './LineGraph/LineGraph';
import TimeLine from './TimeLine/TimeLine';
import axios from 'axios';
interface NewsFeed {}

const NewsFeed: React.FC<NewsFeed> = ({}) => {
  const [popularTopics, setTopics] = useState([
    'Technology',
    'Top Movies',
    'Upcoming Earnings',
    'Crypto',
    'Cannabis',
    'Healthcare Supplies',
    'Index ETFs',
    'Technology',
    'China',
    'Pharma',
  ]);

  const [seed, setSeed] = useState<number>(0);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/chart`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res.data);
        // setPriceNow(res.data);
      });
    axios
      .get(`http://localhost:4000/gold/1`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res.data);
        // setPriceDayAgo(res.data);
      });
  }, []);

  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chart__section">
          <div className="newsfeed_price_asset">
            <h1> $114,656,84</h1>
            <p> $142.90 (-0,12) Today </p>
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
