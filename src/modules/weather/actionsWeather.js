import * as types from "./actionTypesWeather";
import axios from "axios";

const fetchWeatherRequest = () => ({
  type: types.FETCH_WEATHER_REQUEST
});

const fetchWeatherSuccess = payload => ({
  type: types.FETCH_WEATHER_SUCCESS,
  payload
});

const fetchWeatherFailure = payload => ({
  type: types.FETCH_WEATHER_FAILURE,
  payload
});

export const fetchWeather = () => {
  return dispatch => {
    dispatch(fetchWeatherRequest());
    axios
      .get("https://ipapi.co/json/")
      .then(res => {
        axios
          .get(
            "http://api.openweathermap.org/data/2.5/weather?lat=" +
              res.data.latitude +
              "&lon=" +
              res.data.longitude +
              "&units=metric&cnt=1&appid=87ce5c597f2ecbd9badcf8169e79a874"
          )
          .then(function(response) {
            dispatch(fetchWeatherSuccess(response.data));
          })
          .catch(error => {
            dispatch(fetchWeatherFailure(error.message));
          });
      })
      .catch(error => {
        dispatch(fetchWeatherFailure(error.message));
      });
  };
};
