import axios from 'axios';
export const BaseURL = axios.create({
  baseURL: 'http://192.168.1.17:8055/items/',
  timeout: 8000,
  //baseURL: "http://192.168.43.8:5001/api/",
});
