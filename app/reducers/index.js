import { combineReducers } from "redux"

import build from "./build"
import favorite from "./favorite"
import user from "./user"

export default combineReducers({
  favorite,
  user,
})
