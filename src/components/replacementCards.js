import React, { Component } from 'react';

class ReplacementCards extends Component {
  render() {
    return (
      <div className="replacementWrapper">
        {/* {console.log(this.props)} */}
        <img
          src={this.props.replaceCard.image}
          alt="cards"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default ReplacementCards;
