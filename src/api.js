import axios from 'axios';

export const Error = {
  UNAUTHORIZED: 401,
  SERVER: 500
};

export const createAPI = (onUnauthrized) => {
  const api = axios.create({
    baseURL: `https://8.react.pages.academy/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthrized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
