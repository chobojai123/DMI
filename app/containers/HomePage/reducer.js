import { fromJS } from 'immutable';
import { CREATE_POST, CREATE_POST_ERROR } from './constants';

export const initialState = fromJS({
  message: false,
  error: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return state.set('message', action.message);
    case CREATE_POST_ERROR:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export default homeReducer;
