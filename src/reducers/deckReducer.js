import { GET_DECK } from '../actions/actions';

export const deckReducer = (deck = [], action) => {
  switch (action.type) {
    case GET_DECK:
      console.log(action.payload);
      return action.payload;
    default:
      return deck;
  }
};
