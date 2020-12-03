import axios from 'axios';

export const chartAxios = axios.create({
  // eslint-disable-next-line max-len
  baseURL: 'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=0ce25ec4cc3fce3dbc377361d59d18a2&format=json',
});

export const trackAxios = axios.create({
  baseURL: '/',
});

export const artistAxios = axios.create({
  baseURL: '/',
});
