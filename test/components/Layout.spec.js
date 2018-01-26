import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../../src/components/Layout';

import Social from '../../src/components/footer/Social';
import LanguageSelector from '../../src/components/footer/LanguageSelector';
import CopyrightInfo from '../../src/components/footer/CopyrightInfo';


describe('Layout', () => {
  it('has a default title', () => {
    expect(Layout.defaultProps.title).to.equal('Luxe dameshorloges – Officiële Online Shop van ROSEFIELD Watches');
  });

  it('sets the title from the props', () => {
    const wrapper = shallow(<Layout title="foobar" currentPath="/" />);
    expect(wrapper.find('Head').props().title).to.equal('foobar');
  });

  it('renders the children in the main element', () => {
    const wrapper = shallow(<Layout currentPath="/"><p>children</p></Layout>);
    expect(wrapper.find('main').contains(<p>children</p>)).to.be.true;
  });

  it('contains the social links', () => {
    const wrapper = shallow(<Layout currentPath="/" />);
    expect(wrapper.find('footer').find(Social)).to.have.lengthOf(1);
  });

  it('contains the language selector', () => {
    const wrapper = shallow(<Layout currentPath="/" />);
    expect(wrapper.find('footer').find(LanguageSelector)).to.have.lengthOf(1);
  });

  it('contains the copyright info', () => {
    const wrapper = shallow(<Layout currentPath="/" />);
    expect(wrapper.find('footer').find(CopyrightInfo)).to.have.lengthOf(1);
  });

  xit('includes the global stylesheet', () => {
    const wrapper = shallow(<Layout currentPath="/" />);
    // NOTE: I wish I could mock the stylesheet and test for its existence
    expect(wrapper.find('style').props().dangerouslySetInnerHTML.__html).to.deep.equal({}); // eslint-disable-line no-underscore-dangle
  });
});
