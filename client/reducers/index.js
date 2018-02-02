import { combineReducers } from "redux";

import team from "./team";
import games from "./games";
import images from "./images";

export default combineReducers({
  team,
  games,
  images
});

//removed the add/delete reducers, changed the addGame reducer to a 'games' reducer, each reducer refers to that array/obj in the state, and a reducer for part of the state should contain cases for all crud methods implemented
