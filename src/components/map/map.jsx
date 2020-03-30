import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

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
    this._city = null;
    this._zoom = null;
  }

  componentDidMount() {
    const mapRef = this._mapRef.current;

    if (mapRef) {
      const {offers, activeOffer} = this.props;

      const city = activeOffer ? activeOffer.cityCoordinates.location : offers[0].cityCoordinates.location;
      const zoom = activeOffer ? activeOffer.cityCoordinates.zoom : offers[0].cityCoordinates.zoom;

      this._map = leaflet.map(mapRef, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true
      });

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this._map);

      this._layerGroup = leaflet.layerGroup().addTo(this._map);

      offers.map((offer) => {
        leaflet.marker(offer.coordinates, {icon: ICON}).addTo(this._layerGroup);
      });
    }
  }

  componentDidUpdate() {
    const {offers, activeOffer, currentCard} = this.props;

    const city = activeOffer ? activeOffer.cityCoordinates.location : offers[0].cityCoordinates.location;
    const zoom = activeOffer ? activeOffer.cityCoordinates.zoom : offers[0].cityCoordinates.zoom;

    this._layerGroup.clearLayers();
    offers.map((offer) => {
      leaflet
      .marker(offer.coordinates, {icon: currentCard && offer.id === currentCard.id ? ACTIVE_ICON : ICON})
      .addTo(this._layerGroup);
    });
    this._map.setView(city, zoom);

    if (activeOffer) {
      leaflet.marker(activeOffer.coordinates, {icon: ACTIVE_ICON}).addTo(this._layerGroup);
    }
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
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        cityCoordinates: PropTypes.exact({
          location: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
          zoom: PropTypes.number.isRequired
        }),
        coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
      })
  ),
  activeOffer: PropTypes.shape({
    cityCoordinates: PropTypes.exact({
      location: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      zoom: PropTypes.number.isRequired
    }),
    coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  }),
  currentCard: PropTypes.shape({
    id: PropTypes.number.isRequired
  })
};

export default Map;
