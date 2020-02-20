import React from 'react';
import Review from '../review/review.jsx';

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <React.Fragment>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) =>
          <Review
            key={review.id}
            review={review}
          />
        )}
      </ul>
    </React.Fragment>
  );
};

export default ReviewsList;
