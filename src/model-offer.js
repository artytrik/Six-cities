class ModelOffer {
  constructor(data) {
    this.bedrooms = data[`bedrooms`];
    this.city = data.city[`name`];
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

  toRAW() {
    return {
      'bedrooms': this.bedrooms,
      'city': {
        'name': this.city
      },
      'description': this.description,
      'goods': this.inside,
      'host': {
        'avatar_url': this.user.avatar,
        'id': this.user.id,
        'name': this.user.name,
        'is_pro': this.user.superStar
      },
      'id': this.id,
      'images': this.gallery,
      'is_favorite': this.favorite,
      'is_premium': this.premium,
      'location': {
        'latitude': this.coordinates[0],
        'longitude': this.coordinates[1]
      },
      'max_adults': this.adults,
      'preview_image': this.picture,
      'price': this.price,
      'rating': this.rating,
      'title': this.name,
      'type': this.type
    };
  }
}

export default ModelOffer;
