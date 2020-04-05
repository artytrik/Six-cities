import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CitiesList from './cities-list';
import {noop} from '../../utils';

const city = `Amsterdam`;

const cities = [`Amsterdam`, `Moscow`, `Vladivostok`];

it(`CitiesList should render correctly`, () => {
  const tree = renderer
    .create(<CitiesList
      city={city}
      cities={cities}
      onCityClick={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
