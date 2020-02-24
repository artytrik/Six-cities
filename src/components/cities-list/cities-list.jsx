import React from 'react';

class CitiesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this._getCities = this._getCities.bind(this);
  }

  _getCities() {
    const {offers} = this.props;
    const cities = new Set();
    offers.forEach((offer) => {
      cities.add(offer.city);
    });

    const maxCities = [...cities].slice(0, 6);

    return maxCities;
  }

  render() {
    return <ul className="locations__list tabs__list">
      {this._getCities().map((city) => {
        return (
          <li
            className="locations__item"
            key={city}
          >
            <a className="locations__item-link tabs__item" href="#">
              <span>{city}</span>
            </a>
          </li>
        );
      })}
    </ul>;
  }
}

export default CitiesList;
