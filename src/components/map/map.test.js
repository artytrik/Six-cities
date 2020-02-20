import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

const offers = [
  {
    coordinates: [1, 1]
  },
  {
    coordinates: [2, 2]
  },
  {
    coordinates: [3, 3]
  },
  {
    coordinates: [4, 4]
  }
];

it(`Map should render correctly`, () => {
  const tree = renderer
    .create((<Map
      offers={offers}
    />), {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
