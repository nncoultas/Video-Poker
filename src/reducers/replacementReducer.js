import { REPLACE_CARD } from '../actions/actions';

export const replacementReducer = (replacement = [], action) => {
  switch (action.type) {
    case REPLACE_CARD:
      return action.payload.cards;
    default:
      return replacement;
  }
};
