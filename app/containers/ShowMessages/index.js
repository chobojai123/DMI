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
import { loadMessages, messagesLoaded } from 'containers/App/actions';
import Wrapper from './Wrapper';

class ShowMessages extends React.PureComponent {
  render() {
    const { loading, error, messages } = this.props;
    const messagesListProps = {
      loading,
      error,
      messages,
    };
    console.log(this.props);
    return (
      <div className="row">
        <MessagesList {...messagesListProps} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  messages: makeSelectMessages(),
  error: makeSelectError(),
});

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: () => dispatch(loadMessages()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowMessages);
