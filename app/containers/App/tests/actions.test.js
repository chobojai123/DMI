import {
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_ERROR,
} from '../constants';

import { loadMessages, messagesLoaded, messagesLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadMessages', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_MESSAGES,
      };

      expect(loadMessages()).toEqual(expectedResult);
    });
  });

  describe('messagesLoaded', () => {
    it('should return the correct type and the passed messages', () => {
      const messages = ['Test'];
      const expectedResult = {
        type: LOAD_MESSAGES_SUCCESS,
        messages,
      };

      expect(messagesLoaded(messages)).toEqual(expectedResult);
    });
  });

  describe('messagesLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_MESSAGES_ERROR,
        error: fixture,
      };

      expect(messagesLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
