import { combineReducers } from 'redux'

import activities from './activities'
import feed from './feed'
import users from './users'

export default combineReducers({
  activities,
  feed,
  users
})
