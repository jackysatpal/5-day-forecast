# Weather Information  

See it [Live](https://sjacky.com/weather-information)

Weather-Information is a front end web application inspired by weather.com widget.  
It uses OpenWeatherMap API to fetch the weather data based on the search query.  
Code is written in React and Redux. Compiled using Webpack and Babel.

### Action Creator  

In action creator, I am doing an AJAX call to fetch the weather data based on the city name.

```javascript
export function fetchWeather(cityName) {
    const url = `${ROOT_URL}&q=${cityName},us`;
    const ajaxRequest = axios.get(url);

    return {
      type: FETCH_WEATHER,
      payload: ajaxRequest
    };
};
```

### Reducer

Reducers plays a major role and returns the state. It is important to highlight that in reducer, code is not mutating the state. It returns a new state. 

```javascript
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
    }

    return state;
}
```

### Container

Containers are smart component that connects `React` and `Redux`.  
`connect` is the function the glues React and Redux together. 

```javascript
function mapStateToProps(state) {
  return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);
```
