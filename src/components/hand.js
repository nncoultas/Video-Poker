import React, { Component } from 'react';

class Hand extends Component {
  render() {
    return (
      <div className="handWrapper">
        <img src={this.props.currentHand.image} alt="cards" />
      </div>
    );
  }
}

export default Hand;
