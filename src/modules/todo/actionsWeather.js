import * as types from "./actionTypesWeather";
import axios from "axios";

const fetchPostsRequest = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const fetchPostsSuccess = payload => ({
  type: types.FETCH_POSTS_SUCCESS,
  payload
});

const fetchPostsFailure = payload => ({
  type: types.FETCH_POSTS_FAILURE,
  payload
});

export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostsRequest());
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
            dispatch(fetchPostsSuccess(response.data));
          })
          .catch(error => {
            dispatch(fetchPostsFailure(error.message));
          });
      })
      .catch(error => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};
