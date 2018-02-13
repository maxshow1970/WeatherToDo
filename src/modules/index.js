import { combineReducers } from "redux";
import todo from "./todo/reducer";
import todoWeather from "./todo/reducerWeather";

export default combineReducers({ todo, todoWeather });
