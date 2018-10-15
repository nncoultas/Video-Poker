import { REPLACE_CARD, REMOVE_REPLACE_CARD } from '../actions/actions';

export const replacementReducer = (replacement = [], action) => {
  switch (action.type) {
    case REPLACE_CARD:
      return action.payload.cards;
    case REMOVE_REPLACE_CARD:
      return (replacement = []);
    default:
      return replacement;
  }
};
