import React from 'react';
import Review from '../review/review.jsx';
import PropTypes from 'prop-types';

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

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;
