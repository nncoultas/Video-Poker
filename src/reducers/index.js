import { combineReducers } from 'redux';

import { handReducer } from './handReducer';
import { deckReducer } from './deckReducer';

const rootReducer = combineReducers({
  deck: deckReducer,
  hand: handReducer
});

export default rootReducer;
