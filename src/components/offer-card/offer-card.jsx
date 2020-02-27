import React from 'react';
import PropTypes from 'prop-types';
import {starRating} from '../../utils.js';

const OfferCard = (props) => {
  const {offer, onMouseHover, onHeaderClick} = props;
  const {name, type, price, picture, premium, rating} = offer;
  const roundRating = Math.round(rating);

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => (onMouseHover(offer))}
      onMouseLeave={() => (onMouseHover(null))}
    >
      {premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={picture}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: starRating.get(roundRating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={() => onHeaderClick(offer)}>{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired,
  onMouseHover: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired
};

export default OfferCard;
