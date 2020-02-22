import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';

class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this._handleMouseHover = this._handleMouseHover.bind(this);
  }

  _handleMouseHover(offer) {
    this.setState(offer);
  }

  render() {
    const {offers, onHeaderClick, className} = this.props;

    return (
      <div className={`${className} places__list`}>
        {offers.map((offer, i) => (
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
