import { combineReducers } from 'redux';

import { handReducer } from './handReducer';
import { deckReducer } from './deckReducer';
import { replacementReducer } from './replacementReducer';

const rootReducer = combineReducers({
  deck: deckReducer,
  hand: handReducer,
  replacement: replacementReducer
});

export default rootReducer;
