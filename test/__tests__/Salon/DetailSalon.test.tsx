import { DetailSalon } from '../../../src/components/Salon/DetailSalon/DetailSalon';
import { shallow, mount } from "enzyme";
import * as React from "react";

// mock router
jest.mock(`react-router`, () => ({
	__esModule: true,
  useRouteMatch: jest.fn().mockReturnValue({ params: { id: 1 } }),
  useHistory: jest.fn().mockReturnValue({}),
}))

describe(`DetailSalon Component`, () => {
	let wrapper: any;
	
  beforeEach(() => {
		wrapper = shallow(<DetailSalon />)
	})
	
  afterEach(() => {
		wrapper.unmount()
	})

  it("correctly renders the component without crash", () => {
    expect(wrapper).toHaveLength(1);
  });
})