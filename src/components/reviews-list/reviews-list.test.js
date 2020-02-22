import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list.jsx';

const reviews = [
  {
    id: 1,
    name: `Max`,
    avatar: `img/avatar-max.jpg`,
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by
    the unique lightness of Amsterdam. The building is green and
    from 18th century.`,
    date: `2019-04-24`
  }
];

it(`ReviewsList should render correctly`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
