import React from 'react';
import Review from '../review/review.jsx';
import PropTypes from 'prop-types';
import {MAX_REVIEWS} from '../../utils.js';

const ReviewsList = (props) => {
  const {reviews} = props;

  const sortedReviews = reviews.slice(0, MAX_REVIEWS).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

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

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default React.memo(ReviewsList);
