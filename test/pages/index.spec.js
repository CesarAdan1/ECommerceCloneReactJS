import { expect } from 'chai';
import { shallow } from 'enzyme';

import { IndexPage } from '../../src/pages';
import ImageSlider from '../../src/components/ImageSlider';

describe('The homepage', () => {
  it('has a slider', () => {
    const wrapper = shallow(<IndexPage url={{ pathname: '/' }} />);
    expect(wrapper.find(ImageSlider)).to.have.length(1);
  });
});
