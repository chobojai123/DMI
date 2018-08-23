import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

function MessagesList({ loading, error, messages }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => <ListItem item="Something went wrong!" />;
    return <List component={ErrorComponent} />;
  }

  if (messages !== false) {
    return <List items={messages} />;
  }

  return null;
}

MessagesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  messages: PropTypes.any,
};

export default MessagesList;
