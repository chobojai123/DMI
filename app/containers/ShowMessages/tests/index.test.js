import React from 'react';
import { shallow } from 'enzyme';

import MessagesList from 'components/MessagesList';
import { ShowMessages } from '../index';

describe('<ShowMessages />', () => {
  it('should render the MessagesList Component', () => {
    const renderedComponent = shallow(<ShowMessages />);
    expect(renderedComponent.contains(<MessagesList />)).toEqual(true);
  });
});
