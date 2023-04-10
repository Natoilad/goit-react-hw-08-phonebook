import axios from 'axios';
// const BASEURL = 'https://642dff8f2b883abc64053db5.mockapi.io';
export const contactAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getContacts = async () => {
  const { data } = await contactAPI.get('/contacts');
  return data;
};

export const addContacts = async contact => {
  const { data } = await contactAPI.post('/contacts', contact);
  return data;
};

export const delContacts = async id => {
  const { data } = await contactAPI.delete(`/contacts/${id}`);
  return data;
};
