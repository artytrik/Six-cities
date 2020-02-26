import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';
import {SortType} from '../../utils.js';

class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this._handleMouseHover = this._handleMouseHover.bind(this);
    this._getSortedOffers = this._getSortedOffers.bind(this);
  }

  _getSortedOffers(offers, currentSortType) {
    switch (currentSortType) {
      case SortType.PRICE_LOW_TO_HIGH:
        return offers.slice().sort((a, b) => a.price - b.price);
      case SortType.PRICE_HIGH_TO_LOW:
        return offers.slice().sort((a, b) => b.price - a.price);
      case SortType.TOP_RATED:
        return offers.slice().sort((a, b) => b.rating - a.rating);
    }

    return offers;
  }

  _handleMouseHover(offer) {
    this.setState(offer);
  }

  render() {
    const {offers, onHeaderClick, className, currentSortType} = this.props;
    const sortedOffers = this._getSortedOffers(offers, currentSortType);

    return (
      <div className={`${className} places__list`}>
        {sortedOffers.map((offer, i) => (
          <OfferCard
            key={`offer-${i}`}
            offer={offer}
            onMouseHover={this._handleMouseHover}
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
  className: PropTypes.string.isRequired
};

export default OffersList;
