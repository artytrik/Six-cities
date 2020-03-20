import NameSpace from '../name-space.js';

export const getUser = (state) => state[NameSpace.USER].userData;
export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
