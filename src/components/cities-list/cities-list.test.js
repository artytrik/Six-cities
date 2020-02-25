import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from './cities-list.jsx';

const city = `Amsterdam`;

const cities = [`Amsterdam`, `Moscow`, `Vladivostok`];

it(`CitiesList should render correctly`, () => {
  const tree = renderer
    .create(<CitiesList
      city={city}
      cities={cities}
      onCityClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
