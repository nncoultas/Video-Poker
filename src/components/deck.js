import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeck } from '../actions/actions';

class Deck extends Component {
  componentDidMount() {
    this.props.getDeck();
  }

  render() {
    return (
      <div className="deckWrapper">
        <button className="dealButton">Deal</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deck: state.deck
  };
};

export default connect(
  mapStateToProps,
  { getDeck }
)(Deck);
