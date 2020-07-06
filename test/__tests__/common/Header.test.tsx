import { Header } from '../../../src/components/common/Header/Header';
import { mount } from 'enzyme';
import * as React from 'react';

const title = 'Salon';

describe(`Header Component`, () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<Header title={title} backIcon={''} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('correctly renders the component without crash', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders the title', () => {
    expect(wrapper.text()).toBe(title);
  });
});
