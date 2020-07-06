import Rating from '../../../src/components/common/Rating';
import { shallow, mount } from "enzyme";
import * as React from "react";

describe(`Rating Component`, () => {
	let wrapper: any;
	
  beforeEach(() => {
		wrapper = shallow(<Rating rate={4} />)
	})
	
  afterEach(() => {
		wrapper.unmount()
	})

  it("correctly renders the component without crash", () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders 5 star images always', () => {
    expect(wrapper.find('img')).toHaveLength(5)
  })
})