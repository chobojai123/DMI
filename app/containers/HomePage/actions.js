import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
} from './constants';

export function createPost(message) {
  return {
    type: CREATE_POST,
    message,
  };
}

export function createPostSuccess(message) {
  return {
    type: CREATE_POST_SUCCESS,
    message,
  };
}

export function createPostError(error) {
  return {
    type: CREATE_POST_ERROR,
    error,
  };
}
