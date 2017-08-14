import { combineReducers } from 'redux'

import team from './team'
import addPlayer from './addPlayer'

export default combineReducers({
  //combined reducers get exported here
  team,
  addPlayer
})
