import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsForm from './review-form.jsx';

it(`ReviewsForm is rendered correctly`, () => {
  const tree = renderer.create((
    <ReviewsForm
      onReviewSubmit={() => {}}
      comment={``}
      rating={null}
      id={1}
      onCommentChange={() => {}}
      onRatingChange={() => {}}
      loadingStatus={``}
      onClearForm={() => {}}
      onLoadingStatusClear={() => {}}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
