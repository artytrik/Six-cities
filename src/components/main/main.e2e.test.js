import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

configure({
  adapter: new Adapter()
});

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

it(`All headers should be clicked`, () => {
  const onHeaderClick = jest.fn();

  const main = mount(
      <Main
        offersNumber={3}
        offers={offers}
        onHeaderClick={onHeaderClick}
      />
  );

  const headerLinks = main.find(`.place-card__name`);

  headerLinks.forEach((header) => header.props().onClick());

  expect(onHeaderClick.mock.calls.length).toBe(offers.length);
});
