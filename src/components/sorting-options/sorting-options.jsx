import React from 'react';

const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

class SortingOptions extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentSortType: SortType.POPULAR,
      isOpened: false
    };

    this._handleSortClick = this._handleSortClick.bind(this);
    this._handleSortTypeClick = this._handleSortTypeClick.bind(this);
  }

  _handleSortClick() {
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  _handleSortTypeClick(sortType) {
    this.setState({
      currentSortType: sortType
    });
  }

  render() {
    const {currentSortType, isOpened} = this.state;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={this._handleSortClick}
        >
          {currentSortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul
          className={`places__options places__options--custom
            ${isOpened && `places__options--opened`}`}
          onClick={this._handleSortClick}
        >
          {Object.values(SortType).map((item, i) => {
            return (
              <li
                key={`item-${i}`}
                className={`places__option
                  ${(item === currentSortType) && `places__option--active`}`}
                tabIndex="0"
                onClick={() => this._handleSortTypeClick(item)}
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

export default SortingOptions;
