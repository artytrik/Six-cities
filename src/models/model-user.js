class ModelUser {
  constructor(data) {
    this.avatar = data[`avatar_url`];
    this.email = data[`email`];
    this.id = data[`id`];
    this.name = data[`name`];
    this.superStar = data[`is_pro`];
  }

  static parseUser(data) {
    return new ModelUser(data);
  }
}

export default ModelUser;
