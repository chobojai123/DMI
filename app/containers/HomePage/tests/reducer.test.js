import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import { createPost, createPostSuccess, createPostError } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      message: false,
      messagePosted: false,
      postError: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the createPost action correctly', () => {
    const testMsg = 'hello';
    const expectedResult = state.set('message', testMsg);
    expect(homeReducer(state, createPost(testMsg))).toEqual(expectedResult);
  });

  it('should handle the createPostSuccess action correctly', () => {
    const expectedResult = state.set('messagePosted', true);

    expect(homeReducer(state, createPostSuccess())).toEqual(expectedResult);
  });

  it('should handle the createPostError action correctly', () => {
    const errorMsg = {
      msg: 'Not found',
    };
    const expectedResult = state.set('postError', errorMsg);

    expect(homeReducer(state, createPostError(errorMsg))).toEqual(
      expectedResult,
    );
  });
});
