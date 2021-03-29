import React from 'react';
import NewsFeed from './NewsFeed/NewsFeed';
import Stat from './Stat/Stat';
import './Home.css';
interface Home {}

const Home: React.FC<Home> = ({}) => {
  return (
    <div className="home">
      <div className="home__container">
        <NewsFeed />
        <Stat />
      </div>
    </div>
  );
};

export default Home;
