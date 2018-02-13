import { combineReducers } from "redux";
import todo from "./reducerToDo";
import todoWeather from "./reducerWeather";

export default combineReducers({ todo, todoWeather });
