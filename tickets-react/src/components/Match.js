import React from 'react';
import './Match.css';

class Match extends React.Component {
  render() {
    return (
      <div className="match">
        <div className="title">{this.props.data.title}</div>
        <div>{this.props.data.stadium}</div>
      </div>
    )
  }
}

export default Match;