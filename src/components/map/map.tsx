import * as React from 'react';
import * as leaflet from 'leaflet';
import {Offer} from '../../types';

interface Props {
  offers: Offer[];
  activeOffer?: Offer;
  currentCard?: Offer;
}

const ICON_SIZE: [number, number] = [30, 30];

const ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: ICON_SIZE
});

const ACTIVE_ICON = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: ICON_SIZE
});

class Map extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const mapRef = this.mapRef.current;

    if (mapRef) {
      const {offers, activeOffer} = this.props;

      const city = activeOffer ? activeOffer.cityCoordinates.location : offers[0].cityCoordinates.location;
      const zoom = activeOffer ? activeOffer.cityCoordinates.zoom : offers[0].cityCoordinates.zoom;

      this.map = leaflet.map(mapRef, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true
      });

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this.map);

      this.layerGroup = leaflet.layerGroup().addTo(this.map);

      offers.map((offer) => {
        leaflet.marker(offer.coordinates, {icon: ICON}).addTo(this.layerGroup);
      });
    }
  }

  componentDidUpdate() {
    const {offers, activeOffer, currentCard} = this.props;

    const city = activeOffer ? activeOffer.cityCoordinates.location : offers[0].cityCoordinates.location;
    const zoom = activeOffer ? activeOffer.cityCoordinates.zoom : offers[0].cityCoordinates.zoom;

    this.layerGroup.clearLayers();
    offers.map((offer) => {
      leaflet
      .marker(offer.coordinates, {icon: currentCard && offer.id === currentCard.id ? ACTIVE_ICON : ICON})
      .addTo(this.layerGroup);
    });
    this.map.setView(city, zoom);

    if (activeOffer) {
      leaflet.marker(activeOffer.coordinates, {icon: ACTIVE_ICON}).addTo(this.layerGroup);
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  private mapRef: React.RefObject<HTMLDivElement>;
  private layerGroup: leaflet.LayerGroup;
  private map: leaflet.Map;

  render() {
    return (
      <div ref={this.mapRef} id="map" style={{height: `100%`}}></div>
    );
  }
}

export default Map;
