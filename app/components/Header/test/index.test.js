import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Header from '../index';
import NavBar from '../NavBar';
import HeaderLink from '../HeaderLink';
import messages from '../messages';

describe('<Header />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.find('div').length).toEqual(1);
  });

  it('should render its heading message', () => {
    const renderedComponent = shallow(<Header />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toBe(true);
  });

  it('should contain Nav Bar', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.contains(<NavBar />)).toBe(true);
  });

  it('should contain HeaderLink', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.contains(<HeaderLink />)).toBe(true);
  });
});
