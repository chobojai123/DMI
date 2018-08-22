import { CREATE_POST } from './constants';

export function createPost(message) {
  return {
    type: CREATE_POST,
    message,
  };
}
