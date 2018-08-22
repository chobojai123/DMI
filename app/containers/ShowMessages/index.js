import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import MessagesList from 'components/MessagesList';
import {
  makeSelectMessages,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Wrapper from './Wrapper';

class ShowMessages extends React.PureComponent {
  render() {
    const { loading, error, messages } = this.props;
    const messagesListProps = {
      loading,
      error,
      messages,
    };
    return (
      <Wrapper>
        <MessagesList {...messagesListProps} />
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  messages: makeSelectMessages(),
  error: makeSelectError(),
});

export default connect(mapStateToProps)(ShowMessages);
