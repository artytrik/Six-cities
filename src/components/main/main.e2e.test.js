import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`All headers should be clicked`, () => {
  const onHeaderClick = jest.fn();
  const RENTAL_NAMES = [`Lux`, `Not Lux`];

  const main = shallow(
      <Main
        rentalOffers={3}
        rentalNames={RENTAL_NAMES}
        onHeaderClick={onHeaderClick}
      />
  );

  const headerLinks = main.find(`.place-card__name`);

  headerLinks.forEach((header) => header.props().onClick());

  expect(onHeaderClick.mock.calls.length).toBe(RENTAL_NAMES.length);
});
