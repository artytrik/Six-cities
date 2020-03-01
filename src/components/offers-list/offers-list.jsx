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
class OffersList extends React.PureComponent {
  render() {
    const {
      offers,
      onHeaderClick,
      className,
      currentSortType,
      onCardHover
    } = this.props;
    const sortedOffers = getSortedOffers(offers, currentSortType);

    return (
      <div className={`${className} places__list`}>
        {sortedOffers.map((offer, i) => (
          <OfferCard
            key={`offer-${i}`}
            offer={offer}
            onMouseHover={onCardHover}
            onHeaderClick={onHeaderClick}
          />
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired
  })).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  currentSortType: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired
};

export default OffersList;
