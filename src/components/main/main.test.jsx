import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const offers = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    picture: `img/apartment-01.jpg`,
    premium: true
  },
  {
    name: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    picture: `img/room.jpg`,
    premium: false
  },
  {
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    picture: `img/apartment-02.jpg`,
    premium: false
  },
  {
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    picture: `img/apartment-03.jpg`,
    premium: true
  },
];

it(`Main should render correctly`, () => {
  const tree = renderer
    .create(<Main
      offersNumber={3}
      offers={offers}
      onHeaderClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
