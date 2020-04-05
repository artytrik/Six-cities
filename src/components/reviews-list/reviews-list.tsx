import * as React from 'react';
import Review from '../review/review';
import {MaxValue} from '../../utils';
import {UserReview} from '../../types';

interface Props {
  reviews: UserReview[];
}

const ReviewsList: React.FC<Props> = (props: Props) => {
  const {reviews} = props;

  const sortedReviews = reviews.slice(0, MaxValue.REVIEWS).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return (
    <React.Fragment>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{sortedReviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) =>
          <Review
            key={review.id}
            review={review}
          />
        )}
      </ul>
    </React.Fragment>
  );
};

export default React.memo(ReviewsList);
