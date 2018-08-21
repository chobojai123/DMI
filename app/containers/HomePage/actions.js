import { CREATE_POST, CREATE_POST_ERROR } from './constants';

export function createPost(message) {
  return {
    type: CREATE_POST,
    message,
  };
}

export function createMessageError(error) {
  return {
    type: CREATE_POST_ERROR,
    error,
  };
}
