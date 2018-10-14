import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReplacementCards extends Component {
  render() {
    return (
      <div className="replacementWrapper">
        <img src={this.props.replaceCard.image} alt="cards" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deck: state.deck,
    hand: state.hand,
    replacement: state.replacement
  };
};

export default connect(mapStateToProps)(ReplacementCards);
