import {
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_ERROR,
} from './constants';

export function loadMessages() {
  return {
    type: LOAD_MESSAGES,
  };
}

export function messagesLoaded(messages) {
  return {
    type: LOAD_MESSAGES_SUCCESS,
    messages,
  };
}

export function messagesLoadingError(error) {
  return {
    type: LOAD_MESSAGES_ERROR,
    error,
  };
}
