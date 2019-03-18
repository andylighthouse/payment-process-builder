import { AsyncStorage } from "react-native"
import { SAVE_USER, CONVERSION_ERROR, CONVERSION_RESULT } from "../actions/user"

const initialState = {
  email: null,
  transactions: [],
  error: null,
  user: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      console.log("fuck" + action)
      if (action.user) {
        return {
          ...state,
          user: action.user,
        }
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
