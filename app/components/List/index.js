import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';
import Ul from './Ul';
import Wrapper from './Wrapper';

function List(props) {
  let content = <div />;

  if (props.items) {
    content = props.items.map(item => (
      <ListItem key={`item-${item._id}`} item={item} />
    ));
  } else {
    content = <ListItem />;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  items: PropTypes.array,
};

export default List;
