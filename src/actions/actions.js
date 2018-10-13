import axios from 'axios';

const ROOT_URL = 'https://deckofcardsapi.com/api/deck';

export const GET_DECK = 'GET_DECK';
export const GET_HAND = 'GET_HAND';

export const DECK_ERROR = 'DECK_ERROR';
export const HAND_ERROR = 'HAND_ERROR';

export const deckError = error => {
  return {
    type: DECK_ERROR,
    payload: error
  };
};

export const handError = error => {
  return {
    type: HAND_ERROR,
    payload: error
  };
};

export const getDeck = () => {
  return dispatch => {
    axios
      .get(`${ROOT_URL}/new/shuffle/?deck_count=1`)
      .then(response => {
        dispatch({
          type: GET_DECK,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(deckError('Failed to shuffle the deck'));
      });
  };
};

export const getHand = deck_id => {
  return dispatch => {
    axios
      .get(`${ROOT_URL}/${deck_id}/draw/?count=5`)
      .then(response => {
        dispatch({
          type: GET_HAND,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(handError('Failed to deal five cards'));
      });
  };
};
