import * as React from 'react';

interface Props {
  onCityClick: (evt: React.MouseEvent, city: string) => void;
  city: string;
  cities: string[];
}

const CitiesList: React.FC<Props> = (props: Props) => {
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

export default React.memo(CitiesList);
