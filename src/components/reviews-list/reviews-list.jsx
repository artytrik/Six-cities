import React from 'react';
import Review from '../review/review.jsx';

const ReviewsList = (props) => {
  const {offer} = props;
  const {reviews} = offer;

  return (
    <ul className="reviews__list">
      <Review
        reviews={reviews}
      />
    </ul>
  );
};

export default ReviewsList;
