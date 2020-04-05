export interface CityCoordinates {
  location: number[];
  zoom: number;
}

export interface Host {
  avatar: string;
  id: number;
  name: string;
  superStar: boolean;
}

export interface Offer {
  bedrooms: number;
  city: string;
  cityCoordinates: CityCoordinates;
  description: string;
  features: string[];
  user: Host;
  id: number;
  gallery: string[];
  favorite: boolean;
  premium: boolean;
  coordinates: number[];
  adults: number;
  picture: string;
  price: number;
  rating: number;
  name: string;
  type: string;
}

export interface UserReview {
  text: string;
  date: string;
  id: number;
  rating: number;
  user: Host;
}

export interface User {
  avatar: string;
  email: string;
  id: number;
  name: string;
  superStar: boolean;
}
