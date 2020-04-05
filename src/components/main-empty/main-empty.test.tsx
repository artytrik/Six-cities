import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MainEmpty from './main-empty';

it(`MainEmpty should render correctly`, () => {
  const tree = renderer
    .create(<MainEmpty/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
