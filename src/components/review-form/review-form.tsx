import * as React from 'react';
import {RatingValues, TextRating, ReviewLength} from '../../utils';
import {LoadingStatus} from '../../reducer/review/review';

interface Props {
  rating: RatingValues;
  comment: string;
  onCommentChange: () => void;
  onRatingChange: () => void;
  onReviewSubmit: ({comment, rating}: {comment: string; rating: RatingValues}, id: number) => void;
  id: number;
  loadingStatus: string;
  onClearForm: () => void;
  onLoadingStatusClear: () => void;
}

class ReviewForm extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);

    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
  }

  componentDidUpdate() {
    const {onClearForm, loadingStatus, onLoadingStatusClear} = this.props;
    if (loadingStatus === LoadingStatus.SUCCESS) {
      onClearForm();
      onLoadingStatusClear();
    }
  }

  handleReviewSubmit(evt) {
    const {onReviewSubmit, comment, rating, id} = this.props;

    evt.preventDefault();

    onReviewSubmit({
      comment,
      rating
    }, id);
  }

  render() {
    const {rating, comment, onCommentChange, onRatingChange, loadingStatus} = this.props;
    return <form className={`reviews__form form${loadingStatus === LoadingStatus.FAILED ? ` nreviews__form--error` : ``}`}
      action="#"
      method="post"
      onSubmit={this.handleReviewSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RatingValues.map((ratingValue) => (
          <React.Fragment key={ratingValue}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={ratingValue}
              id={`${ratingValue}-stars`}
              type="radio"
              checked={rating === ratingValue}
              onChange={onRatingChange}
            />
            <label
              htmlFor={`${ratingValue}-stars`}
              className="reviews__rating-label form__rating-label"
              title={TextRating.get(ratingValue)}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={onCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{``}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{` `}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!rating || loadingStatus === LoadingStatus.DISABLED
            || (comment.length < ReviewLength.MIN || comment.length > ReviewLength.MAX)}
        >
          Submit
        </button>
      </div>
    </form>;
  }
}

export default ReviewForm;
