import React from 'react';
import { shallow } from 'enzyme';

import TextArea from '../TextArea';

describe('<TextArea />', () => {
  it('should render an <textarea> tag', () => {
    const renderedComponent = shallow(<TextArea />);
    expect(renderedComponent.type()).toEqual('textarea');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<TextArea />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<TextArea id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<TextArea attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
