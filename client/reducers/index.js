import { combineReducers } from 'redux'

import team from './team'
import addPlayerReducer from './addPlayer'
import addGameReducer from './addGame'
import deletePlayerReducer from './deletePlayer'

export default combineReducers({
  //combined reducers get exported here
  team,
  addPlayerReducer,
  addGameReducer,
  deletePlayerReducer
})
