import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { CREATE_POST, CREATE_POST_ERROR } from 'containers/HomePage/constants';
import { makeSelectMessage } from 'containers/HomePage/selectors';
import { createPost, createMessageError } from 'containers/HomePage/actions';

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
  const message = yield select(makeSelectMessage());
  try {
    const data = yield call(postMessage, message);
    console.log(response);
  } catch (err) {
    yield put(createMessageError(err));
  }
}

export function* getAllMessages() {
  try {
    const data = yield call(fetchMessages);
    console.log(data);
  } catch (err) {
    yield put(console.log(err));
  }
}

export default function* messageWatcherSaga() {
  yield [
    takeLatest(CREATE_POST, createMessage),
    takeLatest(CREATE_POST, getAllMessages),
  ];
}
