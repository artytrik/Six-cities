import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';

configure({
  adapter: new Adapter()
});

const offer = {
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  price: 120,
  picture: `img/apartment-01.jpg`,
  premium: true,
  rating: 4
};

it(`Correct information should be in OfferCard after hover`, () => {
  const onMouseHover = jest.fn();
  const onHeaderClick = jest.fn();
  const offerCard = shallow(<OfferCard
    offer={offer}
    onMouseHover={onMouseHover}
    onHeaderClick={onHeaderClick}
  />);

  const placeCard = offerCard.find(`.place-card`);
  placeCard.simulate(`mouseenter`);

  expect(onMouseHover).toHaveBeenCalledTimes(1);
  expect(onMouseHover.mock.calls[0][0]).toMatchObject(offer);
});

it(`Correct information should be in OfferCard after click on header`, () => {
  const onMouseHover = jest.fn();
  const onHeaderClick = jest.fn();
  const offerCard = shallow(<OfferCard
    offer={offer}
    onMouseHover={onMouseHover}
    onHeaderClick={onHeaderClick}
  />);

  const offerHeader = offerCard.find(`.place-card__name a`);
  offerHeader.simulate(`click`);

  expect(onHeaderClick).toHaveBeenCalledTimes(1);
  expect(onHeaderClick.mock.calls[0][0]).toMatchObject(offer);
});

