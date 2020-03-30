import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';
import {SortType} from '../../utils.js';

const getSortedOffers = (offers, currentSortType) => {
  switch (currentSortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }

  return offers;
};

const OffersList = (props) => {
  const {
    offers,
    className,
    currentSortType,
    onCardHover,
    nearbyFor
  } = props;
  const sortedOffers = getSortedOffers(offers, currentSortType);

  return (
    <div className={`${className} places__list`}>
      {sortedOffers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseHover={onCardHover}
          nearbyFor={nearbyFor}
        />
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  currentSortType: PropTypes.string.isRequired,
  onCardHover: PropTypes.func,
  nearbyFor: PropTypes.number
};

export default React.memo(OffersList);
