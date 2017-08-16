import axios from 'axios'; 

const API_KEY = '9b650bb10908be9504157e2ad9d189a7';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast';
export const FETCH_WEATCHER = 'FEATCH_WEATHER';

export function fetchWeatcher(city) {
  const request = axios.get(API_URL, {
    params: {
      q: city + ',pl',
      appid: API_KEY,
      units: 'metric'
    }
  });
  
  return {
    type: FETCH_WEATCHER,
    payload: request
  };
}