import { AsyncStorage } from "react-native"
import { SAVE_USER, CONVERSION_ERROR, CONVERSION_RESULT } from "../actions/user"

const initialState = {
  email: null,
  transactions: [],
  error: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      if (action.email) {
        AsyncStorage.setItem("userEmail", action.email)
      }
      return {
        ...state,
        email: action.email || state.email,
      }
    case CONVERSION_RESULT:
      return {
        ...state,
        transactions: state.transactions.concat(action.result),
      }
    case CONVERSION_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}
export default reducer
