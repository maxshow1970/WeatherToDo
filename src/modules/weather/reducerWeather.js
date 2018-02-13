import * as types from "./actionTypesWeather";

const initialStateWeather = {
  temp: 0,
  temp_max: 0,
  temp_min: 0,
  speed: 0,
  name: "Kharkov",
  picture: "",
  weatherLoading: false,
  weatherFetchError: ""
};

const todoWeather = (stateWeather = initialStateWeather, actionWeather) => {
  const { type, payload } = actionWeather;
  switch (type) {
    case types.FETCH_WEATHER_REQUEST:
      return {
        ...initialStateWeather,
        weatherLoading: true
      };
    case types.FETCH_WEATHER_SUCCESS:
      return {
        ...stateWeather,
        weatherLoading: false,
        temp: payload.main.temp,
        temp_max: payload.main.temp_max,
        temp_min: payload.main.temp_min,
        speed: payload.wind.speed,
        name: payload.name,
        picture: payload.weather[0].icon,
        weatherFetchError: ""
      };
    case types.FETCH_WEATHER_FAILURE:
      return {
        ...initialStateWeather,
        weatherFetchError: payload
      };
    default:
      return stateWeather;
  }
};

export default todoWeather;
