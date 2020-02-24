import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

class CitiesList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onCityClick, city: activeCity, cities} = this.props;

    return <ul className="locations__list tabs__list">
      {cities.map((city) => {
        const className = `locations__item-link tabs__item ${(city === activeCity) && `tabs__item--active`}`;
        return (
          <li
            className="locations__item"
            key={city}
          >
            <a
              className={className}
              href="#"
              onClick={onCityClick}
            >
              <span>{city}</span>
            </a>
          </li>
        );
      })}
    </ul>;
  }
}

const mapStateToProps = (state) => ({
  city: state.city,
  cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(evt) {
    evt.preventDefault();
    dispatch(ActionCreator.changeCity(evt.target.textContent));
    dispatch(ActionCreator.getOffers());
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
