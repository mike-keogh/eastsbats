import { combineReducers } from 'redux'

import team from './team'
import addPlayerAction from './addPlayer'

export default combineReducers({
  //combined reducers get exported here
  team,
  addPlayerAction
})
