import React, { Component } from 'react';
import { connect } from 'react-redux';
import { discardCard } from '../actions/actions';

class Hand extends Component {
  handleClick = () => {
    console.log('clicked', this.props.currentHand.code);
    const deleteCard = window.confirm(
      'Are you sure you want to discard this card?'
    );
    if (deleteCard === true) {
      this.props.discardCard(
        this.props.deck.deck_id,
        this.props.currentHand.code
      );
    }
  };
  render() {
    return (
      <div className="handWrapper">
        <form>
          {console.log(this.props.currentHand)}
          <img
            src={this.props.currentHand.image}
            alt="cards"
            onClick={this.handleClick}
          />
        </form>
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
  { discardCard }
)(Hand);
