import React from 'react';
import { Link } from "react-router-dom";

import './Toolbar.css';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="content">
        <div className="menu">
          <Link to="/"><div className="menu-item">Home</div></Link>
          <div className="menu-item">Teams</div>
          <div className="menu-item">Tournaments</div>
          <div className="menu-item">International</div>
        </div>
        <input type="text" placeholder="Search Team"></input>
      </div>
    </div>
  );
};

export default Toolbar;