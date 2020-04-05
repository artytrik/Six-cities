import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ReviewsForm from './review-form';
import {noop} from '../../utils';

it(`ReviewsForm is rendered correctly`, () => {
  const tree = renderer.create((
    <ReviewsForm
      onReviewSubmit={noop}
      comment={``}
      rating={null}
      id={1}
      onCommentChange={noop}
      onRatingChange={noop}
      loadingStatus={``}
      onClearForm={noop}
      onLoadingStatusClear={noop}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
