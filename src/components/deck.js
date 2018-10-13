import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeck, getHand } from '../actions/actions';

import Hand from '../components/hand';
import './deck.css';

class Deck extends Component {
  state = {
    isShow: true
  };

  componentDidMount() {
    this.props.getDeck();
  }

  handleDeal = e => {
    e.preventDefault();
    this.props.getHand(this.props.deck.deck_id, 5);
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {
    return (
      <div className="deckWrapper">
        {this.state.isShow ? (
          <button className="dealButton" onClick={this.handleDeal}>
            Deal
          </button>
        ) : (
          <button className="goButton">Go</button>
        )}
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
