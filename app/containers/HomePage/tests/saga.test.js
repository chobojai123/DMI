import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_MESSAGES } from 'containers/App/constants';
import { CREATE_POST } from 'containers/HomePage/constants';
import { messagesLoaded, messagesLoadingError } from 'containers/App/actions';
import {
  createPostSuccess,
  createPostError,
} from 'containers/HomePage/actions';
import messageWatcherSaga, { getAllMessages, createMessage } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getAllMessages Saga', () => {
  let getMsgsGenerator;

  beforeEach(() => {
    getMsgsGenerator = getAllMessages();

    const callDescriptor = getMsgsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the messagesLoaded action if it requests the data successfully', () => {
    const response = '123';
    const putDescriptor = getMsgsGenerator.next(response).value.PUT.type;
    expect(putDescriptor).toEqual(put(messagesLoaded(response)).type);
  });

  it('should call the messagesLoadingError action if the response errors', () => {
    const response = new Error('error');
    const putDescriptor = getMsgsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(messagesLoadingError(response)));
  });
});

describe('createMessage Saga', () => {
  let messageGenerator;

  const messageToPost = { message: '123' };

  beforeEach(() => {
    messageGenerator = createMessage(messageToPost);

    const callDescriptor = messageGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the createPostSuccess action if it requests the data successfully', () => {
    const response = 'Successfully posted';
    const putDescriptor = messageGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(createPostSuccess(response)));
  });

  it('should call the createPostError action if the response errors', () => {
    const response = new Error('error');
    const putDescriptor = messageGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(createPostError(response)));
  });
});

describe('messageDataSaga Saga', () => {
  const messageDataSaga = messageWatcherSaga();

  it('should start task to watch for CREATE_POST and LOAD_MESSAGES action', () => {
    const takeLatestDescriptor = messageDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual([
      takeLatest(CREATE_POST, createMessage),
      takeLatest(LOAD_MESSAGES, getAllMessages),
    ]);
  });
});
