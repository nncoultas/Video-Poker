import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeck, getHand, replaceCard } from '../actions/actions';

import ReplacementCards from '../components/replacementCards';
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
    this.props.getHand(this.props.deck.deck_id);
    this.setState(state => ({ isShow: !state.isShow }));
  };

  handleReplace = e => {
    e.preventDefault();
    let amount = 5 - this.props.hand.length;
    this.props.replaceCard(this.props.deck.deck_id, amount);
  };

  render() {
    return (
      <div className="deckWrapper">
        {this.state.isShow ? (
          <button className="dealButton" onClick={this.handleDeal}>
            Deal
          </button>
        ) : (
          <button className="goButton" onClick={this.handleReplace}>
            Go
          </button>
        )}
        <div className="currentHand">
          {console.log(this.props)}
          {this.props.hand.map((currentHand, index) => {
            return <Hand key={index} currentHand={currentHand} />;
          })}
          {this.props.replacement.map((replaceCard, index) => {
            return <ReplacementCards key={index} replaceCard={replaceCard} />;
          })}
        </div>
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
  { getDeck, getHand, replaceCard }
)(Deck);
