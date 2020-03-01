import React from 'react';
import './Toolbar.css';

const Toolbar = () => {
  return (
    <div className="main">
      <div className="content">
        <div className="menu">
          <div className="menu-item">Home</div>
          <div className="menu-item">Teams</div>
          <div className="menu-item">Tournaments</div>
          <div className="menu-item">International</div>
        </div>
        <input type="text" placeholder="Search team"></input>
      </div>
    </div>
  );
};

export default Toolbar;