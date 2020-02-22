import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

const coordinates = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4]
];

it(`Map should render correctly`, () => {
  const tree = renderer
    .create((<Map
      coordinates={coordinates}
    />), {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
