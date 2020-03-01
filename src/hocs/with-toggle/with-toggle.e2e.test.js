import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withToggle from './with-toggle.jsx';

configure({
  adapter: new Adapter()
});

const MockComponent = () => <div />;
const MockComponentWrapped = withToggle(MockComponent);

it(`Should toggle component`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);
  expect(wrapper.props().isActive).toBe(false);
  wrapper.props().onToggleClick();
  expect(wrapper.props().isActive).toBe(true);
});
