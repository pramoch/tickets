import React from 'react';
import Match from './Match';
import { getMatches } from '../actions'
import { connect } from "react-redux";

class Matches extends React.Component {
  componentDidMount() {
    this.props.getMatches();
  }

  render() {
    return (
      <div>{this.renderMatches()}</div>
    );
  }

  renderMatches() {
    return this.props.matches.map((match, index) => {
      return (
        <Match key={index} title={match.title}/>
      )
    });
  }
}

const mapStateToProps = state => {
  return {
    matches: state.matches
  }
}

export default connect(mapStateToProps, { getMatches })(Matches);