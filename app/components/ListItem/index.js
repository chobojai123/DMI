import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

function ListItem(props) {
  return <Wrapper>{props.item.body}</Wrapper>;
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
