import { fromJS } from 'immutable';

import appReducer from '../reducer';
import { loadMessages, messagesLoaded, messagesLoadingError } from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      messages: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadMessages action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('messages', false);

    expect(appReducer(state, loadMessages())).toEqual(expectedResult);
  });

  it('should handle the messagesLoaded action correctly', () => {
    const message = [
      {
        name: 'My Repo',
      },
    ];
    const expectedResult = state.set('messages', message).set('loading', false);

    expect(appReducer(state, messagesLoaded(message))).toEqual(expectedResult);
  });

  it('should handle the messagesLoadingError action correctly', () => {
    const message = {
      msg: 'No Messages',
    };
    const expectedResult = state.set('error', message).set('loading', false);

    expect(appReducer(state, messagesLoadingError(message))).toEqual(
      expectedResult,
    );
  });
});
