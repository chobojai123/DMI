import { fromJS } from 'immutable';

import {
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  messages: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MESSAGES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('messages', false);
    case LOAD_MESSAGES_SUCCESS:
      return state.set('messages', action.messages).set('loading', false);
    case LOAD_MESSAGES_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
