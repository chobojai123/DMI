import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

ShowMessages.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  messages: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  messages: makeSelectMessages(),
  error: makeSelectError(),
});

export default connect(mapStateToProps)(ShowMessages);
