import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { LOAD_MESSAGES } from 'containers/App/constants';
import { CREATE_POST } from 'containers/HomePage/constants';
import { messagesLoaded, messagesLoadingError } from 'containers/App/actions';

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

export function* createMessage(data) {
  const message = data.message.body;
  try {
    yield call(postMessage, message);
    console.log('You have successfully posted');
  } catch (err) {
    console.log(err);
  }
  yield call(getAllMessages);
}

export function* getAllMessages() {
  try {
    const response = yield call(fetchMessages);
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
