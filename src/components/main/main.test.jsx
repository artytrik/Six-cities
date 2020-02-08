import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Main should render correctly`, () => {
  const tree = renderer
    .create(<Main
      rentalOffers={3}
      rentalNames={[`Lux`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
