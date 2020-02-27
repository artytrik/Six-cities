import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

const ZOOM = 12;
const ICON_SIZE = [30, 30];

const ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: ICON_SIZE
});

const ACTIVE_ICON = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: ICON_SIZE
});

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  componentDidMount() {
    const mapRef = this._mapRef.current;

    if (mapRef) {
      const {coordinates} = this.props;

      const city = [52.38333, 4.9];

      this._map = leaflet.map(mapRef, {
        center: city,
        ZOOM,
        zoomControl: false,
        marker: true
      });
      this._map.setView(city, ZOOM);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this._map);

      this._layerGroup = leaflet.layerGroup().addTo(this._map);

      coordinates.map((coordinate) => {
        leaflet.marker(coordinate, {icon: ICON}).addTo(this._layerGroup);
      });
    }
  }

  componentDidUpdate() {
    const {coordinates, currentCard} = this.props;

    this._layerGroup.clearLayers();
    coordinates.map((coordinate) => {
      leaflet
      .marker(coordinate, {icon: currentCard && coordinate === currentCard.coordinates ? ACTIVE_ICON : ICON})
      .addTo(this._layerGroup);
    });
  }

  componentWillUnmount() {
    this._map.remove();
  }

  render() {
    return (
      <div ref={this._mapRef} id="map" style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  coordinates: PropTypes.arrayOf(
      PropTypes.arrayOf(
          PropTypes.number.isRequired).isRequired).isRequired,
  currentCard: PropTypes.object.isRequired
};

export default Map;
