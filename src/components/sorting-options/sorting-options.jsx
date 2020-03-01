import React from 'react';
import {SortType} from '../../utils.js';
import PropTypes from 'prop-types';

class SortingOptions extends React.PureComponent {
  render() {
    const {currentSortType, onToggleClick, onSortTypeClick, isActive} = this.props;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={onToggleClick}
        >
          {currentSortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul
          className={`places__options places__options--custom${isActive ? ` places__options--opened` : ``}`}
          onClick={onToggleClick}
        >
          {Object.values(SortType).map((item, i) => {
            return (
              <li
                key={`item-${i}`}
                className={`places__option${(item === currentSortType) ? ` places__option--active` : ``}`}
                tabIndex="0"
                onClick={() => onSortTypeClick(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </form>
    );
  }
}

SortingOptions.propTypes = {
  currentSortType: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default SortingOptions;
