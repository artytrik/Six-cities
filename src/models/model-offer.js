class ModelOffer {
  constructor(data) {
    this.bedrooms = data[`bedrooms`];
    this.city = data.city[`name`];
    this.cityCoordinates = {
      location: [data.city.location[`latitude`], data.city.location[`longitude`]],
      zoom: data.city.location[`zoom`]
    };
    this.description = data[`description`];
    this.inside = data[`goods`];
    this.user = {
      avatar: data.host[`avatar_url`],
      id: data.host[`id`],
      name: data.host[`name`],
      superStar: data.host[`is_pro`]
    };
    this.id = data[`id`];
    this.gallery = data[`images`];
    this.favorite = data[`is_favorite`];
    this.premium = data[`is_premium`];
    this.coordinates = [data.location[`latitude`], data.location[`longitude`]];
    this.adults = data[`max_adults`];
    this.picture = data[`preview_image`];
    this.price = data[`price`];
    this.rating = data[`rating`];
    this.name = data[`title`];
    this.type = data[`type`];
  }

  static parseOffer(data) {
    return new ModelOffer(data);
  }

  static parseOffers(data) {
    return data.map(ModelOffer.parseOffer);
  }
}

export default ModelOffer;
