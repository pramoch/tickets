import React from 'react';
import Match from './Match';
import { getMatches } from '../actions'
import { connect } from "react-redux";

class Matches extends React.Component {
  componentDidMount() {
    if (this.props.matches.length === 0) {
      this.props.getMatches();
    }
  }

  render() {
    return (
      <div>{this.renderMatches()}</div>
    );
  }

  renderMatches() {
    return this.props.matches.map((match, index) => {
      return (
        <Match key={index} data={match}/>
      )
    });
  }
}

const mapStateToProps = state => {
  return {
    matches: Object.values(state.matches)
  }
}

export default connect(mapStateToProps, { getMatches })(Matches);