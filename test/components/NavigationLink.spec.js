import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import Link from '../../src/components/NavigationLink';
import { Link as RouteLink } from '../../src/config/routes';

describe('NavigationLink', () => {
  const href = '/home';

  it('links to the right page', () => {
    const wrapper = shallow(<Link href={href} currentPath="/">Home</Link>);
    expect(wrapper.find(RouteLink).props().href).to.equal('/home');
  });

  xit('sets the active class when the url is the current one', () => {
    const wrapper = shallow(<Link href={href} currentPath="/home">Home</Link>);

    expect(wrapper.find('a').props().className).to.equal('current');
  });

  it('does not set the class when the url is not the current one', () => {
    const wrapper = shallow(<Link href={href} currentPath="/">Home</Link>);

    expect(wrapper.find('a').props().className).to.be.empty;
  });

  it('renders the children', () => {
    const wrapper = shallow(
      <Link href={'href'} currentPath="/">
        <p>foobar</p>
      </Link>
    );

    expect(wrapper.find('a').children().html()).to.equal('<p>foobar</p>');
  });

  xit('requires the currentPath attribute', () => {
    // const wrapper = shallow(
    //   <Link>Home</Link>
    // );
  });
});
