import { backendAPI } from 'redux/BaseHttp/BaseHttp';

export const token = {
  set: token => {
    backendAPI.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset: token => {
    backendAPI.defaults.headers.Authorization = '';
  },
};

export const signUpUser = async credentials => {
  const { data } = await backendAPI.post('users/signup', credentials);
  return data;
};

export const loginUser = async credentials => {
  const { data } = await backendAPI.post('users/login', credentials);
  return data;
};

export const logoutUser = async () => {
  return backendAPI.post('users/logout');
};

export const currentUser = async () => {
  const { data } = await backendAPI.post('users/current');
  return data;
};
