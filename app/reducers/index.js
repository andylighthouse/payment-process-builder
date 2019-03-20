import { combineReducers } from "redux"

import favorite from "./favorite"
import user from "./user"
import transaction from "./transaction"

export default combineReducers({
  favorite,
  user,
  transaction,
})
