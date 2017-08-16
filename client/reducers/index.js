import { combineReducers } from 'redux'

import team from './team'
import addPlayerReducer from './addPlayer'
import addGameReducer from './addGame'

export default combineReducers({
  //combined reducers get exported here
  team,
  addPlayerReducer,
  addGameReducer
})
