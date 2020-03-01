import React from 'react';
import PropTypes from 'prop-types';

const CitiesList = (props) => {
  const {onCityClick, city: activeCity, cities} = props;

  return <ul className="locations__list tabs__list">
    {cities.map((city) => {
      const className = `locations__item-link tabs__item ${(city === activeCity) ? `tabs__item--active` : ``}`;
      return (
        <li
          className="locations__item"
          key={city}
        >
          <a
            className={className}
            href="#"
            onClick={(evt) => onCityClick(evt, city)}
          >
            <span>{city}</span>
          </a>
        </li>
      );
    })}
  </ul>;
};

CitiesList.propTypes = {
  onCityClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default React.memo(CitiesList);
