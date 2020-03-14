import React from 'react';
import Match from './Match';

class Matches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [
        {
          title: 'Match 1'
        },
        {
          title: 'Match 2'
        }
      ]
    }
  }

  render() {
    return (
      <div>{this.renderMatches()}</div>
    );
  }

  renderMatches() {
    return this.state.matches.map((match, index) => {
      return (
        <Match key={index} title={match.title}/>
      )
    });
  }
}

export default Matches;