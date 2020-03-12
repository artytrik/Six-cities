class ModelReview {
  constructor(data) {
    this.text = data[`comment`];
    this.date = new Date(data[`date`]);
    this.id = data[`id`];
    this.rating = data[`rating`];
    this.user = {
      avatar: data.user[`avatar_url`],
      id: data.user[`id`],
      name: data.user[`name`],
      superStar: data.user[`is_pro`]
    };
  }

  static parseReview(data) {
    return new ModelReview(data);
  }

  static parseReviews(data) {
    return data.map(ModelReview.parseReview);
  }

  toRAW() {
    return {
      'comment': this.text,
      'date': this.date,
      'id': this.id,
      'rating': this.rating,
      'user': {
        'avatar_url': this.user.avatar,
        'id': this.user.id,
        'name': this.user.name,
        'is_pro': this.user.superStar
      },
    };
  }
}

export default ModelReview;
