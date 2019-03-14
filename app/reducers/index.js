import { combineReducers } from "redux"

import favorite from "./favorite"
import user from "./user"

export default combineReducers({
  favorite,
  user,
})
