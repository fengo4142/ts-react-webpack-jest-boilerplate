import App from '../../src/components/App';
import { shallow } from "enzyme";
import * as React from "react";

/**
 * Test with Jest
 * NOTE: For demo purpose, it didn't cover every parts of components
 */

describe(`App Component`, () => {
	let wrapper: any;
	
  beforeEach(() => {
		wrapper = shallow(<App />)
	})
	
  afterEach(() => {
		wrapper.unmount()
	})

  it("correctly renders the component without crash", () => {
    expect(wrapper).toHaveLength(1);
  });
})