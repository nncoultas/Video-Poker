import { GET_HAND } from '../actions/actions';

export const handReducer = (hand = [], action) => {
  switch (action.type) {
    case GET_HAND:
      return action.payload.cards;
    default:
      return hand;
  }
};
