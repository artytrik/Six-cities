import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review.jsx';

const review = {
  id: 1,
  rating: 4,
  text: `A quiet cozy and picturesque that hides behind a a river by
  the unique lightness of Amsterdam. The building is green and
  from 18th century.`,
  date: new Date(2020, 3, 17),
  user: {
    name: `Max`,
    avatar: `img/avatar-max.jpg`,
  }
};

it(`Review should render correctly`, () => {
  const tree = renderer
    .create(<Review
      review={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
