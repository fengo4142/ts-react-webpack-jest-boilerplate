import PriceSelect from '../../../src/components/common/PriceSelect';
import { shallow, mount } from "enzyme";
import * as React from "react";

describe(`PriceSelect Component`, () => {
	let wrapper: any;
	
  beforeEach(() => {
		wrapper = shallow(<PriceSelect 
      isLoading={false} 
      options={[]} 
      filterValues={[]} 
      searchable={true}
      clearable={true} 
      multi={true} 
      labelField={'label'}
      valueField={'id'}
      onChange={jest.fn()}  
    />)
	})
	
  afterEach(() => {
		wrapper.unmount()
	})

  it("correctly renders the component without crash", () => {
    expect(wrapper).toHaveLength(1);
  });

})