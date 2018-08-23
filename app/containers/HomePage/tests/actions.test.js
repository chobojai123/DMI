import { CREATE_POST } from '../constants';

import { createPost } from '../actions';

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
});
