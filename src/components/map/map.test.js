import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

const offers = [
  {
    id: 1,
    name: `Beautiful & luxurious apartment at great location`,
    type: `apartment`,
    city: `Amsterdam`,
    cityCoordinates: {
      location: [1, 1],
      zoom: 12
    },
    price: 120,
    picture: `img/apartment-01.jpg`,
    premium: true,
    favorite: false,
    rating: 4,
    coordinates: [1, 1]
  },
  {
    id: 2,
    name: `Wood and stone place`,
    type: `room`,
    city: `Moscow`,
    cityCoordinates: {
      location: [2, 2],
      zoom: 12
    },
    price: 80,
    picture: `img/room.jpg`,
    premium: false,
    favorite: false,
    rating: 4,
    coordinates: [2, 2]
  },
  {
    id: 3,
    name: `Canal View Prinsengracht`,
    type: `apartment`,
    city: `Amsterdam`,
    cityCoordinates: {
      location: [1, 1],
      zoom: 12
    },
    price: 132,
    picture: `img/apartment-02.jpg`,
    premium: false,
    favorite: false,
    rating: 4,
    coordinates: [3, 3]
  },
  {
    id: 4,
    name: `Nice, cozy, warm big bed apartment`,
    type: `apartment`,
    city: `Amsterdam`,
    cityCoordinates: {
      location: [1, 1],
      zoom: 12
    },
    price: 180,
    picture: `img/apartment-03.jpg`,
    premium: true,
    favorite: false,
    rating: 4,
    coordinates: [4, 4]
  },
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
