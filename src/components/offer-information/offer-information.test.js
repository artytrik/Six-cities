import React from 'react';
import renderer from 'react-test-renderer';
import OfferInformation from './offer-information.jsx';

const offer = {
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  bedrooms: 3,
  adults: 4,
  price: 120,
  picture: `img/apartment-01.jpg`,
  premium: true,
  gallery: [
    `img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`
  ],
  rating: 4.8,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  inside: [`Wi-FI`, `Washing machine`, `Towels`, `Heating`],
  user: {
    avatar: `img/avatar-angelina.jpg`,
    name: `Angelina`,
    superStar: true
  },
  reviews: [
    {
      id: 1,
      name: `Max`,
      avatar: `img/avatar-max.jpg`,
      rating: 4,
      text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      date: `2019-04-24`
    }
  ],
  nearbyOffers: [
    {
      name: `Beatiful flat`,
      type: `Apartment`,
      price: 120,
      picture: `img/apartment-01.jpg`,
      premium: true,
      rating: 4,
      coordinates: [52.369553943508, 4.85309666406198]
    }
  ]
};

it(`OfferInformation should render correctly`, () => {
  const tree = renderer
    .create(<OfferInformation
      offer={offer}
      onHeaderClick={() => {}}
      currentSortType={`Popular`}
      onCardHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
