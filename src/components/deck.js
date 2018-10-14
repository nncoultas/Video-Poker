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
    score: 0,
    values: []
  };

  componentDidMount() {
    this.props.getDeck();
  }

  handleDeal = e => {
    e.preventDefault();
    this.props.removeReplaceCard();
    this.props.getHand(this.props.deck.deck_id, 5);
    this.setState(state => ({
      isShow: !state.isShow,
      score: 0,
      values: []
    }));
    this.scoreBoard();
  };

  handleReplace = e => {
    e.preventDefault();
    let amount = 5 - this.props.hand.length;
    this.props.replaceCard(this.props.deck.deck_id, amount);
    this.setState(state => ({ isShow: !state.isShow }));
  };

  scoreBoard = () => {
    this.props.hand.map(currentHand => {
      return this.state.values.push(currentHand);
    });

    this.props.replacement.map(replaceCard => {
      return this.state.values.push(replaceCard);
    });

    // finds pairs by number not suit and changes score to 100
    for (let i = 0; i < this.state.values.length; i++) {
      for (let j = i + 1; j < this.state.values.length; j++) {
        if (this.state.values[i].value === this.state.values[j].value) {
          console.log(this.state.values[i].value, this.state.values[j].value);
          return this.setState({ score: 100 });
        }
      }
    }

    // find number in order just not consecutively
    // for (let i = 0; i < this.state.values.length - 1; i++) {
    //   if (this.state.values[i].value < this.state.values[i + 1].value) {
    //     return this.setState({ score: 500 });
    //   }
    // }
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
