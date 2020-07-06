import { ListSalon } from '../../../src/components/Salon/ListSalon/ListSalon';
import { shallow, mount } from "enzyme";
import * as React from "react";

// mocking router path, history
jest.mock(`react-router`, () => ({
	__esModule: true,
  useRouteMatch: jest.fn().mockReturnValue({ path: '' }),
  useHistory: jest.fn().mockReturnValue({}),
}))

describe(`ListSalon Component`, () => {
	let wrapper: any;
	
  beforeEach(() => {
		wrapper = shallow(<ListSalon />)
	})
	
  afterEach(() => {
		wrapper.unmount()
	})

  it("correctly renders the component without crash", () => {
    expect(wrapper).toHaveLength(1);
  });
})