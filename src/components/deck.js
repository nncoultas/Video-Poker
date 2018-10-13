import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeck, getHand } from '../actions/actions';

import Hand from '../components/hand';
import './deck.css';

class Deck extends Component {
  componentDidMount() {
    this.props.getDeck();
  }

  handleClick = e => {
    // e.preventDefault();
    this.props.getHand(this.props.deck.deck_id);
  };

  render() {
    return (
      <div className="deckWrapper">
        <button className="dealButton" onClick={this.handleClick}>
          Deal
        </button>
        <div className="currentHand">
          {this.props.hand.map((currentHand, index) => {
            return <Hand key={index} currentHand={currentHand} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deck: state.deck,
    hand: state.hand
  };
};

export default connect(
  mapStateToProps,
  { getDeck, getHand }
)(Deck);
