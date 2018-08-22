import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';
import Ul from './Ul';
import Wrapper from './Wrapper';

/* eslint-disable no-underscore-dangle */
function List(props) {
  const Component = props.component;
  let content = <div />;

  if (props.items) {
    content = props.items
      .reverse()
      .map(item => <ListItem key={`item-${item._id}`} item={item.body} />);
  } else if (props.component) {
    content = <Component />;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}
/* eslint-enable */

List.propTypes = {
  component: PropTypes.func,
  items: PropTypes.array,
};

export default List;
