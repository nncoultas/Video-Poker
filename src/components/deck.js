import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getDeck,
  getHand,
  replaceCard,
  removeReplaceCard
} from '../actions/actions';

import ReplacementCards from '../components/replacementCards';
import Hand from '../components/hand';
import './deck.css';

class Deck extends Component {
  state = {
    isShow: true,
    score: 0
  };

  componentDidMount() {
    this.props.getDeck();
  }

  handleDeal = e => {
    e.preventDefault();
    // removes replaced card from the new deck so it only deals 5 cards
    this.props.removeReplaceCard();
    this.props.getHand('new', 5);
    this.setState(state => ({
      isShow: !state.isShow,
      score: 0
    }));
  };

  handleReplace = e => {
    e.preventDefault();
    // gets the exact amount of cards needed to replace the discarded ones
    let amount = 5 - this.props.hand.length;
    this.props.replaceCard(this.props.deck.deck_id, amount);
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {
    return (
      <div className="deckWrapper">
        <div className="currentHand">
          {this.props.hand.map((currentHand, index) => {
            return <Hand key={index} currentHand={currentHand} />;
          })}
          {this.props.replacement.map((replaceCard, index) => {
            return <ReplacementCards key={index} replaceCard={replaceCard} />;
          })}
        </div>
        {this.state.isShow ? (
          <button className="dealButton" onClick={this.handleDeal}>
            Deal
          </button>
        ) : (
          <button className="goButton" onClick={this.handleReplace}>
            Go
          </button>
        )}
        <div className="Score">Score for last game: {this.state.score} </div>
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

export default connect(
  mapStateToProps,
  { getDeck, getHand, replaceCard, removeReplaceCard }
)(Deck);
