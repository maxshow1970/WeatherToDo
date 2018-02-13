import * as actionTypes from "./actionTypes";
import axios from "axios";


export const addItem = value => ({
  type: actionTypes.ADD_TODO,
  value
});

export const deleteItem = key => ({
  type: actionTypes.REMOVE_TODO,
  key
});

export const completedTask = complete => ({
  type: actionTypes.TOGGLE_TODO_ITEM,
  complete
});

export const clearCompleted = () => ({
  type: actionTypes.REMOVE_ALL_ITEM
});

export const allViewItems = () => ({
  type: actionTypes.ALL_VIEW_ITEM
});

export const activeViewItems = () => ({
  type: actionTypes.ACTIVE_VIEW_ITEM
});

export const completedViewItems = () => ({
  type: actionTypes.COMPLETED_VIEW_ITEM
});

export const editItem = updItem => ({
  type: actionTypes.EDIT_ITEM,
  updItem
});

const fetchWeatherRequest = () => ({
  type: actionTypes.FETCH_WEATHER_REQUEST
});

const fetchWeatherSuccess = payload => ({
  type: actionTypes.FETCH_WEATHER_SUCCESS,
  payload
});

const fetchWeatherFailure = payload => ({
  type: actionTypes.FETCH_WEATHER_FAILURE,
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

