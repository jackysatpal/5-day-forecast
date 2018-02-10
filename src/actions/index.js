import axios from 'axios';

const API_KEY = '859693c2f1bc4a3ad8d7da759675651a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
	const url = `${ROOT_URL}&q=${cityName},us`;
	const ajaxRequest = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: ajaxRequest
	};
};