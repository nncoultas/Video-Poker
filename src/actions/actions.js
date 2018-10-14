import axios from 'axios';

const ROOT_URL = 'https://deckofcardsapi.com/api/deck';

export const GET_DECK = 'GET_DECK';
export const GET_HAND = 'GET_HAND';
export const DISCARD_CARD = 'DISCARD_CARD';
export const REPLACE_CARD = 'REPLACE_CARD';
export const REMOVE_REPLACE_CARD = 'REMOVE_REPLACE_CARD';

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

export const getHand = (deck_id, amount) => {
  return dispatch => {
    axios
      .get(`${ROOT_URL}/${deck_id}/draw/?count=${amount}`)
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

export const discardCard = (deck_id, card) => {
  return dispatch => {
    axios
      .get(`${ROOT_URL}/${deck_id}/pile/discard/add/?cards=${card}`)
      .then(response => {
        dispatch({
          type: DISCARD_CARD,
          payload: card
        });
      })
      .catch(() => {
        dispatch(handError('Failed to discard card'));
      });
  };
};

export const replaceCard = (deck_id, amount) => {
  return dispatch => {
    axios
      .get(`${ROOT_URL}/${deck_id}/draw/?count=${amount}`)
      .then(response => {
        dispatch({
          type: REPLACE_CARD,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(handError('Failed to replace discarded cards'));
      });
  };
};

export const removeReplaceCard = replacement => {
  return {
    type: REMOVE_REPLACE_CARD,
    payload: replacement
  };
};
