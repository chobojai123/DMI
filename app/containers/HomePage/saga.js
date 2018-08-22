import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { LOAD_MESSAGES, LOAD_MESSAGES_SUCCESS } from 'containers/App/constants';
import { CREATE_POST } from 'containers/HomePage/constants';
import { makeSelectMessage } from 'containers/HomePage/selectors';
import {
  createPost,
  createMessageSuccess,
  createMessageError,
} from 'containers/HomePage/actions';
import {
  loadMessages,
  messagesLoaded,
  messagesLoadingError,
} from 'containers/App/actions';

function postMessage(message) {
  return axios({
    method: 'POST',
    url: '/messages/',
    data: { message },
  });
}

function fetchMessages() {
  return axios({
    method: 'GET',
    url: '/messages',
  });
}

export function* createMessage() {
  console.log('posting');
  const message = yield select(makeSelectMessage());
  try {
    const response = yield call(postMessage, message);
    yield put(createMessageSuccess());
  } catch (err) {
    yield put(createMessageError(err));
  }
  yield call(getAllMessages);
}

export function* getAllMessages() {
  console.log('testing');
  try {
    const response = yield call(fetchMessages);
    console.log(response);
    yield put(messagesLoaded(response.data));
  } catch (err) {
    yield put(messagesLoadingError(err));
  }
}

export default function* messageWatcherSaga() {
  yield [
    takeLatest(CREATE_POST, createMessage),
    takeLatest(LOAD_MESSAGES, getAllMessages),
  ];
}
