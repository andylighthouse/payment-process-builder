import { combineReducers } from "redux"

import build from "./build"
import favorite from "./favorite"

export default combineReducers({
  favorite,
})
