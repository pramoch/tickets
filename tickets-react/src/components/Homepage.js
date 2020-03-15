import React from 'react';
import './Homepage.css';
import Matches from './Matches';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <div className="sidebar">
        </div>
        <div className="matches">
          <Matches />
        </div>
      </div>
    </div>
  );
};

export default Homepage;