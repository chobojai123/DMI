import {
  CREATE_POST,
  CREATE_POST_ERROR,
  CREATE_POST_SUCCESS,
} from '../constants';

import { createPost, createPostError, createPostSuccess } from '../actions';

describe('Home Actions', () => {
  describe('createPost', () => {
    it('should return the correct type and the passed message', () => {
      const message = 'testing 123';
      const expectedResult = {
        type: CREATE_POST,
        message,
      };
      expect(createPost(message)).toEqual(expectedResult);
    });
  });

  describe('createPostSuccess', () => {
    it('should return the correct type and a success message', () => {
      const message = 'posted 123';
      const expectedResult = {
        type: CREATE_POST_SUCCESS,
        message,
      };
      expect(createPostSuccess(message)).toEqual(expectedResult);
    });
  });

  describe('createPostError', () => {
    it('should return the correct type and the passed message', () => {
      const error = 'error 123';
      const expectedResult = {
        type: CREATE_POST_ERROR,
        error,
      };
      expect(createPostError(error)).toEqual(expectedResult);
    });
  });
});
