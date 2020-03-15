import React from 'react';
import './Match.css';
import { Link } from "react-router-dom";

class Match extends React.Component {
  render() {
    return (
      <Link to={'/match/' + this.props.data.id}>
        <div className="match">
          <div className="title">{this.props.data.title}</div>
          <div>{this.props.data.stadium}</div>
        </div>
      </Link>
    )
  }
}

export default Match;