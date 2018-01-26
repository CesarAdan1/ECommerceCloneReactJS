import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import Head from '../../src/components/Head';

describe('Head', () => {
  it('has a favicon', () => {
    const wrapper = shallow(<Head />);
    expect(wrapper.contains(<link rel="shortcut icon" href="/static/favicon/favicon.ico" type="image/x-icon" />)).to.equal(true);
  });

  it('sets the title from the prop', () => {
    const wrapper = shallow(<Head title="foobar" />);
    expect(wrapper.find('title').text()).to.equal('foobar');
  });

  it('leaves the title empty when not set', () => {
    const wrapper = shallow(<Head />);
    expect(wrapper.find('title').text()).to.equal('');
  });
});
