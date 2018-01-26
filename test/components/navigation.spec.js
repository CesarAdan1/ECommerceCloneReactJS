import { expect } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';

import Navigation from '../../src/components/Navigation';

describe('Navigation', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation currentPath="/" />);
  });

  it('contains seven elements', () => {
    expect(wrapper.children()).to.have.length(7);
  });

  const links = new Map()
    .set('watches', '/watches')
    .set('jewels', '/jewels')
    .set('home', '/')
    .set('inspiration', '/inspiration')
    .set('service', '/service')
    .set('login', '/login');

   // fixme: lint
  for (const [name, url] of links) { // eslint-disable-line
    it(`contains a link to ${name}`, () => { // eslint-disable-line
      wrapper = mount(<Navigation />);

      expect(wrapper.find({ href: url })).to.have.length(1);
    });
  }
});
