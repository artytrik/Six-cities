import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card.jsx';

const offer = {
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  price: 120,
  picture: `img/apartment-01.jpg`,
  premium: true,
  rating: 4
};

it(`OfferCard should render correctly`, () => {
  const tree = renderer
    .create(<OfferCard
      offer={offer}
      onMouseHover={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
