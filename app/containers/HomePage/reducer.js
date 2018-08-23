import { fromJS } from 'immutable';

import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
} from './constants';

export const initialState = fromJS({
  message: false,
  messagePosted: false,
  postError: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return state.set('message', action.message);
    case CREATE_POST_SUCCESS:
      return state.set('messagePosted', true);
    case CREATE_POST_ERROR:
      return state.set('postError', action.error);
    default:
      return state;
  }
}

export default homeReducer;
