import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import MessagesList from '../index';

describe('<MessagesList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(<MessagesList loading />);
    expect(
      renderedComponent.contains(<List component={LoadingIndicator} />),
    ).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <MessagesList
          loading={false}
          error={{ message: 'Something went wrong!' }}
        />
      </IntlProvider>,
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong!/);
  });

  it('should render the messages if loading was successful', () => {
    const messages = [{ messges: '12345' }];
    const renderedComponent = shallow(
      <MessagesList messages={messages} error={false} />,
    );

    expect(renderedComponent.contains(<List items={messages} />)).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <MessagesList messages={false} error={false} loading={false} />,
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
