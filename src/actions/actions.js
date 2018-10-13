import axios from 'axios';

const ROOT_URL = 'https://deckofcardsapi.com/api/deck';

export const GET_DECK = 'GET_DECK';

export const GET_DECK_ERROR = 'DECK_ERROR';

export const deckError = error => {
  return {
    type: GET_DECK_ERROR,
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
