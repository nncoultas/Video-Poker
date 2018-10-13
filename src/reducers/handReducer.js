import { GET_HAND, DISCARD_CARD } from '../actions/actions';

export const handReducer = (hand = [], action) => {
  switch (action.type) {
    case GET_HAND:
      return action.payload.cards;
    case DISCARD_CARD:
      return hand.filter(card => {
        if (card.code !== action.payload) return hand;
        else return false;
      });
    default:
      return hand;
  }
};
