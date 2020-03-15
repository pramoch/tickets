import React from 'react';
import { getMatch } from '../actions'
import { connect } from "react-redux";

class MatchDetail extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.getMatch(this.props.match.params.id);
  }

  render() {
    if (!this.props.matchDetail) {
      return null;
    }

    return (
      <div>
        <div>{this.props.matchDetail.title}</div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    matchDetail: state.matches[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { getMatch })(MatchDetail);