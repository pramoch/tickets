import React from 'react';

class MatchDetail extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <div>Match Detail</div>
      </div>
    )
  }
}

export default MatchDetail;