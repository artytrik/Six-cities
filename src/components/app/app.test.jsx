import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`App should render correctly`, () => {
  const tree = renderer
    .create(<App
      rentalOffers={3}
      rentalNames={[`Lux`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
