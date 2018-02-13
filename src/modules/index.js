import { combineReducers } from "redux";
import todo from "./todo/reducer";
import todoWeather from "./weather/reducerWeather";

export default combineReducers({ todo, todoWeather });
