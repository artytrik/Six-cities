import * as React from 'react';
import {getStarRating, months} from '../../utils';
import {UserReview} from '../../types';

interface Props {
  review: UserReview;
}

const Review: React.FunctionComponent<Props> = (props: Props) => {
  const {review} = props;
  const {user, rating, text, date} = review;
  const {avatar, name} = user;
  const dateInstance = new Date(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatar}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getStarRating(rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date}>
          {months[dateInstance.getMonth()]} {dateInstance.getFullYear()}
        </time>
      </div>
    </li>
  );
};

export default React.memo(Review);
