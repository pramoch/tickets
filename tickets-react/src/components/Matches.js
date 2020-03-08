import React from 'react';

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
        <div key={index}>{match.title}</div>
      )
    });
  }
}

export default Matches;