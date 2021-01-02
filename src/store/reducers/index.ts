import { combineReducers } from 'redux'
import { entries } from './entries'

export default combineReducers({
  schedule: entries,
})