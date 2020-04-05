import * as React from 'react';
import OfferCard from '../offer-card/offer-card';
import {SortType} from '../../utils';
import {Offer} from '../../types';

interface Props {
  offers: Offer[];
  className: string;
  currentSortType: string;
  onCardHover?: () => void;
  nearbyFor?: number;
}

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

const OffersList: React.FC<Props> = (props: Props) => {
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

export default React.memo(OffersList);
