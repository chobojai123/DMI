import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Header from '../index';
import messages from '../messages';

describe('<Header />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.find('div').length).toEqual(1);
  });

  it('should render its heading message', () => {
    const renderedComponent = shallow(<Header />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.home} />),
    ).toBe(true);
  });

  it('should contain Nav Bar', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.find('NavBar').exists()).toBeTruthy();
  });

  it('should contain HeaderLink', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.find('HeaderLink').exists()).toBeTruthy();
  });
});
